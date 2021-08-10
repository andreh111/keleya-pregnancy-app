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

To view the recording of the Tests:

###Signup Flow Recording
https://github.com/andreh111/keleya-pregnancy-app/blob/master/artifacts/ios.sim.release.2021-08-10%2008-39-15Z/%E2%9C%93%20Signup%20Flow%20Signup%20Steps%20should%20go%20with%20all%20register%20process/test.mp4

###Signin Flow recording 
https://github.com/andreh111/keleya-pregnancy-app/blob/master/artifacts/ios.sim.release.2021-08-10%2008-39-15Z/%E2%9C%93%20Login%20Flow%20Login%20Steps%20should%20walk%20in%20the%20login%20process/test.mp4
