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
        <View>
            <ImageBackground source={backgroundImage} resizeMode='cover' style={styles.backgroundImage}>
                <View style={styles.overlay}>
                    <Text style={styles.text}>{name}</Text>
                    <Text style={styles.text1}>{mobile}</Text>
                    <Text style={styles.text1}>{since}</Text>
                </View>
            </ImageBackground>
            <View style={{ backgroundColor: '#fff', padding: 20, flexDirection: 'row', justifyContent: 'space-around' }}>
                <View style={styles.whitView}>
                    <Text style={styles.text3}>3</Text>
                    <Text style={styles.text4}>Total Trips</Text>
                </View>

                <View style={styles.whitView}>
                    <Text style={styles.text3}>767 kms</Text>
                    <Text style={styles.text4}>Travelled</Text>
                </View>
            </View>
        </View>
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
    whitView: {
        // backgroundColor: '#000',
        // flexDirection: 'row',
        display: 'flex',
        // justifyContent: 'space-evenly'
    },
    text3: {
        color: '#1F487C',
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 20,
        textAlign: 'center'
    },
    text4: {
        color: '#1F487C',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 20,
        textAlign: 'center'
    }

});

export default ProfileDetailComponent;
