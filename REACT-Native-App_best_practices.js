
/* 		REACT NATIVE APP
============================================================
	Use react JS to (HTML & CSS) to create native apps
	that have access to your phone's thingies
============================================================
*/

	// YARN is like NPM... an installer created by facebook
	yarn global add create-react-native-app

	// Create a project
	create-react-native-app AwesomeProject

	// Install Expo App on your phone
	// use it to connect to the local app
		yarn start - Starts the dev server so you can open your app in the Expo app on your phone.
		yarn run ios - (Mac only, requires Xcode) Starts the dev server and loads your app in an iOS simulator.
		yarn run android
		yarn test - Starts the test runner.
		yarn run eject - Removes this tool and copies build dependencies, configuration files
	    	and scripts into the app directory. If you do this, you can’t go back!
	  cd AwesomeProject
	  yarn start

	// Exensive use of CLASSes
	// Every custom componenet extends the base Componenet Class
	// Every component needs a render function and returns an appearance (JSX)
