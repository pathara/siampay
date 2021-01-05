/** last update : 8 july 2020,16:16 by Pathara.B.**/
(function(){var t,e=function(t,e){return function(){return t.apply(e,arguments)}};t=function(){function t(){}return t.prototype.extend=function(t,e){var i,n;for(i in t)n=t[i],null!=n&&(e[i]=n);return e},t.prototype.isMobile=function(t){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)},t}(),this.WOW=function(){function i(t){null==t&&(t={}),this.scrollCallback=e(this.scrollCallback,this),this.scrollHandler=e(this.scrollHandler,this),this.start=e(this.start,this),this.scrolled=!0,this.config=this.util().extend(t,this.defaults)}return i.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0},i.prototype.init=function(){var t;return this.element=window.document.documentElement,"interactive"===(t=document.readyState)||"complete"===t?this.start():document.addEventListener("DOMContentLoaded",this.start)},i.prototype.start=function(){var t,e,i,n;if(this.boxes=this.element.getElementsByClassName(this.config.boxClass),this.boxes.length){if(this.disabled())return this.resetStyle();for(n=this.boxes,e=0,i=n.length;i>e;e++)t=n[e],this.applyStyle(t,!0);return window.addEventListener("scroll",this.scrollHandler,!1),window.addEventListener("resize",this.scrollHandler,!1),this.interval=setInterval(this.scrollCallback,50)}},i.prototype.stop=function(){return window.removeEventListener("scroll",this.scrollHandler,!1),window.removeEventListener("resize",this.scrollHandler,!1),null!=this.interval?clearInterval(this.interval):void 0},i.prototype.show=function(t){return this.applyStyle(t),t.className=""+t.className+" "+this.config.animateClass},i.prototype.applyStyle=function(t,e){var i,n,o;return n=t.getAttribute("data-wow-duration"),i=t.getAttribute("data-wow-delay"),o=t.getAttribute("data-wow-iteration"),t.setAttribute("style",this.customStyle(e,n,i,o))},i.prototype.resetStyle=function(){var t,e,i,n,o;for(n=this.boxes,o=[],e=0,i=n.length;i>e;e++)t=n[e],o.push(t.setAttribute("style","visibility: visible;"));return o},i.prototype.customStyle=function(t,e,i,n){var o;return o=t?"visibility: hidden; -webkit-animation-name: none; -moz-animation-name: none; animation-name: none;":"visibility: visible;",e&&(o+="-webkit-animation-duration: "+e+"; -moz-animation-duration: "+e+"; animation-duration: "+e+";"),i&&(o+="-webkit-animation-delay: "+i+"; -moz-animation-delay: "+i+"; animation-delay: "+i+";"),n&&(o+="-webkit-animation-iteration-count: "+n+"; -moz-animation-iteration-count: "+n+"; animation-iteration-count: "+n+";"),o},i.prototype.scrollHandler=function(){return this.scrolled=!0},i.prototype.scrollCallback=function(){var t;return this.scrolled&&(this.scrolled=!1,this.boxes=function(){var e,i,n,o;for(n=this.boxes,o=[],e=0,i=n.length;i>e;e++)t=n[e],t&&(this.isVisible(t)?this.show(t):o.push(t));return o}.call(this),!this.boxes.length)?this.stop():void 0},i.prototype.offsetTop=function(t){var e;for(e=t.offsetTop;t=t.offsetParent;)e+=t.offsetTop;return e},i.prototype.isVisible=function(t){var e,i,n,o,s;return i=t.getAttribute("data-wow-offset")||this.config.offset,s=window.pageYOffset,o=s+this.element.clientHeight-i,n=this.offsetTop(t),e=n+t.clientHeight,o>=n&&e>=s},i.prototype.util=function(){return this._util||(this._util=new t)},i.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},i}()}).call(this);

/** typed. js **/
!function(t){"use strict";var s=function(s,e){this.el=t(s),this.options=t.extend({},t.fn.typed.defaults,e),this.isInput=this.el.is("input"),this.attr=this.options.attr,this.showCursor=this.isInput?!1:this.options.showCursor,this.elContent=this.attr?this.el.attr(this.attr):this.el.text(),this.contentType=this.options.contentType,this.typeSpeed=this.options.typeSpeed,this.startDelay=this.options.startDelay,this.backSpeed=this.options.backSpeed,this.backDelay=this.options.backDelay,this.strings=this.options.strings,this.strPos=0,this.arrayPos=0,this.stopNum=0,this.loop=this.options.loop,this.loopCount=this.options.loopCount,this.curLoop=0,this.stop=!1,this.cursorChar=this.options.cursorChar,this.shuffle=this.options.shuffle,this.sequence=[],this.build()};s.prototype={constructor:s,init:function(){var t=this;t.timeout=setTimeout(function(){for(var s=0;s<t.strings.length;++s)t.sequence[s]=s;t.shuffle&&(t.sequence=t.shuffleArray(t.sequence)),t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)},t.startDelay)},build:function(){this.showCursor===!0&&(this.cursor=t('<span class="typed-cursor">'+this.cursorChar+"</span>"),this.el.after(this.cursor)),this.init()},typewrite:function(t,s){if(this.stop!==!0){var e=Math.round(70*Math.random())+this.typeSpeed,o=this;o.timeout=setTimeout(function(){var e=0,r=t.substr(s);if("^"===r.charAt(0)){var i=1;/^\^\d+/.test(r)&&(r=/\d+/.exec(r)[0],i+=r.length,e=parseInt(r)),t=t.substring(0,s)+t.substring(s+i)}if("html"===o.contentType){var n=t.substr(s).charAt(0);if("<"===n||"&"===n){var a="",h="";for(h="<"===n?">":";";t.substr(s).charAt(0)!==h;)a+=t.substr(s).charAt(0),s++;s++,a+=h}}o.timeout=setTimeout(function(){if(s===t.length){if(o.options.onStringTyped(o.arrayPos),o.arrayPos===o.strings.length-1&&(o.options.callback(),o.curLoop++,o.loop===!1||o.curLoop===o.loopCount))return;o.timeout=setTimeout(function(){o.backspace(t,s)},o.backDelay)}else{0===s&&o.options.preStringTyped(o.arrayPos);var e=t.substr(0,s+1);o.attr?o.el.attr(o.attr,e):o.isInput?o.el.val(e):"html"===o.contentType?o.el.html(e):o.el.text(e),s++,o.typewrite(t,s)}},e)},e)}},backspace:function(t,s){if(this.stop!==!0){var e=Math.round(70*Math.random())+this.backSpeed,o=this;o.timeout=setTimeout(function(){if("html"===o.contentType&&">"===t.substr(s).charAt(0)){for(var e="";"<"!==t.substr(s).charAt(0);)e-=t.substr(s).charAt(0),s--;s--,e+="<"}var r=t.substr(0,s);o.attr?o.el.attr(o.attr,r):o.isInput?o.el.val(r):"html"===o.contentType?o.el.html(r):o.el.text(r),s>o.stopNum?(s--,o.backspace(t,s)):s<=o.stopNum&&(o.arrayPos++,o.arrayPos===o.strings.length?(o.arrayPos=0,o.shuffle&&(o.sequence=o.shuffleArray(o.sequence)),o.init()):o.typewrite(o.strings[o.sequence[o.arrayPos]],s))},e)}},shuffleArray:function(t){var s,e,o=t.length;if(o)for(;--o;)e=Math.floor(Math.random()*(o+1)),s=t[e],t[e]=t[o],t[o]=s;return t},reset:function(){var t=this;clearInterval(t.timeout);var s=this.el.attr("id");this.el.after('<span id="'+s+'"/>'),this.el.remove(),"undefined"!=typeof this.cursor&&this.cursor.remove(),t.options.resetCallback()}},t.fn.typed=function(e){return this.each(function(){var o=t(this),r=o.data("typed"),i="object"==typeof e&&e;r||o.data("typed",r=new s(this,i)),"string"==typeof e&&r[e]()})},t.fn.typed.defaults={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],typeSpeed:0,startDelay:0,backSpeed:0,shuffle:!1,backDelay:500,loop:!1,loopCount:!1,showCursor:!0,cursorChar:"|",attr:null,contentType:"html",callback:function(){},preStringTyped:function(){},onStringTyped:function(){},resetCallback:function(){}}}(window.jQuery);

/** slide-panel**/
!function(s){"use strict";function n(s){return new RegExp("(^|\\s+)"+s+"(\\s+|$)")}function a(s,n){var a=e(s,n)?c:t;a(s,n)}var e,t,c;"classList"in document.documentElement?(e=function(s,n){return s.classList.contains(n)},t=function(s,n){s.classList.add(n)},c=function(s,n){s.classList.remove(n)}):(e=function(s,a){return n(a).test(s.className)},t=function(s,n){e(s,n)||(s.className=s.className+" "+n)},c=function(s,a){s.className=s.className.replace(n(a)," ")}),s.classie={hasClass:e,addClass:t,removeClass:c,toggleClass:a,has:e,add:t,remove:c,toggle:a}}(window);

function newTyped() {}

function foo() {
    console.log("Callback")
}

function change(e) {
    "cn" == e[e.selectedIndex].value && window.open("https://www.paydollar.com.cn", "_blank"), "hk" == e[e.selectedIndex].value && window.open("https://www.paydollar.com", "_blank"),
     "in" == e[e.selectedIndex].value && window.open("http://www.paydollar.in", "_blank"), "id" == e[e.selectedIndex].value && window.open("https://www.paydollar.com/eng/index.html", "_blank"), 
     "my" == e[e.selectedIndex].value && window.open("https://www.paydollar.com.my", "_blank"), "sg" == e[e.selectedIndex].value && window.open("https://www.paydollar.com", "_blank"), 
     "th" == e[e.selectedIndex].value && window.open("https://www.siampay.com", "_blank"), "ph" == e[e.selectedIndex].value && window.open("https://www.pesopay.com", "_self"),
      "vn" == e[e.selectedIndex].value && window.open("https://www.paydollar.com.vn", "_blank"), "tw" == e[e.selectedIndex].value && window.open("https://www.paydollar.com", "_blank"),
       "mo" == e[e.selectedIndex].value && window.open("https://www.paydollar.com", "_blank"), 
       "magento_1_8_1_0" == e[e.selectedIndex].value && window.open("https://www.paydollar.com/download/module/MagentoPayDollar_v1.8.1.2.rar", "_blank"),
       "drupal_7_x" == e[e.selectedIndex].value && window.open("https://www.paydollar.com/download/module/Drupal_Commerce_Kickstart-7.x-2.x_with_Setup_Guide.rar", "_blank"), 
       "opencart_1_0" == e[e.selectedIndex].value && window.open("https://www.paydollar.com/download/module/PD%20opencart_v1.5.6.2.zip", "_blank"),
        "magento_2_1" == e[e.selectedIndex].value && window.open("https://www.paydollar.com/download/module/Magento2.x-PayDollarV1.2.6.zip", "_blank"), 
        "opencart_1_5" == e[e.selectedIndex].value && window.open("https://www.paydollar.com/download/module/PD%20opencart_v1.5.6.2.zip", "_blank"),
         "opencart_2_3" == e[e.selectedIndex].value && window.open("https://www.paydollar.com/download/module/PayDollar_opencart2.3.x.zip", "_blank"), 
         "zencart_2_3" == e[e.selectedIndex].value && window.open("https://www.paydollar.com/download/module/ZenCart_PD_CPTB_Module_20121012.zip", "_blank"),
          "oscommerce_2_3" == e[e.selectedIndex].value && window.open("https://www.paydollar.com/download/module/osCommerce%20paydollar%20v2.3.zip", "_blank"), 
          "prestashop_1_5" == e[e.selectedIndex].value && window.open("https://www.paydollar.com/download/module/prestashop_1_5_x_x%2020131025.rar", "_blank"), 
          "litecommerce_2_2" == e[e.selectedIndex].value && window.open("https://www.paydollar.com/download/module/LiteCommerce%202.2.zip", "_blank"),
           "virtuemart_1_x" == e[e.selectedIndex].value && window.open("https://www.paydollar.com/download/module/VirtueMart_PayDollar.zip", "_blank"), 
          "virtuemart_2_x" == e[e.selectedIndex].value && window.open("https://www.paydollar.com/download/module/Joomla-VirtueMart_2.5-2.X.zip", "_blank"),
           "virtuemart_3_x" == e[e.selectedIndex].value && window.open("https://www.paydollar.com/download/module/virtueMart3x.zip", "_blank"), 
          "woocommerce_2_1" == e[e.selectedIndex].value && window.open("https://www.paydollar.com/download/module/wordpress_3_8_1_and_woocommerce_2_1_2.rar", "_blank"), 
          "drupal_2_5" == e[e.selectedIndex].value && window.open("https://www.paydollar.com/download/module/Drupal_Commerce_Kickstart-7.x-2.x_with_Setup_Guide.rar", "_blank"), 
          "instantestore_01" == e[e.selectedIndex].value && window.open("http://www.instantestore.com/", "_blank"), 
          "ubercart_2_x" == e[e.selectedIndex].value && window.open("https://www.paydollar.com/download/module/UberCart%202.X.zip", "_blank")
}
$("select").selectBoxIt({
        showEffect: "fadeIn",
        showEffectSpeed: 400,
        hideEffect: "fadeOut",
        hideEffectSpeed: 400
    }), $(function() {
        var e = $(window),
            o = .8,
            s = 275;
        e.on("mousewheel DOMMouseScroll", function(n) {
            n.preventDefault();
            var a = n.originalEvent.wheelDelta / 120 || -n.originalEvent.detail / 3,
                t = e.scrollTop(),
                l = t - parseInt(a * s);
            TweenMax.to(e, o, {
                scrollTo: {
                    y: l,
                    autoKill: !0
                },
                ease: Power1.easeOut,
                autoKill: !0,
                overwrite: 5
            })
        })
    }), $(function() {
        $("#typed").typed({
            strings: ["Credit Card", "Debit Card", "E-Wallet", "Cash"],
            typeSpeed: 5,
            backDelay: 4e3,
            loop: !0,
            contentType: "html",
            loopCount: !1,
            callback: function() {
                foo()
            },
            resetCallback: function() {
                newTyped()
            }
        }), $(".reset").click(function() {
            $("#typed").typed("reset")
        })
    }),
    function(e) {
        (new WOW).init(), jQuery(window).load(function() {
            jQuery("preloader").delay(100).fadeOut("slow"), jQuery("load").delay(100).fadeOut("slow")
        }), e(function() {
            e(".navbar-nav li a").bind("click", function(o) {
                var s = e(this);
                e("html, body").stop().animate({
                    scrollTop: e(s.attr("#")).offset().top
                }, 1500, "easeInOutExpo"), o.preventDefault()
            }), e("a.page-scroll").bind("click", function(o) {
                var s = e(this);
                e("html, body").stop().animate({
                    scrollTop: e(s.attr("#")).offset().top
                }, 1500, "easeInOutExpo"), o.preventDefault()
            })
        })
    }(jQuery), $(".search_open").click(function() {
        $("#navbar").css("margin-top", "100px"), $(".intro").css("margin-top", "100px"), $(".search_open").css("display", "none")
    }), $(".search_close").click(function() {
        $("#navbar").css("margin-top", "0px"), $(".intro").css("margin-top", "0px"), $(".search_open").css("display", "block")
    }), $(".search-close-btn").click(function() {
        $("#navbar").css("margin-top", "0px"), $(".intro").css("margin-top", "0px"), $(".search_close").css("display", "none"), $(".search_open").css("display", "block")
    }), $(".overlay-services").click(function() {
        $(".overlay-services").fadeToggle("fast"), $("#sub_services").removeClass("dtAni"), $("#sub_services").css("display", "none")
    }), $(".overlay-resources").click(function() {
        $(".overlay-resources").fadeToggle("fast"), $("#sub_resources").removeClass("dtAni"), $("#sub_resources").css("display", "none")
    }), $(".overlay-about").click(function() {
        $(".overlay-about").fadeToggle("fast"), $("#sub_about").removeClass("dtAni"), $("#sub_about").css("display", "none")
    }), $(".services-dt").click(function() {
        $("#sub_services").fadeToggle("fast"), $("#sub_resources").removeClass("dtAni"), $("#sub_about").removeClass("dtAni"), $("#sub_resources").css("display", "none"), $("#sub_about").css("display", "none"), $(".overlay-services").fadeToggle("fast"), $(".overlay-resources").css("display", "none"), $(".overlay-about").css("display", "none")
    }), $(".resources-dt").click(function() {
        $("#sub_resources").fadeToggle("fast"), $("#sub_services").removeClass("dtAni"), $("#sub_about").removeClass("dtAni"), $("#sub_services").css("display", "none"), $("#sub_about").css("display", "none"), $(".overlay-resources").fadeToggle("fast"), $(".overlay-services").css("display", "none"), $(".overlay-about").css("display", "none")
    }), $(".about-dt").click(function() {
        $("#sub_about").fadeToggle("fast"), $("#sub_services").removeClass("dtAni"), $("#sub_resources").removeClass("dtAni"), $("#sub_services").css("display", "none"), $("#sub_resources").css("display", "none"), $(".overlay-about").fadeToggle("fast"), $(".overlay-resources").css("display", "none"), $(".overlay-services").css("display", "none")
    }), $(".mrppCorpMenu").click(function() {
        $(".mrppCorpDesc").fadeIn("slow"), $(".mrppSubNav").fadeIn("slow"), $(".mrppNavMain").fadeOut("slow"), $(".mrppIndiSubMenu .imgbtn").addClass("disable")
    }), $(".mrppIndiMenu").click(function() {
        $(".mrppIndiDesc").fadeIn("slow"), $(".mrppSubNav").fadeIn("slow"), $(".mrppNavMain").fadeOut("slow"), $(".mrppCorpSubMenu .imgbtn").addClass("disable")
    }), $(".mrppCorpSubMenu").click(function() {
        $(".mrppCorpDesc").fadeIn("slow"), $(".mrppIndiDesc").fadeOut("slow"), $(".mrppIndiSubMenu .imgbtn").addClass("disable"), $(".mrppCorpSubMenu .imgbtn").removeClass("disable")
    }), $(".mrppIndiSubMenu").click(function() {
        $(".mrppIndiDesc").fadeIn("slow"), $(".mrppCorpDesc").fadeOut("slow"), $(".mrppCorpSubMenu .imgbtn").addClass("disable"), $(".mrppIndiSubMenu .imgbtn").removeClass("disable")
    }), $(function() {
        var e = document.getElementById("services-md");
        subServices = document.getElementById("sub_services"), resourcesMD = document.getElementById("resources-md"), subResources = document.getElementById("sub_resources"), aboutMD = document.getElementById("about-md"), subAbout = document.getElementById("sub_about"), backServices = document.getElementById("backServices"), backResources = document.getElementById("backResources"), backAbout = document.getElementById("backAbout"), e.onclick = function() {
            classie.toggle(subServices, "mynavAni")
        }, resourcesMD.onclick = function() {
            classie.toggle(subResources, "mynavAni")
        }, aboutMD.onclick = function() {
            classie.toggle(subAbout, "mynavAni")
        }, backServices.onclick = function() {
            $("#sub_services").removeClass("mynavAni")
        }, backResources.onclick = function() {
            $("#sub_resources").removeClass("mynavAni")
        }, backAbout.onclick = function() {
            $("#sub_about").removeClass("mynavAni")
        }
    }), $(function() {}), $(function() {
        document.getElementById("navbar");
        showRightPush = document.getElementById("showRightPush"), showRightPush2 = document.getElementById("showRightPush2"), showRightPush3 = document.getElementById("showRightPush3"), body = document.body, html = document.getElementById("html"), blueOverlay = document.getElementById("blue-overlay"), mynav = document.getElementById("mynav"), showRightPush.onclick = function() {
            classie.toggle(this, "active"), classie.toggle(mynav, "mynavAni"), $(".overflow-slide").css("display", "block"), classie.toggle(body, "of-hidden"), classie.toggle(html, "of-hidden"), $(".navbar").css("display", "block")
        }
    }), $("select").selectBoxIt({
        showEffect: "fadeIn",
        showEffectSpeed: 400,
        hideEffect: "fadeOut",
        hideEffectSpeed: 400
    }), jQuery(document).ready(function() {
        jQuery("img.svg").each(function() {
            var e = jQuery(this),
                o = e.attr("id"),
                s = e.attr("class"),
                n = e.attr("src");
            jQuery.get(n, function(n) {
                var a = jQuery(n).find("svg");
                "undefined" != typeof o && (a = a.attr("id", o)), "undefined" != typeof s && (a = a.attr("class", s + " replaced-svg")), a = a.removeAttr("xmlns:a"), e.replaceWith(a)
            })
        })
    });



/** lightbox **/
eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('$(\'.0\').1(2(){$(\'.0\').b(\'8\')});$(\'.0-q\').1(2(9){9.o()});$(\'.0-r\').1(2(){$(\'.0\').b(\'8\')});$(\'.d a\').7(\'3\',\'4://5.e.6/c/f/l.n?m=j&k=g&h=i\');$(\'.d-t a\').7(\'3\',\'4://5.e.6/c/f/l.n?m=j&k=g&h=i\');$(\'.u\').v(\'p\',\'s\');',32,32,'pesolight|click|function|href|http|www|com|attr|slow|event||fadeOut|campaigns|adside|pesopay|basicplan|banner|utm_campaign|bscplnbannerclicks|website|utm_medium|bsc072216|utm_source|html|stopPropagation|display|content|button|none|inner|m3title5sub3|css'.split('|'),0,{}));


setTimeout(popup, 2000); // Setting time 3s to lightbox popup
function popup() {
$(".pesolight").css("display", "block");
}