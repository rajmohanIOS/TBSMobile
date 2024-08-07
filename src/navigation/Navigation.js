import * as React from 'react';
import { Image, StyleSheet, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './NavigationService';
import ProfileScreen from '../bottomnavigation/ProfileScreen';
import HelpScreen from '../bottomnavigation/HelpScreen';
import BottomTabs from './BottomTabs';
import PersonalInformation from '../profileScreens/mydetails/PersonalInformation';
import Passengers from '../profileScreens/mydetails/Passengers';
import AccountSettings from '../profileScreens/more/AccountSettings';
import DeleteAcoount from '../profileScreens/more/DeleteAcoount';
import AboutUs from '../profileScreens/more/AboutUs';
import CMS from '../profileScreens/more/CMS';
import Refferals from '../profileScreens/more/Refferals';



const Stack = createStackNavigator();

const Navigation = () => {
 
    const HeaderBackground = () => ( 
        <ImageBackground
            source={require('../assets/headerbackground.png')}
            resizeMode='contain'
            style={styles.headerBackground}
        />
    );

    return (
        <NavigationContainer ref={navigationRef} >
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#1F487C',
                    },
                    headerBackground: () => <HeaderBackground />,
                    headerBackImage: () => (
                        <Image
                            source={require('../assets/back.png')}
                            style={{ width: 35, height: 35, left: 15 }}
                        />
                    )
                }}
            >
                <Stack.Screen name="BottomTabs" component={BottomTabs} options={{ headerShown: false }} />
                <Stack.Screen name="HelpScreen" component={HelpScreen} options={{ headerShown: true, headerTitle: 'Help & Support', headerTitleStyle: { color: '#fff', fontSize: 20, fontWeight: '700', lineHeight: 20 }, headerStyle: { backgroundColor: '#1F487C' } }} />
                <Stack.Screen name="PersonalInformation" component={PersonalInformation} options={{ headerShown: true, headerTitle: 'Personal Information', headerBackTitle: ' ', headerTitleStyle: { color: '#fff', fontSize: 20, fontWeight: '700', lineHeight: 20 }, headerStyle: { backgroundColor: '#1F487C' } }} />
                <Stack.Screen name="Passengers" component={Passengers} options={{ headerShown: true, headerTitle: 'Passengers', headerBackTitle: ' ', headerTitleStyle: { color: '#fff', fontSize: 20, fontWeight: '700', lineHeight: 20 }, headerStyle: { backgroundColor: '#1F487C' } }} />
                <Stack.Screen name="AccountSettings" component={AccountSettings} options={{ headerShown: true, headerTitle: 'Account Settings', headerBackTitle: ' ', headerTitleStyle: { color: '#fff', fontSize: 20, fontWeight: '700', lineHeight: 20 }, headerStyle: { backgroundColor: '#1F487C' } }} />
                <Stack.Screen name="DeleteAcoount" component={DeleteAcoount} options={{ headerShown: true, headerTitle: 'Account Settings', headerBackTitle: ' ', headerTitleStyle: { color: '#fff', fontSize: 20, fontWeight: '700', lineHeight: 20 }, headerStyle: { backgroundColor: '#1F487C' } }} />
                <Stack.Screen name="AboutUs" component={AboutUs} options={{ headerShown: true, headerTitle: 'Know About Us', headerBackTitle: ' ', headerTitleStyle: { color: '#fff', fontSize: 20, fontWeight: '700', lineHeight: 20 }, headerStyle: { backgroundColor: '#1F487C' } }} />
                <Stack.Screen name="CMS" component={CMS} options={{ headerShown: true, headerTitle: 'Know About Us', headerBackTitle: ' ', headerTitleStyle: { color: '#fff', fontSize: 20, fontWeight: '700', lineHeight: 20 }, headerStyle: { backgroundColor: '#1F487C' } }} />
                <Stack.Screen name="Refferals" component={Refferals} options={{ headerShown: true, headerTitle: 'Refferals', headerBackTitle: ' ', headerTitleStyle: { color: '#fff', fontSize: 20, fontWeight: '700', lineHeight: 20 }, headerStyle: { backgroundColor: '#1F487C' } }} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    headerBackground: {
        width: '100%',
        height: '100%',
        backgroundColor: '#1F487C',
    },
});

export default Navigation;