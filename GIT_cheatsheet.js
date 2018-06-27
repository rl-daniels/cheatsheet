
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
