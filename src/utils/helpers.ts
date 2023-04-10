export const rgbToHex = (rgbString: string) => {
  // Extract the red, green, and blue values from the string
  const rgbValues = rgbString.substring(4, rgbString.length - 1).split(', ');
  const red = parseInt(rgbValues[0]);
  const green = parseInt(rgbValues[1]);
  const blue = parseInt(rgbValues[2]);

  // Convert the values to hex
  const redHex = red.toString(16).padStart(2, '0');
  const greenHex = green.toString(16).padStart(2, '0');
  const blueHex = blue.toString(16).padStart(2, '0');

  // Concatenate the hex values into a single string and return it
  return '#' + redHex + greenHex + blueHex;
};

export const getSurroundingPixelColors = ({
  ctx,
  x,
  y,
  radius,
}: {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  radius: number;
}) => {
  if (x === 0 && y === 0) return { colors: [], centerColor: '' };

  const matrixSize = radius * 2 + 1;
  const matrix = Array.from({ length: matrixSize }, () =>
    new Array<string>(matrixSize).fill('transparent')
  );

  const pixelData = ctx.getImageData(
    x - radius,
    y - radius,
    matrixSize,
    matrixSize
  ).data;

  for (let i = 0; i < pixelData.length; i += 4) {
    const red = pixelData[i];
    const green = pixelData[i + 1];
    const blue = pixelData[i + 2];
    const alpha = pixelData[i + 3];

    const color = `rgb(${red}, ${green}, ${blue}, ${alpha})`;
    const j = i / 4;
    const row = Math.floor(j / matrixSize);

    matrix[row][j - row * matrixSize] = color;
  }

  return {
    colors: matrix,
    centerColor: rgbToHex(matrix[radius][radius]),
  };
};
