$(document).ready(function() {
 // executes when HTML-Document is loaded and DOM is ready

 // Add some invisible elements with Bootstrap CSS visibile utility classes
$( "body" ).append( "<div style='display:none;' class='viewport-check'><span class='d-block d-sm-inline'></span><span class='d-sm-block'></span><span class='d-md-block'></span><span class='d-lg-block'></span><span class='d-xl-block'></span></div>" );

// Checks if the span is set to display lock via CSS
function checkIfBlock (target) {
    var target = $(target).css('display') == 'block';
    return target;
}
  


function checkSize (){
  // Set some variables to use with the if checks below
xs = checkIfBlock('.viewport-check .d-block');
sm = checkIfBlock('.viewport-check .d-sm-block');
md = checkIfBlock('.viewport-check .d-md-block');
lg = checkIfBlock('.viewport-check .d-lg-block');
xl = checkIfBlock('.viewport-check .d-xl-block');
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
console.clear();



} 
// end check size






// Load detection script
checkSize();    

// Reload demo on  window resize
$( window ).resize( function(){
	
	checkSize();
}); 
  
  
// document ready  
}); 

