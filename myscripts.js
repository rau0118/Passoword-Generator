function getRandomUpperCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
  }
  
  function getRandomLowerCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
  }
  
  function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
  }
  
  function getRandomSymbol() {
    var symbols = "~!@#$%^&*()";
    return symbols[Math.floor(Math.random() * symbols.length)];
  }
  
  const resultEle = document.querySelector(".result");
  const btnEle = document.querySelector(".btn");
  const lengthEle = document.querySelector("#length");
  const uppercaseEle = document.querySelector("#uppercase");
  const lowercaseEle = document.querySelector("#lowercase");
  const numbersEle = document.querySelector("#numbers");
  const symbolsEle = document.querySelector("#symbols");
  
  const generatePassword = (length) => {
    const isUppercase = uppercaseEle.checked;
    const isLowercase = lowercaseEle.checked;
    const isNumbers = numbersEle.checked;
    const isSymbols = symbolsEle.checked;
    let password = "";
    while (password.length < length) {
      const index = Math.floor(Math.random() * 4);
      if (index === 0 && isUppercase) {
        password = password + getRandomUpperCase();
      } else if (index === 1 && isLowercase) {
        password = password + getRandomLowerCase();
      } else if (index === 2 && isNumbers) {
        password = password + getRandomNumber();
      } else if (index === 3 && isSymbols) {
        password = password + getRandomSymbol();
      }
    }
    return password;
  };
  
  lengthEle.addEventListener("change", () => {
    if (+lengthEle.value <= 0) {
      btnEle.disabled = true;
      btnEle.style.cursor = "not-allowed";
    } else {
      btnEle.disabled = false;
      btnEle.style.cursor = "pointer";
    }
  });
  
  btnEle.addEventListener("click", () => {
    resultEle.innerHTML = '';
  
    const length = +lengthEle.value;
    if (length > 0) {
      resultEle.innerText = generatePassword(length);
    }
  });