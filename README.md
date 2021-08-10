# keleya-pregnancy-app

## Install Dependencies and run the application

1 - Clone the repository

2 - Go to the project folder and run : <code>npm install or yarn install</code>

3 - Go to the ios folder and run: pod install

4 - To Run the application on IOS run: <code>npx react-native run-ios</code>
  - To Run the application on Android run: <code>npx react-native run-android</code>

## To Run E2E Testing

Run the following commands: 


For testing on iOS
Build the iOS app using:

<code>detox build -c ios.sim.release</code>

Start the test using:

<code>detox test -c ios.sim.release</code>

To view the recording of the Tests:

<h4>Signup Flow Recording</h4>
https://github.com/andreh111/keleya-pregnancy-app/blob/master/artifacts/ios.sim.release.2021-08-10%2008-39-15Z/%E2%9C%93%20Signup%20Flow%20Signup%20Steps%20should%20go%20with%20all%20register%20process/test.mp4

<h4>Signin Flow recording </h4>
https://github.com/andreh111/keleya-pregnancy-app/blob/master/artifacts/ios.sim.release.2021-08-10%2008-39-15Z/%E2%9C%93%20Login%20Flow%20Login%20Steps%20should%20walk%20in%20the%20login%20process/test.mp4
