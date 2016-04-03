$(window).scroll(function() {
	var scrollObj = $(window).scrollTop();
	var myNameScrollDivide = (l/600) * (-1);
	var maNameLeftScroll;
	$("#sc").text(scrollObj);
	if( scrollObj < 200 ) {
		$('.arrow').css({'top' : (78+scrollObj) + 'px'});
		$('.arrow').show();
	}else{
		$('.downArrowBox').height(200);
		$('.arrow').hide();
		$('.arrow').css({'top' : '78px'});
	}
	if( scrollObj > 200 ) {
		$('.downArrowBox').height(200 - (scrollObj-200));
		$(".scrollDownTxt").hide();
	}else{
		$('.downArrowBox').height(200);
		$(".scrollDownTxt").show();
	}
	if( scrollObj > 400 ) {
		maNameLeftScroll = (scrollObj - 400) * myNameScrollDivide;
		$(".downArrowBox").removeClass("dispInline");
		$(".myname").addClass("dispInline");
		$(".nameBg").css("left", l + maNameLeftScroll);
	}else{
		$(".downArrowBox").addClass("dispInline");
		$(".myname").removeClass("dispInline");
	}
	if( scrollObj > 1600 ) {
		var abtMeLabelScal = scrollObj - 1600;
		$(".myname").removeClass("dispInline");
		$(".abtMeLabel").addClass("dispInline");
		$(".abtMeLabel").width(abtMeLabelScal);
		$(".abtMeLabel").height(abtMeLabelScal);
	}else{
		$(".abtMeLabel").removeClass("dispInline");
		$(".abtMeLabel").width(0);
		$(".abtMeLabel").height(0);
	}
	if( scrollObj > 1900 ) {
		$(".abtMeLabel").css("opacity", 1-((scrollObj -1900)*0.01));
	}else{
		$(".abtMeLabel").css("opacity", 1);
	}
	if( scrollObj > 2000 ) {
		var abtMeDataScal = (scrollObj - 2000) * 1.5;
		$(".abtMeLabel").removeClass("dispInline");
		$(".abtMeDataBox").addClass("dispInline");
		$(".abtMeData").height(abtMeDataScal);
		$(".abtMeDataNav,.abtMeDataNavv").width(abtMeDataScal);
		$(".abtMeDataNavDetails").css({ left:0, top:0 });
	}else{
		$(".abtMeDataBox").removeClass("dispInline");
	}
	if(scrollObj > 2200 ){
		var abtMeDataNavvRotate = (scrollObj - 2200)/2;
		var abtMeDataNavDetailsWidHig = (scrollObj - 2200) * (60/360);		
		var abtMeDataNavDetails = (scrollObj - 2200)*(260/720);
		$(".abtMeDataNavv").transition({ rotate: abtMeDataNavvRotate+'deg' },0);
		$(".abtMeDataNavDetails").width(abtMeDataNavDetailsWidHig);
		$(".abtMeDataNavDetails").height(abtMeDataNavDetailsWidHig);		
		$(".abtMeDataNavDetails").css('left', abtMeDataNavDetails+"px");
		if(scrollObj > 2560 ){
			var abtMeDataNavDetailsHigWid = 60 - ((scrollObj - 2560)*(50/360));
			$(".abtMeDataNavDetails").width(abtMeDataNavDetailsHigWid);
			$(".abtMeDataNavDetails").height(abtMeDataNavDetailsHigWid);
		}
	}else{
		$(".abtMeDataNavv").transition({ rotate: '0deg' },0);
		$(".abtMeDataNavDetails").css({left:"0px" , height:"0px", width:"0px"});
	}
	if(scrollObj > 2920 ){
		$(".abtMeDataNavDetails").addClass("abtMeDataNavDetailsMap");
		var abtMeDataNavvRotate = (scrollObj - 2920)/2;
		var abtMeDataNavDetailsWidHig = (scrollObj - 2920) * (60/360);		
		var abtMeDataNavDetails = (scrollObj - 2920)*(260/720);
		$(".abtMeDataNavv").transition({ rotate: abtMeDataNavvRotate+'deg' },0);
		$(".abtMeDataNavDetailsMap").width(abtMeDataNavDetailsWidHig);
		$(".abtMeDataNavDetailsMap").height(abtMeDataNavDetailsWidHig);		
		$(".abtMeDataNavDetailsMap").css('left', abtMeDataNavDetails+"px");
		if(scrollObj > 3280 ){
			var abtMeDataNavDetailsHigWid = 60 - ((scrollObj - 3280)*(50/360));
			$(".abtMeDataNavDetailsMap").width(abtMeDataNavDetailsHigWid);
			$(".abtMeDataNavDetailsMap").height(abtMeDataNavDetailsHigWid);
		}
	}else{
		$(".abtMeDataNavDetails").removeClass("abtMeDataNavDetailsMap");
	}
	if(scrollObj > 3640 ){
		$(".abtMeDataNavDetails").addClass("abtMeDataNavDetailsChat");
		var abtMeDataNavvRotate = (scrollObj - 3640)/2;
		var abtMeDataNavDetailsWidHig = (scrollObj - 3640) * (60/360);		
		var abtMeDataNavDetails = (scrollObj - 3640)*(260/720);
		$(".abtMeDataNavv").transition({ rotate: abtMeDataNavvRotate+'deg' },0);
		$(".abtMeDataNavDetailsMap").width(abtMeDataNavDetailsWidHig);
		$(".abtMeDataNavDetailsMap").height(abtMeDataNavDetailsWidHig);		
		$(".abtMeDataNavDetailsMap").css('left', abtMeDataNavDetails+"px");
		if(scrollObj > 4000 ){
			var abtMeDataNavDetailsHigWid = 60 - ((scrollObj - 4000)*(50/360));
			$(".abtMeDataNavDetailsMap").width(abtMeDataNavDetailsHigWid);
			$(".abtMeDataNavDetailsMap").height(abtMeDataNavDetailsHigWid);
		}
	}else{
		$(".abtMeDataNavDetails").removeClass("abtMeDataNavDetailsChat");
	}
});