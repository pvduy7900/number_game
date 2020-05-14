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
        if(time == 0){
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
            if (soNgauNhien > userNum) {
                loiNhacGame = "too low"
                chance--
            }
            // 6. if computer num < user num, "too high"
            else if (soNgauNhien < userNum) {
                loiNhacGame = "too high"
                chance--
            }// 7. if computer num === user num, "correct"
            else if (soNgauNhien == userNum) {
                loiNhacGame = "correct"
            }
        } else {
            loiNhacGame = "you are lose"
        }
    } else {
        timeOut()
    }
    //keep the history
    
    if(history.length <5){
        history.push(userNum)
    }
    else{
        alert("No more chance")
    }
    
    // 8. show the result to user
    document.getElementById("resultArea").innerHTML = `${loiNhacGame}`
    document.getElementById("historyArea").innerHTML = `History${history}`
}

// 1. make the chance feature (only can have 5 chance)

// 2. reset feature (when user chick the reset button, it will reset all)
// 3. if user win, or lose the guess button will be disable
// 4. add timer feature(if u can not finish game within 20sc then lose)