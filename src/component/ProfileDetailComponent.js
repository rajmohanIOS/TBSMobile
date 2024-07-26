import React, { useEffect, useState } from 'react';
import { View, ImageBackground, Text, StyleSheet } from 'react-native';

const getTimeOfDay = () => {
    const currentHour = new Date().getHours();

    if (currentHour >= 6 && currentHour < 12) {
        return 'morning';
    } else if (currentHour >= 12 && currentHour < 18) {
        return 'afternoon';
    } else {
        return 'night';
    }
};

const getBackgroundImage = (timeOfDay) => {
    switch (timeOfDay) {
        case 'morning':
            return require('../assets/Morning.png');
        case 'afternoon':
            return require('../assets/Evening.png');
        case 'night':
            return require('../assets/Night.png');
        default:
        //   return require('./assets/default.jpg'); 
    }
};

const ProfileDetailComponent = ({ name, mobile, since }) => {
    const [timeOfDay, setTimeOfDay] = useState(getTimeOfDay());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeOfDay(getTimeOfDay());
        }, 60000);

        return () => clearInterval(interval);
    }, []);

    const backgroundImage = getBackgroundImage(timeOfDay);

    return (
        <ImageBackground source={backgroundImage} resizeMode='cover' style={styles.backgroundImage}>
            <View style={styles.overlay}>
                <Text style={styles.text}>{name}</Text>
                <Text style={styles.text1}>{mobile}</Text>
                <Text style={styles.text1}>{since}</Text>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        justifyContent: 'flex-end',
        height: 125
    },
    overlay: {
        padding: 10,
        display: 'flex',
        gap: 5
    },
    text: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 19
    },
    text1: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 16
    },
});

export default ProfileDetailComponent;
