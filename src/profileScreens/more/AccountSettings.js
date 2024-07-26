import { useState } from "react";
import { StyleSheet, SafeAreaView, ScrollView, View, Text, TouchableOpacity, Image, ImageBackground } from "react-native";
import ProfileComponent from "../../component/ProfileComponent";
import LogoutModel from "../../models/LogoutModel";


const AccountSettings = ({ navigation }) => {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../../assets/appBackgroundImage.png')} style={{ height: '100%', width: '100%' }}>
                <ScrollView style={styles.scrollView}>

                    <View style={styles.view}>
                        <ProfileComponent onPress={() => setModalVisible(true)} title={'Log Out'} image={require('../../assets/logout.png')} titleStyle={styles.titleStyle} componentStyle={styles.componentStyle} imageStyle={styles.imageStyle} />
                    </View>

                    <View style={styles.view}>
                        <ProfileComponent onPress={() => navigation.navigate('DeleteAcoount')} title={'Delete Account'} image={require('../../assets/delete.png')} titleStyle={styles.valueStyle} componentStyle={styles.componentStyle} imageStyle={styles.imageStyle} />
                    </View>

                </ScrollView>

                <LogoutModel
                    visible={modalVisible}
                    closeModel={() => {
                        setModalVisible(false)

                    }}
                />
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
        // display: 'flex',
        // flexDirection: 'column',
        // padding: 20,
        // marginTop: 20,
    },
    componentStyle: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
        alignItems: 'center',
    },
    view: {
        marginTop: 20,
        padding: 20,
        display: 'flex',
        gap: 20,
        backgroundColor: '#fff',
    },
    imageStyle: {
        height: 20,
        width: 20
    },
    titleStyle: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 16,
        color: '#1F487C'
    },
    valueStyle: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 16,
        color: '#C32629'
    },

})
export default AccountSettings