window.onload=function  () {
  //选项卡
	// var item=$(".a");
	// var list=$(".neirong");
 //  var sanj=$(".sanj");
	// for(var i=0;i<item.length;i++){
	// 	item[i].index=i;
	// 	item[i].onmouseover=function(){
	// 		list[this.index].style.display="block";
 //      sanj[this.index].style.display="block";
	// 	}
	// }
	// for(var i=0;i<item.length;i++){
	// 	item[i].index=i;
	// 	item[i].onmouseout=function(){
	// 		list[this.index].style.display="none";
 //      sanj[this.index].style.display="none";
	// 	}
	// }
  $(".a").each(function(index,dom){
    $(this).on("mouseover",function(){
      $(".neirong").eq(index).show();
      $(".sanj").eq(index).show();
    })
  })
  $(".a").each(function(index,dom){
    $(this).on("mouseout",function(){
      $(".neirong").eq(index).hide();
      $(".sanj").eq(index).hide();
    })
  })
	//登录    
	// var da=$(".da");
 //  var blank=$("#blank");
 //  var xiao=$(".xiao")[0];
	// 	xiao.onmouseover=function(){
	// 		da[0].style.display="block";
 //      blank.style.display="block";
 //      xiao.className="xiao xiaoxin";
	// 	}
	// 	xiao.onmouseout=function(){
	// 		da[0].style.display="none";
 //      blank.style.display="none";
 //       xiao.className="xiao";
	// 	}	
  $(".xiao").hover(function(){
    $(".da").show();
    $("#blank").show();
    $(this).addClass("xiaoxin")
  },function(){
    $(".da").hide();
    $("#blank").hide();
    $(this).removeClass("xiaoxin")
  })
  //手机营业厅
	// var ting=$(".ting");
	// var erwei=$(".erwei");
	// 	ting[0].onmouseover=function(){
	// 		erwei[0].style.display="block";
 //      ting[0].className="ting tingxin";

	// 	}
	// 	ting[0].onmouseout=function(){
	// 		erwei[0].style.display="none";
 //       ting[0].className="ting";
	// 	}
$(".ting").hover(function(){
  $(".erwei").show();
  $(this).addClass("tingxin")
},function(){
  $(".erwei").hide();
  $(this).removeClass("tingxin")
})
//太原
var tcity=$(".tcity")[0];
var zhankai=$(".zhankai");
var body=$("body")[0];
var shengfen=$("#shengfen");
tcity.onclick=function(e){
  var e=e||window.event;
  if(e.cancelBulle){
    e.cancelBulle=true;
  }else{
    e.stopPropagation();
  }
  zhankai[0].style.display="block";
  zhankai[1].style.display="none";
  shengfen.onclick=function(){
  zhankai[1].style.display="block";
  zhankai[0].style.display="none";
 }
}

body.onclick=function(e){
  var e=e||window.event;
  var obj=e.target||e.srcElement;
  if(obj.className!=tcity){
    zhankai[0].style.display="none";
    zhankai[1].style.display="none";
  }
}
//banner
//   var box=$(".bncenter");
//   var yuanxing=$(".yuanxing");
//   var tu=$(".tudebox")[0];
//   var imgs=$("a",tu);
//   var zuoniu=$(".zuoniu");
//   var youniu=$(".youniu");
//   var mv=parseInt(getStyle(box[0],"width"));
//   for(var i=0;i<imgs.length;i++){
//     if(i==0){
//       continue;
//     }else{
//       imgs[i].style.left=mv+"px";
//     }
//     yuanxing[0].className="yuanxing hot";
//   }
 
//    var now=0;next=0;flag=true;
//    var t=setInterval(move,2000);
//    box[0].onmouseover=function(){
//       clearInterval(t);
//       zuoniu[0].style.display="block";
//       youniu[0].style.display="block";
//     }
//     box[0].onmouseout=function(){
//       t=setInterval(move,2000);
//       zuoniu[0].style.display="none";
//       youniu[0].style.display="none";
//     }
//     youniu[0].onclick=function(){
//       if(flag){
//       move();

//       }flag=false;
//    }      
//     zuoniu[0].onclick=function(){
//       if(flag){
//      move1();
//      }
//      flag=false;
//   } 
 //  for(var i=0;i<yuanxing.length;i++){
 //    yuanxing[i].index=i;
 //    yuanxing[i].onclick=function(){
 //      if(parseInt(getStyle(imgs[next],"left"))==0){
 //    if(now<this.index){
 //      imgs[this.index].style.left=mv+"px";
 //      animate(imgs[now],{left:-mv});
 //      animate(imgs[this.index],{left:0});
 //    }else if(now>this.index){
 //      imgs[this.index].style.left=-mv+"px";
 //      animate(imgs[now],{left:mv});
 //      animate(imgs[this.index],{left:0});
 //    } else return;
 //    yuanxing[now].className="yuanxing";
 //    yuanxing[this.index].className="yuanxing hot";
 //    now=this.index;
 //    next=this.index;
 //  }
 //  }
 // }
//   function move(){
//     next++;
//     if(next==imgs.length){
//       next=0;
//     }
//     imgs[next].style.left=mv+"px";
//      yuanxing[now].className="yuanxing";
//      yuanxing[next].className="yuanxing hot";
//     animate(imgs[now],{left:-mv}
//     );
//     animate(imgs[next],{left:0},function(){
//        flag=true;
//     });
//     now=next;
//   }
//  function move1(){
//     next--;
//     if(next<0){
//       next=imgs.length-1;
//     }
//     imgs[next].style.left=-mv+"px";
//     yuanxing[now].className="yuanxing";
//     yuanxing[next].className="yuanxing hot";
//     animate(imgs[now],{left:mv});
//     animate(imgs[next],{left:0},function(){
//       flag=true;
//     });
//     now=next;
//   }
  var box=$(".bncenter");
  var yuanxing=$(".yuanxing");
  var tu=$(".tudebox");
  var imgs=$("a",tu);
  var zuoniu=$(".zuoniu");
  var youniu=$(".youniu");
  var mv=$("a",$(".tudebox")).eq(0).width();
  imgs.eq(0).css("left",0);
   $(".yuanxing").eq(0).addClass("hot");
   var now=0;next=0;flag=true;
   var t=setInterval(move,2000);
   $(".bncenter").on("mouseover",function(){
    clearInterval(t);
    $(".zuoniu").show();
    $(".youniu").show();
   })
    $(".bncenter").on("mouseout",function(){
    t=setInterval(move,2000)
    $(".zuoniu").hide();
    $(".youniu").hide();
   })
  $(".youniu").on("click",function(){
    if(flag){
      move();
    }flag=false;
  })
  $(".zuoniu").on("click",function(){
    if(flag){
      move1();
    }flag=false;
  })
$(".yuanxing").click(function(){
  var index=$(this).index();
     next=index;
      if(now<index){
        imgs.eq(index).css("left",mv).end().eq(now).animate({left:-mv}).end().eq(next).animate({left:0});
      }else if(now>index){
        imgs.eq(index).css("left",-mv).end().eq(now).animate({left:mv}).end().eq(next).animate({left:0});
      }else return;
   yuanxing.eq(now).removeClass("hot");
   yuanxing.eq(index).addClass("hot");
   now=index;
   next=index;
   })

function move(){
  next++;
  if(next==imgs.size()){
    next=0;
  }
  imgs.eq(next).css("left",mv).end().eq(now).animate({left:-mv}).end().eq(next).animate({left:0},function(){
    flag=true;
  });
  yuanxing.eq(now).removeClass("hot").end().eq(next).addClass("hot");
  now=next;
}
 function move1(){
    next--;
    if(next<0){
      next=imgs.length-1;
    }
    imgs.eq(next).css("left",-mv).end().eq(now).animate({left:mv}).end().eq(next).animate({left:0},function(){
      flag=true;
    })
    yuanxing.eq(now).removeClass("hot").end().eq(next).addClass("hot");
     now=next;
  }
// 节点轮播
// 右->左 先动画后扒图
// 1.imgBox  left:-aw;
// 2.imgBox.appandChild(firstChild);
// 3.imgBox.style.left=0
// 左->右 先扒图后动画
// imgBox动态宽度
// var big=$(".big");
// lunbo(big[0],1);
// function lunbo(obj,num){
// var imgBox=$(".imgBox",obj)[0];
// var aa=$(".jiazai",imgBox)[0];
// var aw=parseInt(getStyle(aa,"width"))+parseInt(getStyle(aa,"marginRight"))
// var t1=setInterval(moveR,2000);
// var zuoanniu=$(".zuoanniu",obj)[0];
// var youanniu=$(".youanniu",obj)[0];
// var flag1=true;
// imgBox.style.width=aw*aa.length+"px"
// obj.onmouseover=function(){
//   clearInterval(t1);
//   zuoanniu.style.display="block";
//   youanniu.style.display="block";
// }
// obj.onmouseout=function(){
//   t1=setInterval(moveR,2000);
//   zuoanniu.style.display="none";
//   youanniu.style.display="none";

// }
//     youanniu.onclick=function(){
//       if(flag1){
//       moveR();
//       flag1=false;
//       }
//    }      
//     zuoanniu.onclick=function(){
//       if(flag1){
//      moveL();
//      flag1=false;
//      }
     
//   } 
// function moveR(){
//   animate(imgBox,{left:-num*aw},function(){
//        for(var i=0;i<num;i++){
//        var first=firstChild(imgBox);
//        imgBox.appendChild(first);
//        imgBox.style.left=0+"px";
//        }
//        flag1=true;
//   })
// }
// function moveL(){
//    for(var i=0;i<num;i++){
//    var first=firstChild(imgBox);
//    var last=lastChild(imgBox);
//       imgBox.insertBefore(last,first);
//       }
//       imgBox.style.left=-aw*num+"px";
//       animate(imgBox,{left:0},function(){
//       flag1=true;
//   });
//  }
// }
var aw=$(".imgBox .jiazai").width()+parseInt($(".imgBox .jiazai").css("margin-right"));
var flag1=true;
var t1=setInterval(moveR,2000);
$(".imgBox").css("width",aw*$(".imgBox .jiazai").length);
$(".big").hover(function(){
  clearInterval(t1);
  $(".big .zuoanniu").show();
  $(".big .youanniu").show();
},function(){
  t1=setInterval(moveR,2000);
  $(".big .zuoanniu").hide();
  $(".big .youanniu").hide();
})
$(".youanniu").click(function(){
  if(flag1){
    moveR();
    flag1=false;
  }
})
$(".zuoanniu").click(function(){
  if(flag1){
    moveL();
    flag1=false;
  }
})
function moveR(){
  $(".imgBox").animate({left:-aw},function(){
    var first=$(".imgBox a:first-child");
    $(".imgBox").append(first).css("left",0);
    flag1=true;
  })
}
function moveL(){
    var first=$(".imgBox a:first-child");
    var last=$(".imgBox a:last-child");
    first.insertBefore(last);
    $(".imgBox").css("left",-aw).animate({left:0},function(){
      flag1=true;
    })
}


//公告
  // var xy=$(".xy")[0];
  // var dy=$(".dy")[0];
  // var ggw1=$(".ggw1");
  // var ggnyd=$(".ggnyd")[0];
  // dy.onclick=function(){
  //    var first=firstChild(ggnyd);
  //    ggnyd.appendChild(first);
  // }
  // xy.onclick=function(){
  //    var first=firstChild(ggnyd);
  //    var last=lastChild(ggnyd);
  //    ggnyd.insertBefore(last,first);
  // }
  //公告
$(".dy").click(function(){
  $(".ggnyd").append($(".ggny1:first"));
})
$(".xy").click(function(){
	$(".ggny1:last").insertBefore($(".ggny1:first"))
})
  //链接
  // var zxzx=$(".zxzx")[0];
  // var cjwt=$(".cjwt")[0];
  // var tsjy=$(".tsjy")[0];
  // zxzx.onmouseover=function(){
  //   animate(zxzx,{left:-86},600);
  // }
  // zxzx.onmouseout=function(){
  //   animate(zxzx,{left:-22},600);
  // }
  // cjwt.onmouseover=function(){
  //   animate(cjwt,{left:-86},600);
  // }
  // cjwt.onmouseout=function(){
  //   animate(cjwt,{left:-22},600);
  // }
  // tsjy.onmouseover=function(){
  //   animate(tsjy,{left:-86},600);
  // }
  // tsjy.onmouseout=function(){
  //   animate(tsjy,{left:-22},600);
  // }

  $(".zxzx").hover(function(){
  	$(".zxzx").animate({"left":-86},600)
  },function(){
  	$(".zxzx").animate({"left":-22},600)
  })
   $(".cjwt").hover(function(){
  	$(".cjwt").animate({"left":-86},600)
  },function(){
  	$(".cjwt").animate({"left":-22},600)
  })
    $(".tsjy").hover(function(){
  	$(this).animate({"left":-86},600)
  },function(){
  	$(this).animate({"left":-22},600)
  })
}
	
