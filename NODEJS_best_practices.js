
/* 		IDE, Ecosystem
================================================================================
	NPM can act as a Build Tool
	replacing Brocoli,Jake,Grunt,Gulp
================================================================================
*/
Sublime or Atom 		// Code Editor + Viewer
NPM (pip)				// Package Search/Install
GIT 					// Version Control, repository
GRUNT,GULP				// Too many dependancies, you need a Manager


// Create Nested Folders
	mkdir -p assets/css assets/scripts && touch assets/css/main.css assets/scripts/main.js

// Create Scripts
	package.scripts 		// runs shell commands
	start 				npm run || nodemon start
	info 				npm run info -s				// echo ==>'NPM ROX'
// Install HINTing
	npm install jshint --save-dev
	// http://jshint.com/docs/options/				Set Options


// Testing with Mocha
	npm install mocha --save-dev 					// Install
	test:'echo ===> Testing with Mocha && mocha test/'
	npm test -s										// Shortcut
	// pretest: npm run lint -s
	// posttest

// Minification using UGLIFY
	// Create a distribution folder with assets
	mkdir -p dist/public/css dist/public/js && touch dist/public/index.html
	npm install uglify --safe-dev
	"minify:js":"echo '===> MINIFY: JS' && uglifyjs assets/scripts/main.js -o dist/public/js/main.min.js"
	"minify:css":"echo '===> MINIFY: CSS' && cleancss assets/css/main.css -o dist/public/css/main.min.css"

// Watching for Changes
	npm install nodemon --save-dev


/*	NODEJS uses the V8 Egine
================================================================================
	The same engine that was in chrome browser.
	Older engines JS use to be very inefficent...
	joke langjage..used for spamming people on websites.
	After google chrome, its very efficient.
================================================================================
*/


/*	Asynchronous vs Synchronous
================================================================================
Sync
		Your blocked from doing anything else until XX is accomplished.
		You cant start baking a cake until you go to the store and buy incredients.

Async
		Both things can happen simultaeously.
		While you go to the store, I'm going to preheat the oven and start mixing dry ingredients.
================================================================================
*/



/*	Threading
================================================================================
	Apache server...each process spawns a thread.
	A stack of code that needs to be executed by the server.
	When you have 10,000 actions a hangup could cause your server to wait.

	node - single thread
	request for a file comes in, use fs.readFileSync to give a response,
	while this is happening other requests are stacking up waiting.

	vs request for a file comes in, use fs.readFile (async),
	the new requests can be handled while this current one is working.
	Other processes can run and it'll return to your process when its ready.

	When your dealing with distributed packages, and you dont
	know what files they've used in their project..

	we want to distribute our package along with a small datafile
	that lists all the required modules.
================================================================================
*/
	npm init 					// create a package file

	npm install timezone -save	// Run SAVE as developer to indicate that any dependances are required.

	npm install 				// As downloader, you just run install to download and install the necessary dependancies.


database: mlab
app.use  			// a step in the stack process
app.get/post/ 		// next... go to next stack
res.json 			// convert response obj into json string
					// using breakpoints to verify our function is being called
					// sha1 encripytion scheme (md5,)  Secure Hashing Algorythm
					// semi-stateless...using user tokens
	// Move to Config
		Port, mongoURL, SecureString
	// Need FS FIleSystem to read & verify config File
		- fs.existsSync ... throw error if File not found
	// asserts ... test for values ... verify assertion errors work
		Error Checking..w console.log...Verify SALT+Password+SEcretWord

	// Binary to base64 conversion
		Binary Number is not friendly to directly convert to string (json)
		Converting to base64 uses 0-64 numbers instead of 0-255 (binary)
		So you blowup file size larger, but it will get there safely.

	// Posting
		Moved verify token code to a function because it will need to be called by many processes.
		Tweeking Filenames to human readable..instead of garbage machine-safe fileNamez
		reader.readAsDataUrl --> Adds extra concoding that needs to be removed before file can be written
	// Sending Files
		res.sendFile ... just like res.json() ... knows what mimetype to send
	// Building out pages
		collections.users.findOne instead of find()
		verify login, set spinner, get pageData -> Turn off spinner & display
		lookup ID: -->. mongo.ObjectID( req.body.id )


		/*		REST API
		======================================================
			REST API (Data Supplier & Commands to get Data)
			URLS:  /user 			/posts 			/products
				This is how the data is exposed
			VERBS: get,post,delete 	get,post,update	get

			Client: Sends Async request for Data,
				JS renders Dom, & Handles the response

			HTTP Response Codes:
		======================================================
		*/

/*	REST (representational state transfer)
================================================================================
	Rest concept
	Constraints of REST architecture
	HTTP Response Codes

		Resourced based instead of action based. NOUNS, not verbs.
		Identified by URIs (resources)
		Client has a representation of a resource,not the resource itself
		HateOAS: Hypermedia as the Engine of Application State
	HTTP Verbs
	----------------------------------------------------------
		POST  				Create Data
		GET 				Request Data / Read Data
		PUT  				Update existing Data
		DELETE				Delete Data
================================================================================

	SIX REST CONSTRAINTS:
	----------------------------------------------------------
	Client-Server Architechture
		Seperation of concerns (backend, process data), front-end (handle UI)
	Stateless
		Each request has enough context to process msg
		Server does not store state (context), Client should handle it
	Cachability
		Responses define themselves as cachable (For How long?)or NotCachable
	Uniform Interface
		Resources are URIs, and we use HTTP VERBS
		Data is decoupled from DB schema
		resources are IDd in request. - Self Descriptive
	Layered System
		Client connects to intermediary servers which reach out to our api.
	Code on Demand
		Could send executable code (OPTIONAL)


	HTTP RESPONSE CODES:
	----------------------------------------------------------
	100 	Continue 			102: Processing...
	200		Successful			201: New Resource Created
								204: No Content, Empty set
	300 	Redirection			301: Permanently
								303: See Other (!cached)
								307: Temporary Redirect
	400 	Bad Request 		401: UnAuthorized Credentials
								402: Payment Required
								403: Forbidden
								404: NOT FOUND
								410: Resource is GONE
	ERROR CHECKING
	----------------------------------------------------------
	Data can return noramally (found item)
	Data can return null 		( didnt find the item,but valid request)
	Invalid request error 		(too long or short ObjectID )
================================================================================
*/




/*		Anatomy of a Request / Response
================================================================================
	REQuest 		{Header,HTTP VERB, URL}	- Readable Stream
		Headers 	{User-agent,Meta} 		- MetaData
		Body		{Data,End}				- post,patch

	RESponse 		{Header,Status,Data} 	- Writeable Stream
		StatusCode 	200 default
		Header 		res.setHeader( tuple )
		Stream 		{HTML or JSON, End}

		Each chunk of data is a Buffer.
		Best approach is to gather it into an array
		When the end is reached, join it and stringify it.
			Detect data,end using an on() listener event
		ReadableStreams can also be eventEmitters when erorrs occur

		First set Response.writeHead(200,{OBJ})	// Maximum Control
		Response is a writeable stream ... you could send individual <html> if you want
			Response is also an eventEmitter...Can emit errors when they occur

		PIPE(destination) ... used to connect stream from one place to another
		request.pipe(response) 			// Echo stream from REQ to RESP

		Error Handling
		// If you get an error in the request, set response status to 404 and terminate
		// If your response has an error, console.error it
		// If method==POST ... pipe response  else  return 404 error
================================================================================
*/







/*		CORS:  Cross Origin Request Sharing
======================================================
	In order to access resources on another server
	REST API is always on different server than Client
	So we need to ensure we send the right headers back.

	1) That server must allow it via IP or header
	2) You must include credentials in your Request.Header

	Simple Requests:
		- Request Type [GET,POST,HEAD]
		- HTTP Header matches [accept,accept-lang,content-lang]
			content-type:[app,form-data,text/plain]
		Simple requests dont require CORS (send a form) or use
		json-p to do a cross-domain GET request.

		Form Simple requests, response is sent whether its same
		origin or not.  Not actually checking for Origin.

	Server Responses:
		Prefixed with ACCESS-CONTROL
		-allow-origin: 		"*" or [Whitelist] 		// Required in all responses
		-allow-credential: true, allows Credential (Cookie) to be sent
		-expose-headers: access other headers than Cache,Type,Lang,Expires


	NOT SIMPLE Requests:
		- You want to support verbs [PUT,PATCH,DELETE]
		- Send 2 Requests, Preflight then actual
			PREFLIGHT: Ask for permission to send the request, ** Cacheable
			REQUEST:




======================================================
*/
	//Set the XMLHTTPsRequest's method to accept Credentials (cookie)
	xhr.withCredentials = true;
	// The server must allow credentials (Cookie)
	Access-Control-Allow-Credentials: true


		// Example SIMPLE JS Request
			var url = 'http://api.alice.com/cors';
			var xhr = createCORSRequest('GET', url);
		xhr.send();
		// Example Generated Request Header
			GET /cors HTTP/1.1
			Origin: http://api.bob.com 				// Browser Created ORIGIN HEADER: HTTP+Domain+Port
			Host: api.alice.com
			Accept-Language: en-US
			Connection: keep-alive
			User-Agent: Mozilla/5.0...

		// Example SERVER response
			Access-Control-Allow-Origin: http://api.bob.com
			Access-Control-Allow-Credentials: true
			Access-Control-Expose-Headers: 'Origin,X-Requested-With,Content-Type,Accept,Authorization'
			Content-Type: text/html; charset=utf-8


		// Example NOT SIMPLE JS Request
			var url = 'http://api.alice.com/cors';
			var xhr = createCORSRequest('PUT', url);
			xhr.setRequestHeader(
			    'X-Custom-Header', 'value');
			xhr.send();

		// PREFLIGHT REQUEST
			OPTIONS /cors HTTP/1.1 					// preflight is a HTTP:Options request; Server needs to be able to respond to it.
			Origin: http://api.bob.com
			Access-Control-Request-Method: PUT 		// Method of actual request
			Access-Control-Request-Headers: X-Custom-Header // list of NonSimple headers included in request
			Host: api.alice.com
			Accept-Language: en-US
			Connection: keep-alive
			User-Agent: Mozilla/5.0...
		// SERVER PREFLIGHT RESPONSE
			Access-Control-Allow-Origin: http://api.bob.com 	//MAGIC
			Access-Control-Allow-Methods: GET, POST, PUT 		// All supported Methods...Cacheable
			Access-Control-Allow-Headers: X-Custom-Header
			Content-Type: text/html; charset=utf-8
			Access-Control-Max-Age: 24*3600 			// Allows Preflight cached for 1Day in miliseconds


/*		OPEN A FILE (AJAX, GET JSON DATA)
======================================================
	Using NODEJS you have access to FileSystem
	Makes it much easier to retrieve files on your computer
	or JSON data
======================================================
*/
	const data = JSON.parse(fs.readFileSync('data.json'))




/*		Mongo DB (by Derek Banas)
======================================================
	Data records are Collections 		// table
	You can run javascript inside the mongo shell account (testing)
	Database stored at Root. /data/db

	CONFIGURE
		load(script) 						// Script to set DB Name & port ... load('define_SelectDB.js') ... same directory or include PATH to file
		mongorc.js 							// Custom ShellScript prompt & functions

	MANUAL:
	db.createCollections('books') 			// A table of book records ...nonEnforced Schema
	db.createCollections('genres')			// ...
	db.genres.insert()						// Insert documents into a collection

	DATATYPES
		null, Boolean, String, Number, Array, Object, RegExp
	STARTUP
		NEW TERMINAL > mongodb 			// DB Code running... Use CTL C to Quit
		New Tab > mongo 				// shell script.  Use exit to Quit

		show dbs 						// Show ALL
		db 								// Show name of current DB
		mongod	 						// Start DataBase
		mongo 							// Start Shell
		exit 							// Close shell
		use STARWARS 					// Switch to STARWARS.db, create if doesnt exist
		ObjectID("TimeStamp(4)-ComputerID(3)-ProcessID(2)-Increment(3)")

	USAGE
		let luke = {"name":"Luke Skywalker"}
		db.STARWARS.insert( luke ) 		// Insert data
		db.SW.insert([{},{}])			// Insert multiple records at once inside ... use Array

		db.SW.find()					// Return ALL data from DB. ... without (), prints the JS Function
		db.SW.find().pretty() 			// PRETTY PRINT formatting
		db.SW.find(TARGET,FILTER)		// Target a specific records, filter output
										// Find male students from WA, return Name & DoB, Hide ID
		db.prez.find({"state":"WA","gender":"male"},{"name":1,"dob":1,"_id":0})

		db.SW.update({TARGET}, {MODIFICATION},{OPTIONS}) 	// OVERWRITES OBJ(s) ... multi:true
		db.SW.updateOne(TARGET, UBDATED-OBJECT )

		db.SW.remove({TARGET})			// Removes the record
		db.SW.drop() 					// Remove ALL records



	ACTIONS:
									Can be used anywhere an object is expected.
									Verb, followed by object
		$set:{} 					Sets one new field.   {TARGET},{SET:{}},{MULTI=true}
		$inc:{FIELD : +1||-1}		Increment {FIELD : AMOUNT}
		$mul:{FIELD : AMOUNT}
			$div, $add, $sub
		$each
		$addToSet:{FIELD:VALUE} 	Add a record if it doesnt exist already.. Wont Overwrite!

		$push:{RECORDS}				Push Multiple values into Array
		$push: value 				Push value into Array
		$size 						Length of Array
		$pop:{TARGET:number}		Remove n numbers from a record ... +1 removes end, -1 removes beginning
		$pull:{TARGET:value}		Remove a specific value
		$slice:2 					Slice stuff from an Array

		$in:[3.0,3.5,3.9] 			Match a specific range
		$nin:[range] 				NOT IN range
		$or:[{},{}]					Match multiple conditions

		$not: 						Negates
		$gt,$lt, $gte,$lte 			Greater/Less Than ... GreaterOrEqualTo/LessOrEqualTo

		$all:[10,0] 				Matches both values
		.sort({"name":1}) 			Sort by Name
		.limit(3) 					only return 3x
		.skip(3)					skip first 3, return second 3


	INDEXING
		Makes it MUCH faster to lookup data (0ms vs 130ms)
		Cardinality:
			Easier to search on something with low # unique values (age, gender)

		.ensureIndex(TARGET,OPTIONS)			Create index for fast lookup, options unique:true
		.explain("executionStats") 				Show performance stats
		.getIndexes()							Names of Indexes
		.dropIndex(NAME) 						Remove Indexes

	AGGREGATE
		ARRAY, $group by: Aggregator(ID):display(NAME), "FIELD":{$sum:1}
	MAP,REDUCE

======================================================
*/
	db.baseball.insert([barry,babe,hank,Wade,Ken]) 			// Insert Multiple
	db.baseball.update({"Hall of Fame":"Inductee"},{"$set":{"Hall of Fame":"Inducted in 1997"}},{"multi":true}) // Update Multiple
	db.baseball.update({"name":"Barry Bonds"},{"$push":{"records":RECORDS}})
	db.baseball.update({"name":"Babe Ruth"},{"$push":{"Best Home Run Years":{"$each":[45,47,51,73,79,105],"$slice":-5}}}) // Modify Incoming content

	db.school.find({"gpa":{"$gte":2.0,"$lte":3.5}},{"name":1,"gpa":1,"_id":0}) 	// Find GPA within a range
		year1969 = new Date('1/1/1969')
	db.school.find({"dob":{"$lte":year1969}},{"name":1,"dob":1,"_id":0}) 		// OLDER than 1969
	db.school.find({"$or":[{"status":"dropout"},{"gpa":{"$lt":3.0}}]},{"name":1,"gpa":1,"_id":0}) 	// Troubled Students
	db.school.find({"gpa":{"$not":{"$gt":3.0}}},{"name":1,"_id":0}) 			// Low Grades
	db.school.find({"tests.0":10},{"name":1,"tests":1,"_id":0}) 				// Check FIRST test value, use INDEX
	db.school.update({"name":/^denise/i},{"$push":{"tests":8.5}}) 				// PUsh NEW test Value

		// Indexing
	db.banking.ensureIndex({"age":1,"account":1}) 						// enable FAST search of Age
	db.banking.find({"age":50}).explain("executionStats") 				// Show Stats
	db.banking.dropIndex("age_1_account_1") 							// Restore Defaults

		// Scores
	db.school.find({tests:{$all:[0,10]}},{_id:0,name:1,tests:1}) 		// GoodScore & Bad Score
	db.school.find({"tests.0":10},{name:1,tests:1,_id:0}) 				// FIRST INDEX of Tests=10 ....QUOTES REQUIRED
	db.school.update({name:"Andrew Jones"},{$push:{tests:9.9}}) 		// PUSH new test value
	db.school.find({tests:{$size:4}},{name:1,tests:1,_id:0})  			// get tests.length==4
	 db.school.find({name:/\bJ/i},{_id:0,tests:{$slice:2}}).pretty() 	// Get Full info of anyone middle or lastname J*, Only retrieve 2 tests


	/*
		Created 100,000 accounts

		Find Age == 50:
			1k hits in 48ms but had to check all 100k accounts 	// NOT GOOD
			After Index on Age,Account:
			1k hits in  3ms but only checked 1k accounts 		// MUCH BETTER!!

		Find Account100:
			1 hit returned in 47ms, after checking 100k accounts 				// MEH
			1 hit WITH LIMIT=1 returned in 0ms, after checking 96 accounts 		// VERY GOOD
			1 hit with UNIQUEaccountINDEX returned in 0ms, after checking 1 account // EXCELLENT!!
	*/
	// Aggregates
	db.food.aggregate([{$group:{_id:"$author",num_recipes:{$sum:1}}}]) 										// SUM #Recipes
	db.food.aggregate([{$group:{"_id":"$author","num_recipes":{$sum:1}}},{$sort:{num_recipes:-1}}]) 		// SUM + sort #Recipes
	db.food.aggregate([{$match:{"type":"latin"}},{$group:{_id:"$author",num_recipes:{$sum:1}}}]) 			// SUM latin recipes contributed by each author
	db.food.aggregate([{$match:{"type":"latin"}},{$group:{_id:"$author",num_recipes:{$sum:1}}},{$sort:{num_recipes:-1}}]) 	// ^^ Sorted Descending
	db.food.aggregate([{$match:{"type":"latin"}},{$group:{_id:"$author",num_recipes:{$sum:"$likes"}}},{$sort:{num_likes:-1}}]) 	// Group by Author, Sum #likes
	db.food.aggregate([{$group:{_id:"$author",num_likes:{$min:"$likes"}}},{$sort:{num_likes:-1}}]) 				// MIN #likes
	db.food.aggregate([{$group:{_id:"$author",num_likes:{$max:"$likes"}}},{$sort:{num_likes:-1}},{$limit:3}])	// MAX #likes, limit 3
	// Project..Rename Fields
	db.food.aggregate({"$project":{"Rec":"$recipe","_id":0}}
	db.food.aggregate({"$project":{"Strong Impressions":{"$divide":["$likes","$dislikes"]},"_id":0}}) 	// { "Strong Impressions" : 14.75 }
	 db.food.aggregate({"$project":{"Month Posted":{"$month":"$datePosted"},"recipe":1,"_id":0}}) 		// { "recipe" : "Sundried Tomato Hummus", "Month Posted" : 3 }







/*		Mongoose
======================================================
	A nodeJs library for connecting to MongoDB..
	Provides Model validation (Schema)

	Mongodb doesnt care if your data is consistent or not
		It doesnt judge as long as its well formed.
	Mongoose CARES

	Schema and Models are classes
		You can attach custom methods to give them more usefulness
		Model.save() 					// Writes instance to the DB
			.then() 					// Do other stuff
			.catch(err=>console.log(err))
		Model.exec()					// Chainable


	MODIFIERS
		$gte 							// >=
		$lte 							// <=
		/John/i 						// Regex Matches

	MODEL METHODS:
		model.find()
			.find().where() 			// Add a condition
			.find().limit() 			// primitive Pagination...
			.exec() 					// returns a true Promise
		model.findbyId()
		model.findOne()



		model.select('name _id title') 	// space seperated string



	ERROR CHECKING ... check for
		valid mongoose ID 	200
		valid but wrong ID 	404
		invalid object ID 	500
======================================================
*/

	var artistSchema = new mongoose.Schema({
		name:{firstName:String, lastName:String, fanName:String},
		description:String,		comments:[{body:String, date:Date}],
		date:{type:Date, default:Date.now},
	})
	artistSchema.add({meta:{favs:Number,share:Number}}) 		// Extend schema
	artistSchema.virtual('fullName').get(function(){			// Virtual Properties, First+Last
		return `${this.firstName} ${this.lastName}`
	})

	var Artist = mongoose.model('Artist', artistSchema)			// Create new Model
	var artDecade = new Artist({})
