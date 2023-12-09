 jQuery(document).ready(function($) {

/*----------------------------------------------------*/
/* FitText Settings
------------------------------------------------------ */

    setTimeout(function() {
	   $('h1.responsive-headline').fitText(1, { minFontSize: '40px', maxFontSize: '90px' });
	 }, 100);


/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */

   $('.smoothscroll').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing', function () {
	        window.location.hash = target;
	    });
	});
 });

/*----------------------------------------------------*/
/*	Read More Function
------------------------------------------------------*/

function showMoreText(x) {
	var dots = document.getElementById("dots_" + x);
  	var moreText = document.getElementById("more_" + x);
  	var btnText = document.getElementById("readMoreBtn_"+ x);

  	if (dots.style.display === "none") {
   		dots.style.display = "inline";
   		btnText.innerHTML = "Read more";
    	moreText.style.display = "none";
  	} 
	else {
    	dots.style.display = "none";
    	btnText.innerHTML = "Read less";
    	moreText.style.display = "inline";
  	}
}