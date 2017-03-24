$(document).ready(function() {
 // executes when HTML-Document is loaded and DOM is ready

 // Add some invisible elements with Bootstrap CSS visibile utility classes
$( "body" ).append( "<div style='display:none;' class='viewport-check'><span class='d-block'></span><span class='d-sm-block'></span><span class='d-md-block'></span><span class='d-lg-block'></span><span class='d-xl-block'></span></div>" );

// Checks if the span is set to display blcok via CSS
function checkIfBlock (target) {
    var target = $(target).css('display') == 'block';
    return target;
}
  
function checkSize (){
  // Set some variables to use with the if checks below
var mediaQueryXs = checkIfBlock('.viewport-check .d-block');
var mediaQuerySm = checkIfBlock('.viewport-check .d-sm-block');
var mediaQueryMd = checkIfBlock('.viewport-check .d-md-block');
var mediaQueryLg = checkIfBlock('.viewport-check .d-lg-block');
var mediaQueryXl = checkIfBlock('.viewport-check .d-xl-block');

// Debug
//console.log("extra small " + mediaQueryXs);
//console.log("small " + mediaQuerySm);
//console.log("medium " + mediaQueryMd);
//console.log("large " + mediaQueryLg);
//console.log("extra large " + mediaQueryLg);

// Reload demo on  window resize
$( window ).resize( function(){

checkSize();

}); 

// Load detection script
checkSize();    
//
  
  
// document ready  
});

