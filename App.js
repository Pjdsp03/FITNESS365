
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens/Home';
import { WorkoutsScreen } from './screens/Workouts';
import { NutritionScreen } from './screens/Nutrition';
import { ProfileScreen } from './screens/Profile';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerStyle: { backgroundColor: '#000' }, headerTintColor: '#fff' }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'FITNESS365' }} />
        <Stack.Screen name="Workouts" component={WorkoutsScreen} />
        <Stack.Screen name="Nutrition" component={NutritionScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
