


/* 		CSS GRID SYSTEM
============================================================
	Rachel Andrews: GridbyExample.com
	https://github.com/rachelandrew/cssgrid-ama 	// Ask me Anything


	CSS Grid - 2 Dimensional Layout (Cols & Rows)
	Benefits:
		True 2D layout..no hacks ... better than flex,float,tables
		Tables,Floats,Columns used for their intended purpose instead of layout
		Whitespace...create whitespace by not populating a cell, No pixel shims
		Less Cruft ... 75% markup is layout related..
		Nested Grids lets you work on the Component level
		Cures DIVitis

		Support: All modern Browsers,
			built for ie10 but other browsers changed spec

		MOBILE FIRST:
			Server mobile experience for browsers that dont support Grid

	Terminology:
		Grid Container 			Any Container for Grid (display:grid)
		Grid Item 				Any Direct descendant of Grid
		Grid Line 				Lines..horiz or vert, starts at 1=>n+1, Numbered or Named
		Grid Gap 				Gutters
		Grid Cell 				Smallest Unit between the Lines
		Grid Track 				Space between a Column and Row (a cell or entire row/Column)
		Grid Area 				Grouping of Multiple Cells ... Any 4 lines ... rectangular..No tetris

	Grid Systems can be Defined by:
		Auto Placement:
		Named Lines
		Template Areas
			grid-template-areas:"main header header"
			grid-area: [main]
		Line Numbers
			grid-column (start/end)

	Grid Lines depend on the writing mode of your document.
		LTR: 1,2,3,4,5 	(english)
		RTL: 5,4,3,2,1 	(arabic)

============================================================
*/

	/* 	AUTO PLACEMENT
	============================================================
		Rules:
			Source order Numbering, 1,2,3,4,5
			Explicit:  user define columns & rows
			Implicit:  extra rows get auto sized
	============================================================
	*/
	.cardstack {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px,1fr)); 	// Width
		grid-template-rows: 100px 100px 100px; 		// Height
		grid-gap: 20px;
	}
	.card {
		background-color: silver;
	}

		// Explain
		display:grid			// grid|inlinegrid|subgrid 	- Defines Context: block,inline,nested
		grid-template-columns: 1fr 2fr 1fr 	// Define 3 Relative Widths as fractions.. small big small
												// Mixed sizes: 500px 1fr 2fr
												// Repeated:  repeat(3, 1fr)
												// Fluid:  repeat(auto-fill, minmax(200px,1fr))
		grid-template-rows: 1fr 1fr 2fr 	// Specify Relative proportions of each Row


/* 		GRID AREA
================================================================================
	+ 	We can create NAMED REGIONS inside our grid
		This is SUPER USEFUL

	+ 	Define Named regions in the parent container
		Allows you to shift around content
			that would be difficult in code
	+ 	Use grid-template-areas:
			"title title"
			"main sidebar"
			"footer footer";
================================================================================
*/
	.cardstack {
		display: grid;
		grid-gap: 20px;
		grid-template-columns: repeat(3,1fr);
		grid-template-rows: 100px 100px;
		grid-template-areas:
			"side1 main main"
			"side2 main main";
			// DESCRIBE COLUMNS USING ASCII ART !!!!!

	}
	.card { background-color: gold; padding: 1em; }
	.card.emphasis {
		background-color:wheat;
		grid-area: main; 		// ASSIGN A REGION
	}

	// Explain:
		grid-area: [title]
		grid-area: [header]

			// Individual Grid Item Properties if you need to get specific (You Dont)
			grid-column-start
			grid-column-end 			2 (endpoint), or "span 1"(only one column wide)
			grid-row-start
			grid-row-end

		// New Methods
		repeat(3, 1fr 2fr) 			// same as 1fr 2fr 1fr 2fr 1fr 2fr + Fractions better than %...autoCalculating

	// Named Areas
		grid-template-areas: 	"title title" 						// NAMED REGIONS
								"sidebar content"
								"footer footer";
		grid-template

	// Alignment defined in Parent Container (standardized)
		justify-items 		// Horizontal Align
		align-items 		// Vertical Align
	// Alignment defined in individual Cells
		justify-content
		align-content
	// Alignment dfined on an item itself
		justify-self
		align-self


	// Defaults
		grid-auto-rows 					// Default HEIGHT of a new Row ... minmax(x y | 100px auto)
										// minmax(150px auto) ... cell starts at 150px and will grow to expand content
		grid-auto-columns 				// Default WIDTH of a new column ...
		grid-auto-flow 			// dense... gap in grid? fill in with content that will fit.
		grid




/* 		DEFAULT CSS-GRID
================================================================================
	+ 	Single Digit specifies what column or row to place item in
		Range (Fraction) specifies how column or row can span

		That means we can at will determine the order of our DIVS
================================================================================
*/
	// Setup Parent Container
	display:grid
	// Setup Rows & Columns
	grid-template-columns: 1fr 2fr 1fr 	// Define 3 Relative Widths as fractions.. small big small
	grid-template-rows: 1fr 1fr 2fr 	// Specify Relative Sizes of each Row

	//Setup Cells & Tracts
	grid-column: 1/3; 					// Stretch from gridLine One to Three (Horiz)
	grid-row: 1/3;						// Stretch from gridLine One to Three (VERTICAL)

		// Align Contents
		justify-items 					start,center,end, stretch (default) 	// HORIZ JUSTIFY
		align-items 					start,center,end, stretch (default) 	// VERTICAL ALIGN
		justify-self 					// Same... individual items
		align-self

		// Gutters
		grid-gap 				// Both Row & Column
			grid-column-gap 	// Individual Horiz
			grid-row-gap 		// Individual Vert



/* 	Grid & Accessibility
================================================================================
	IDEAL 	+ Create accesible document with good source order
				for screen readers (Mobile First)
			+ Next use Flexbox to change apparance for
				display purposes..optimal for each device.

	BAD 	- Dont use grid as excuse to strip out semantics
				or make everything a grid or flex item


	Read articles by Léonie Watson,
	The CSS workingGroup's expert consultant on accessibility
		https://vimeo.com/180566024.  Accessibility & Tea
================================================================================
*/


/* 	CSS UNITS
================================================================================
	10px 				Standard...set size 10px
	10% 				Percent of parent container
	1fr 				Fraction of the available space
	auto 				Fit to content
================================================================================
*/


/* 	SPECS
================================================================================

	Flexbox 			https://drafts.csswg.org/css-flexbox/
	Box Alignment 		https://drafts.csswg.org/css-align/
	CSS Grid 			https://drafts.csswg.org/css-grid/

================================================================================
*/



/* 	CSS Variables
================================================================================

	Technically custom properties
	I concider this to be a little week...
	Prefer LESS variables, but its nice not having to compile

================================================================================
*/
:root 	{ 	--color: red; 		}	// Base definition in ROOT
body 	{ 	--color: orange;	}	// Override color definition
h2 		{ 	color: var(--color);}	// Express color using var() method



	// CSS Imports  --------------------------------------------------------
	@import url("example_b.css")
	@import url("example_b.css") handheld and (max-width:400px)
	@import "example_c.css"

	// Tablet
	@media screen and (min-width:720px){
		@import "tablet.css"
	}
	// DESKTOP
	@media screen and (min-width:1080px){
		@import "desktop.css"
	}


/* 		IDEAS
================================================================================
	+ 	SUPER GAY PAGE
		Hue-rotate(-35deg) .. on body element... shifting
		Keyframe animate.... results in dynamic shifting color
		Works best on high-contrast or bnw images
================================================================================
*/
