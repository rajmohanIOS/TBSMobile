import React from "react";
import { SafeAreaView, View, TouchableOpacity, Text, Image, StyleSheet, ScrollView, ImageBackground } from "react-native";
import { TextInput } from "react-native-gesture-handler";


const HelpScreen = () => {


    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../assets/appBackgroundImage.png')} style={{ height: '100%', width: '100%' }} >
                <ScrollView>

                    <View style={styles.ScroView}>
                        <View>
                            <Text style={styles.firstText}>Get in Touch</Text>
                        </View>

                        <View>
                            <Text style={styles.contentText}>If you have any inquiries get in touch with us. We’ll be happy to help you.</Text>
                        </View>

                        <View style={styles.phoneView}>


                            <Image source={require('../assets/phone.png')} />
                            <View style={styles.phoneTextView}>
                                <Text style={styles.phoneText}>+91 9988776655</Text>
                            </View>

                        </View>

                        <View style={styles.phoneView}>
                            <Image source={require('../assets/mail.png')} />

                            <View style={styles.phoneTextView}>
                                <Text style={styles.phoneText}>info@theebusstand.com</Text>
                            </View>
                        </View>

                        <View>
                            <Text style={styles.firstText}>Feel free to ask your query :)</Text>
                        </View>

                        <View style={styles.helpView} >
                            <View>
                                <Text style={styles.nameText}>Name*</Text>
                                <TextInput style={styles.nameTexfield} />
                            </View>

                            <View>
                                <Text style={styles.nameText}>Email*</Text>
                                <TextInput style={styles.nameTexfield} />
                            </View>

                            <View>
                                <Text style={styles.nameText}>Message*</Text>
                                <TextInput style={[styles.nameTexfield, { minHeight: 150 }]} multiline />
                            </View>

                        </View>

                        <TouchableOpacity style={styles.submitView} >
                            <Text style={styles.submitText}>Submit</Text>
                        </TouchableOpacity>

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
    ScroView: {
        display: 'flex',
        padding: 20,
        gap: 20,
    },
    firstText: {
        fontSize: 20,
        fontWeight: '500',
        lineHeight: 24,
        color: '#1F487C',
        textAlign: 'center',
    },
    contentText: {
        fontSize: 15,
        fontWeight: '400',
        lineHeight: 22,
        color: '#1F487C',
    },
    phoneView: {
        borderWidth: 0.5,
        borderRadius: 10,
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#fff',
        borderColor: '#1F487C',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 40,
    },
    phoneTextView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '80%',
    },
    phoneText: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 19,
        color: '#1F487C',
        textAlign: 'left',
    },
    helpView: {
        borderWidth: 0.5,
        borderColor: '#1F487C',
        borderRadius: 15,
        padding: 20,
        backgroundColor: '#fff',
        display: 'flex',
        gap: 15
    },
    nameText: {
        fontSize: 15,
        fontWeight: '400',
        lineHeight: 19,
        color: '#1F487C',
    },
    nameTexfield: {
        borderRadius: 15,
        padding: 15,
        backgroundColor: '#D6EBFF80',

    },
    submitView: {
        backgroundColor: '#1F487C',
        borderRadius: 25,
        padding: 15,
    },
    submitText: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 19,
        color: '#FFFFFF',
        textAlign: 'center'
    }


})

export default HelpScreen