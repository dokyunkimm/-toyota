$(function(){
	var trxIdx05Sld01 = new Swiper("#trxIdx05Sld01 > div", {
		width : 286,
		spaceBetween : 15,
        loop: false,
		speed: 500
    });

	var trxIdx05Sld02 = new Swiper("#trxIdx05Sld02 > div", {
		width : 286,
		spaceBetween : 15,
        loop: false,
		speed: 500
    });

	var trxIdx05Sld03 = new Swiper("#trxIdx05Sld03 > div", {
		width : 286,
		spaceBetween : 15,
        loop: false,
		speed: 500
    });


	$("#trxTab > a:nth-child(4)").click(function(){
		$("html, body").animate({
			scrollTop : $(".trxIdx05Cnt01_01").offset().top - 50
		},500);
	});
	$("#trxTab > a:nth-child(5)").click(function(){
		$("html, body").animate({
			scrollTop : $(".trxIdx05Cnt02_01").offset().top - 50
		},500);
	});
	$("#trxTab > a:nth-child(6)").click(function(){
		$("html, body").animate({
			scrollTop : $(".trxIdx05Cnt03_01").offset().top - 50
		},500);
	});


	setTimeout(function(){
		$("#trxBck05").css("height",$("#trxIdx01").outerHeight() + $("#trxIdx02").outerHeight() + $("#trxIdx03").outerHeight() + $("#trxIdx04").outerHeight());
		// $("#trxIdx05").css("height",$("#trxIdx05").outerHeight());
	},500);
	$(window).resize(function(){
		$("#trxBck05").css("height",$("#trxIdx01").outerHeight() + $("#trxIdx02").outerHeight() + $("#trxIdx03").outerHeight() + $("#trxIdx04").outerHeight());
	})


	var crdCnt = 0;
	setInterval(function(){
		$(".trxCrd > div").css("background-image","linear-gradient("+(crdCnt)+"deg, #dedede, #2f2f2f 43%, #000000)");
		crdCnt++;
		if(crdCnt == 361) crdCnt = 0;
	},10);

	setInterval(function(){
		$("#trxIdx04 > i").addClass("on");
		setTimeout(function(){
			$("#trxIdx04 > i").removeClass("on");
		},2500);
	},3000);


	$(window).scroll(function(){
		if($(window).scrollTop() < $("#trxIdx05").offset().top){
			$("#trxTab").removeClass("on");
			$("#trxTab").removeAttr("style");
		}
		if($(window).scrollTop() >= $("#trxIdx05").offset().top && $(window).scrollTop() + $(window).outerHeight() <= $("#trxIdx05").offset().top + $("#trxIdx05").outerHeight()){
			$("#trxTab").addClass("on");
			$("#trxTab").removeAttr("style");
		}
		if($(window).scrollTop() + $(window).outerHeight() > $("#trxIdx05").offset().top + $("#trxIdx05").outerHeight()){
			$("#trxTab").removeClass("on");
			$("#trxTab").css("top",$("#trxIdx05").outerHeight() - $(window).outerHeight());
		}



		if($(window).scrollTop() + $(window).outerHeight() * 0.5 < $("#trxIdx02 > div").offset().top + 250){
			$("#trxIdx02 > div > div").removeClass("on");
		}

		if($(window).scrollTop() + $(window).outerHeight() * 0.5 >= $("#trxIdx02 > div").offset().top + 250 && $(window).scrollTop() + $(window).outerHeight() < $("#trxIdx04").offset().top + $("#trxIdx04").outerHeight()){
			$("#trxIdx02 > div > div").addClass("on");
			$("#trxIdx02 > div > div").removeAttr("style");
		}

		if($(window).scrollTop() + $(window).outerHeight() >= $("#trxIdx04").offset().top + $("#trxIdx04").outerHeight()){
			$("#trxIdx02 > div > div").removeClass("on");
			$("#trxIdx02 > div > div").css("top","auto");
			$("#trxIdx02 > div > div").css("bottom",($("#trxIdx03").outerHeight() + $("#trxIdx04").outerHeight()) * -1);
		}


		if($(window).scrollTop() + $(window).outerHeight() <= $("#trxIdx02").offset().top + $("#trxIdx02").outerHeight()){
			$("#trxIdx02 > div > div > div").css("transform","scaleX("+(1)+")");
			$("#trxIdx02 > div > div > div").css("filter","invert("+(0)+")");
		}
		if($(window).scrollTop() + $(window).outerHeight() > $("#trxIdx02").offset().top + $("#trxIdx02").outerHeight() && $(window).scrollTop() + $(window).outerHeight() <= $("#trxIdx02").offset().top + $("#trxIdx02").outerHeight() + 400){
			$("#trxIdx02 > div > div > div").css("transform","scaleX("+(($(window).scrollTop() + $(window).outerHeight() - $("#trxIdx02").offset().top - $("#trxIdx02").outerHeight()) / -200 + 1)+")");
			$("#trxIdx02 > div > div > div").css("filter","invert("+((($(window).scrollTop() + $(window).outerHeight() - $("#trxIdx02").offset().top - $("#trxIdx02").outerHeight())) / 400)+")");
			if((($(window).scrollTop() + $(window).outerHeight() - $("#trxIdx02").offset().top - $("#trxIdx02").outerHeight()) / -200 + 1) > 0){
				$("#trxIdx02 > div > div > div").removeClass("flpped");
			} else {
				$("#trxIdx02 > div > div > div").addClass("flpped");
			}
		}
		if($(window).scrollTop() + $(window).outerHeight() > $("#trxIdx02").offset().top + $("#trxIdx02").outerHeight() + 400){
			$("#trxIdx02 > div > div > div").css("transform","scaleX("+(-1)+")");
			$("#trxIdx02 > div > div > div").css("filter","invert("+(1)+")");
		}

		if($(window).scrollTop() + $(window).outerHeight() * 0.5 < $("#trxIdx03").offset().top){
			$("#trxIdx02 > div > div > div").css("opacity",1);
			$("#trxIdx02 > div > div > div img").removeAttr("style");
		}

		if($(window).scrollTop() + $(window).outerHeight() * 0.5 >= $("#trxIdx03").offset().top && $(window).scrollTop() + $(window).outerHeight() * 0.5 < $("#trxIdx03").offset().top + 100){
			$("#trxIdx02 > div > div > div").css("opacity",1 - ($(window).scrollTop() + $(window).outerHeight() * 0.5 - $("#trxIdx03").offset().top) / 100 + 0.1);
			$("#trxIdx02 > div > div > div img").css("filter","blur("+(($(window).scrollTop() + $(window).outerHeight() * 0.5 - $("#trxIdx03").offset().top) / 100 * 15)+"px)");
		}

		if($(window).scrollTop() + $(window).outerHeight() * 0.5 >= $("#trxIdx03").offset().top + 100){
			$("#trxIdx02 > div > div > div").css("opacity",0.1);
			$("#trxIdx02 > div > div > div img").css("filter","blur("+(15)+"px)");
		}
		

		








		if($(window).scrollTop() + $(window).outerHeight() <= $(".trxIdx05Cnt02_01").offset().top){
			$("#trxBck02").removeAttr("style");
			$("#trxTabBck02").removeAttr("style");
		}
		if($(window).scrollTop() + $(window).outerHeight() >= $(".trxIdx05Cnt02_01").offset().top){
			$("#trxBck02").css("opacity",($(window).scrollTop() + $(window).outerHeight() - $(".trxIdx05Cnt02_01").offset().top) / ($(window).outerHeight() / 2));
			$("#trxTabBck02").css("opacity",($(window).scrollTop() + $(window).outerHeight() - $(".trxIdx05Cnt02_01").offset().top) / ($(window).outerHeight() / 2));
		}

		if($(window).scrollTop() + $(window).outerHeight() <= $(".trxIdx05Cnt03_01").offset().top){
			$("#trxBck03").removeAttr("style");
			$("#trxTabBck03").removeAttr("style");
		}
		if($(window).scrollTop() + $(window).outerHeight() >= $(".trxIdx05Cnt03_01").offset().top){
			$("#trxBck03").css("opacity",($(window).scrollTop() + $(window).outerHeight() - $(".trxIdx05Cnt03_01").offset().top) / ($(window).outerHeight() / 2));
			$("#trxTabBck03").css("opacity",($(window).scrollTop() + $(window).outerHeight() - $(".trxIdx05Cnt03_01").offset().top) / ($(window).outerHeight() / 2));
		}

		if($(window).scrollTop() + $(window).outerHeight() <= $("#trxIdx06").offset().top){
			$("#trxBck04").removeAttr("style");
		}
		if($(window).scrollTop() + $(window).outerHeight() >= $("#trxIdx06").offset().top){
			$("#trxBck04").css("opacity",($(window).scrollTop() + $(window).outerHeight() - $("#trxIdx06").offset().top) / ($(window).outerHeight() / 3));
		}


		
		if($(window).scrollTop() + $(window).outerHeight() >= $("#trxIdx02 > div > span").offset().top - 100){
			$("#trxIdx02 > div > span").css("left",($(window).scrollTop() + $(window).outerHeight() - $("#trxIdx02 > div > span").offset().top - 100) * -1);
		}

		

		

		if($(window).scrollTop() < $(".trxIdx05Cnt02_01").offset().top - 100){
			$("#trxTab > a:nth-child(4)").addClass("on");
			$("#trxTab > a:nth-child(5)").removeClass("on");
			$("#trxTab > a:nth-child(6)").removeClass("on");
		}
		if($(window).scrollTop() >= $(".trxIdx05Cnt02_01").offset().top - 100 && $(window).scrollTop() < $(".trxIdx05Cnt03_01").offset().top - 100){
			$("#trxTab > a:nth-child(4)").removeClass("on");
			$("#trxTab > a:nth-child(5)").addClass("on");
			$("#trxTab > a:nth-child(6)").removeClass("on");
		}
		if($(window).scrollTop() >= $(".trxIdx05Cnt03_01").offset().top - 100){
			$("#trxTab > a:nth-child(4)").removeClass("on");
			$("#trxTab > a:nth-child(5)").removeClass("on");
			$("#trxTab > a:nth-child(6)").addClass("on");
		}


		if($(window).scrollTop() >= $(".trxIdx05Cnt01_01Bck").offset().top - 50 && $(window).scrollTop() < $(".trxIdx05Cnt01_02").offset().top - 50){
			$(".trxIdx05Cnt01_01").addClass("on");
			$(".trxIdx05Cnt01_01Bck").css("height",$(".trxIdx05Cnt01_01").outerHeight() + 75);
		} else {
			$(".trxIdx05Cnt01_01").removeClass("on");
			$(".trxIdx05Cnt01_01Bck").removeAttr("style");
		}
		if($(window).scrollTop() >= $(".trxIdx05Cnt01_02").offset().top - 50){
			$(".trxIdx05Cnt01_02").addClass("on");
		} else {
			$(".trxIdx05Cnt01_02").removeClass("on");
		}

		if($(window).scrollTop() >= $(".trxIdx05Cnt02_01Bck").offset().top - 50 && $(window).scrollTop() < $(".trxIdx05Cnt02_02").offset().top - 50){
			$(".trxIdx05Cnt02_01").addClass("on");
			$(".trxIdx05Cnt02_01Bck").css("height",$(".trxIdx05Cnt02_01").outerHeight() + 75);
		} else {
			$(".trxIdx05Cnt02_01").removeClass("on");
			$(".trxIdx05Cnt02_01Bck").removeAttr("style");
		}
		if($(window).scrollTop() >= $(".trxIdx05Cnt02_02").offset().top - 50){
			$(".trxIdx05Cnt02_02").addClass("on");
		} else {
			$(".trxIdx05Cnt02_02").removeClass("on");
		}



		if($(window).scrollTop() >= $(".trxIdx05Cnt03_01Bck").offset().top - 50 && $(window).scrollTop() < $(".trxIdx05Cnt03_02").offset().top - 50){
			$(".trxIdx05Cnt03_01").addClass("on");
			$(".trxIdx05Cnt03_01Bck").css("height",$(".trxIdx05Cnt03_01").outerHeight() + 75);
		} else {
			$(".trxIdx05Cnt03_01").removeClass("on");
			$(".trxIdx05Cnt03_01Bck").removeAttr("style");
		}
		if($(window).scrollTop() >= $(".trxIdx05Cnt03_02").offset().top - 50){
			$(".trxIdx05Cnt03_02").addClass("on");
		} else {
			$(".trxIdx05Cnt03_02").removeClass("on");
		}








		if($(window).scrollTop() + $(window).outerHeight() * 0.5 >= $("#trxIdx06 > p > span").eq(0).offset().top){
			$("#trxIdx06 > p > span").eq(0).addClass("on");
			$("#trxIdx06 > p > span").eq(1).addClass("on");
			$("#trxIdx06 > p > strong").addClass("on");
		} else {
			$("#trxIdx06 > p > span").eq(0).removeClass("on");
			$("#trxIdx06 > p > span").eq(1).removeClass("on");
			$("#trxIdx06 > p > strong").removeClass("on");
		}

		if($(window).scrollTop() + $(window).outerHeight() * 0.5 >= $("#trxIdx06 > p > span").eq(1).offset().top){
		} else {
		}

		if($(window).scrollTop() + $(window).outerHeight() * 0.5 >= $("#trxIdx06 > p > strong").offset().top){
		} else {
		}

		if($(window).scrollTop() + $(window).outerHeight() >= $("#trxFtr").offset().top){
			$("#trxIdx06 > p > span").eq(0).addClass("off");
			$("#trxIdx06 > p > span").eq(1).addClass("off");
		} else {
			$("#trxIdx06 > p > span").eq(0).removeClass("off");
			$("#trxIdx06 > p > span").eq(1).removeClass("off");
		}



		// if($(window).scrollTop() + $(window).outerHeight() * 0.75 >= $("#trxIdx06").offset().top){
		// 	$("#trxIdx06 > p > span").eq(0).addClass("on");
		// 	$("#trxForAnm01").stop().animate({
		// 		"background":"red"
		// 	},250,function(){
		// 		$("#trxIdx06 > p > span").eq(1).addClass("on");
		// 		$("#trxForAnm02").stop().animate({
		// 			"background":"blue"
		// 		},250,function(){
		// 			$("#trxIdx06 > p > strong").eq(0).addClass("on");
		// 		})
		// 	});
		// }

		// if($(window).scrollTop() + $(window).outerHeight() >= $("#trxIdx06").offset().top + $("#trxIdx06").outerHeight()){
		// 	$("#trxIdx06 > p > span").eq(0).addClass("off");
		// 	$("#trxIdx06 > p > span").eq(0).removeClass("on");
		// 	$("#trxForAnm03").stop().animate({
		// 		"background":"red"
		// 	},250,function(){
		// 		$("#trxIdx06 > p > span").eq(1).addClass("off");
		// 		$("#trxIdx06 > p > span").eq(1).removeClass("on");
		// 	});
		// }
	});
});