# keleya-pregnancy-app

## Install Dependencies and run the application

1 - Clone the repository

2 - Go to the project folder and run : npm install or yarn install

3 - Go to the ios folder and run: pod install

4 - To Run the application on IOS run: npx react-native run-ios
  - To Run the application on Android run: npx react-native run-android

## To Run E2E Testing

Run the following commands: 


For testing on iOS
Build the iOS app using:

detox build -c ios.sim.release

Start the test using:

detox test -c ios.sim.release
