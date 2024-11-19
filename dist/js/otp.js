// show Otp


window.addEventListener('load', function () {
    document.getElementById('noCode').style.display = 'none';

    var countDownTime = 120;

    var x = setInterval(function () {
        document.getElementById("countdown").innerHTML = countDownTime;
        countDownTime--;

        if (countDownTime < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "0";
            document.getElementById('noCode').style.display = 'block';
        }
    }, 1000);

    // change number

    let changeNumber = document.getElementById('changeNumber');

    changeNumber.addEventListener('click', function () {
        this.parentElement.style.display = 'none';
        this.parentElement.previousElementSibling.style.display = 'block';
        clearInterval(x);
    })
})

// start count down

let startButton = Array.from(document.getElementsByClassName('startButton'));

startButton.forEach((item) => {
    item.addEventListener("click", function () {
        item.parentElement.style.display = 'none';
        var countDownTime = 120;

        var x = setInterval(function () {
            document.getElementById("countdown").innerHTML = countDownTime;
            countDownTime--;

            if (countDownTime < 0) {
                clearInterval(x);
                document.getElementById("countdown").innerHTML = "0";
                document.getElementById('noCode').style.display = 'block';
            }
        }, 1000);
        // change number

        let changeNumber = document.getElementById('changeNumber');

        changeNumber.addEventListener('click', function () {
            this.parentElement.style.display = 'none';
            this.parentElement.previousElementSibling.style.display = 'block';
            clearInterval(x);
        })
    });
});
