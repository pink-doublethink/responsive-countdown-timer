jQuery(($) => {
    const deadline = '2022-11-14';
    function getTimeRemaining(endtime) {
	    let days, hours, minutes, seconds;
	    let t = Date.parse(endtime) - Date.parse(new Date());
	    if (t<=0) {
	        days = Math.floor(t / (1000 * 60 * 60 * 24));
	        hours = Math.floor(t / (1000 * 60 * 60) % 24);
	        minutes = Math.floor(t / (1000 * 60) % 60);
	        seconds = Math.floor((t / 1000) % 60);
	    }
	    days = Math.floor(t / (1000 * 60* 60 * 24));
        hours = Math.floor(t / (1000 * 60 * 60) % 24);
        minutes = Math.floor((t / 1000 / 60) % 60);
        seconds = Math.floor((t / 1000) % 60);
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    };
    function setClock(endtime) {
		let days = $('#days');
		let hours = $('#hours');
		let minutes = $('#minutes');
		let seconds = $('#seconds');
		let timeInterval = setInterval(updateClock, 1000);
		updateClock();
		function getZero(num) {
            if (num >= 0 && num < 10) {
                    return `0${num}`;
            } else{
                return num;
            };
        };
        
        function updateClock() {
            let t = getTimeRemaining(endtime);
            $(days).html(getZero(t.days));
            $(hours).html(getZero(t.hours));
            $(minutes).html(getZero(t.minutes));
            $(seconds).html(getZero(t.seconds));
            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    };
    
    setClock(deadline);
});