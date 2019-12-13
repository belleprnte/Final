var ofs = 0;
var el = document.getElementById('container');

window.setInterval(function(){
    el.style.background = 'rgba(255,0,0,'+Math.abs(Math.sin(ofs))+')';
    ofs += 0.07;
}, 10);
