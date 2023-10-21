import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding1 from './Screens/Onboarding1'
import Onboarding2 from './Screens/Onboarding2';
import Onboarding3 from './Screens/Onboarding3';
import Onboarding4 from './Screens/Onboarding4';
import CreatAccount from './Screens/CreatAccount';

const Stack = createStackNavigator();


function App() {
  StatusBar.setHidden(false);
  StatusBar.setTranslucent(true)

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding1">
        <Stack.Screen options={{ headerShown: false }} name="Onboarding1" component={Onboarding1} />
        <Stack.Screen options={{ headerShown: false }} name="Onboarding2" component={Onboarding2} />
        <Stack.Screen options={{ headerShown: false }} name="Onboarding3" component={Onboarding3} />
        <Stack.Screen options={{ headerShown: false }} name="Onboarding4" component={Onboarding4} />
        <Stack.Screen options={{ headerShown: false }} name="CreatAccount" component={CreatAccount} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
