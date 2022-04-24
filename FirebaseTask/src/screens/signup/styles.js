import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Colors from '../../common/colors'
export default StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    selectedInterestViewStyle: {
        flexDirection: 'row',
        backgroundColor: Colors.lightGray,
        padding: 10,
        marginRight: 10,
        marginBottom: 10,
        borderColor: Colors.black,
        borderRadius: 5,
        borderWidth: 1,
        justifyContent: 'center'
    },
    imgCloseStyle: {
        width: 20,
        height: 20,
        marginLeft: 5
    },
    interestContainer: {
        marginHorizontal: 20,
        marginTop: 15,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    errorViewContainer: {
        alignSelf: 'center',
        marginBottom: 20,
        color: 'red',
        fontSize: 16
    }
})