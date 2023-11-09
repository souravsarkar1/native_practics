import { registerRootComponent } from 'expo';
import * as React from 'react';
// import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper'; // Updated import for PaperProvider
import App from './App';
// import { name as appName } from './app.json';

function Main() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}

registerRootComponent(Main);

// If you are using React Native without Expo, you can use the following instead of registerRootComponent:
// AppRegistry.registerComponent(appName, () => Main);
