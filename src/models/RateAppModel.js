import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity, ImageBackground, Image } from 'react-native';
import ProfileComponent from '../component/ProfileComponent';
import { Rating } from '@rneui/themed';
import { TextInput } from 'react-native-gesture-handler';

const RateAppModel = ({ visible, onPress, closeModel }) => {

    const [review, setReview] = useState(null)
    const [rating, setRating] = useState(0)

    const ratingCompleted = (rating) => {
        console.log('Rating is: ' + rating);
    };

    const Rating = (value) => {

        if (value === 1) {
            return '#FF2B2B'
        }
        if (value === 2) {
            return '#FF4A22'
        }
        if (value === 3) {
            return '#F3880A'
        }
        if (value === 4) {
            return '#FFA800'
        }
        if (value === 5) {
            return '#FFDD2B'
        }


        return (
            '#FF2B2B'
        )
    }


    return (
        <Modal animationType='slide' transparent={true} visible={visible}  >
            <View style={styles.centeredView}>

                <View style={styles.modalView}>
                    {rating < 1 ?
                        <ImageBackground source={require('../assets/Rate.gif')} style={{ overflow: 'hidden' }}>
                            <View style={{ height: 292, padding: 20 }}>
                                <Text style={styles.modalText}>Enjoying the Tbs App?</Text>
                            </View>
                        </ImageBackground>
                        : <View style={{ padding: 20 }}>
                            <Text style={styles.modalText}>Enjoying the Tbs App?</Text>
                        </View>
                    }

                    <View style={styles.subView}>
                        <Text style={styles.subTitleText}>Rate your experience with the Tbs App</Text>
                    </View>


                    <View style={{ justifyContent: 'space-evenly', flexDirection: 'row' }}>

                        <TouchableOpacity onPress={() => setRating(1)}>
                            <Image source={require('../assets/Rate.png')} style={[rating >= 1 && { borderRadius: 90, tintColor: Rating(rating), borderColor: '#FF2B2B' }]} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setRating(2)}>
                            <Image source={require('../assets/Rate.png')} style={[rating >= 2 && { borderRadius: 90, tintColor: Rating(rating), borderColor: '#FF4A22' }]} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setRating(3)}>
                            <Image source={require('../assets/Rate.png')} style={[rating >= 3 && { borderRadius: 90, tintColor: Rating(rating), borderColor: '#F3880A' }]} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setRating(4)}>
                            <Image source={require('../assets/Rate.png')} style={[rating >= 4 && { borderRadius: 90, tintColor: Rating(rating), borderColor: '#FFA800' }]} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setRating(5)}>
                            <Image source={require('../assets/Rate.png')} style={[rating >= 5 && { borderRadius: 90, tintColor: Rating(rating), borderColor: '#FFDD2B' }]} />
                        </TouchableOpacity>

                    </View>

                    <View>
                        <Text style={[rating === 1 ? { color: '#FF2B2B', fontWeight: '500', fontSize: 14, lineHeight: 21, textAlign: 'center' } : rating === 2 ? { color: '#FF4A22', fontWeight: '500', fontSize: 14, lineHeight: 21, textAlign: 'center' } : rating === 3 ? { color: '#F3880A', fontWeight: '500', fontSize: 14, lineHeight: 21, textAlign: 'center' } : rating === 4 ? { color: '#FFA800', fontWeight: '500', fontSize: 14, lineHeight: 21, textAlign: 'center' } : rating === 5 ? { color: '#FFDD2B', fontWeight: '500', fontSize: 14, lineHeight: 21, textAlign: 'center' } : { fontWeight: '500', fontSize: 14, lineHeight: 21, textAlign: 'center' }]}>{rating === 1 ? 'Terrible' : rating === 2 ? 'Bad' : rating === 3 ? 'Okay' : rating === 4 ? 'Good' : rating === 5 ? 'Excellent' : ''}</Text>
                    </View>

                    {rating >=1 &&
                        <View style={styles.feebackView}>
                            <TextInput multiline style={{ minHeight: 130 }} placeholder='Write your feedback :)' />
                        </View>
                    }

                    <TouchableOpacity onPress={closeModel} style={styles.submitView} >
                        <Text style={styles.submitText}>Submit</Text>
                    </TouchableOpacity>

                </View>

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
        // padding: 30,
        overflow: 'hidden',
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
        marginRight: 20,
        marginBottom: 30
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