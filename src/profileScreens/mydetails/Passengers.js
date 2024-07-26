import React from "react";
import { StyleSheet, SafeAreaView, ScrollView, View, Text, TouchableOpacity, Image, ImageBackground } from "react-native";
import ProfileComponent from "../../component/ProfileComponent";


const Passengers = () => {

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../../assets/appBackgroundImage.png')} style={{ height: '100%', width: '100%' }} >
                <View style={styles.view}>
                    <View style={styles.detailView}>
                        <ProfileComponent title={'Mithun Kumar'} value={'Male, 24 years'} titleStyle={styles.titleStyle} valueStyle={styles.valueStyle} divider={true} />
                        <ProfileComponent title={'Mithun '} value={'Male, 27 years'} titleStyle={styles.titleStyle} valueStyle={styles.valueStyle} divider={true} />
                    </View>

                    <TouchableOpacity style={styles.submitView} >
                        <Image />
                        <Text style={styles.submitText}>Add new passenger</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5FFF1',
        justifyContent: 'space-between',
    },
    scrollView: {

    },
    view: {
        flex: 1,
        padding: 20,
        justifyContent: 'space-between',
    },
    detailView: {
        display: 'flex',
        gap: 20,
        padding: 10
    },
    titleStyle: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 20,
        color: '#1F487C'
    },
    valueStyle: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 20,
        color: '#1F487C'
    },
    submitView: {
        backgroundColor: '#1F487C',
        borderRadius: 25,
        padding: 15,
        marginBottom: 20
    },
    submitText: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 19,
        color: '#FFFFFF',
        textAlign: 'center'
    }

})
export default Passengers