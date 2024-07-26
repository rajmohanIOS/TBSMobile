import React from "react";
import { SafeAreaView, View, Text, StyleSheet, ScrollView, ImageBackground, Image } from "react-native";
import ProfileComponent from "../../component/ProfileComponent";

const AboutUs = () => {


    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../../assets/appBackgroundImage.png')} style={{ height: '100%', width: '100%' }}>

                <ScrollView>

                    <View style={styles.headerView}>
                        <View style={styles.busView}>
                            <Image source={require('../../assets/tbsBus.png')} />
                        </View>

                        <View style={styles.contentView}>
                            <Text style={styles.contentText}>Designed exclusively for travellers, TBS’s pioneering technology consolidates your bus booking into one easy-to-use platform, custom built to your exact requirements.</Text>
                            <Text style={styles.contentText}>Booking bus has always proved challenging for Passengers. TBS makes it simple to configure each client’s preferences and then curates search results to show in-policy rates first, guaranteeing satisfied customers.</Text>
                            <Text style={styles.contentText}>With TBS, finding the right bus is just a few clicks away. You no longer need to hop from platform to platform as it connects to all the key players and Operator sources you use and presents the options in one easy-to-compare view.</Text>
                        </View>

                        <View style={styles.privacyView}>
                            <ProfileComponent title={'Privacy Policy'} titleStyle={styles.titleText} image={require('../../assets/privacypolicy.png')} imageStyle={styles.imgStyle} divider={true} />
                            <ProfileComponent title={'Terms & Conditions'} titleStyle={styles.titleText} image={require('../../assets/terms.png')} imageStyle={styles.imgStyle} divider={true} />
                            <ProfileComponent title={'User Agreement'} titleStyle={styles.titleText} image={require('../../assets/terms.png')} imageStyle={styles.imgStyle} divider={true} />
                        </View>
                    </View>

                </ScrollView>
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
    }


})

export default AboutUs