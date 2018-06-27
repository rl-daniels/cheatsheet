
/* 		SETUP SSH KEY for GITHUB
================================================================================================

	SSH Key is used to uniquely identify you(r computer)
	Many projects use this for security

	/Users/Ray/.ssh/id_rsa
	You have a private key (password) thats used to encrypt data

	/Users/Ray/.ssh/id_rsa.pub
	You have a public key (movie ticket) that you give to other services
	as proof of identity

================================================================================================
*/
	ssh-keygen -t rsa		// In Terminal, Creates a public/private key
	password: >*<code55!

	cd ~ 						// Root Directory
	ls .ssh
	ssh-keygen
	ssh-add -K 					//adds to your private key to Mac Keychain
	cat .ssh/id_rsa.pub 		// Display your public key
	Tripple click to select... copy... add to GIT/profile/


  /* 		GIT
  =======================================================================
  	Git is a local file-sharing and version control language

  	GitHUB is a service that will store your projects (requires SSH)
  		... all public accounts, private costs money
  	BitBucket is another service
  		... less than 5 members in a group for free.. over that pay
  =======================================================================
  */

  /* 	GIT IGNORE
  =======================================================================
  	You probably dont want to share executeables and Thumbnails
  	setup a .gitignore file with content from XXXXX ...
  	contains a list of executables that should not be run
  =======================================================================
  */
  	.gitignore



  /* 		CREATE a LOCAL PROJECT
  =======================================================================
  	move to your home folder..wheverver your code is stored
  =======================================================================
  */

  	git init 			// Makes a new repository/Project from scratch
  	git config --global user.name "Ray"
  	git config --global user.email "MyEmail@gmail.com" 	// Global..Do ONCE



  /* 		CREATE a new GITHUB REPO from CommandLine
  =======================================================================
  	Create a local repository
  	move to your home folder..wheverver your code is stored
  =======================================================================
  */
  	git init 						// Create a local Repo
  	git add README.md 				// Populate it with a file
  	git commit -m "first commit" 	// Commit to staging
  	git remote add origin https://github.com/rl-daniels/custom_meals.git 	// Create remote REPO
  	git push -u origin master 		// Push files to remote Repo



  /* 		CLONE a REMOTE REPO
  =============================================================================
  	A folder named Custom_Meals will be created...
  	So run this command in the parent directory.
  =============================================================================
  */
  git clone git@github.com:rl-daniels/custom_meals
