
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
	password: >*<pwd55!

	cd ~ 						// Root Directory
	ls .ssh
	ssh-keygen
	ssh-add -K 					//adds to your private key to Mac Keychain
	cat .ssh/id_rsa.pub 		// Display your public key
	Tripple click to select... copy... add to GIT/profile/


/* 		Setup a Collaborator
=============================================================================
	Your public Github file can be read by anyone
	But you need to specifically add Collaborators ... people who can write to it.
	Admin > Settings > Collaborators > ADD
=============================================================================
*/


/* 		GIT
=======================================================================
	Git is a local file-sharing and version control language

	GitHUB is a service that will store your projects (requires SSH)
		... all public accounts, private costs money
	BitBucket is another service
		... less than 5 members in a group for free.. over that pay
=======================================================================
*/




/* 		CREATE a LOCAL PROJECT
=======================================================================
	move to your home folder..wheverver your code is stored
=======================================================================
*/
  	git init 			// Makes a new repository/Project from scratch
  	git config --global user.name "Roy"
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



/* 		CREATE a REMOTE REPO
=============================================================================
	A folder named Custom_Meals will be created...
	So run this command in the parent directory.
=============================================================================
*/
	git add .
	git clone git@github.com:ROY/custom_meals
	git remote add origin git@github.com:ROY/custom_meals 	// SSH cloned
	git remote add origin git@github.com/ROY/custom_meals 	// HTTPs cloned
	git remote -v 			// View whats currently set as origin


/* 		PUSH changes to a remote Repo
=============================================================================
	If approved by admins, it'll be added to remote Master branch
	Branchname is master by default unless you created an alternate
=============================================================================
*/
	git push -u origin master 	// push up commited files to remote master
	git push origin BRANCHNAME 	// short way
	git push git@github.com:USERNAME/projectNAME BRANCHname // long way
	git branch 					// See what branch your on
	git checkout -b BRANCHname 	// Create a new branch


/* 		Get updates from a remote Repo
=============================================================================
=============================================================================
*/
	git branch -u origin/master 	// Set origin to the REPO you just downloaded
	git pull origin master 			// Fetch changes from master, merge to local
	git status 						// See what branch your on
	git log 						// see list of commits



/* 		GIT IGNORE
=======================================================================
	You probably dont want to share executeables and Thumbnails
	setup a .gitignore file with content from XXXXX ...
	contains a list of executables that should not be run
=======================================================================
*/
  	.gitignore
