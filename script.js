let seconds = 0.00
        let minutes = 0
        let hours = 0;
        let how = 1;
        let laps = 0;
        
    function firstFunc(){
        let data = textInner.innerHTML = `<br> seconds: ${seconds}  /  minutes: ${minutes}  /  hours: ${hours}`.repeat(how) + `<br>`;
        if(seconds >= 60){
            seconds = 0;
            minutes = minutes + 1;
            data
        } else {
            seconds++;
            data
        }
        if(minutes >= 59){
            seconds = 0;
            minutes = 0;
            hours = hours + 1;
            data
        }
    }
    let intr = setInterval(firstFunc, 1000)
    window.onload = function(){
        intr;
        btn_start.disabled = true
    }

    
    (function(){
        localStorage.setItem('seconds', seconds)
        localStorage.setItem('minutes', minutes)
        localStorage.setItem('hours', hours)
    })


    function btnClickStart(){
        setInterval(firstFunc, 1000)
        btn_start.disabled = true
        btn_stop.disabled = false
        btn_lap.disabled = false
        console.log("function has been started")
    }


    function btnClickStop(){
        clearInterval(intr)
        btn_stop.disabled = true
        btn_start.disabled = false
        btn_lap.disabled = true
        console.log("function has been stopped")
    }

    function btnLapAdd(){
        laps++
        lapss.innerHTML += `[${laps}] - seconds ${seconds} minutes ${minutes} hours ${hours} <br>`;
        console.log("lap has been added " + laps)
    }


    function newTimerAdd(){
        let data = textInner.innerHTML = `<br> seconds: ${seconds}  /  minutes: ${minutes}  /  hours: ${hours}`.repeat(how++) + `<br>`;
        data;
        console.log("new timer has been added")
    }
    /* made by R C N#0001 AKA Ori Appelbaum */
