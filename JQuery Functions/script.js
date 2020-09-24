$('#clickToHide').click(function (){
    $('#hideParagraph').hide();
});


$( '#showButton' ).click(function() {
    $( '#showText').show( 'slow' );
});
$( '#toggle' ).click(function() {
    $( '.display' ).toggle();
});

$('#clickMe' ).click(function () {
    if ( $('.hello' ).first().is( ":hidden" ) ) {
    $( '.hello' ).slideDown( "slow" );
    } else {
    $( '.hello' ).hide();
    }
});
$( '#slideUp' ).click(function() {
    if ( $('.you' ).first().is( ":hidden" ) ) {
    $( '.you' ).show( "slow" );
    } else {
    $( '.you').slideUp();
    }
});
$( '#2t' ).click(function() {
    $( '#slideToggle' ).slideToggle( "slow" );
});
$('#clickToAddClass').click(function(){
    $('#addClassParagraph').addClass('highlight')
})
$('#clickToBefore').click(function(){
    $('#beforeParagraph').before("you have done it! congrats!")
})
$( '#after' ).after( "<b>You are awesome!</b>" );
$( '#append' ).append( "<strong>Awesome</strong>" );
$( '.repeat' ).html("Again");

var str = $( '#unique' ).first().text();
$( '#unique' ).last().html( str );

$( "input" )
.keyup(function() {
    var value = $( this ).val();
    $( '#enter' ).text( value );
})
.keyup();

$( '#here' ).click(function() {
    $( "div:hidden" ).first().fadeIn( "slow" );
})
$( '#fadeaway' ).click(function() {
    $( '#fadeaway' ).fadeOut( "slow" );
});
var title = $( "em" ).attr( "title" );
$( '#last' ).text( title );