//----- Component Import Statement -----//
import React from "react";
import { StyleSheet, Text, Pressable, ActivityIndicator, View } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Color } from "../../common";


const Button = (props) => {
    return (
        props.loading == true ?
            <View style={styles.buttonStyle}>
                <ActivityIndicator size={'small'} color={Color.white} />
            </View> :
            <Pressable
                onPress={() => props.onPress()}
                style={styles.buttonStyle}>
                <Text style={styles.buttonTextStyle}>
                    {props.title}
                </Text>
            </Pressable>
    )
}

//----- Component Stylesheet -----//
const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: Color.black,
        marginHorizontal: wp(10),
        height: hp(6),
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonTextStyle: {
        fontSize: 20,
        color: Color.white,
        fontWeight: '500'
    }
})

export default Button;