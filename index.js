let firstDigit = "";
let secondDigit = "";
let operator = "";

const number = num => {
  firstDigit += num;
  document.getElementById("screen").value = firstDigit;
};

const displayDigit = num => {
  const displayScreen = document.getElementById("screen");
  if (
    operator === "addition" ||
    operator === "substraction" ||
    operator === "multiplycation" ||
    operator === "division"
  ) {
    secondDigit += num;
    displayScreen.value = secondDigit;
  } else {
    firstDigit += num;
    display.value = firstDigit;
  }
};

const clearScreen = () => {
  document.getElementById("screen").value = 0;
  firstDigit = "";
  secondDigit = "";
  operator = "";
};

const addition = () => {
  const displayScreen = document.getElementById("screen");

  secondDigit = firstDigit;
  firstDigit = "";
  operator = "add";
};

const substraction = () => {
  const displayScreen = document.getElementById("screen");

  secondDigit = firstDigit;
  firstDigit = "";
  operator = "substract";
};

const multiplication = () => {
  const displayScreen = document.getElementById("screen");

  secondDigit = firstDigit;
  firstDigit = "";
  operator = "multiply";
};

const dividation = () => {
  const displayScreen = document.getElementById("screen");

  secondDigit = firstDigit;
  firstDigit = "";
  operator = "divide";
};

const equal = () => {
  let total;
  switch (operator) {
    case "add":
      total = parseInt(firstDigit) + parseInt(secondDigit);
      break;
    case "substract":
      total = parseInt(secondDigit) - parseInt(firstDigit);
      break;
    case "multiply":
      total = parseInt(firstDigit) + parseInt(secondDigit);
      break;
    case "divide":
      total = parseInt(secondDigit) + parseInt(firstDigit);
      break;
  }
  const displayScreen = document.getElementById("screen");
  displayScreen.value = total;
};
