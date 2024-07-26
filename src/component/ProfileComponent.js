import React from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";



const ProfileComponent = ({ image, title, onPress, value, titleStyle, valueStyle, imageStyle, componentStyle, divider }) => {

    return (

        <TouchableOpacity onPress={onPress}>
            <View style={[componentStyle ? componentStyle : { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }]}>
                <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                    <Image resizeMode='contain' style={[imageStyle ? imageStyle : { height: 30, width: 30 }]} source={image} />
                    <View>
                        <Text style={[titleStyle ? titleStyle : styles.titleText,]}>{title}</Text>

                        {value && <Text style={[valueStyle ? valueStyle : styles.valueText]}>{value}</Text>}
                    </View>

                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../assets/Arrow.png')} />
                </View>
            </View>
            {divider === true &&
                <View style={styles.dividerView} />
            }

        </TouchableOpacity>

    )

}
const styles = StyleSheet.create({

    dividerView: {
        borderBottomColor: '#1F487C',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    },
    titleText: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 20,
        color: '#1F487C'
    },
    valueText: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 20,
        color: '#1F487C80'
    }

})


export default ProfileComponent