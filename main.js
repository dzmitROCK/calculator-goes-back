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
                    secondsStr = ' секунд ',
                    callback = function () {
                    }
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
        this.callback = callback;
    }

    tickTack(timer) {
        let stopTimer = setInterval(() => {
            // seconds
            if (this.seconds < 0) {
                this.seconds = 59;
                this.minutes--;
            } else if (this.seconds < 10) {
                this.seconds = this.toStrNum(this.seconds);
            }
            // minutes
            if (this.minutes < 0) {
                this.minutes = 59;
                this.hours--;
            } else if (this.minutes < 10) {
                this.minutes = this.toStrNum(this.minutes);
            }
            // hours
            if (this.hours < 0) {
                this.hours = 23;
                this.days--;
            } else if (this.hours < 10) {
                this.hours = this.toStrNum(this.hours);
            }
            // days
            if (this.days < 0) {
                clearInterval(stopTimer);
                this.callback();
            } else {
                this.days = this.toStrNum(this.days);
                this.id.innerHTML = `<span class="days numbers">${this.days}</span>${this.daysStr}<span class="hours numbers">${this.hours}</span>${this.hoursStr}<span class="minutes numbers">${this.minutes}</span>${this.minutesStr}<span class="seconds numbers">${this.seconds}</span>${this.secondsStr}`;
            }
            this.seconds--;

        }, timer)
    }

    toStrNum(num) {
        return '0' + Number(num.toString());
    }
}