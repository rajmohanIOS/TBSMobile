import { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, ScrollView, ImageBackground, Image } from "react-native";
import { WebView } from 'react-native-webview';

const CMS = ({ route }) => {

    console.log('route', route)

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../../assets/appBackgroundImage.png')} style={{ height: '100%', width: '100%' }}>
                {
                    route?.params?.data === 'privacy' ? <WebView source={{ uri: 'https://reactnative.dev/' }} style={{ flex: 1 }} /> :
                        route?.params?.data === 'terms' ? <WebView source={{ uri: 'https://www.npmjs.com/package/react-native-webview' }} style={{ flex: 1 }} /> :
                            route?.params?.data === 'user' ? <WebView source={{ uri: 'https://www.npmjs.com/package/rn-range-slider' }} style={{ flex: 1 }} /> : <View></View>
                }
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5FFF1',
    },
    headerView: {
        padding: 20,
        display: 'flex',
        gap: 20
    },
    busView: {
        //    backgroundColor: '#000',
        alignItems: 'center'
    },
    contentView: {
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 20,
        display: 'flex',
        gap: 20
    },
    contentText: {
        fontSize: 12,
        fontWeight: '400',
        color: '#1F487C',
        lineHeight: 20,
        textAlign: 'justify'
    },
    privacyView: {
        padding: 20,
        gap: 25
    },
    titleText: {
        fontSize: 14,
        fontWeight: '400',
        color: '#1F487C',
        lineHeight: 16,
    },
    imgStyle: {
        height: 25,
        width: 22
    },
    contentView: {
        padding: 20,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    verticalContent: {
        padding: 20,
        flex: 1,
        flexDirection: 'row',
        height: 500,
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    subHeader: {
        backgroundColor: "#2089dc",
        color: "white",
        textAlign: "center",
        paddingVertical: 5,
        marginBottom: 10
    }
})

export default CMS