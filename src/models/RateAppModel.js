import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity, ImageBackground, Image } from 'react-native';
import ProfileComponent from '../component/ProfileComponent';
import { Rating } from '@rneui/themed';
import { TextInput } from 'react-native-gesture-handler';

const RateAppModel = ({ visible, onPress, closeModel }) => {

    const ratingCompleted = (rating) => {
        console.log('Rating is: ' + rating);
    };


    return (
        <Modal animationType='slide' transparent={true} visible={visible}  >
            <View style={styles.centeredView}>
                {/* <ImageBackground source={require('../assets/RateAppModel.png')} > */}
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Enjoying the Tbs App?</Text>
                    <View style={styles.subView}>
                        <Text style={styles.subTitleText}>Rate your experience with the Tbs App</Text>
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 10 }}  >
                        <Rating
                            showRating
                            type="star"
                            fractions={1}
                            startingValue={0}
                            readonly
                            imageSize={40}
                            onFinishRating={ratingCompleted}
                        />
                    </View>

                    <View style={styles.feebackView}>
                        <TextInput multiline style={{ minHeight: 130 }} placeholder='Write your feedback :)' />

                    </View>

                    <TouchableOpacity onPress={closeModel} style={styles.submitView} >
                        <Text style={styles.submitText}>Submit</Text>
                    </TouchableOpacity>

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
        backgroundColor: 'white',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        padding: 30,
        display: 'flex',
        gap: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        color: '#1F487C',
        fontWeight: '600',
        fontSize: 20,
        lineHeight: 24,
    },
    subView: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
        paddingTop: 10
    },
    subTitleText: {
        color: '#1F487C',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 16,
        textAlign: 'center',
    },
    feebackView: {
        padding: 10,
        marginLeft: 20,
        marginRight: 20,
        // marginTop: 5,
        borderRadius: 10,
        borderWidth: 0.5,
        backgroundColor: 'rgba(208, 229, 255, 0.3)',
        borderColor: 'rgba(31, 72, 124, 1)',
        // maxHeight: 300
    },
    submitView: {
        backgroundColor: '#1F487C',
        borderRadius: 25,
        padding: 15,
        marginLeft: 20,
        marginRight: 20
    },
    submitText: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 19,
        color: '#FFFFFF',
        textAlign: 'center'
    },
});

export default RateAppModel;