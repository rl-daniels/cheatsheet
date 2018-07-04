

/*  PYTHON NOTES
===============================================================
	PRO TIP:: 	Store the python docs locally so you can access it anytime.
	
	* Whitespace (Indenting) matters in python
	* Python doesnt use curlyBraces{}
	* Methods that use DOT NOTATION only work on strings
	* Python is a by reference language... 
		some primitives are stored directly (numbers), but arrays and objects
		are passed by reference.

	* 	Python isnt chained.. doesnt return anything by default.
		You could return 'self' to mimic the same behavior.


... builtin apache server called "apachectl"
	- 	ls /Library/WebServer/Documents/
	-  	sudo apachectl start

	PYTHON 3.0
		print() is a function... lets you seperate other stuff
		Division is floating point... 3/2 ==> 1.5 ...not 1
		5//2 	-->  2   Integer Division (floored)
		5//-2 	--> -3 	 Rounded down from -2.5


	PYTHON SUPER POWERS
	
	+ List Comprehension instead of for loops ... flatter & more readable
	+ Lists  & Strings (Sequences) can be SLICED or REVERSED easily



===============================================================
*/


/*  USE VIRTUAL ENVIRONMENT
===============================================================
	You may need to install version specific software
	This lets you do it.
===============================================================
*/
	source pyvenv/bin/activate 		
	
	PIP 				// package installer for python 


/*	MODULE
===================================================================
	
	Each file is a self contained unit of python code.  
	myfile.py, other.py 		// <script>MYFILE...</script>, <script>OTHER...</script>

	A script can use functions written in another script
	By importing it and giving it a local name.

===================================================================
*/
		__doc__  	// returns the first comment ... usually a description
		__file__ 	// returns the name of the file

		// doesn't include any unnecessary modules.
		import Math, HTTP 					// Python is streamlined  	

		import greet 						// greet.sayHello('Ray')
		import greet as hi 					// hi.sayHello('Ray') 		... ReNamed
		from greet import sayHello as yo 	// Specific & ReNamed


	IMPORT LIBRARIES
		import math,datetime 				// comma seperated list of imports
		
		from math import sqrt 				// get a specific function ....use name directly instead of math.sqrt() ... LOCALIZED
		from numpy import mean 				// mean is sum(N)/len(N) where N=[1,2,3]
		from math import * 					// get ALL math functions... use names directly ... LOCALIZED
		import sine from math   			// alternate syntax
		
		from __future__ import division
		from __future__ import antigravity 	// EasterEgg
		
		// USEFUL LIBRARIES
		import functools 				// ADV:  Partial objects, Reduce, Filter

		import datetime 				// Manipulate DATES
		
		import numpy as np 				// SCI,STATISTICS,MATH library





/*  LANGUAGE FUNDAMENTALS
===============================================================
	Python is closer to FUNCTIONAL PROGRAMMING than javascript
	len( string ) or len( obj )
	But often those functions can work with multiple datatypes
===============================================================
*/
	Destructuring
		a,b = 10,15 		// Destructuring is inherent in the language

	Variables 		
		x = 10			// LOCAL ... No need for VAR,CONST or LET prefix
		GLOBAL x = 10 	// All variables are local to Function unless keyword GLobal is used
		
	Variable Number of Arguments
		// This is also known as the SPLAT operator (spread,rest in javascript)
		// spread elements of an array into arguments array
		// and use arguments as a real array that you can iterate over
		*args 				// foo=[1,2,3] ... Func(*foo) --> Func(1,2,3)
		**kwargs 			// foo={a:'Aye',b:'Bee'} ... Func(**foo) --> Func({a:'Aye',b:'Bee'}) ... "{0},{1}".format(key,value)

	NUMBERS
		"%.2f" % (number) 				// Format number to be 2Decimal precision
		GLOBAL METHODS:
			isinstance(n, numbers.Number)  	// Check for Class
			type(n) == int					// int or float

	Non Dynamic Typing
		// Python does not change types for you the way javascript does.
		// As a result there are keywords like 
		"NOT" // that you use with strings
		!= // 'not equal' used inside expressions

	MATH
		Order Of Operations
			()*/+- /	// pMDAS
			()AND OR 	// ordered logic
		
			+ - / *, % Modulus, ** Power, doubleSlash  / // means floor
		GLOBAL METHODS:
			abs(x)						// Absolute Value, ignore sign
			long(x)						// Convert to 
			int('42')					// 42 		Convert to  Integer Number
			float('42')					// 42.0 	Convert to Decimal Number
			round(x, n-digits)
			len(x)						// Return Length of the sequence 
			min()						// Return smallest value in sequence  
			max()						// Return largest value in sequence
			divmod() 					// Improved Division, returns a//b, a%b tuple
		import math
			math.floor() 		or x//y
			math.ceil()

	Comments
		# 			Single Line Comment
		''' ''' 	Multiline String ...not a comment, "Doc String"
	
	Capture Typing INPUT
		X = raw_input(' msg ')

	OPERATORS			String 				Number
		Equality 		n is "Five" 		n == 5 		// is n equal to 5
		Concatenate		"a"+"b"
		Addition							a+=b 		// Add & Assign
		Subtraction							a-=b 		// Subtract & Assign
		Division 							a/=b 		// Divide & Assign
		Division (Floor) 					a//b
		Multiplication 	"a"*3 							// "aaa"   Repitition
		Multiplication 						a*=b 		
		Modulus 							a%b 		// Remainder from Division

	BOOLEANS 			String 				Number
						'On'				True,1 
						'Off' 				False,0
			'YES' if bool else 'No' 	// Convert Boolean to Yes/No
			['No','Yes'][int(b)] 		// Convert Boolean to Yes/No
		
		GLOBAL METHODS:
			bool()			// Convert to True or False

	LOGIC 				String 				Number
						is 					==
						is Not 				!==
						NOT 				 			// !
						AND 							// js &&
						OR 								// js ||

	Conditional Expressions
		IF Condition: 				// If Condition is True
		UNLESS Condition:  			// IF NOT Condition
		ELSE:
		ELIF Condition:				// ELSE IF Condition
		// SWITCH 					// Python doesnt need switch.. use if elseif or DICT.get(key, default)
		
		DICTIONARY (Switch) 
			choices = {'a': 1, 'b': 2}
			result = choices.get(key, 'default')	// OPTIMAL Dictionary Lookup w/ Fallback
			op = OPERATORS.get(op, "That's not an operator!") 		

	List Comprehension 				// Ternary Operator
		"TRUE" if CONDITION else "FALSE" 		//  Ternary .... Condition ? TRUE : FALSE
									//  Single line syntax
		return "Foo" if x<10 else "Bar" if x<30 else "unknown"


	LOOPING & ITERATING
		for c in "EGGS": 							// forEach v =>
		for x in range(0,10):
		for key,value in DIC.items(): 				// {a:'A', b:'B'}	==> (a:'A'), (b:'B')
		for index,item in enumerate(L): 			// forEach v,i =>   Gives you access to the index
		for index in range(0, len(L)): 				// for(var i-0;i<X.length;i++) ... Allows you to modify List
		i = iter(L), i.next(), i.next()
		
		// Compare items from two Arrays by GROUPING & LOOPING.. zipping bundles them
		for (a,b) in zip(arrayA, arrayB): 		// now we can compare a,b values..one from each array
		
		for x in XYZ: 				// Loop through [], BREAK will avoid else condition
		else: end capp 				// After for loop runs, else condition will run

		
		while Condition:  				// Similar to DO WHILE ... While this is True
			statements
			break 					// Breaking out is only way to avoid the else condition
		else: 						// Else evaluates even if loop is skipped over
			statement 


	Sequences 					
		// See Sequences in Language Structures
		// Strings,Booleans, Tuples are immutable

		"string" 					//   s-t-r-i-n-g 	... A Sequence of letters & Numbers
		u'Unicode' 					// prefaced by 'u' ....
		[1,2,3] 					// LIST... comma seperated list with square brackets
		(1,), (x,y,z) 				// TUPLES ... an immuteable list
									










/*  LANGUAGE STRUCTURES
===============================================================

	Functions are still the basic building block
	Tuples are immutable Lists
	Sets are Unique Lists
	Generators are efficient way to handle large data..asynchronously
	Objects
	Classes & Methods

===============================================================
*/

FUNCTION
		def functionName():
		/*  
			Something that takes input and gives output..
		 	Pure function (Math) ... no state... same input always gives same output
		*/
		name = lambda (x,y): x+y 	
		/* 
			Lambdas --> Preferred Anonymous Function
				All it can do is return something    (x,y) => x+y
				Cheaper, Faster, No Side Effects 
				If you need to do Two things inside a lambda, or dont want to return something
				use a named function instead
		*/
		Decorators // used to modify a function to make it more pythonic


GENERATORS
		// Pipelines... .Deal with lists of things one at a time, instead of all at once
		// Receive 500 breakfast bars from Amazon... or receive one every morning for 1.5years ?
		Iterable - item with __iter__ or __getItem__ method. returns an iterator.
		Iterator - obj returned with a __next__ method.
		Iteration - grabbing the next item from the list.
		// Generators are functions that return iterators,
		// you can only iterate across it once because they dont store the values
		// They dont return values, they yield them.

			
			
SEQUENCE STRINGS
		"string" 					//   s-t-r-i-n-g
		u'Unicode' 					// prefaced by 'u' ....
		[1,2,3] 					// LIST... comma seperated list with square brackets
		(1,), (x,y,z) 				// TUPLES ... passing multiple values.. an immuteable list
									// strings,booleans, tuples are immutable
		
		GLOBAL METHODS:
			str(22) 					// '22' Convert for String Concatenation

		STRING METHODS:
			"Cool"*3 					// CoolCoolCool  ... Repetition by multiplication
			"Hello World".split() 		// ['Hello','World']  Split on '\s' by default
			"title".title() 			// convert to "Titlecase"
			"upper".upper() 			// convert to "UPPERCASE"
			"LOWER".lower() 			// convert to "lowercase"
			'AbC123'.isalnum() 			// True for "A1B2C3" False for "abc"
			'ABC'.isalpha(), 			// True for "abc".  False for "A1B2C3"
			'123'.isnumeric(), 			// True if all numeric
			s.LStrip() 					
			s.RStrip() 					// Strip space from END
			s.encode() 	
			s.decode() 					// Get UTF Code Number or Convert Code to Character

		STRING FORMATTING, STRING TEMPLATES
			r'c:\\myDocs\n' 			// RAW Strings --> prevents auto escape
			
			PRONOUNS 	// Generic representations of the variable by type since PYTHON IS NOT TYPE-FLUID
			%s  		// String
			%d, %f 		// Digit (int), Float (Decimal)
			%x, %X 		// Hex representation of a number
			"soemthing something someting --> %s" % "Darkside" 			// Single Variable
			"%s %s %s" % ("doowhop","shooby","dooWhop")
			"Now is the summer of %s %s" % ("our","Discontent") 		// 2+... use a Tuple
			"lets not go to %s, tis a silly %s" % (s1, s2)  			// s1="Camelot", s2="Place"
			"%d to the power of %d is %d" % (base, exponent, result)

			"{} * {} = {}".format(10, 5, 50) 					// NEW Alternate Formatting 

SEQUENCE LISTS 						
		// More versitile than Arrays ... but basically arrays
		L = [for variable in sequence] 	// Literal

		GLOBAL METHODS:
			L = list(expression) 	// Created with native List object
			map( FUN, [])			// apply a transformation to a list of inputs
									// MAP outputs a GENERATOR.
									// Use list( map() ) or [map()] ... to convert back to list
			[map(lambda x,y:x+y, [1,2,3])] 	// maps the output of a lamba function to each element of [], return output as list()

		 	filter(Condition, [])	// Reduce list to those that pass the test condition, Loop + Filter
			reduce(Condition, []) 	// Apply a transformation and merge down to a single value ... Migrated to functools in PY3
			
			range() 				// Create a range of numbers
			list() 		tuple()		// Create a list or Immutable List
			reversed() 				// reverse a string,tuple or list
			.sorted(), .sort()		// Sorts Numbers A-Z,   Strings, reverse=True: Z-A

			slice() 				// slice off an array into a smaller array A[:]
			
			all()					// all(L=='t' for L in 'python') --> FALSE				
			any() 					// any(L=='t'for L in 'python') --> TRUE

		ARRAY METHODS:	
		// Append or Concatenate Lists
			L.append( item ) 				// L.push()
			L.extend( NewList ) 			// [A...B]  ,   
			L += [2,4]  					// Add lists, same as extend
			L = [1,2,3]+[4,5,6] 			// Add lists, same as extend
			[1,2,3]+[4,5,6] 				// same as a.extend(b) or [...a, ...b]
			L.insert( position, item) 		// push to a specific location...others get +1 index


SEQUENCE METHODS:
		// Check for the Existence of a Value
		'a' in "abc" 				// True
		'z' not in "abc"			// True
		5 in [1,2,3,4,5] 			// True 			same as Array.Contains()
		if x in L: 					// if Value in List

		// Count the Frequency of a Value
		"Hello World".count('l') 	// 3 'Ls' 		
		[5,9,3,3,7,8].count(3)		// 2

		// Retreive a Specific Value
		["a","b","c"][2]			// "c"
		["true","false"][0]			// "true" 
		"title"[0] 					// 't' 		
		
		// Search for a specific value inside a Sequence
		"abcd".index('d') 			// a:0,   d:3 		returns position of character or ERROR if not Found
		"Hello World".find('W') 	// 6  --> returns position of character or -1 if not found
		"Fish and Chips".startswith("Fish") 	// True
		"Fish and Chips".endswith("and") 		// False
		[3,2,1,3].index(3) 				// 0 ... Position of first Match

		// Manipulate : 
			// Slicing or SubSecting Sequences
			"Hello World"[2:7] 			// llo W... slicing 		[start:stop:step]
			[1,2,3,4][::2] 				// [2,4] 		Get "Even" i=2 Items in List
			[1,2,3,4][-1] 				// 4 			Get LAST ITEM in List
		
			L[i] 							// access single entry
			L[start:end:step] 				// SLICE, return new list, start -> end, step
		
			// Reverse
			"Hello World"[::-1] 		// "dlroW olleH" 		reverse a string or Array	
			[1,2,3][::-1] 					// [3,2,1] REVERSE ARRAY ... return slice of whole [] starting with last entry
			list(reversed([1,2,3,4]))	// Returns a right to left iterator --> Convert back to List  
			
			// Replace
			"Hello World".replace('Hello',"WordUP") 		// Replace

			// Split & Join Sequence
			"delimeter-based".split('-') 			// ['delimeter','based']
			"split  byEmptySpace".split() 			// ['split','byEmptySpace'] ---> default split
			re.split(r'[^\d]+', s) 					// Splits a string based on 'Not a digit'
			','.join(''||[]) 						// joins string based on delimeter
			'-->'.join([111]) 						// '1-->1-->1'  .... Seperator.join(ARR)
			"".join( [] ) 							// JS: [].join( delimiter )

			// Delete Remove
			del LIST[i] 					// delete item 
			del LIST[x:y] 		 			// delete range of items
			L.pop() 						// remove last
			L.pop(i) 						// remove item at index
			L.remove( item ) 				// removes first match it finds 	
			

		TUPLES 						// An Immuteable List ... cannot be modified
			T = (1,2,3) 			
			('fish','cheese') 		// Arguments passed into Functions are TUPLES


		
		SETS 						// List of Unique Values
			set( [1,2,3,1] ) 		// returns [1,2,3] ... removes duplicates
				x = set([1,2,3]), y=set([1,2])
				x.intersection(y)	// [1,2]
				x.issuperset(y)		// True
				y.issubset(x) 		// True
				x.difference(y)		// [3]
				x.remove(1), 		x.clear() 			x.add(300)
			

		RANGE
			range(0,5) 		// formerly xrange() Generator...  Useful for BIG SEQUENCES...more efficient
			range(0,5) 		// Generator --> [0] ... [1] ... [4] ... STOP 			
			Range(1,10) 				...  Creates [1,1,2,3,4,5,6,7,8,9]
			list( range(1,6) ) 				// [1,2,3,4,5] 		Range returns []
			[x for x in range(5,0,-1)] 		// [5,4,3,2,1]		Reverse Range

		METHODS
			sum = sum(L) 						//... [].reduce(a+b) ... takes an Array
			average = sum(L) / len(L) 			// easy SUMMATION
			astring = ''.join( L )

			// Lambdas
			out = map(function, L) 		... ... L.map(x=>{}) 	...this is JS..python?	
			check_the_bucket = lambda bucket: 'gold' in bucket 		// bucket=['stone','gold','stone']
			out = [function(x) for x in L ]
		


		LIST COMPREHENSION 				// SPLIT string or list into list
			A = B = [1,2,3,] 			// both names point to same 

			for x in []: 				// Easy syntax, forEach Loop to Walk the Array
			[L for L in "Letters"] 		// Convert String into List and allow transformations (mapping)


			// Filter
			[i for i in [] if i>0] 		// Filter ... walks array, Filters values greater than zero..returns [...]
			filter(lambda x:x>0, [myArray]) 		// Built in ... py3 or Functools
			// Reduce
			from functools import reduce
			reduce(lambda a,b:a+b, [myArray]) 		// Migrated to Functools from py3

			// Flatten a nested loop
			def sum_times_tables(table,a,b):
				s = 0
				for i in range(a,b+1):
					s = s+i*sum(table)
				return s 
	
			// Multiple loops in a single List Comprehension (flatten nested loops)
			def sum_times_tables(table, a, b):
				return sum(x * y for x in table for y in range(a, b + 1))



DICTIONARY:
		/*
			store key:variable pairs... 
			Dictionary Keys can be 'string' or 123Numbers
		*/
		DIC = {
				'a':[1,2,3], 
				'b': "Fish & Cheese", 
				'c':True
			}
		
		DIC.get('a', default=False) 			// [1,2,3] .... default is value to return if key is not found
		DIC.get('z', default='Oh NO U DIDNT!!') // ... OH NO U DIDNT!!

		DICTIONARY METHODS:		
			DIC.keys() 					// [a,b,c]
			DIC.values() 				// [[1,2,3],"Fish & Cheese",True]
			DIC.items() 				// tuples --> (a:[1,2,3]), (b:"Fish & Cheese"), (c:True)
			DIC.update({d:range(3)})	// {a:[1,2,3] ... d:range(0,1,2)} 			
			DIC = dict(DIC, **NewDic) 	// Similar to a.extend(b) 	Replace{} with a new{} that contains merger of both Dicts

		GLOBAL METHODS:
			vars() 		
			object() 		// Convert to Key/Value pairs	
			dict() 			//
			iter()
			chr(),
			ord() 		// chr(97) --> 'a', ord('a') --> 97



/*  CLASS
===============================================================

	Object Oriented way of creating Inheritance
	Create objects with abilities that other objects can inherit from
	Objects can inherit from multiple parents

	Shape - An Abstract class not meant to be used directly, but contains XY Coordinates & Draw()
	Circle, Rectangle, Triangle:
		Instances of Shape.. but with custom methods
	Concrete Classes have all concrete methods defined

	Test to see if its a class, then run it --> 100x Faster than RUN IT & Trap Error
	Exceptions are expensive in CPU cycles
		If your code with error more than 1% of the time... TEST IT before Using it

===============================================================
*/
	Class
		@staticmethod 		// Descriptor
		@classmethod 		// Descriptor
		// o.__dict 		// returns Dictionary

	Error Handling
		pass 	// Do nothing... We havent Implemented this feature yet

		try: 					// Try: X+2, except: "Cant divide by zero"
		except ValueError: 		return 'Something else'
		except ZeroDivisionError: return 0

		raise NotImplementedError("TODO: get_average") 	// Feature you haven't created yet












/*
============================================================================================

	BUILT IN Functions for Python

============================================================================================
*/
a,b = 10,15 		// Destructuring is inherent in the language

BASIC GLOBAL METHODS:
	print()	

MATH GLOBAL METHODS:
	len("fo") 				// 2 ... Length of [],{},""
	max(1,2,5) 				// 5	Returns Largest
	min(1,2,5) 				// 1 	Return smallest
	abs(-3) 				// 3
	round()	 
	pow()	super() 	sum()
	float()	int()
	zip() 			// x,y matrix manipulation --> (1,4),(2,5),(3,6) for X[1,2,3], Y[4,5,6]
	complex() 		// real + imaginary numbers
	
	
INSPECTION GLOBAL METHODS:
	type('abc') 		// str ... also float boolean int object set or custom identifyer
	type(3.5) == float 	// True
	repr() 				// Representation.. How custom obj prints or identifies itself
	
	id() 			
	isinstance( myFloat, float ) 	// True

	help()			setattr() 	
	globals()			locals()
	property()			
	dir()				
	next()	
	classmethod()		issubclass()	
	getattr()	hasattr() 	delattr()
	memoryview() 		hash()		set()
	enumerate()			// Gives you access to the index... enumerate(['spring','fall']) --> TUPLES: (0,'spring'), (1,'fall')

STATE BUILT-IN:
	hex()		oct()
	input()		open()
	bin()		eval()			
	ascii()		staticmethod()



UNKNOWN BUILT-IN:
	compile() // Creating Abstract Syntax Trees (AST)...modules ??
	bytes() 	bytearray()	
	exec()						
	callable()	
	format()		
	frozenset()	
	__import__()
			





/*
============================================================================================

	Programming Python with Ch'marr

============================================================================================
*/

	Object Oriented
	// Create a Data structure and the methods that act on it ... MUCH SIMPLER!!
	// Opposite of Functional programming... write a function...pass it an object..pass it attributes to change

	Requests
	// import requests 				// lets you do web requests... makes it simpler
	// pip install requests 		// 

	
	Setup Virtual environments
	 /*
		.bash_profile takes precidence over .profile
		pyvenv /FOLDERNAME
		source envs/FOLDERNAME/bin/activate
		Setup a bash_profile... create a function to setup source and 

		env1()  ... Jumps to folder, inside virtual environment
		DeActivate // ... Exit out of python environment
	 */


	 PIP 
	 // 	used to retrieve / install new modules 
	 // 	list 		--  list all the currently loaded modules


	 API: 	
	 // Bitbucket API, or GITHUB account...
	 dir(), locals(), globals()
	 id()
	 values of Hash.. pointer or muteable value.
	 // pointer for objects, 
	 // if it's changeable... string boolean ... stores it directly in space






/*
==================================================================
	 Homework 	... DUE 8/25
	 setup a bitbucket account... to be able to use it's API
	 instead of just curl... create a program that will receive a requeste obj and
	 print something from the api
==================================================================
*/

//  Weird stuff we did -----> Tutoring 7  :: 10/20
// python defaults obj ... creates a closure, all other instances use that same default obj.
// to not use a closure set to none and create a new list within body of function.
// code put in attribues is run and created immediately.
// Code in the block (suite) is run when the function is called.
// This is how python has a default closure

[2, 3]
r2 = dumbfn()
r2
[2, 3, 2, 3]
del r2
del r
r2 = dumbfn()
r2
[2, 3, 2, 3, 2, 3]
def dumbfn2(l=None):
    if l is None:
        l = []
    l += [2,3]
    return l


// Think of these as positions in memory --> variables point to places in memory
def dumbfn3(l=[]):
    l = list(l)
    l += [2,3]
    return l


// Equals is rebinding... a=[1,2,3]; b=a; c=a; d=a;







/* 		REGEXP
==================================================================
	Import the regular expression module

	(0) 	For Simple patterns, Type in the pattern directly.
	(1) 	For more Complex patterns, COMPILE a pattern into a REGEX OBJECT  (allows reUse)
	(2) 	Then use the reOBJ to match search or replace
	(3)		Results of a match or search is a MATCH OBJECT
			matchOBJ is a BOOLEAN so you can do   			if matchOBJ:
	
			match.span() 				A tuple (start,end) of first match
			match.start()				Start position of match
			match.end() 				End position
			match.string 				The string that was searched
			match.re					The regular expression used

			r'\word' 					use RAW format for dealing with slashes

	(4)		re.sub(PATTERN, Replacement, String) 	Replace
	

==================================================================
*/
	import re
	re.search( target, String ) 		// Returns first occurance of target inside String .. searches anywhere inside
	re.match( target, String ) 			// Only searches start of string
	re.split('\n+', Text) 				// Split on new lines, turn text into an array
	x = re.compile(r'\d')
	x.match()

	// Simple Searches
	cat,CAT 			// directly match words  A or a or numbers 

	// WildCards
	. 					// Matches ANY CHARACTER except newLine
	^ $ 				// Searches START or END of a string .... based on newLine character
	\ 					// Escape to match literal \* \+ or \?, 	\|  or [|], 	[^^] or [xyz^]:not first position
	\s r' ' 			\w [a-zA-Z]



	// Repitition
	* + ? {m,n} 		// Infinite: 0-∞, Many: 1-∞, Optional: 0-1, Specific Range
	ab+ 				// match a followed by one or more bs.. will not match a alone
	a{6}				// match 'aaaaaa'
	a{3,}b				// match 3 - 1000a's followed by b
	a{3,5} 				// GREEDY 			match 3-5 ... preferably 5
	a{3,5}? 			// NOT GREEDY 		match 3-5 a's ... preferably 3
	// These matches are GREEDY..they want to match as large as possible

	// Choice
	A|B 					// Multiple RE's can be tried, NOT GREEDY. If A matches, B will not try.
							// First one to resolve determines the branch.. left to right
	
	// SETS
	[cat] 					// A set of characters, a|b|c
	[a-zA-Z]				// Range of characters, lowercase, UPPERCASE
	[a-] or [a\-]			// Match a literal '-' if last character or escaped
	[(+*)] 					// Normal characters inside a set... they lose their special meaning
	[^0-9] 					// Match any character EXCEPT numbers, ^ loses special meaning if not first
	

	// Capture Groups
	(cat) 					// Saves whatever RE is inside the parens as a group
	(?aiLmsux)				// Extensions-Modifier Flags
							// a: 	ascii only
							// i: 	ignore case
							// L: 	locale dependant (language system)
							// m: 	multi line
							// s: 	dot matches ALL
							// u: 	unicode only
							// x: 	verbose
	(?:cat)					// Non-Capturing version
	(?P<name>...)












/* 	Search and Replace String Text
==================================================================
	s = "#Fish Bone!s3"
==================================================================
*/
	re.sub('[^a-z A-Z]','',s) 			// Fish Bones 		REGEX
	"".join(c for c in s if c.upper() in  "ABC...XYZ ") 	// [] Comp
	"".join(x for x in s if x.isalpha() or x.isspace()) 	// [] Comp
	"hello world".replace("hello","WordUP")




/* 	Convert numeric expression into Text
==================================================================
	
	Create a function expression_out() to write out a math expressions for you!
	INVALID operators will also be tested, to which you should return "That's not an operator!"
	And all of the numbers will be 1 to10! Isn't that nice!

==================================================================
*/
OPERATORS = { 
	'+':   'Plus ',
	'-':   'Minus ',
	'*':   'Times ',
	'/':   'Divided By ',  
	'**':  'To The Power Of ',
	'=':   'Equals ',
	'!=':  'Does Not Equal ' 
}
NUMBERS = 'Zero One Two Three Four Five Six Seven Eight Nine Ten'.split()

def expression_out(exp):
    x, op, y = exp.split()
    x, y = NUMBERS[int(x)], NUMBERS[int(y)]
    op = OPERATORS.get(op, "That's not an operator!") 		// OPTIMAL Dictionary Lookup w/ Fallback
    return '%s %s%s' % (x, op, y) if op[-1] != '!' else op

expression_out("4 ** 9") // "Four To The Power Of Nine"
expression_out("10 - 5") // "Ten Minus Five"
expression_out("2 = 2")  // "Two Equals Two"



/* 	Split a Number into Digits Array
==================================================================
	n = 12345
==================================================================
*/
	[int(d) for d in str(n)] 		// [1,2,3,4,5]
	[L for L in "fish"] 			// ['f','i','s','h'] 	... split on letters
	'fish and cheese'.split()		// ['fish','and','cheese'] ... Default split on space







/* 	Is a Number Divisible by all the subsequent numbers
==================================================================
	isDivisible(12,3,4) --> True
	isDivisible(12) 	--> True
	isDivisible(12,5,1) --> False
==================================================================
*/
def is_divisible(n,*rest):
	return all( not n%i for i in rest) 			// all( !0, !0) --> all(T,T) --> T

def is_divisible(n,*rest):
    if not len(rest): return True 				// Edge Case.. no Rest
    holding = list(map(lambda x:n%x==0, rest)) 	// (3,4) --> [True,False]
    return False if False in holding else True 	// Should have used ALL()




/* 	Count occurances of one number in another
==================================================================
	a = ["abc","cde","abc","uvx"]
	b = ["abc","cde"]
==================================================================
*/
	solve = lambda a,b: [ a.count(x) for x in b] 			// Literal

	solve = lambda a,b: list(map(lambda x: a.count(x),b)) 	// Functional
	solve = lambda a,b: list(map(a.count,b)) 				// Functional - Simplified




