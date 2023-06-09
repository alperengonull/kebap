import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './pages/WelcomeScreen';
import MemberSign from './pages/MemberSign';


const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer >
        <Stack.Navigator>
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{headerShown:false}} />
            <Stack.Screen name="MemberSignScreen" component={MemberSign} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router;