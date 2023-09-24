$(".ar-up").fadeOut(10)

$(window).scroll(function(){
 
 let scrollPosition = $(window).scrollTop()

 if(scrollPosition>=30)
 {
    $(".ar-up").fadeIn()
    
 }
 else
 {
  $(".ar-up").fadeOut()
 }

})

$(".ar-up").click(function(){

  $("body,html").animate({scrollTop:'0'},1000)
})

let shwoDate =new Date()
let displayDate = shwoDate.getFullYear()
document.querySelector(".copy-right").innerHTML=`Copyright ${displayDate} All rights reserved.`;

function showFcont()
{
  $(".s-row").removeClass("d-none");
  $('.cont-t').addClass("d-none");
  $(".cont-th").addClass("d-none")
  $("#but1").addClass("but1-sec-3") 
  $("#but2").removeClass("but1-sec-3")    
  $("#but3").removeClass("but1-sec-3")          
}

function shoeTcont()
{
    $(".s-row").addClass("d-none");
  $('.cont-t').removeClass("d-none");
  $(".cont-th").addClass("d-none")  
  $("#but1").removeClass("but1-sec-3") 
  $("#but2").addClass("but1-sec-3")    
  $("#but3").removeClass("but1-sec-3")           
}

function showTrcont()
{
  $(".s-row").addClass("d-none");
  $('.cont-t').addClass("d-none");
  $(".cont-th").removeClass("d-none") 
  $("#but1").removeClass("but1-sec-3") 
  $("#but2").removeClass("but1-sec-3")    
  $("#but3").addClass("but1-sec-3")   
}

$(document).ready(()=>{
  $(".loder").fadeOut(1000,()=>{
    $("body,html").css({overflow:'auto'})
  })
})

