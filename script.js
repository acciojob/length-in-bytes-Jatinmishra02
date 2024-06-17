const byteSize = (str) => {
  // Create a new Blob object with the given string
  const blob = new Blob([str]);
  // Return the size property of the Blob, which gives the byte size of the string
  return blob.size;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
