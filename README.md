#  RNCamera Example

[React native camera](https://react-native-community.github.io/react-native-camera/docs/rncamera) example.

## Running on physical device (Android)

1. [Set up the environment](https://reactnative.dev/docs/environment-setup).
2. Plug the smartphone.
3. Install dependencies: `yarn install`.
4. Run the app: `npx react-native run-android`.


### Running on emulated smartphone (iOS)

1. [Set up the environment](https://reactnative.dev/docs/environment-setup).
2. Install dependencies: `yarn install`.
3. Install macOS dependencies : `cd ios/` and `pod install`
4. Run the app: `npx react-native run-ios`.


> `pod` ([CocoaPod](https://cocoapods.org/)) is a command to manage dependencies for Swift and Objective-C. It can be installed with `sudo gem install cocoapods` (don't install it with `brew`). Also, Command Line Tools and XCode IDE is required.

## Throubleshoting

Sometimes firewall can block connections to the Metro server. Try running it on different port (default port is 8081):

`npx react-native run-android --port=8082`

> To test the Metro server just open http:\\localhost:8081
