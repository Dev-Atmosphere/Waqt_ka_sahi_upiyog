setInterval(() => {
    p = new Date();
    hourtime = p.getHours();
    minutetime = p.getMinutes();
    secondtime = p.getSeconds();
    hourrotate = hourtime*30 + minutetime/2;
    minrotate = minutetime*6;
    secrotate = secondtime*6;

    hour.style.transform = `rotate(${hourrotate}deg)`;
    minutes.style.transform = `rotate(${minrotate}deg)`;
    seconds.style.transform = `rotate(${secrotate}deg)`;

}, Infinity);