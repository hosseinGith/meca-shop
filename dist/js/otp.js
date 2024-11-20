// show Otp
const loginForm = document.querySelector("#loginForm");

window.addEventListener("load", function () {
  document.getElementById("noCode").style.display = "none";

  var countDownTime = 120;

  var x = setInterval(function () {
    document.getElementById("countdown").innerHTML = countDownTime;
    countDownTime--;

    if (countDownTime < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "0";
      document.getElementById("noCode").style.display = "block";
    }
  }, 1000);

  // change number

  let changeNumber = document.getElementById("changeNumber");

  changeNumber.addEventListener("click", function () {
    this.parentElement.style.display = "none";
    this.parentElement.previousElementSibling.style.display = "block";
    clearInterval(x);
  });
});

// start count down

let startButton = Array.from(document.getElementsByClassName("startButton"));

startButton.forEach((item) => {
  item.addEventListener("click", function () {
    item.parentElement.style.display = "none";
    var countDownTime = 120;

    var x = setInterval(function () {
      document.getElementById("countdown").innerHTML = countDownTime;
      countDownTime--;

      if (countDownTime < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "0";
        document.getElementById("noCode").style.display = "block";
      }
    }, 1000);
    // change number

    let changeNumber = document.getElementById("changeNumber");

    changeNumber.addEventListener("click", function () {
      this.parentElement.style.display = "none";
      this.parentElement.previousElementSibling.style.display = "block";
      clearInterval(x);
    });
  });
});

function collectText() {
  let codeText = "";
  otpContainer.forEach((item) => {
    codeText += item.value;
  });
  document.querySelector("#code").value = codeText;
  document.querySelector("#loginForm").submit();
}
const otpContainer = document.querySelectorAll(".otpContainer input");
otpContainer.forEach((item, index) => {
  item.addEventListener("input", (e) => {
    if (item.value.length > 0) {
      if (otpContainer[index + 1]) otpContainer[index + 1].focus();
      else {
        collectText();
      }
    }
  });
});
loginForm.addEventListener("submit", collectText);
