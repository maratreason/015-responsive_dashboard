"use strict";var chart=document.querySelector("#chart").getContext("2d"),menuBtn=(new Chart(chart,{type:"line",data:{labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"BTC",data:[29374,33537,49631,59095,57828,36684,33572,39974,48847,48116,61004],borderColor:"red",borderWidth:2},{label:"EHT",data:[31500,41e3,88800,26e3,46e3,32698,5e3,3e3,18656,24832,36844],borderColor:"blue",borderWidth:2}]},options:{responsive:!0}}),document.querySelector(".menu-btn")),closeBtn=document.querySelector(".close-btn"),sidebar=document.querySelector("aside"),themeBtn=(menuBtn.addEventListener("click",function(){sidebar.style.display="block"}),closeBtn.addEventListener("click",function(){sidebar.style.display="none"}),document.querySelector(".theme-btn"));themeBtn.addEventListener("click",function(){document.body.classList.toggle("dark-theme"),themeBtn.querySelector("span:first-child").classList.toggle("active"),themeBtn.querySelector("span:last-child").classList.toggle("active")});
//# sourceMappingURL=main.js.map