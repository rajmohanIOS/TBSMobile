import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity, ImageBackground } from 'react-native';
import ProfileComponent from '../component/ProfileComponent';

const HelpModel = ({ visible, onPress, closeModel }) => {

    return (
        <Modal animationType='slide' transparent={true} visible={visible}  >

            <View style={styles.centeredView}>
                {/* <ImageBackground source={require('../assets/appBackgroundImage.png')} style={{ height: '100%'}} > */}
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Help</Text>
                    <ProfileComponent title={'Mail us'} image={require('../assets/mail.png')} value={'info@theebusstand.com'} onPress={closeModel} titleStyle={styles.titleText} valueStyle={styles.titleText} divider={true} />
                    <ProfileComponent title={'Call us'} image={require('../assets/phone.png')} value={'+91 9988776655'} titleStyle={styles.titleText} valueStyle={styles.titleText} divider={true} />
                </View>
                {/* </ImageBackground> */}
            </View>

        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',

    },
    modalView: {
        // height: 60,
        backgroundColor: 'white',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        padding: 30,
        display: 'flex',
        gap: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    titleText: {
        color: '#1F487C',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 16,
    },
    modalText: {
        color: '#1F487C',
        fontWeight: '600',
        fontSize: 20,
        lineHeight: 24,
        textAlign: 'left',
    },
});

export default HelpModel;