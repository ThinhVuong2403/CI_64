class Clock {
    $container;//các dữ liệu đánh dấu $ là nơi lưu giữ thẻ div trong html
    $time;
    $btnStart;
    $btnPause;
    $btnStop;

    seconds;
    timeInterval;

    constructor () {
        this.$container = document.createElement("div");

        this.$time = document.createElement("span");
        this.$time.innerHTML = "00:00";

        this.$btnStart = document.createElement("button");
        this.$btnStart.innerHTML = "Start";
        this.$btnStart.addEventListener('click', this.start);

        this.$btnPause = document.createElement("button");
        this.$btnPause.innerHTML = "Pause";
        this.$btnPause.addEventListener('click', this.pause);

        this.$btnStop = document.createElement("button");
        this.$btnStop.innerHTML = "Stop";
        this.$btnStop.addEventListener('click', this.stop);

        this.seconds = 0;
        this.timeInterval = null;

    }

    start = () => {
        if (this.timeInterval){
            return;
        }
        this.timeInterval = setInterval( () => {
            this.seconds++;
            this.updateTime();
        }, 1000);
        console.log(this);
    };

    pause = () => {
        if (this.timeInterval) {
            clearInterval(this.timeInterval);
        }
    };

    stop = () => {
        if (this.timeInterval) {
            clearInterval(this.timeInterval);
        }
        this.seconds = 0;
        this.updateTime();
    };

    updateTime = () => {
        const n = Math.floor(this.seconds / 60);
        const s = this.seconds % 60;
        this.$time.innerHTML =  n + ':' + s;
    }

    render() {
        this.$container.appendChild(this.$time);
        this.$container.appendChild(this.$btnStart);
        this.$container.appendChild(this.$btnPause);
        this.$container.appendChild(this.$btnStop);

        return this.$container;
    }

}