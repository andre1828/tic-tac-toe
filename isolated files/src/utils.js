export const isVictory = (squareValues) => {
  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningPatterns.length; i++) {
    const pattern = winningPatterns[i];

    if (!patternHasBeenSelected(pattern, squareValues)) {
      continue;
    }

    if (
      squareValues[pattern[0]] === squareValues[pattern[1]] &&
      squareValues[pattern[1]] === squareValues[pattern[2]]
    ) {
      return true;
    }
  }

  return false;
};

const patternHasBeenSelected = (pattern, squareValues) => {
  return (
    squareValues[pattern[0]] !== "_" ||
    squareValues[pattern[1]] !== "_" ||
    squareValues[pattern[2]] !== "_"
  );
};

export const isDraw = (squareValues) =>
  isAllSquaresSeleted(squareValues) && !isVictory(squareValues);

const isAllSquaresSeleted = (squareValues) =>
  !squareValues.some((value) => value === "_");
  