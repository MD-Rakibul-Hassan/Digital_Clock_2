
// this is clock function
function showTime () {
    const date = new Date();
    let showHour = document.getElementById('hour');
    let showMinute = document.getElementById('minutes');
    let showSecond = document.getElementById('seconds');
    let showTimeZone = document.getElementById('am');

    let hours,minutes,seconds;
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    months = date.getMonth();
    if (hours > 12) {
        hours = hours - 12;
    }
    if (hours < 10) {
        showHour.innerText = '0'+hours
    }
    if (hours <= 12) {
        showTimeZone.innerText = 'PM';
        
    }else {
        
        showTimeZone.innerText = 'PM';
    }
    if (minutes < 10) {
        showHour.innerText = '0'+minutes;
    }else {
        showMinute.innerText = minutes;
    }
    if (seconds < 10) {
        showSecond.innerText = '0'+seconds;
    }else{
        showSecond.innerText = seconds;
    }
}
setInterval(showTime,1000);

function showDates() {
    let showFulYear = document.getElementById('year');
    let showMonth = document.getElementById('month');
    let showWeeks = document.getElementById('weeak');
    let showDays = document.getElementById('days');
    const date = new Date ();
    let [years,months,weeks,dats] = [0,0,0,0];
    years = date.getFullYear();
    months = date.getMonth();
    weeks = date.getDay();
    dats = date.getDate();
    
    showDays.innerText = dats;
    weeks == 0 ? showWeeks.innerText = 'Sun' : weeks;
    weeks == 1 ? showWeeks.innerText = 'Mon' : weeks;
    weeks == 2 ? showWeeks.innerText = 'Tue' : weeks;
    weeks == 3 ? showWeeks.innerText = 'Wed' : weeks;
    weeks == 4 ? showWeeks.innerText = 'Thu' : weeks;
    weeks == 5 ? showWeeks.innerText = 'Fri' : weeks;
    weeks == 6 ? showWeeks.innerText = 'Sat' : weeks;
    
    // ShowMonth 
    months == 0 ? showMonth.innerText = 'Jan' : months;
    months == 1 ? showMonth.innerText = 'Feb' : months;
    months == 2 ? showMonth.innerText = 'Mar' : months;
    months == 3 ? showMonth.innerText = 'Apr' : months;
    months == 4 ? showMonth.innerText = 'May' : months;
    months == 5 ? showMonth.innerText = 'Jun' : months;
    months == 6 ? showMonth.innerText = 'Jul' : months;
    months == 7 ? showMonth.innerText = 'Aug' : months;
    months == 8 ? showMonth.innerText = 'Sep' : months;
    months == 9 ? showMonth.innerText = 'Oct' : months;
    months == 10 ? showMonth.innerText = 'Nov' : months;
    months == 11 ? showMonth.innerText = 'Dec' : months;
    showFulYear.innerText = years;
}

showDates()