# BNews - Your Customizable News Web & Mobile App

BNews is a dynamic web and mobile application that keeps you up-to-date with the latest news while allowing you to personalize your news feed based on specific categories. With BNews, you can effortlessly stay informed about global events, all from the convenience of your web browser or mobile device..

## Web App
![image](https://github.com/biswadeep-roy/News-App/assets/74821633/c2d579c7-c6d8-4f2b-b104-8267846719f2)


### Getting Started

#### Prerequisites

Before you dive in, ensure you have the following prerequisites in place:

- Node.js: You must have Node.js installed on your machine.
- API Key: Obtain an API key from a news provider like News API.

#### Installation

Let's set up the BNews web app on your local machine:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/biswadeep-roy/BNews-web-app.git
   ```
2. Navigate to the project directory:
   ``` bash
   cd BNews-web-app

    ```

3. Install the project dependencies:
   ``` bash
   npm install
   ```
### Configuration
To make BNews work seamlessly, you need to configure your API key:

Create a .env file in the root directory of the project.

Add your API key to the .env file:

 ``` bash
REACT_APP_API_KEY=your-api-key-here
```

Replace your-api-key-here with your actual API key.

### Usage
Once you've configured your API key, start the BNews web app with the following command:

``` bash
npm start
```

This command will launch the development server, and you can access the app by opening your web browser and visiting http://localhost:3000.

### Features
BNews offers a range of features to enhance your news consumption experience:

Latest News: Stay updated with the most recent news headlines from around the world.
Customization: Tailor your news feed by selecting specific news categories that interest you the most.
Convenience: Access current events and breaking news without leaving your web browser.
Contributing
Contributions to BNews are welcome. If you'd like to contribute, please follow the Contribution Guidelines.

## License
This project is open-source and licensed under the MIT License. For more details, please refer to the LICENSE file.

### Mobile App (React Native)



https://github.com/biswadeep-roy/News-App/assets/74821633/f5f98e98-2ddd-4cc4-a01e-2b414004dc68


BNews Mobile App: React Native-powered, offering latest global news. Customize your feed, contact the developer, and build your APK using Expo EAS CLI for Android. Stay connected on the go!


## Getting Started
Prerequisites
Before you begin, ensure you have the following prerequisites in place:

Node.js: You must have Node.js installed on your machine.
Expo CLI: Install Expo CLI globally by running npm install -g expo-cli.
API Key: Obtain an API key from a news provider like News API.
Installation
Let's set up the BNews mobile app on your local machine:

1. Clone this repository to your local machine:

   ``` bash
   git clone https://github.com/biswadeep-roy/BNews-mobile-app.git

   ```
2. Navigate to the project directory:
   ``` bash
   cd BNews-mobile-app
   ```
3. Install the project dependencies:
   ``` bash
   npm install
   ```
4. Usage
To run the BNews mobile app, use the following command:
   ``` bash
   npx expo start
   ```

This will launch the Expo development server. You can then use the Expo Go app on your mobile device to scan the QR code and preview the app.

5. Building APK:

Users can also build the APK on their own using the Expo EAS (Expo Application Services) CLI. Follow these steps:

Install the EAS CLI globally:
``` bash
npm install -g eas-cli
```

Log in to Expo EAS:
``` bash
eas login
```

Configure the build settings:
``` bash
eas build:configure
```

Build the APK (Android):
``` bash
eas build --platform android
```

Users can customize the build process further using the eas.json file generated during the configuration step.


### Contact Developer
To contact the developer or provide feedback, use the "Contact Me" feature within the app. Fill in your name, email, and message, and the developer will receive your email.

### Features
BNews Mobile App offers the following features:

Latest News: Stay updated with the most recent news headlines from around the world.
Customization: Tailor your news feed by selecting specific news categories that interest you the most.
Contact Developer: Easily send emails to the developer for inquiries or feedback.
Contributing
Contributions to the BNews Mobile App are welcome. If you'd like to contribute, please follow the Contribution Guidelines.

License
This project is open-source and licensed under the MIT License. For more details, please refer to the LICENSE file.
