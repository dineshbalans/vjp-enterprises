export const calculateDiscount = (price, discount) => {
  return price - (price * discount) / 100;
};

export const toCaptialCase = (str) => {
  return str
    .toLowerCase()
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const selectRandomElements = (array, N) => {
  // Check if N is greater than array length
  if (N >= array.length) {
    return array; // Return the whole array if N is greater or equal to the array length
  }

  // Create a copy of the array to avoid modifying the original
  const arrayCopy = array.slice();

  // Create an array to store selected elements
  const selectedElements = [];

  // Loop N times to select random unique elements
  for (let i = 0; i < N; i++) {
    // Generate a random index within the array bounds
    const randomIndex = Math.floor(Math.random() * arrayCopy.length);

    // Add the element at the random index to the selectedElements array
    selectedElements.push(arrayCopy[randomIndex]);

    // Remove the selected element from the arrayCopy to avoid duplicates
    arrayCopy.splice(randomIndex, 1);
  }

  return selectedElements;
};
