


/*	PRELOADING
============================================================
	You can preload files
============================================================
*/
	<link rel="preload" src="path/img.jpg" 	/>




/* 	ZenCoding :: Emmet
============================================================
	Uses CSS Syntax to write HTML
	Makes creating framework elegant and efficient
============================================================
*/
	div > p 						// CHILD
	p + blockquote 					// Sibling

	h1#header 						// ID 				<h1 id="header">
	h2.title 						// Class 			<h2 class="title">
	p.red.blue 						// 					<p class="red blue">
	p[title=Hello] 					// Attributes 		<p title="Hello">
	a{Click Me} 					// Text 			<a>Click Me</a>

	.title 							// Implicit 		div.title
	ul>.red 						// 					<ul><li class="red"
	strong>.name 					// 					<strong><span class="name">

	p*3 							// Repitition
	dl>(dt+dd)*3 					// Grouping
	div+div>p>span^blockquote 		// Climb up (out) of Nesting

	ul>li.item$*5 					// Numbering 	<li class="item1">
	h$[title=item$]{Header $$}*3 	// 				<h1 title="item1">Header 01</h1>
	ul>li.item$@-*5 				// Count Down 	<li class="item5"> ... item4 ... item 3...




/* 	HTML5 CONTAINER STRUCTURE
================================================================================
================================================================================
*/
	html 		lang=en|fr|sp
	head
				meta 			// charset:utf-8
				meta 			// http-equiv:refresh, url:redirect.html, content:3(sec)
	body 		onload
				noscript 		// Please enable Javascript
				script 			// Run Javascript

	div 						// No semantic Meaning 	--> 	Used for appearance, not structure.

	header 						// Starting section of an article or page
	nav 						// Navigation
	main 						// Primary location for your content
		section 				// A purposeful division or sub region ... more semantic than DIV
		article 				// A self contained story or article on your site
		aside 					// Supplementary material to the article
	footer 						// Closing material



/* 	HTML5 CONTENT
================================================================================
================================================================================
*/
	Paragraphs:
		H1,p,br 				// Headings, Paragraph, Line break
		blockquote,Cite,q 		// Blockquote, Citation, Quotation marks
		pre, code,samp 			// No Rendering..display exactly, marks it as code or sample
		kbd 					//

	Formatting:
		b,strong,em,i 			// Legacy Html formatting
		small, ins,del 			// small, insert, delete (strikeThrough)

	Special Annotations:
		<abbrv title="abbreviation"/> 		// Abbreviation with Title popup
		<dfn title="appears in popup"/> 	// Definition with Title popup
		sup, sub 							// Superscript, Subscript
		<bdo dir="LTR"/> 					// BiDirectional Output ... Left to Right, Right to Left text
		<ruby><rt>Foo</rt></ruby> 			// Ruby & rubyText ... Furigana Pronunciation Guides

	Navigation:
		a[href] 						// Hyperlink (Anchor)
			hover,active,visited 		// States => a:hover, a:active
		a[name|ID], a#name 				// Anchor reference to an ID|name

	MEDIA:
		img src alt, title				// load image with location, Alt+Title...Screen Readers use
			imagemap 					// Coordinates for anchor over image
		Figure
		Figure-caption 					// Image and text description

		object  						// embed media ... JavaApp,mp3,PNG,SVG,text
			data="x.pdf" type="application/pdf" height, width
			param name=autoplay value=true
			param name=controller value=true

		embed 							// Embed application link Flash
			src, pluginspage, type

		Audio,Video							// Embed Audio / Video on the page
			controls autoplay loop preload type
			Not supported message
		iframe 							// Embed other sites or media
			src, width, height, allowfullScreen
		canvas

	LISTS:
		Unordered
		Ordered
		Definition List
			DT, DD 						// Definition Term and Data

	Tables:
		Table
			caption 					// Caption for the Figure
			thead, tfoot, tbody 		// Header Section, Footer Section, main body (comes last)
			tr, th, td 					// Data in Rows & Columns



/* 	HTML FORMS
================================================================================
	Al's Way
		Create a bunch of input elements
		onClick=DoCallback()
	Standard Way
		Form Element : onSubmit=DoCallback()
		input.type=submit
		** This way you can hit enter to submit form.. a user expected behavior
	Retrieve a form field's VALUE
================================================================================
*/
	Form
		ID|name 						// Interchangeable
		action 							// Send data to this file
		method 							// Post: Uploading data
	input
		radio 		value checked required 	// Choose ONE 	Label shares one Name
		checkbox 	ID,value,checked 		// Choose MANY ... different labels
		text 		ID,value,required
		file 								// Upload a file
		hidden 								// Store calculated info
		reset
		submit 								// Send File
		image 		alt,src					// use an image to submit


	Select 			required  				// Label shares one Name
		option
	textarea 		required rows cols

Structure:
	fieldset 							// Logical groupings
		legend 							// Describe the form
	label for 							// Good UX ..click label selects input
	optGroup 		label				// Wrapper for Options



/* 	DOM EVENTS
================================================================================
================================================================================
*/
	WINDOW (body element)(on):
		load | Unload 			// body|element finishes loading or Window Closes
		Error					// body|element has problems while loading
		BeforeUnload 			// Immediately before closing

		Page Show|Hide 			// immediately after body loads / user navigates away

		 Online|Offline 		// browser goes offline mode and back again

		PopState 				// window's history changes

	FORM EVENTS (on):
		Submit | Reset 			// Submit or Clear form
		Select 					// Something selected in an input
		Input|Change 			// User types, enters input, or searches
		Focus|Blur 				// Gets or Loses focus (click elsewhere)
		ContextMenu |search 	// Search or ContextMenu is triggered

	KEYBOARD EVENTS (on):
		Key Down|Press|Up 		// pressing - presses - releases a key

	MOUSE EVENTS (on):
		Click|DblClick
		Mouse 	Down|Up 		// mouse pressed down over an element, or released over element
				Move 			// while moving
				Out|Over 		// Hover over or move off
		Wheel 					// Wheel is scrolled

	DRAG EVENTS (on):
		Drag 					// Element is dragged
			Start|End 			// Started or Stopped Dragging
			Enter|Leave 		// Moves over or leaves a valid drop target
			Over 				// Hovering over a valid drop target
		Drop 					// Script to Run when File is dropped
		Scroll 					// Script to run when scrollbar is moving

	CLIPBOARD (on):
		Cut|Copy|Paste 			// CTL+Copy, CTL+x cut, CTL+v Paste

	MEDIA:




/*  DOM MANIPULATION
================================================================================
	DYNAMICALLY INSERTING HTML ON THE PAGE ==> BASICS

	+ InnerHTML will convert a string into HTML element

	+ Retrieving FORM VALUES:
		Targeting most forms and HTML collections produces a NODELIST
		which is SIMILAR to an array, but NOT AN ARRAY.
		Use Array.from() to convert it to an actual Array.
================================================================================
*/
	var target = document.querySelector('#targetID') 	// CSS Sytnax ... Return ONE
	var target = document.querySelectorAll('input') 	// CSS Syntax ... Return []

	var target = document.getElementById('targetID') 	// Named ID
	var byName = document.getElementsByName() 			// Name attribute of Forms & Inputs


	var list = document.getElementsByTagName('h1') 			// Array of elements
	var byClass = document.getElementsByClassName('red') 	// Array of Classes

	target.innerHTML = "<h1>Hello World</h1>" 			// property.. converts string to html
	target.innerHTML = `<h1>${data}</h1>` 				// insert variables using string templates
	target.innerHTML += `<h2>NewContent</h2>` 			// Use += to Append

	// Click Event
	elem = event.target 		// The element clicked
	parent = elem.parentNode 	// Parent Container
	parent.querySelector('p') 	// Target a Sibling Node
	target.className 			// Class attribute
	target.id 					// ID attribute
	target.style.display 		// Style object


/* 	HTML5 CANVAS
================================================================================
	A scriptable PNG image that replaces FLASH
	Context controls the functions available:
		2d Context 		Most 2D image transformations
		3d Context 		Spacial & Video Effects
================================================================================
*/



/* 	MOBILE FIRST Philosophy
================================================================================
	Making websites look the same across all browsers is a bad habit.
	Theres no reason for it except that we keep saying it.
	We should make the site look the best it can
		for the browser viewing it (Progressive Enhancement)

	First:
		Build Accessible layout without grid
		Strong USEability & Accessability
		No Javascript

	Second:
		Mobile First layout is fallback for ALL browsers
		Fallback for Older browsers (desktop):
		Don't support the latest features...
		By giving them the mobile display, theres less distraction
		so..more useable than the fully supported desktop version.

		Unobtrusive Javascript

	Third:
		Use	@supports to detect Grid Support

	Fourth:
		At appropriate breakpoints, Create a Grid Layout (areas)
		Keep Exploring larger viewport sizes .. create accordingly

		Newer browsers that understand media queries can see this version.

		Optimized for bigger display

		Lots of bells and whistles for great design as features allow

		** NOTE
			Firefox has a GRID INSPECTOR... use it..
			Rachel Andrews: Grid by Example website
			Mozilla Developer Network
			CSS Tricks
			Wordpress Kuhn theme ... Morten-Rand Hendrickson

	SUPPORT (Feature Queries)
	--------------------------------------------------------------------
	Similar to Media Query
		Allows you to test for a feature..then run the code
		Can provide Workarounds
================================================================================
*/
	@supports( display:grid ){
		IMPORT GRID-LAYOUT
	}
