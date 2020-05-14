// 1.computer need to pick the random number
let soNgauNhien = Math.floor(Math.random() * 100 + 1)//pick number between 0 to 1
console.log(soNgauNhien);
let history = []

let loiNhacGame = ''
let chance = 5; // so luot choi

let time = 10 // time start from 0
let myTime; // timer will be assign to this variable
function timecounting() {
    myTime = setInterval(() => {
        time -= 1
        document.getElementById('timecount').innerHTML = time
        if (time == 0) {
            timeOut()
            document.getElementById("resultArea").innerHTML = `${loiNhacGame}`
        }

        loiNhacGame = "Over time, you lose"
    }, 1000)// every 1 second, it will add 1 into time variable (computer use millisecond so 1000 is 1 second)
}
timecounting()

function timeOut() {
    clearInterval(myTime);
}

function guess() {
    let userNum = document.getElementById("userNum").value//so nguoi dung nhap vao // cai nay la cai gi?}
    if (time > 0) {
        if (chance > 0) {
            chance--
            document.getElementById("chanceArea").innerHTML = `your chance now :${chance}`
            if (soNgauNhien > userNum) {
                loiNhacGame = "too low"
            }
            // 6. if computer num < user num, "too high"
            else if (soNgauNhien < userNum) {
                loiNhacGame = "too high"
            }// 7. if computer num === user num, "correct"
            else if (soNgauNhien == userNum) {
                loiNhacGame = "correct"
            }
        } else {
            loiNhacGame = "no more chance,you are lose"
            timeOut()
        }
    } else {
        timeOut()
    }
    //keep the history

    if (history.length < 5) {
        history.push(userNum)
    }
    else if(history.length = 5) {
        loiNhacGame : "hết lượt"
    }

    // 8. show the result to user
    document.getElementById("resultArea").innerHTML = `${loiNhacGame}`
    document.getElementById("historyArea").innerHTML = `History${history}`
}

function reset() {
    chance = 5;
    history = []
    soNgauNhien = Math.floor(Math.random() * 100 + 1);

    document.getElementById("timecount").innerHTML = time
    document.getElementById("chanceArea").innerHTML = `${chance}`
    document.getElementById("resultArea").innerHTML = ''
    document.getElementById("historyArea").innerHTML = `${chance}`
    document.getElementById("guess").disabled = false;

    
    timecounting()
    timeOut()
}

// 1. make the chance feature (only can have 5 chance)

// 2. reset feature (when user chick the reset button, it will reset all)
// 3. if user win, or lose the guess button will be disable
// 4. add timer feature(if u can not finish game within 20sc then lose)