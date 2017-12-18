class myTimer {
    constructor({
                    id,
                    days,
                    hours,
                    minutes,
                    seconds,
                    daysStr = ' дней ',
                    hoursStr = ' часов ',
                    minutesStr = ' минут ',
                    secondsStr = ' секунд '
                }) {
        this.id = document.querySelector(id);
        this.days = days;
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
        this.daysStr = daysStr;
        this.hoursStr = hoursStr;
        this.minutesStr = minutesStr;
        this.secondsStr = secondsStr;
    }

    tickTack(timer) {
        setInterval(() => {
            this.oneTick();
            // console.log(this.intervalId)
            this.seconds--;

        }, timer)
    }

    oneTick() {

        //seconds
        if (this.seconds < 0) {
            this.seconds = 59;
            this.minutes--;
        } else if (this.seconds < 10) {
            this.seconds = this.toStrNum(this.seconds);
        }

        //minutes
        if (this.minutes < 0) {
            this.minutes = 59;
            this.hours--;
        } else if (this.minutes < 10) {
            this.minutes = this.toStrNum(this.minutes);
        }

        //hours
        if (this.hours < 0) {
            this.hours = 23;
            this.days--;
        } else if (this.hours < 10) {
            this.hours = this.toStrNum(this.hours);
        }

        //days
        if (this.days < 0) {
            console.log(this + ' stoped');
        } else {
            this.days = this.toStrNum(this.days);
            this.id.innerHTML = `<span class="days numbers">${this.days}</span>${this.daysStr}<span class="hours numbers">${this.hours}</span>${this.hoursStr}<span class="minutes numbers">${this.minutes}</span>${this.minutesStr}<span class="seconds numbers">${this.seconds}</span>${this.secondsStr}`;

        }
        console.log(this);

    }

    toStrNum(num) {
        return '0' + Number(num.toString());
    }
}

window.onload = function () {
    let timerArr = {
        id: '#item',
        days: 1,
        hours: 5,
        minutes: 15,
        seconds: 30,
        daysStr: ' дней ',
        hoursStr: ' часов ',
        minutesStr: ' минут ',
        secondsStr: ' секунд '
    };

    let ticktack = new myTimer(timerArr);
    ticktack.tickTack(1000);
}