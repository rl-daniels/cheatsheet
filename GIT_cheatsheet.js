
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
