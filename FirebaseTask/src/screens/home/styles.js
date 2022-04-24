import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Color } from "../../common";

export default StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    listItemContainer: {
        padding: 5,
        backgroundColor: Color.lightGray,
        borderWidth: 1,
        borderColor: Color.brown,
        borderRadius: 5,
        marginHorizontal: 10,
        marginVertical: 5
    },
    listItemTextStyle: {
        fontSize: 18,
        paddingVertical: 5,
        color: Color.black
    },
    filterViewStyle: {
        height: hp(20),
        width: wp(32),
        right: wp(5),
        top: wp(10),
        borderRadius: 5,
        backgroundColor: Color.white,
        position: 'absolute',
        zIndex: 99
    }
})