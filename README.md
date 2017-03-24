# Bootstrap-4-Media-Query-JavaScript
Detect Bootstrap 4 breakpoints to run conditional scripts and functions

// Now check if the media query is enabled then add a unique class to the body tag

// Are you extra-small?
if ( mediaQueryXs == true ) {
  $("body").toggleClass( "media-query-xs" );
  $("h2").text( "media-query-xs" );
}

// Are you small?
if ( mediaQuerySm == true ) {
        $("body").toggleClass( "media-query-sm" );
   $("h2").text( "media-query-sm" );
}

// Are you medium?
if ( mediaQueryMd == true ) {
        $("body").toggleClass( "media-query-md" );
   $("h2").text( "media-query-md" );
}

// Are you large?
if ( mediaQueryLg == true ) {
        $("body").toggleClass( "media-query-lg" );
   $("h2").text( "media-query-lg" );
} 
  
// Are you extra large?
if ( mediaQueryXl == true ) {
        $("body").toggleClass( "media-query-xl" );
   $("h2").text( "media-query-xl" );
}  
