import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Text, Button, text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabActions } from '@react-navigation/native';
import Home from '../Home';
import images from '../../common/styles/image';
import styles from './styles';
import TripDetails from '../TripDetails';

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile</Text>
    </View>
  );
}
function Compass() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Compass</Text>
    </View>
  );
} function Bookmark() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bookmark</Text>
    </View>
  );
}
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Bottomtab() {
  return (
    <Tab.Navigator initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'white',
          position: "absolute",
          left: 0,
          bottom: 10,
          elevation: 0,
          borderTopWidth: 0,
        },
        tabBarOptions: { showLabel: false }
      }}
      tabBarOptions={{
        showLabel: false,
        tabBarStyle: {
          position: 'absolute',
          elevation: 0,
        }
      }}
      sceneContainerStyle={{ backgroundColor: 'white', }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused, color }) => (
            focused ?
              <View style={styles.iconView}>
                <Image source={images.home} style={styles.active} />
              </View>
              : <Image source={images.home} style={styles.home} />
          ),
        }}
      />
      <Tab.Screen
        name="compass"
        component={Compass}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused, color }) => (
            focused ?
              <View style={styles.iconView}>
                <Image source={images.compass} style={styles.active} />
              </View>
              : <Image source={images.compass} style={styles.home} />
          ),
        }}
      />
      <Tab.Screen
        name="bookmark"
        component={Bookmark}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused, color }) => (
            focused ?
              <View style={styles.iconView}>
                <Image source={images.bookmark} style={styles.active} />
              </View>
              : <Image source={images.bookmark} style={styles.home} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused, color }) => (
            focused ?
              <View style={styles.iconView}>
                <Image source={images.user} style={styles.active} />
              </View>
              : <Image source={images.user} style={styles.home} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
export default function App() {

  return (
    <NavigationContainer independent={true}>
        <Stack.Navigator
            initialRouteName=''
                screenOptions={{
                    headerShown: false
                }}
            >   
            <Stack.Screen name="Bottomtab" component={Bottomtab} />
            <Stack.Screen name="TripDetails" component={TripDetails} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
