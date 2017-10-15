$(document).ready(function(){

toggle_nav_container();
gotoByScroll();


});



var toggle_nav_container = function () {



	var 	$toggleButton = $('#toggle_m_nav');
			$navContainer = $('#m_nav_container');
			$menuButton = $('#m_nav_menu')
			$menuButtonBars = $('.m_nav_ham');
			$wrapper = $('#wrapper');

	// toggle the container on click of button (can be remapped to $menuButton)

	$toggleButton.on("click", function(){

		// declare a local variable for the window width
		var $viewportWidth = $(window).width();

		// if statement to determine whether the nav container is already toggled or not

		if($navContainer.is(':hidden'))
		{	
			$wrapper.removeClass('closed_wrapper');
			$wrapper.addClass("open_wrapper");
			$navContainer.slideDown(200).addClass('container_open').css("z-index", "2");
			// $(window).scrollTop(0);
			$menuButtonBars.removeClass('button_closed');
			$menuButtonBars.addClass('button_open');
			$("#m_ham_1").addClass("m_nav_ham_1_open");
			$("#m_ham_2").addClass("m_nav_ham_2_open");
			$("#m_ham_3").addClass("m_nav_ham_3_open");

		}
		else
		{
			$navContainer.css("z-index", "0").removeClass('container_open').slideUp(200)
			$menuButtonBars.removeClass('button_open')
			$menuButtonBars.addClass('button_closed')
			$wrapper.removeClass('open_wrapper')
			$wrapper.addClass("closed_wrapper")
			$("#m_ham_1").removeClass("m_nav_ham_1_open");
			$("#m_ham_2").removeClass("m_nav_ham_2_open");
			$("#m_ham_3").removeClass("m_nav_ham_3_open");

		}
	});



}



// Function that takes the href value of links in the navbar and then scrolls 
//the div on the page whose ID matches said value. This only works if you use 
//a consistent naming scheme for the navbar anchors and div IDs

var gotoByScroll = function (){

	$(".m_nav_item a").on("click", function(e) {

		e.preventDefault();
		// var $divID =$(this).attr("href");
		// var $scrollToDiv = "$(" + "'" + $divID + "'" +")";
		
		$('html,body').animate({
   scrollTop: $($(this).attr("href")).offset().top - 50
}, "slow");

	});
		



}

var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff }";
        document.body.appendChild(css);
    };








