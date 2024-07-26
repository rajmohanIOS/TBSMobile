import { useState } from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet, SafeAreaView, TextInput } from "react-native";
import TextField from "./TextField";
import { CheckBox, Icon } from '@rneui/themed';
import { Dropdown } from 'react-native-element-dropdown';
import CountryPicker from 'react-native-country-picker-modal';

const ContactDetailsComponent = ({ image, title, onPress, titleStyle, valueStyle }) => {

    const allowedCountries = ['IN', 'AE'];
    const [value, setValue] = useState('')
    const [error, setError] = useState(null)
    const [selectedIndex, setIndex] = useState(0);
    const [isCountryPickerVisible, setCountryPickerVisible] = useState(false);
    const [countryCode, setCountryCode] = useState('IN');
    const [countryName, setCountryName] = useState('India');
    const [dialCode, setDialCode] = useState('91');

    const renderFlagButton = () => (
        <TouchableOpacity onPress={() => setCountryPickerVisible(true)}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ width: 28.88, height: 20 }}>
                    {getFlagEmoji(countryCode)}
                </Text>
                <Text style={{ height: 20 }}>
                    {'+'}
                    {`${dialCode}`}
                </Text>
            </View>
        </TouchableOpacity>
    );

    const getFlagEmoji = countryCode => {
        const codePoints = countryCode
            .toUpperCase()
            .split('')
            .map(char => 127397 + char.charCodeAt());
        return String.fromCodePoint(...codePoints);
    };

    const onCountrySelect = country => {
        setCountryCode(country.cca2);
        setCountryName(country.name);
        setDialCode(country.callingCode[0]);
        setCountryPickerVisible(false); // Close the picker after selection
    };

    const data = [
        { label: 'Item 1', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
        { label: 'Item 4', value: '4' },
        { label: 'Item 5', value: '5' },
        { label: 'Item 6', value: '6' },
        { label: 'Item 7', value: '7' },
        { label: 'Item 8', value: '8' },
    ];

    return (
        <View style={styles.container}>

            <View>
                <Text style={styles.titleText}>Contact Details</Text>
            </View>

            <View style={styles.input}>
                <Text style={styles.label}>State of residence</Text>
                <Dropdown
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={data}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder="Select item"
                    searchPlaceholder="Search..."
                    value={value}
                    onChange={item => {
                        setValue(item.value);
                    }}
                />
            </View>


            <View style={styles.row}>
                <View style={{ padding: 10, gap: 5 }}>
                    <Text style={[styles.label, {textAlign: 'center'}]}>Country Code</Text>
                    {renderFlagButton()}
                    {isCountryPickerVisible && (
                        <CountryPicker
                        containerButtonStyle={{justifyContent: 'center', backgroundColor: '#000'}}
                            visible={isCountryPickerVisible}
                            onClose={() => setCountryPickerVisible(false)} // Close the picker on cancel
                            onSelect={onCountrySelect}
                            closeable
                            filterable
                            filterPlaceholder="Search"
                            countryCode={countryCode}
                            withFilter
                            countries={allowedCountries} // Specify the allowed countries
                            withCountryNameButton={false}
                            withFlagButton={false} // Hide the default flag button in the picker
                        />
                    )}
                </View>

                <View style={styles.verticleLine}></View>

                <View style={{ padding: 10, gap: 5 }}>
                    <Text style={styles.label}>Mobile Number</Text>
                    <TextInput
                        placeholder="Enter Mobile Number"
                        keyboardType="phone-pad"
                    />
                </View>

            </View>

            <View style={styles.input}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    placeholder="abcd@gmail.com"
                    keyboardType="email-address"
                />
            </View>

        </View>
    )

}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 15,
        gap: 20,
    },
    titleText: {
        fontSize: 20,
        fontWeight: '600',
        lineHeight: 24,
        color: '#1F487C'
    },
    phoneView: {
        borderWidth: 0.5,
        borderRadius: 5,
        flexDirection: 'row',
        padding: 20,
        backgroundColor: '#fff',
        borderColor: '#1F487C',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    caleText: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 24,
        color: '#1F487C'
    },
    label: {
        fontSize: 14,
        color: '#1F487C80',
        fontWeight: '400',
        lineHeight: 16
    },
    input: {
        borderColor: '#1F487C',
        borderWidth: 0.5,
        borderRadius: 5,
        padding: 10,
        flex: 1,
        gap: 5
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#1F487C',
        // justifyContent: 'space-around',
        borderWidth: 0.5,
        borderRadius: 5,
        // padding: 10,
        flex: 1,
    },
    verticleLine: {
        height: '100%',
        width: 1,
        backgroundColor: '#909090',
    },




    dropdown: {
        // margin: 16,
        // height: 50,
        // borderBottomColor: 'gray',
        // borderBottomWidth: 0.5,
    },
    icon: {
        marginRight: 5,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 14,
        color: '#1F487C',
        fontWeight: '400',
        lineHeight: 16
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },

})

const pickerSelectStyles = StyleSheet.create({

    inputIOS: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        flex: 1,
    },
    inputAndroid: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        flex: 1,
    },
});


export default ContactDetailsComponent