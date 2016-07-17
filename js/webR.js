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
		$(".abtMeData").height(0);
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
		$(".abtMeData").height(0);
	}
	if(scrollObj > 2200 ){
		var abtMeDataNavvRotate = (scrollObj - 2200)/2;
		var abtMeDataNavDetailsWidHig = (scrollObj - 2200) * (60/360);
		var abtMeDataNavDetails = (scrollObj - 2200)*(260/720);
		$(".abtMeDataNavv").transition({ rotate: abtMeDataNavvRotate+'deg' },0);
		$(".abtMeDataNavDetails").width(abtMeDataNavDetailsWidHig);
		$(".abtMeDataNavDetails").height(abtMeDataNavDetailsWidHig);
		$(".abtMeDataNavDetails").css('left', abtMeDataNavDetails+"px");
		$(".bd").show();
		$(".abtMeBirthDayData").width((scrollObj - 2200)*2);
		$(".abtMeBirthDayData").height((scrollObj - 2200)*2);
		if(scrollObj > 2560 ){
			var abtMeDataNavDetailsHigWid = 60 - ((scrollObj - 2560)*(50/360));
			$(".abtMeDataNavDetails").width(abtMeDataNavDetailsHigWid);
			$(".abtMeDataNavDetails").height(abtMeDataNavDetailsHigWid);
		}
		if(scrollObj > 2700 ){
			$(".abtMeBirthDayData").width(240-(scrollObj - 2700)*2);
			$(".abtMeBirthDayData").height(240-(scrollObj - 2700)*2);
		}
	}else{
		$(".abtMeDataNavv").transition({ rotate: '0deg' },0);
		$(".abtMeDataNavDetails").css({left:"0px" , height:"0px", width:"0px"});
		$(".bd").hide();
		$(".abtMeBirthDayData").width(0);
		$(".abtMeBirthDayData").height(0);
	}
	if(scrollObj > 2920 ){
		$(".bd").hide();
		$(".abtMeDataNavDetails").addClass("abtMeDataNavDetailsMap");
		var abtMeDataNavvRotate = (scrollObj - 2920)/2;
		var abtMeDataNavDetailsWidHig = (scrollObj - 2920) * (60/360);
		var abtMeDataNavDetails = (scrollObj - 2920)*(260/720);
		$(".abtMeDataNavDetailsMap").width(abtMeDataNavDetailsWidHig);
		$(".abtMeDataNavDetailsMap").height(abtMeDataNavDetailsWidHig);
		$(".abtMeDataNavDetailsMap").css('left', abtMeDataNavDetails+"px");
		$(".from").show();
		$(".abtMeBirthDayData").width((scrollObj - 2920)*2);
		$(".abtMeBirthDayData").height((scrollObj - 2920)*2);
		if(scrollObj > 3280 ){
			var abtMeDataNavDetailsHigWid = 60 - ((scrollObj - 3280)*(50/360));
			$(".abtMeDataNavDetailsMap").width(abtMeDataNavDetailsHigWid);
			$(".abtMeDataNavDetailsMap").height(abtMeDataNavDetailsHigWid);
		}
		if(scrollObj > 3400 ){
			$(".abtMeBirthDayData").width(240-(scrollObj - 3400)*2);
			$(".abtMeBirthDayData").height(240-(scrollObj - 3400)*2);
		}
	}else{
		$(".abtMeDataNavDetails").removeClass("abtMeDataNavDetailsMap");
		$(".from").hide();
	}
	if(scrollObj > 3640 ){
		$(".from").hide();
		$(".abtMeDataNavDetails").addClass("abtMeDataNavDetailsChat");
		var abtMeDataNavvRotate = (scrollObj - 3640)/2;
		var abtMeDataNavDetailsWidHig = (scrollObj - 3640) * (60/360);
		var abtMeDataNavDetails = (scrollObj - 3640)*(260/720);
		$(".abtMeDataNavDetailsMap").width(abtMeDataNavDetailsWidHig);
		$(".abtMeDataNavDetailsMap").height(abtMeDataNavDetailsWidHig);
		$(".abtMeDataNavDetailsMap").css('left', abtMeDataNavDetails+"px");
		$(".lan").show();
		$(".abtMeBirthDayData").width((scrollObj - 3640)*2);
		$(".abtMeBirthDayData").height((scrollObj - 3640)*2);
		if(scrollObj > 4000 ){
			var abtMeDataNavDetailsHigWid = 60 - ((scrollObj - 4000)*(50/360));
			$(".abtMeDataNavDetailsMap").width(abtMeDataNavDetailsHigWid);
			$(".abtMeDataNavDetailsMap").height(abtMeDataNavDetailsHigWid);
		}
		if(scrollObj > 4120 ){
			$(".abtMeBirthDayData").width(240-(scrollObj - 4120)*2);
			$(".abtMeBirthDayData").height(240-(scrollObj - 4120)*2);
		}
	}else{
		$(".abtMeDataNavDetails").removeClass("abtMeDataNavDetailsChat");
		$(".lan").hide();
	}
	if(scrollObj > 4360 ){
		$(".lan").hide();
		$(".abtMeDataNavDetails").addClass("abtMeDataNavDetailsLikes");
		var abtMeDataNavvRotate = (scrollObj - 4360)/2;
		var abtMeDataNavDetailsWidHig = (scrollObj - 4360) * (60/360);
		var abtMeDataNavDetails = (scrollObj - 4360)*(260/720);
		$(".abtMeDataNavDetailsMap").width(abtMeDataNavDetailsWidHig);
		$(".abtMeDataNavDetailsMap").height(abtMeDataNavDetailsWidHig);
		$(".abtMeDataNavDetailsMap").css('left', abtMeDataNavDetails+"px");
		$(".hobbies").show();
		$(".abtMeBirthDayData").width((scrollObj - 4360)*2);
		$(".abtMeBirthDayData").height((scrollObj - 4360)*2);
		if(scrollObj > 4720 ){
			var abtMeDataNavDetailsHigWid = 60 - ((scrollObj - 4720)*(50/360));
			$(".abtMeDataNavDetailsMap").width(abtMeDataNavDetailsHigWid);
			$(".abtMeDataNavDetailsMap").height(abtMeDataNavDetailsHigWid);
		}
		if(scrollObj > 4840 ){
			$(".abtMeBirthDayData").width(240-(scrollObj - 4840)*2);
			$(".abtMeBirthDayData").height(240-(scrollObj - 4840)*2);
		}
	}else{
		$(".abtMeDataNavDetails").removeClass("abtMeDataNavDetailsLikes");
		$(".hobbies").hide();
	}
	if(scrollObj > 5080){
///		var abtMeDataNavRotate = (scrollObj - 5080) * (180/120);
		$(".hobbies").hide();
		$(".abtTxt").show();
//		$(".abtMeDataNav").transition({ rotate: abtMeDataNavRotate+'deg' },0);
//		$(".abtMeDataNav").css("top","-15px");
		$(".abtMeBirthDayData").width((scrollObj - 5080)*2);
		$(".abtMeBirthDayData").height((scrollObj - 5080)*2);
	}else{
		$(".abtTxt").hide();
//		$(".abtMeDataNav").transition({ rotate: '0deg' },0);
//		$(".abtMeDataNav").css("top","-30px");
	}
	if(scrollObj > 5200){
//		$(".abtMeDataNav").transition({ rotate: '180deg' },0);
	}
	if(scrollObj > 5400){
		$(".abtMeDataNavv").transition({ rotate: '180deg' },0);
		$(".abtMeBirthDayData").hide();
		$(".abtMeData").height(300-(scrollObj - 5400));
		$(".abtMeData").width(300-(scrollObj - 5400));
		$(".abtMeDataNavv").height(330-(scrollObj - 5400));
		if(scrollObj > 5600){
			$(".abtMeDataNav").height(100-(scrollObj - 5600));
		}else{
			$(".abtMeDataNav").height(100);
		}
	}else{
		$(".abtMeBirthDayData").show();
		$(".abtMeData").width(300);
		$(".abtMeDataNavv").height(330);
		$(".abtMeDataNav").height(100);
	}
});
