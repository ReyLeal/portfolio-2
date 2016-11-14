//
var mq = window.matchMedia( "(min-width: 500px)" );

if(mq.matches) {
  function openNav() {
    document.getElementById("mySidenav").style.width = "400px";
    document.getElementById("main1").style.marginLeft = "400px";
    document.getElementById("main2").style.marginLeft = "400px";
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main1").style.marginLeft = "0";
    document.getElementById("main2").style.marginLeft = "0";
  }
} else {
  function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
}


// console.log("Hello");
//
// $(document).ready(function(){
//   console.log(matchMedia);
//
//   if (matchMedia) {
//     var mq = window.matchMedia("(min-width: 500px)");
//     console.log(WidthChange);
//     mq.addListener(WidthChange, function(){console.log("Hello1 width");});
//     WidthChange(mq);
//   }
//
//   console.log("Hello1");
//   function WidthChange(mq) {
//     console.log("Hello11");
//     console.log(mq);
//     if(mq.matches) {
//       function openNav() {
//         document.getElementById("mySidenav").style.width = "400px";
//         document.getElementById("main1").style.marginLeft = "400px";
//         document.getElementById("main2").style.marginLeft = "400px";
//       }
//       function closeNav() {
//         document.getElementById("mySidenav").style.width = "0";
//         document.getElementById("main1").style.marginLeft = "0";
//         document.getElementById("main2").style.marginLeft = "0";
//       }
//     } else {
//       function openNav() {
//         document.getElementById("mySidenav").style.width = "100%";
//       }
//       function closeNav() {
//         document.getElementById("mySidenav").style.width = "0";
//       }
//     }
//   }
// });
