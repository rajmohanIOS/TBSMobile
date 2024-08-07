import { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, ScrollView, ImageBackground, Image } from "react-native";


const Refferals = ({ route }) => {

    console.log('route', route)

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../../assets/appBackgroundImage.png')} style={{ height: '100%', width: '100%' }}>

            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5FFF1',
    }
})

export default Refferals