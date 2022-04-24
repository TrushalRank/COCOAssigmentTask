//----- Component Import Statement -----//
import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { Color } from "../../common";
import { Dropdown, MultiSelect } from 'react-native-element-dropdown';

const gender = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
];

export const interests = [
    { label: 'Fashion', value: 'Fashion' },
    { label: 'Gaming', value: 'Gaming' },
    { label: 'Health', value: 'Health' },
    { label: 'Technology', value: 'Technology' },
    { label: 'Food & Drinks', value: 'Food & Drinks' },
    { label: 'Travel', value: 'Travel' }
];

const fieldView = (props) => {
    switch (props.title) {
        case 'Gender':
            return <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={gender}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'Select item'}
                searchPlaceholder="Search..."
                value={props.value}
                onChange={item => {
                    props.onPress(item.value)
                }}
            />
        case 'Interests':
            return <MultiSelect
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={interests}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'Select item'}
                searchPlaceholder="Search..."
                value={props.value}
                activeColor={Color.lightBlue}
                onChange={item => {
                    props.onPress(item)
                }}
                renderSelectedItem={() => null}
                selectedStyle={styles.selectedStyle}
            />
        default:
            return <TextInput style={styles.textFieldStyle} onChangeText={(text) => props.onChangeText(text)} />
    }
}
const TextField = (props) => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.textFieldTitle}>{props.title}</Text>
            {fieldView(props)}
        </View>
    )
}

//----- Component Stylesheet -----//
const styles = StyleSheet.create({
    mainContainer: {
        marginHorizontal: 20
    },
    textFieldTitle: {
        marginVertical: 10,
        fontSize: 16,
        color: Color.black
    },
    textFieldStyle: {
        height: 40,
        backgroundColor: Color.lightGray,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Color.lightBlue,
        paddingHorizontal: 10,
        justifyContent: 'center',
        color: Color.black
    },
    dropdown: {
        height: 40,
        borderColor: Color.lightBlue,
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
        color: Color.black
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    selectedStyle: {
        borderRadius: 5
    },
    interestDropdownStyle: {
        height: 40,
        backgroundColor: 'transparent',
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
    }
})

export default TextField;