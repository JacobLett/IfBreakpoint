// Create global variables that can be used elsewhere

// set variables
var xs;
var sm;
var md;
var lg;
var xl;
var breakpoint;

// Checks if the span is set to display lock via CSS
function checkIfBlock (target) {
    var target = $(target).css('display') == 'block';
    return target;
}

// function to check the sizes
function checkSize (){
  // Set some variables to use with the if checks below

xs = checkIfBlock('.breakpoint-check .visible-xs-block');
sm = checkIfBlock('.breakpoint-check .visible-sm-block');
md = checkIfBlock('.breakpoint-check .visible-md-block');
lg = checkIfBlock('.breakpoint-check .visible-lg-block');


// add the breakpoint to the console
console.clear();
if( xs == true) {
	breakpoint = "xs - <480px";
	console.log(breakpoint);
	$("body").removeClass('xs sm md lg').addClass( "xs" );
}

if( sm == true) {
		breakpoint = "sm - ≥768px";
	console.log(breakpoint);
	$("body").removeClass('xs sm md lg').addClass( "sm" );
}

if( md == true) {
		breakpoint = "md - ≥992px";
	console.log(breakpoint);
	$("body").removeClass('xs sm md lg').addClass( "md" );
}

if( lg == true) {
		breakpoint = "lg - ≥1200px";
	console.log(breakpoint);
	$("body").removeClass('xs sm md lg').addClass( "lg" );
}

}
// end check size



$(document).ready(function(){
 	// Add some invisible elements with Bootstrap CSS visibile utility classes
	$( "body" ).append( "<div style='visibility:hidden;' class='breakpoint-check'><span class='visible-xs-block'></span><span class='visible-sm-block'></span><span class='visible-md-block'></span><span class='visible-lg-block'></span></div>" );
	checkSize();
});


// Reload demo on  window resize
$( window ).resize( function(){
	checkSize();
});
