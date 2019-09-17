let seconds = 0.00
        let minutes = 0
        let hours = 0;
        

    function firstFunc(){
        let data = textInner.innerHTML = `seconds: ${seconds}  /  minutes: ${minutes}  /  hours: ${hours}`;


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

    window.onunload = function(){
        localStorage.setItem('seconds', seconds)
        localStorage.setItem('minutes', minutes)
        localStorage.setItem('hours', hours)
    }

    function btnClickStart(){
        setInterval(firstFunc, 1000)
        btn_start.disabled = true
        btn_stop.disabled = false
        console.log("function has been started")
    }

    function btnClickStop(){
        clearInterval(intr)
        btn_stop.disabled = true
        btn_start.disabled = false
        console.log("function has been stopped")
    }
