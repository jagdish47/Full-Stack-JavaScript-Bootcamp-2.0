// Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.

const getFileExtension = (fileName) => {
  const fileNameArray = fileName.split(".");
  const fileExtension = fileNameArray[fileNameArray.length - 1];

  console.log(fileExtension);
};

getFileExtension("example.java"); // prints "txt" in the console
