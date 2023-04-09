setInterval(clock,100);

let secondHand = document.querySelector('.second');
let minuteHand = document.querySelector('.minute');
let hourHand = document.querySelector('.hour');


function clock() {
    const date = new Date();

    const second = date.getSeconds()/60;
    const minute = (second+date.getMinutes())/60;
    const hour = (minute+date.getHours())/12;

    setRoted(secondHand,second );
    setRoted(minuteHand,minute );
    setRoted(hourHand,hour );
    

}
    function setRoted(el,rot) {
        el.style.setProperty('--roted', rot*360);
    }

   
