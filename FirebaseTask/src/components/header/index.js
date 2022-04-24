//----- Component Import Statement -----//
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Color, Images } from "../../common";

const Header = (props) => {
    return (
        <View style={styles.headerStyle}>
            <View style={{ flex: 1 }} />
            <Text style={styles.headerTextStyle}>{props.title}</Text>
            <View style={styles.iconContainer}>
                {
                    props.isFliter == true ?
                        <TouchableOpacity onPress={() => props.onFilter()}>
                            <Image source={Images.img_filter} style={styles.iconstyle} />
                        </TouchableOpacity>
                        : null
                }
            </View>
        </View>
    )
}

//----- Component Stylesheet -----//
const styles = StyleSheet.create({
    headerStyle: {
        height: hp(6),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.lightBlue,
        flexDirection: 'row'
    },
    headerTextStyle: {
        fontSize: 18,
        color: Color.white,
        flex: 1,
        textAlign: 'center'
    },
    iconContainer: {
        flex: 1,
        alignItems: 'flex-end'
    },
    iconstyle: {
        width: wp(6),
        height: hp(3),
        tintColor: Color.white,
        right: 10
    }
})
export default Header;