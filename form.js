$(".sendmail").click(function(){
   $(".tosay").css("opacity","0");
  $(".mail").css("overflow","hidden");
  $(".mail").css("height","10px");
  $(".mail").css("bottom","150px");
  $(".mail").css("width","50px");
  $(".mail").css("left","30%");
  $(".linemail").css("opacity","1");
 $(".mail").css("transition-duration","0.9s");
  $(".mail").css("transition-delay","0.3s");$(".mail").css("transform","rotateZ(360deg)"); $(".linemail").css("transform","rotateZ(360deg)");
  setTimeout(function(){$(".mail").css("opacity","0").css("visibility", "hidden");
                      }
             ,500);

  setTimeout(function(){$(".lineinner").css("top","-80px"); }
             ,1000);

  setTimeout(function(){$(".linemail").css("left","45%"); }
             ,800);
   setTimeout(function(){$(".linemail").css("bottom","20%");
                                                 $("body").css("background-color","#333").css("color","#fff");  }
             ,500);
   setTimeout(function(){$(".linemail").css("bottom","110%");
                        $(".linemail").css("scale","200%");
   $(".sendok").css("opacity","1");        $(".sendok").css("letter-spacing","5px");
                        }
             ,1500);
   setTimeout(() => {
      $(".result").css('display', 'block').css("opacity", "1")
   }, 2000);

  });
