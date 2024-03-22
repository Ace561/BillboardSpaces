import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './Screens/authContext';
import Onboarding1 from './Screens/Onboarding1'
import Onboarding2 from './Screens/Onboarding2';
import Onboarding3 from './Screens/Onboarding3';
import Onboarding4 from './Screens/Onboarding4';
import CreatAccount from './Screens/CreatAccount';
import SignIn from './Screens/SignIn';
import About from './Screens/About';
import About1 from './Screens/About1';
import HomeScreen from './Screens/HomeScreen';
import Billboardclicked from './Screens/Billboardclicked';
import Tabs from './Screens/Tab/Tabs';
import SetAdvertisingDuration from './Screens/SetAdvertisingDuration';
import Subscription from './Screens/Subscription';
import Advertisement from './Screens/Advertisement';
import MaintenanceBooking from './Screens/MaintenanceBooking';
import BookingForm from './Screens/BookingForm';

const Stack = createStackNavigator();


function App() {
  StatusBar.setHidden(false);
  StatusBar.setTranslucent(true);

  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Onboarding1">
          <Stack.Screen options={{ headerShown: false }} name="Home" component={Tabs} />
          <Stack.Screen options={{ headerShown: false }} name="Onboarding1" component={Onboarding1} />
          <Stack.Screen options={{ headerShown: false }} name="Onboarding2" component={Onboarding2} />
          <Stack.Screen options={{ headerShown: false }} name="Onboarding3" component={Onboarding3} />
          <Stack.Screen options={{ headerShown: false }} name="Onboarding4" component={Onboarding4} />
          <Stack.Screen options={{ headerShown: false }} name="CreatAccount" component={CreatAccount} />
          <Stack.Screen options={{ headerShown: false }} name="SignIn" component={SignIn} />
          <Stack.Screen options={{ headerShown: false }} name="About" component={About} />
          <Stack.Screen options={{ headerShown: false }} name="About1" component={About1} />
          <Stack.Screen options={{ headerShown: false }} name="Billboardclicked" component={Billboardclicked} />
          <Stack.Screen options={{}} name="Set Advertising Duration" component={SetAdvertisingDuration} />
          <Stack.Screen options={{}} name="Subscription" component={Subscription} />
          <Stack.Screen options={{}} name="Advertisement" component={Advertisement} />
          <Stack.Screen options={{}} name="Maintenance Booking" component={MaintenanceBooking} />
          <Stack.Screen options={{}} name="Booking Form" component={BookingForm} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}


export default App;
