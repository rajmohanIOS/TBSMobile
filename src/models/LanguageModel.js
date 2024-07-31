import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity, ImageBackground, Image, FlatList } from 'react-native';


const LanguageModel = ({ visible, onPress, closeModel }) => {

    const [selected, setSelected] = useState(null)


    // const data = [
    //     { id: '1', title: 'English' },
    //     { id: '2', title: 'தமிழ் (Tamil)' },
    //     { id: '3', title: 'മലയാളം (Malayalam)' },
    //     { id: '4', title: 'हिन्दी (Hindi)' }
    // ]

    // const renderItem = ({ item }) => {

    //     return (
    //         <View style={{ display: 'flex', gap: 10, padding: 10 }}>
    //             <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
    //                 <Text style={{ fontSize: 14, fontWeight: '400', color: '#1F487C' }}>{item.title}</Text>
    //                 <Image source={require('../assets/uncheck.png')} />
    //             </TouchableOpacity>
    //             <View style={styles.dividerView} />
    //         </View>

    //     )
    // }
    console.log('selected', selected)
    return (
        <Modal animationType='slide' transparent={true} visible={visible}  >

            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Language</Text>

                    {/* <View style={{}}>
                        <FlatList
                            data={data}
                            renderItem={renderItem}
                            scrollEnabled={false}
                        />
                    </View> */}

                    <View style={{ display: 'flex', gap: 10, padding: 10 }}>

                        <TouchableOpacity onPress={() => setSelected(1)} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                            <Text style={{ fontSize: 14, fontWeight: '400', color: '#1F487C' }}>English</Text>
                            <Image source={require('../assets/uncheck.png')} style={[selected === 1 && { backgroundColor: '#1F487C', borderRadius: 20 }]} />
                        </TouchableOpacity>
                        <View style={styles.dividerView} />

                        <TouchableOpacity onPress={() => setSelected(2)} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                            <Text style={{ fontSize: 14, fontWeight: '400', color: '#1F487C' }}>தமிழ் (Tamil)</Text>
                            <Image source={require('../assets/uncheck.png')} style={selected === 2 && { backgroundColor: '#1F487C', borderRadius: 20 }} />
                        </TouchableOpacity>
                        <View style={styles.dividerView} />

                        <TouchableOpacity onPress={() => setSelected(3)} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                            <Text style={{ fontSize: 14, fontWeight: '400', color: '#1F487C' }}>മലയാളം (Malayalam)</Text>
                            <Image source={require('../assets/uncheck.png')} style={selected === 3 && { backgroundColor: '#1F487C', borderRadius: 20 }} />
                        </TouchableOpacity>
                        <View style={styles.dividerView} />

                        <TouchableOpacity onPress={() => setSelected(4)} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                            <Text style={{ fontSize: 14, fontWeight: '400', color: '#1F487C' }}>हिन्दी (Hindi)</Text>
                            <Image source={require('../assets/uncheck.png')} style={selected === 4 && { backgroundColor: '#1F487C', borderRadius: 20 }} />
                        </TouchableOpacity>
                        <View style={styles.dividerView} />

                    </View>

                    <TouchableOpacity onPress={closeModel} style={styles.submitView} >
                        <Text style={styles.submitText}>Submit</Text>
                    </TouchableOpacity>

                </View>
            </View>

        </Modal>
    );
};

const styles = StyleSheet.create({

    dividerView: {
        borderBottomColor: '#1F487C',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    },
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
    subTitleText: {
        color: '#1F487C',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 16,
        textAlign: 'center',
    },
    submitView: {
        backgroundColor: '#1F487C',
        borderRadius: 25,
        padding: 15,
        marginLeft: 15,
        marginRight: 15
    },
    submitText: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 19,
        color: '#FFFFFF',
        textAlign: 'center'
    },

});

export default LanguageModel;