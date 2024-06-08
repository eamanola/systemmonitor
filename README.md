# System monitor

This is an app to repurpose old android/ios devices as internal system monitor.

Features:

- selecting an image, or video background

- setting server (your pc) address

- setting poll interval

- displaying cpu, and gpu

  * temperture

  * usage

  * name

  * and fan speed

  * memory usage (gpu)

## road map

- all fan speeds

- theme support

- general linux backend

- general windows backend

### help wanted

- general dev fun

- testing / dev on ios

- testing / dev on windows

- testing / dev ati gpu on linux

- UI / UX elements

- creating themes

## backend

In addition a data-provider is required to run on the pc.

A sample implementation and starting point, for a linux machine, with nvidia gpu, can be found here:

https://github.com/eamanola/sensors-server

### backend-reqs

#### /health
* status: 200
* Content-type: "text/plain"
* body: "OK"

#### /sensors
* status: 200
* Content-type, "application/json"
* body:

```
{
    cpu: {
        name: string,
        fanspeed: [value: number, unit: string],
        temperture: [value: number, unit: string],
        utilization: [value: number(0-100), unit: '%'],
    },
    gpu: {
        name: string,
        fanspeed: [value: number, unit: string],
        temperture: [value: number, unit: string],
        utilization: [value: number(0-100), unit: '%'],
        memory: [value: number(0-100), unit: '%'],
    },
}
```

## adb

As the device will be behind a glass, no touch available, it is recommended to use adb for interaction (ios equialent?).

[sensors-server/adb](https://github.com/eamanola/sensors-server/tree/master/adb) contains some useful commands for interacting with the phone, eg sleep / wakeup / and unlock, over usb.

# Development & building

This is a vanilla react-native, with all ts stripped out. please see below, and refer to react-native sources for more info on howtos.

# React-native
This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

## Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

### Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

### Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

#### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

#### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

### Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

### Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

#### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

## Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

## Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
