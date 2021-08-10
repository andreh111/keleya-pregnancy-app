# keleya-pregnancy-app

## Install Dependencies and run the application

1 - Clone the repository

2 - Go to the project folder and run : <mark>npm install or yarn install</mark>

3 - Go to the ios folder and run: pod install

4 - To Run the application on IOS run: <mark>npx react-native run-ios</mark>
  - To Run the application on Android run: <mark>npx react-native run-android</mark>

## To Run E2E Testing

Run the following commands: 


For testing on iOS
Build the iOS app using:

<mark>detox build -c ios.sim.release</mark>

Start the test using:

<mark>detox test -c ios.sim.release</mark>

To view the recording of the Tests:

<h4>Signup Flow Recording</h4>
https://github.com/andreh111/keleya-pregnancy-app/blob/master/artifacts/ios.sim.release.2021-08-10%2008-39-15Z/%E2%9C%93%20Signup%20Flow%20Signup%20Steps%20should%20go%20with%20all%20register%20process/test.mp4

<h4>Signin Flow recording </h4>
https://github.com/andreh111/keleya-pregnancy-app/blob/master/artifacts/ios.sim.release.2021-08-10%2008-39-15Z/%E2%9C%93%20Login%20Flow%20Login%20Steps%20should%20walk%20in%20the%20login%20process/test.mp4
