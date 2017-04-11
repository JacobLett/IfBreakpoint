# If Bootstrap 4 Breakpoint do something
Detect Bootstrap 4 breakpoints to run conditional scripts and functions

`<script src='https://cdn.rawgit.com/JacobLett/IfBreakpoint/6f216d75/ifbreakpoint.min.js'></script>`

### Are you extra-small?
`// update onload
$("h2").text( breakpoint ); 

  if ( xs == true ) { 
    alert("mobile first");
  }

  // Update on window resize
  $( window ).resize( function(){
    $("h2").text( breakpoint ); 
  }); 

});`
