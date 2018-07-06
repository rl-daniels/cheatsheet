
/* 		REASONS TO USE JQUERY
============================================================

	+ Browser compatability
		--> minimuize differeces between webkit (safari,chrome), IE

	+ DRY --> Dont repeat yourself

	+ Designed for JS inside DOM ...
		--> Fast & intuitive manipulation of HTML
		--> Not required when using JS on it's own.

	+ To use JQUERY within NODE
		--->  npm install jquery
		--->  $ = require('jquery')

============================================================
*/
$ = require('jquery')




/* 		Special Effects
============================================================
============================================================
*/
	$().fadeOut( speed )
	$().fadeTo( speed, opacity) 		// Opacity then Display
	$().hide( speed ) 					// Display
	$().show( )

	$().slideToggle( speed ) 						// .slideUp(), .slideDown()

	$('div').animate({left:'+=10px'})    			// OBJ direction and amount to add/subtract
	$( target ).effect('explode') 					// jQuery UI
	$( target ).effect('bounce',{times:3},500) 		//

	$('#car').draggable() 							//
	$( parent ).selectable 							// Children become li.ui-selected


/* 		Listener Events
============================================================
============================================================
*/
.hover( =>)
.on('hover', => {})
	click
	dblclick
	mouseenter
	mouseleave
$(document).on('click','.listItem', ==> )
$(document).keydown( key ==> {}) 			// 37<, 38^, 39>, 40v



/* 		SELECTORS
============================================================
============================================================
*/
$('div, p') 					// multiple Elements
$('#foo .bar') 					// ID, Class
$('li:nth-child( 4 )') 			// Element + specific target
$(this) 						// SELF... current target obj


/* 	MANIPULATE
============================================================
	Create & Position HTML
	Adjust Properties
============================================================
*/

$( target ).append( CreatedHTML ) 					// Insert into target after LAST child
$( target ).prepend('<p>Hello</p>') 				// Insert into target as NEW FIRST child

$( target ).before('<div></div>') 					// Insert before target
$( target ).after('<div></div>') 					// Insert after target ... siblings
$( p ).html('Insert message as <strong>html</strong>')
$( p ).text('Insert msg as text')

$( element ).remove() 								// prunes it from DOM tree
$( element ).addClass() 							// append a class... also removeClass

$(target ).css( {'border':'1px solid red'} ) 		// Pass an obj to manipulate more than one CSS at a time
$(target ).width('10px')
$(target ).height('50px') 							// set logical units,  empty: get units

$( FORM INPUT ).val() 								// Retreive value from a form input
