// http://learn.jquery.com/plugins/basic-plugin-creation/

(function( $ ) {
 
    $.fn.ifbreakpoint = function() {
 


 // Add some invisible elements with Bootstrap CSS visibile utility classes
$( "body" ).append( "<div style='display:none;' class='breakpoint-check'><span class='xs d-block d-sm-inline'></span><span class='sm d-sm-block d-md-inline'></span><span class='md d-md-block d-lg-inline'></span><span class='lg d-lg-block d-xl-inline'></span><span class='xl d-xl-block'></span></div>" );

// Checks if the span is set to display lock via CSS
function checkIfBlock (target) {
    var target = $(target).css('display') == 'block';
    return target;
}
  


var xs = checkIfBlock('.breakpoint-check .xs');
var sm = checkIfBlock('.breakpoint-check .sm');
var md = checkIfBlock('.breakpoint-check .md');
var lg = checkIfBlock('.breakpoint-check .lg');
var xl = checkIfBlock('.breakpoint-check .xl');
function checkSize (){
  // Set some variables to use with the if checks below

xs = checkIfBlock('.breakpoint-check .xs');
sm = checkIfBlock('.breakpoint-check .sm');
md = checkIfBlock('.breakpoint-check .md');
lg = checkIfBlock('.breakpoint-check .lg');
xl = checkIfBlock('.breakpoint-check .xl');

console.clear();
if( xs == true) {
	console.log("xs - <576px");
} 

if( sm == true) {
	console.log("sm - ≥576px");
} 

if( md == true) {
	console.log("md - ≥768px");
} 

if( lg == true) {
	console.log("lg - ≥992px");
} 

if( xl == true) {
	console.log("xl - ≥1200px");
} 





} 
// end check size


checkSize();




 
    };
 
}( jQuery ));
 



















// Reload demo on  window resize
$( window ).resize( function(){
	checkSize();
}); 


