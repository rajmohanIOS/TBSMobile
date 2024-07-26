import React, { useState } from "react";
import { SafeAreaView, View, Text, ScrollView, Image, StyleSheet, ImageBackground, FlatList, TextInput, TouchableOpacity } from "react-native";
import DeleteAccountModel from "../../models/DeleteAccountModel";

const DeleteAcoount = () => {

    const [modalVisible, setModalVisible] = useState(false)


    const data = [
        { key: 'Your payment and booking history information will be deleted.' },
        { key: 'You will need to re-enter all your details if you decide to use Tbs services again.' },
        { key: 'You will be unsubscribed from our mailing list and stop receiving the latest deals and offers.' }
    ]

    const renderItem = ({ item }) => {
        return (
            <View style={{ paddingTop: 20, flexDirection: 'row', gap: 10, }}>
                <Text style={{ fontWeight: '600', color: '#1F487C' }}>{`\u2022`}</Text>
                <Text style={styles.pointText}>{item.key}</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../../assets/appBackgroundImage.png')} style={{ height: '100%', width: '100%' }}>

                <ScrollView>
                    <View style={styles.headerView} >

                        <View style={styles.danView}>
                            <Image source={require('../../assets/danger.png')} />
                            <Text style={styles.danText}>This action will permanently delete your account in 90 days</Text>
                        </View>

                        <View style={{}}>
                            <FlatList
                                data={data}
                                renderItem={renderItem}
                                scrollEnabled={false}
                            />
                        </View>

                        <View style={styles.paraView}>
                            <Text style={styles.paraText}>You can log in at any time within the next 90 days, until 09 Oct 2024, to cancel the deletion of your account. </Text>
                        </View>

                        <View style={styles.feedbackView}>
                            <TextInput
                                placeholder="Feedback (optional)"
                                style={{ minHeight: 130 }}
                                multiline
                            />

                        </View>

                        <View style={styles.buttonView}>
                            <TouchableOpacity style={styles.submitView} >
                                <Text style={styles.submitText}>Keep my account with Tbs</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.delView} >
                                <Text style={styles.delText}>Delete my account</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>

                <DeleteAccountModel visible={modalVisible} closeModel={() => { setModalVisible(false) }} />

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
    danView: {
        flexDirection: 'row',
        padding: 15,
        display: 'flex',
        justifyContent: 'center',
        // marginLeft: 10, marginRight: 10,
        // backgroundColor: '#000',
        gap: 10
    },
    danText: {
        // backgroundColor: '#fff',
        fontSize: 20,
        fontWeight: '600',
        lineHeight: 24,
        color: '#1F487C',
        // textAlign: 'left',
        flexWrap: 'wrap',
    },
    pointText: {
        fontWeight: '500',
        fontSize: 15,
        lineHeight: 18,
        color: '#1F487C'
    },
    paraView: {
        padding: 25,
        backgroundColor: '#D0E5FF4D',
        borderRadius: 15,

    },
    paraText: {
        fontSize: 15,
        lineHeight: 25,
        fontWeight: '400',
        color: '#1F487C',
        fontFamily: 'Inter'
    },
    feedbackView: {
        padding: 25,
        backgroundColor: '#fff',
        borderRadius: 15,
    },
    buttonView: {
        gap: 20,
        padding: 30
    },
    submitView: {
        backgroundColor: '#1F487C',
        borderRadius: 25,
        padding: 15,
    },
    delView: {
        backgroundColor: '#fff',
        borderRadius: 25,
        padding: 15,
    },
    submitText: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 19,
        color: '#FFFFFF',
        textAlign: 'center'
    },
    delText: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 19,
        color: '#1F487C',
        textAlign: 'center'
    }

})

export default DeleteAcoount