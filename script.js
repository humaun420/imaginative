var menuBar =document.querySelector(".menu_bar");


var main = document.querySelector(".main_appender");



menuBar.addEventListener('click' , function(){
  
  main.classList.toggle("change");
  document.querySelector(".hamburger_menu").classList.toggle("change");
});