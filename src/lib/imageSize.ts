import { readFileSync } from "node:fs";

/**
 * Reads intrinsic dimensions straight from a PNG or JPEG header.
 * Enough to tell a square app icon from a wide wordmark at build time,
 * without pulling in an image library.
 */
export function imageSize(
  path: string
): { width: number; height: number } | null {
  let buf: Buffer;
  try {
    buf = readFileSync(path);
  } catch {
    return null;
  }

  // PNG: IHDR width/height live at a fixed offset.
  if (buf.length > 24 && buf.toString("ascii", 1, 4) === "PNG") {
    return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
  }

  // JPEG: walk the segment markers to the SOFn frame header.
  if (buf.length > 4 && buf[0] === 0xff && buf[1] === 0xd8) {
    let i = 2;
    while (i < buf.length - 9) {
      if (buf[i] !== 0xff) {
        i++;
        continue;
      }
      const marker = buf[i + 1];
      // SOF0–SOF15, excluding the non-frame markers DHT/JPG/DAC.
      if (
        marker >= 0xc0 &&
        marker <= 0xcf &&
        marker !== 0xc4 &&
        marker !== 0xc8 &&
        marker !== 0xcc
      ) {
        return { height: buf.readUInt16BE(i + 5), width: buf.readUInt16BE(i + 7) };
      }
      i += 2 + buf.readUInt16BE(i + 2);
    }
  }

  return null;
}
