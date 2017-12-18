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
// создаем счётчик
window.onload = function () {
    // задаем параметры
    let timerArr = {
        id: '#item', // в какой эллемент вставить
        days: 1, // сколько дней осталось
        hours: 5, // часов
        minutes: 15, // минут
        seconds: 3, // секунд
        daysStr: ' дней ', // эти параметры после отображения цифр
        hoursStr: ' часов ',
        minutesStr: ' минут ',
        secondsStr: ' секунд '
    };
    // создаём счетчик
    let ticktack = new myTimer(timerArr);
    // запускаем с указанием с какиой задержкой тикать. 1000 это 1 секунда
    ticktack.tickTack(1000); //
}