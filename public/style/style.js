
$(document).ready(function(){

  if (matchMedia) {
    var mq = window.matchMedia("(min-width: 500px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
  }

  function WidthChange(mq) {
    if(mq.matches) {
      $('#onclick').click(function(){
          document.getElementById("mySidenav").style.width = "400px";
          document.getElementById("main1").style.marginLeft = "400px";
          document.getElementById("main2").style.marginLeft = "400px";
      });
      $('#closenav').click(function(){
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main1").style.marginLeft = "0";
        document.getElementById("main2").style.marginLeft = "0";
      });
    } else {
      $('#onclick').click(function(){
        document.getElementById("mySidenav").style.width = "100vw";
      });
      $('#closenav').click(function(){
        document.getElementById("mySidenav").style.width = "0";
      });
    }
  }
});


// //
// var mq = window.matchMedia( "(min-width: 500px)" );
//
// if(mq.matches) {
//   function openNav() {
//     document.getElementById("mySidenav").style.width = "400px";
//     document.getElementById("main1").style.marginLeft = "400px";
//     document.getElementById("main2").style.marginLeft = "400px";
//   }
//   function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
//     document.getElementById("main1").style.marginLeft = "0";
//     document.getElementById("main2").style.marginLeft = "0";
//   }
// } else {
//   function openNav() {
//     document.getElementById("mySidenav").style.width = "100%";
//   }
//   function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
//   }
// }
