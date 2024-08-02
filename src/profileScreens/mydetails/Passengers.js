
import React from "react";
import { StyleSheet, SafeAreaView, ScrollView, View, Text, TouchableOpacity, Image, ImageBackground, FlatList } from "react-native";


const Passengers = () => {

    const data = [
        { id: '1', title: 'Raju', iconThemeColor: 'green' },
        { id: '2', title: 'Mohan', iconThemeColor: 'red' },
        { id: '3', title: 'Kalanithi', iconThemeColor: 'blue' },
        { id: '4', title: 'Dhivagar', iconThemeColor: 'orange' }
    ]

    const renderItem = ({ item }) => {

        return (
            <View style={{ display: 'flex', gap: 10, }}>
                <View style={styles.dividerView} />
                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, }}>
                    <View style={{ flexDirection: 'row', display: 'flex', gap: 10, alignItems: 'center' }}>
                        <View style={{ backgroundColor: item.iconThemeColor, padding: 15, borderRadius: 30 }}>
                            <Image source={require('../../assets/avatar.png')} />
                        </View>
                        <Text style={{ fontSize: 14, fontWeight: '400', color: '#1F487C' }}>{item.title}</Text>
                    </View>
                    <Image source={require('../../assets/Arrow.png')} />
                </TouchableOpacity>
                <View style={styles.dividerView} />
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../../assets/appBackgroundImage.png')} style={{ height: '100%', width: '100%' }} >
                <View style={styles.view}>
                    <View>
                        {/* <View style={styles.dividerView} /> */}
                        <FlatList
                            data={data}
                            renderItem={renderItem}
                            scrollEnabled={false}
                        />
                        {/* <View style={styles.dividerView} /> */}
                    </View>

                    <View style={{ padding: 20 }}>
                        <TouchableOpacity style={styles.submitView} >
                            <Image source={require('../../assets/add.png')}/>
                            <Text style={styles.submitText}>Add new passenger</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    dividerView: {
        borderBottomColor: '#1F487C',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    container: {
        flex: 1,
        backgroundColor: '#E5FFF1',
        justifyContent: 'space-between',
    },
    view: {
        flex: 1,
        marginTop: 30,
        justifyContent: 'space-between',
    },
    detailView: {

    },
    submitView: {
        flexDirection: 'row',
        backgroundColor: '#1F487C',
        borderRadius: 25,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    submitText: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 19,
        color: '#FFFFFF',
        textAlign: 'center'
    },

})
export default Passengers