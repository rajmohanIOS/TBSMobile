
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from '../bottomnavigation/ProfileScreen';
import HelpScreen from '../bottomnavigation/HelpScreen';
import HomeScreen from '../bottomnavigation/HomeScreen';
import BookingHistory from '../bottomnavigation/BookingHistory';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator screenOptions={{tabBarStyle: {backgroundColor: '#1F487C'}}} >
      <Tab.Screen name="HomeScreen" component={HomeScreen} options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ focused, color }) => {
          return (

              <Image source={require('../assets/home.png')}
              resizeMode='contain'
              style={{ tintColor: focused ? '#FFF' : '#FFF' }}
            />


          )
        }
      }} />
      <Tab.Screen name="BookingHistory" component={BookingHistory} />
      <Tab.Screen name="HelpScreen" component={HelpScreen} options={{ headerShown: true, headerTitle: 'Help & Support', headerTitleStyle: {color: '#fff', fontSize: 20, fontWeight: '700', lineHeight: 20}, headerStyle: {backgroundColor: '#1F487C', } }} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: true, headerTitle: ' ', headerStyle: {backgroundColor: '#1F487C', height: 60 } }} />
    </Tab.Navigator>
  );
}

export default BottomTabs