$(document).ready(function() {

	//$('body,html').attr('oncontextmenu' , 'return false');
$('body,html').attr('onselectstart', 'return false');
$('body,html').attr('ondragstart', 'return false');
$('.sales').attr('href', 'mailto:sales@siampay.com');
$('.sales').html('sales@siampay.com');
$('.telno').html('+66 2 642 3272');
$('.address').html('เลขที่ 121/49 ชั้น 11 อาคาร อาร์ เอส ทาวเวอร์ ถนนรัชดาภิเษก แขวงดินแดง เขตดินแดง กรุงเทพมหานคร 10400');

$('#v1').html('<source src="images/header.jpg" type="image/jpg"/><em>Sorry, your browser does not support HTML5 video.</em>');
/*
$('#v1').html('<source src="media/bg-pesopay.mp4" type="video/mp4"/><em>Sorry, your browser does not support HTML5 video.</em>');
 */
$('.cryear').html('2020 SIAMPAY.COM. ALL RIGHTS RESERVED');
$('.country').html('SiamPay');
$('.about-f').html('<p> บริษัท เอเชียเพย์(ประเทศไทย)จำกัด เป็นบริษัทในเครือเอเชียเพย์กรุ๊ป ผู้นำด้านการชำระเงินในเอเชีย ก่อตั้งขึ้นในปี พ.ศ.2549 โดยมีวัตถุประสงค์ที่จะนำเสนอบริการด้านการชำระเงินทางอิเล็กทรอนิกส์ ที่มีความล้ำหน้า และความปลอดภัยสูง โดยมีการเชื่อมต่อระบบเพื่อสนองความต้องการของธุรกิจต่างๆในประเทศไทยและภูมิภาคเอเชีย                    </p><p>สยามเพย์ให้บริการด้านต่างๆแก่ลูกค้าหลายประเภท เช่น ระบบรับชำระเงินออนไลน์ อีคอมเมิร์ซ การทำธุรกรรมผ่านบัตรเครดิตออนไลน์ อินเตอร์เนตแบงค์กิ้ง การชำระด้วยเงินสด และอื่นๆอีกมากมาย</p>');
// Navigation Config //
// Menu1 //
$('.mainMenu1').html('Overview');
$('.mainMenu1').attr('href', 'overview.html');
$('.mainMenu1').addClass('main-menu');
$('.mainMenu1').addClass('hide');
// Menu2 //
$('.mainMenu2').html('Features');
// $('.mainMenu2').attr('href', 'features.php');
$('.mainMenu2').addClass('main-menu');
// Menu3 //
$('.mainMenu3').html('ผลิตภัณฑ์');
$('.mainMenu3').addClass('main-menu');
// Menu3 Sub //
$('.m3title1').html('ชำระเงินด้วยบัตร');
$('.m3title1sub1').html('บริการชำระเงินด้วยบัตรเครดิต');
$('.m3title1sub1').attr('href', 'credit-card-processing.html');
$('.m3title2').html('บริการชำระเงินรูปแบบอื่นๆ');
$('.m3title2sub1').html('อินเตอร์เนตแบงค์กิ้ง');
$('.m3title2sub1').attr('href', 'internet-banking.html');/*
$('.m3title2sub2').html('Over-the-Counter Payments');
$('.m3title2sub2').attr('href', 'over-the-counter-cash-payments.html');*/
$('.m3title2sub3').html('บริการชำระเงินจากประเทศจีน');
$('.m3title2sub3').attr('href', 'china-payments.html');/*
$('.m3title2sub4').html('PayPal');
$('.m3title2sub4').attr('href', 'paypal.html');*/
$('.sub3').addClass('hide');
$('.m3title3').html('Merchant Solutions');
$('.m3title3sub1').html('Startups');
$('.m3title3sub1').attr('href', 'startups.html');
$('.m3title3sub2').html('Small & Medium Business');
$('.m3title3sub2').attr('href', 'small-and-medium-business.html');
$('.m3title3sub3').html('Large Enterprises');
$('.m3title3sub3').attr('href', 'large-enterprises.html');

$('.m3title4').html('Value-Added Services');/*
$('.m3title4sub1').html('Mobile Point-of-Sale');
$('.m3title4sub1').attr('href', 'mobile-point-of-sale.html');*/
$('.m3title4sub2').html('Tokenization');
$('.m3title4sub2').attr('href', 'tokenization.html');
$('.m3title4sub3').html('บริการกำหนดระยะเวลาการชำระเงิน');
$('.m3title4sub3').attr('href', 'recurring-payment.html');
$('.m3title4sub4').html('ระบบจองที่พักโรงแรม');
$('.m3title4sub4').attr('href', 'hotel-reservation-system.html');
$('.m3title4sub5').html('ระบบลงทะเบียนออนไลน์');
$('.m3title4sub5').attr('href', 'online-registration-system.html');
$('.m3title4sub6').html('Event Management System');
$('.m3title4sub6').attr('href', 'event-management-system.html');
$('.m3title4sub7').html('คูปองแบบอิเล็กทรอนิกส์');
$('.m3title4sub7').attr('href', 'evoucher.html');
$('.m3title4sub8').html('ระบบปรับแต่งหน้าชำระเงิน');
$('.m3title4sub8').attr('href', 'customized-payment-page.html');
$('.m3title4sub9').html('Credit Card Promotion');
$('.m3title4sub9').attr('href', 'credit-card-promotion.html');
$('.sub5').addClass('hide');
$('.m3title5').addClass('hide');
$('.m3title5').html('Industry Solutions');
$('.m3title5sub1').html('Retail');
$('.m3title5sub1').attr('href', 'retail.html');
$('.m3title5sub2').html('Direct Selling');
$('.m3title5sub2').attr('href', 'direct-selling.html');
$('.m3title5sub3').html('Business Process Outsourcing');
$('.m3title5sub3').attr('href', 'business-process-outsourcing.html');
$('.m3title5sub4').html('Real Estate');
$('.m3title5sub4').attr('href', 'real-estate.html');
$('.m3title5sub5').html('Events');
$('.m3title5sub5').attr('href', 'events.html');
$('.m3title5sub6').html('Travel & Transportation');
$('.m3title5sub6').attr('href', 'travel-and-trasportation.html');
$('.m3title5sub7').html('Hospitality');
$('.m3title5sub7').attr('href', 'hospitality.html');
$('.m3title5sub8').html('Financial Services');
$('.m3title5sub8').attr('href', 'financial-services.html');
$('.m3title5sub9').html('Food & Beverages');
$('.m3title5sub9').attr('href', 'food-and-beverages.html');
$('.m3title5sub10').html('Utilities');
$('.m3title5sub10').attr('href', 'utilities.html');
$('.m3title5sub11').html('Non Profit Organizations');
$('.m3title5sub11').attr('href', 'non-profit-organizations.html');
$('.m3title5sub11').addClass('hide');
$('.m3title5sub12').html('Membership And Associations');
$('.m3title5sub12').attr('href', 'membership-and-associations.html');
$('.m3title5sub12').addClass('hide');
$('.m3title5sub13').html('Media & Entertainment');
$('.m3title5sub13').attr('href', 'media-and-entertainment.html');
// Menu4 //
$('.mainMenu4').html('Plans');
$('.mainMenu4').attr('href', 'plans.html');
$('.mainMenu4').addClass('main-menu');
$('.mainMenu4').addClass('hide');
// Menu5 //
$('.mainMenu5').html('Referral Program');
$('.mainMenu5').attr('href', 'merchant-referral-partnership-program.html');
$('.mainMenu5').addClass('main-menu');
$('.mainMenu5').addClass('hide');
// Menu6 //
$('.mainMenu6').html('ดาวน์โหลด');
$('.mainMenu6').addClass('main-menu');
// Menu6 Sub //
/*
$('.mainMenu6sub1 span').html('โบรชัวร์ผลิตภัณฑ์');
$('.mainMenu6sub1').attr('href', 'product-sheets.html');*/
$('.mainMenu6sub2 span').html('Shopping Cart Plugins');
$('.mainMenu6sub2').attr('href', 'shopping-cart-plugins.html');
// Menu7 //
$('.mainMenu7').html('เกี่ยวกับเรา');
$('.mainMenu7').addClass('main-menu');
// Menu7 Sub //
$('.mainMenu7sub1 span').html('Company Profile');
$('.mainMenu7sub1').attr('href', 'about-us.html');
$('.mainMenu7sub2 span').html('Client Portfolio');
$('.mainMenu7sub2').attr('href', '#');
$('.mainMenu7sub3 span').html('Frequently Asked Questions');
$('.mainMenu7sub3').attr('href', 'frequently-asked-questions.html');
$('.mainMenu7sub4 span').html('Contact Us');
$('.mainMenu7sub4').attr('href', 'contact-us.html');
$('.mainMenu7sub5 span').html('Press Room');
$('.mainMenu7sub5').attr('href', 'press-room.html');


});


/** ScrollToPlugin.min.js **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var t=document.documentElement,e=window,i=function(i,s){var r="x"===s?"Width":"Height",n="scroll"+r,a="client"+r,o=document.body;return i===e||i===t||i===o?Math.max(t[n],o[n])-(e["inner"+r]||Math.max(t[a],o[a])):i[n]-i["offset"+r]},s=_gsScope._gsDefine.plugin({propName:"scrollTo",API:2,version:"1.7.4",init:function(t,s,r){return this._wdw=t===e,this._target=t,this._tween=r,"object"!=typeof s&&(s={y:s}),this.vars=s,this._autoKill=s.autoKill!==!1,this.x=this.xPrev=this.getX(),this.y=this.yPrev=this.getY(),null!=s.x?(this._addTween(this,"x",this.x,"max"===s.x?i(t,"x"):s.x,"scrollTo_x",!0),this._overwriteProps.push("scrollTo_x")):this.skipX=!0,null!=s.y?(this._addTween(this,"y",this.y,"max"===s.y?i(t,"y"):s.y,"scrollTo_y",!0),this._overwriteProps.push("scrollTo_y")):this.skipY=!0,!0},set:function(t){this._super.setRatio.call(this,t);var s=this._wdw||!this.skipX?this.getX():this.xPrev,r=this._wdw||!this.skipY?this.getY():this.yPrev,n=r-this.yPrev,a=s-this.xPrev;this._autoKill&&(!this.skipX&&(a>7||-7>a)&&i(this._target,"x")>s&&(this.skipX=!0),!this.skipY&&(n>7||-7>n)&&i(this._target,"y")>r&&(this.skipY=!0),this.skipX&&this.skipY&&(this._tween.kill(),this.vars.onAutoKill&&this.vars.onAutoKill.apply(this.vars.onAutoKillScope||this._tween,this.vars.onAutoKillParams||[]))),this._wdw?e.scrollTo(this.skipX?s:this.x,this.skipY?r:this.y):(this.skipY||(this._target.scrollTop=this.y),this.skipX||(this._target.scrollLeft=this.x)),this.xPrev=this.x,this.yPrev=this.y}}),r=s.prototype;s.max=i,r.getX=function(){return this._wdw?null!=e.pageXOffset?e.pageXOffset:null!=t.scrollLeft?t.scrollLeft:document.body.scrollLeft:this._target.scrollLeft},r.getY=function(){return this._wdw?null!=e.pageYOffset?e.pageYOffset:null!=t.scrollTop?t.scrollTop:document.body.scrollTop:this._target.scrollTop},r._kill=function(t){return t.scrollTo_x&&(this.skipX=!0),t.scrollTo_y&&(this.skipY=!0),this._super._kill.call(this,t)}}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();


/** ScrollToPlugin.min.js **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var t=document.documentElement,e=window,i=function(i,s){var r="x"===s?"Width":"Height",n="scroll"+r,a="client"+r,o=document.body;return i===e||i===t||i===o?Math.max(t[n],o[n])-(e["inner"+r]||Math.max(t[a],o[a])):i[n]-i["offset"+r]},s=_gsScope._gsDefine.plugin({propName:"scrollTo",API:2,version:"1.7.4",init:function(t,s,r){return this._wdw=t===e,this._target=t,this._tween=r,"object"!=typeof s&&(s={y:s}),this.vars=s,this._autoKill=s.autoKill!==!1,this.x=this.xPrev=this.getX(),this.y=this.yPrev=this.getY(),null!=s.x?(this._addTween(this,"x",this.x,"max"===s.x?i(t,"x"):s.x,"scrollTo_x",!0),this._overwriteProps.push("scrollTo_x")):this.skipX=!0,null!=s.y?(this._addTween(this,"y",this.y,"max"===s.y?i(t,"y"):s.y,"scrollTo_y",!0),this._overwriteProps.push("scrollTo_y")):this.skipY=!0,!0},set:function(t){this._super.setRatio.call(this,t);var s=this._wdw||!this.skipX?this.getX():this.xPrev,r=this._wdw||!this.skipY?this.getY():this.yPrev,n=r-this.yPrev,a=s-this.xPrev;this._autoKill&&(!this.skipX&&(a>7||-7>a)&&i(this._target,"x")>s&&(this.skipX=!0),!this.skipY&&(n>7||-7>n)&&i(this._target,"y")>r&&(this.skipY=!0),this.skipX&&this.skipY&&(this._tween.kill(),this.vars.onAutoKill&&this.vars.onAutoKill.apply(this.vars.onAutoKillScope||this._tween,this.vars.onAutoKillParams||[]))),this._wdw?e.scrollTo(this.skipX?s:this.x,this.skipY?r:this.y):(this.skipY||(this._target.scrollTop=this.y),this.skipX||(this._target.scrollLeft=this.x)),this.xPrev=this.x,this.yPrev=this.y}}),r=s.prototype;s.max=i,r.getX=function(){return this._wdw?null!=e.pageXOffset?e.pageXOffset:null!=t.scrollLeft?t.scrollLeft:document.body.scrollLeft:this._target.scrollLeft},r.getY=function(){return this._wdw?null!=e.pageYOffset?e.pageYOffset:null!=t.scrollTop?t.scrollTop:document.body.scrollTop:this._target.scrollTop},r._kill=function(t){return t.scrollTo_x&&(this.skipX=!0),t.scrollTo_y&&(this.skipY=!0),this._super._kill.call(this,t)}}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();
