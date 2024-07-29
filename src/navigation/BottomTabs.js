
import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ProfileScreen from '../bottomnavigation/ProfileScreen';
import HelpScreen from '../bottomnavigation/HelpScreen';
import HomeScreen from '../bottomnavigation/HomeScreen';
import BookingHistory from '../bottomnavigation/BookingHistory';

const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarItemStyle: { borderRadius: 25 },
        tabBarActiveBackgroundColor: 'rgba(255, 255, 255, 0.2)',
        tabBarInactiveBackgroundColor: '#1F487C',
        tabBarStyle: { backgroundColor: '#1F487C', height: 80 }
      })}
    >

      <Tab.Screen name="HomeScreen" component={HomeScreen} options={{
        tabBarLabel: 'Home',
        tabBarLabelStyle: { fontWeight: '600', fontSize: 12, lineHeight: 15, color: '#FFF', },
        tabBarIcon: ({ focused, color }) => {
          return (
            focused ?
              <Image source={require('../assets/home.gif')} resizeMode='contain' style={{ height: 40, width: 40 }} />
              :
              <Image source={require('../assets/home.png')} resizeMode='contain' />
          )
        }
      }} />

      <Tab.Screen name="BookingHistory" component={BookingHistory} options={{
        tabBarLabel: 'Bookings',
        tabBarLabelStyle: { fontWeight: '600', fontSize: 12, lineHeight: 15, color: '#FFF' },
        tabBarIcon: ({ focused, color }) => {
          return (
            focused ?
              <Image source={require('../assets/ticket.gif')} resizeMode='contain' style={{ height: 40, width: 40 }} />
              :
              <Image source={require('../assets/ticket.png')} resizeMode='contain' style={{ tintColor: focused ? '#FFF' : '#FFF' }} />
          )
        }
      }} />

      <Tab.Screen name="HelpScreen" component={HelpScreen} options={{
        headerShown: true,
        headerTitle: 'Help & Support',
        headerTitleStyle: { color: '#fff', fontSize: 20, fontWeight: '700', lineHeight: 20 },
        headerStyle: { backgroundColor: '#1F487C', },
        tabBarLabel: 'Help',
        tabBarLabelStyle: { fontWeight: '600', fontSize: 12, lineHeight: 15, color: '#FFF' },
        tabBarIcon: ({ focused, color }) => {
          return (
            focused ?
              <Image source={require('../assets/help.gif')} resizeMode='contain' style={{ height: 40, width: 40 }} />
              :
              <Image source={require('../assets/Bhelp.png')} resizeMode='contain' style={{ tintColor: focused ? '#FFF' : '#FFF' }} />
          )
        }
      }} />

      <Tab.Screen name="ProfileScreen" component={ProfileScreen} options={{
        headerShown: true,
        headerTitle: ' ',
        headerStyle: { backgroundColor: '#1F487C', height: 60 },
        tabBarLabel: 'Profile',
        tabBarLabelStyle: { fontWeight: '600', fontSize: 12, lineHeight: 15, color: '#FFF' },
        tabBarIcon: ({ focused, color }) => {
          return (
            focused ?
              <Image source={require('../assets/profile.gif')} resizeMode='contain' style={{ height: 40, width: 40 }} />
              :
              <Image source={require('../assets/profile.png')} resizeMode='contain' style={{ tintColor: focused ? '#FFF' : '#FFF' }} />
          )
        }
      }} />

    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    height: 60,
  },
  tabBarItem: {
    borderRadius: 10,
    margin: 5,
  },
  tabBarLabel: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default BottomTabs