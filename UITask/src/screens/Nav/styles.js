import { Matrics, Font, Color } from "../../common/styles";
import { Platform, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export default (styles = {
	home:{
		width: 20,
		height: 20,
        tintColor: Color.lightgrey,
        
	},
    active:{
		width: 20,
		height: 20,
        tintColor: Color.white,
        
	},
    iconView:{
        backgroundColor: Color.orange,
        padding: 15,
        borderRadius: 25,
        shadowColor: Color.orange,
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 5,  
        elevation: 15
    }
});
