Setting Up a React Native Development Environment

In this guide, we will walk through the step-by-step process of setting up a React Native development environment on a Windows system. We will create a sample React Native app called "Incredible Todo List App" using the React Native CLI. 

System Requirements
Before getting started, ensure your system meets the following requirements:
•	CPU: 64-bit processor, Intel Core i5 or equivalent
•	RAM: 8GB or higher
•	Windows version: Windows 10 or later

Installation Instructions
1. Install Node.js and npm
1.	Visit the official Node.js website at https://nodejs.org/.
2.	Download the LTS (Long Term Support) version.
3.	Run the installer and follow the on-screen instructions.
4.	Open your command prompt or terminal and verify the installation by running the following commands:
	node -v 
	npm -v 
You should see the installed Node.js and npm versions displayed.

2. Install React Native CLI
Open your command prompt or terminal and run the following command to install the React Native CLI globally:
	npm install expo-cli -global or npm install –global expo-cli

3. Install Android Studio
Download Android Studio from https://developer.android.com/studio.
Run the installer and follow the installation wizard.
During the installation, make sure to select the "Android Virtual Device" component to set up an Android emulator.

Project Creation
Now that we have set up the development environment, let's create our "Incredible Todo List App."

1. Create a New React Native Project
Open your command prompt or terminal and run the following command to create a new React Native project:
	npx create-expo-app IncredibleTodoListApp 
2. Navigate to the Project Directory
Change your working directory to the newly created project folder:
	cd IncredibleTodoListApp 

Running the Project
To run the project in an Android Device Simulator, follow these steps:
1.	Open Android Studio.
2.	Run the device you choose in Android Studio.
3.	Open CMD.
4.	Run: npx expo start or npm start
5.	Then press “A”.


Troubleshooting
Common Issues
Metro Bundler not running: If you encounter issues with the Metro Bundler, make sure you're in the project directory and run:
	npx expo start or npm start
Build issues: If you face build-related problems, check the official React Native documentation and community forums for solutions.

Resources
Here are some additional resources and documentation to help you on your React Native journey:
•	React Native Official Documentation
•	React Native Community

