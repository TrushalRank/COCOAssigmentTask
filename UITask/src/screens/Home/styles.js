import {Matrics, Font, Color} from '../../common/styles';
import {Platform, Dimensions} from 'react-native';
import font from '../../common/styles/font';
const {width, height} = Dimensions.get('window');

export default styles = {
  nav: {
    marginHorizontal: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 45,
    marginTop:
      Platform.OS === 'android'
        ? height >= 700
          ? height * 0.1
          : height * 0.05
        : height * 0.01,
  },
  menu: {
    width: 35,
    height: 35,
  },
  profile: {
    width: 45,
    height: 45,
  },
  tourx: {
    color: Color.lightorange,
    fontSize: Font.fontSize.XXLARGE,
    fontFamily: font.fontFamily.Orbitron,
  },
  main: {
    marginHorizontal: 35,
  },
  title: {
    fontSize: Font.fontSize.XXXXXLARGE,
    fontWeight: '700',
    color: Color.black,
  },
  titleView: {
    marginVertical: 5,
  },
  search: {
    backgroundColor: Color.lightorange,
    paddingLeft: 15,
    width: width * 0.54,
    color: Color.lightorange,
    borderRadius: 15,
    fontSize: 16,
    fontWeight: '500',
  },
  Logo: {
    height: height * 0.03,
    width: width * 0.055,
  },
  searchView: {
    flexDirection: 'row',
    backgroundColor: Color.lightorange,
    alignItems: 'center',
    borderRadius: 15,
    paddingLeft: 15,
  },
  filter: {
    backgroundColor: Color.orange,
    marginHorizontal: width * 0.04,
    height: 55,
    width: width * 0.14,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    shadowColor: Color.lightorange,
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 15,
  },
};
