const fs = require("fs");
const path = require("path");

function createIcoBmp(size) {
  const biSize = 40;
  const width = size;
  const height = size * 2;
  const planes = 1;
  const bitCount = 32;
  const compression = 0;
  const imageSize = size * size * 4;
  const maskRowSize = Math.ceil(size / 32) * 4;
  const maskSize = maskRowSize * size;

  const bmpHeader = Buffer.alloc(biSize);
  bmpHeader.writeUInt32LE(biSize, 0);
  bmpHeader.writeInt32LE(width, 4);
  bmpHeader.writeInt32LE(height, 8);
  bmpHeader.writeUInt16LE(planes, 12);
  bmpHeader.writeUInt16LE(bitCount, 14);
  bmpHeader.writeUInt32LE(compression, 16);
  bmpHeader.writeUInt32LE(imageSize + maskSize, 20);

  const pixelData = Buffer.alloc(imageSize);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const idx = ((size - 1 - y) * size + x) * 4;
      const isBagHandle = (y >= size * 0.65 && y <= size * 0.85 && x >= size * 0.35 && x <= size * 0.65);
      const isBagBody = (y >= size * 0.2 && y < size * 0.65 && x >= size * 0.2 && x <= size * 0.8);
      const isHandleInner = (y >= size * 0.65 && y <= size * 0.78 && x >= size * 0.42 && x <= size * 0.58);
      const isBorder = (x === 0 || x === size - 1 || y === 0 || y === size - 1);

      if ((isBagHandle && !isHandleInner) || isBagBody) {
        // Emerald #10b981
        pixelData[idx] = 0x81;
        pixelData[idx + 1] = 0xb9;
        pixelData[idx + 2] = 0x10;
        pixelData[idx + 3] = 0xff;
      } else if (isBorder) {
        // Subtle border
        pixelData[idx] = 0x30;
        pixelData[idx + 1] = 0x48;
        pixelData[idx + 2] = 0x0c;
        pixelData[idx + 3] = 0xff;
      } else {
        // Dark background #080b11
        pixelData[idx] = 0x11;
        pixelData[idx + 1] = 0x0b;
        pixelData[idx + 2] = 0x08;
        pixelData[idx + 3] = 0xff;
      }
    }
  }

  const maskData = Buffer.alloc(maskSize, 0);
  return Buffer.concat([bmpHeader, pixelData, maskData]);
}

const bmp16 = createIcoBmp(16);
const bmp32 = createIcoBmp(32);

const icoHeader = Buffer.alloc(6);
icoHeader.writeUInt16LE(0, 0);
icoHeader.writeUInt16LE(1, 2);
icoHeader.writeUInt16LE(2, 4);

const entry1 = Buffer.alloc(16);
entry1.writeUInt8(16, 0);
entry1.writeUInt8(16, 1);
entry1.writeUInt8(0, 2);
entry1.writeUInt8(0, 3);
entry1.writeUInt16LE(1, 4);
entry1.writeUInt16LE(32, 6);
entry1.writeUInt32LE(bmp16.length, 8);
const offset1 = 6 + 16 * 2;
entry1.writeUInt32LE(offset1, 12);

const entry2 = Buffer.alloc(16);
entry2.writeUInt8(32, 0);
entry2.writeUInt8(32, 1);
entry2.writeUInt8(0, 2);
entry2.writeUInt8(0, 3);
entry2.writeUInt16LE(1, 4);
entry2.writeUInt16LE(32, 6);
entry2.writeUInt32LE(bmp32.length, 8);
const offset2 = offset1 + bmp16.length;
entry2.writeUInt32LE(offset2, 12);

const icoBuffer = Buffer.concat([icoHeader, entry1, entry2, bmp16, bmp32]);

if (!fs.existsSync("public")) fs.mkdirSync("public", { recursive: true });
if (!fs.existsSync("app")) fs.mkdirSync("app", { recursive: true });

fs.writeFileSync(path.join("app", "favicon.ico"), icoBuffer);
fs.writeFileSync(path.join("public", "favicon.ico"), icoBuffer);
console.log("Successfully generated app/favicon.ico and public/favicon.ico (" + icoBuffer.length + " bytes)");
