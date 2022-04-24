import {Matrics, Font, Color} from '../../common/styles';
import {Platform, Dimensions} from 'react-native';
import font from '../../common/styles/font';
const {width, height} = Dimensions.get('window');

export default styles = {
  Carousel: {
    height: height * 0.5,
    width: Platform.OS === 'ios' ? width * 0.8 : width * 0.83,
    paddingTop: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
    marginTop: 20,
  },
  item: {
    padding: 20,
    width: width * 0.8,
    height: height * 0.44,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
    borderRadius: 30,
  },
  itemImage: {
    width: width * 0.8,
    height: height * 0.44,
  },
  blur: {
    width: width * 0.745,
    top: height * 0.3,
    borderRadius: 20,
    backgroundColor: 'rgba(254, 254, 254, 0.8)',
  },
  blurPlace: {
    color: Color.orange,
    fontWeight: '600',
    shadowColor: Color.orange,
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 15,
  },
  blurTitleView: {
    backgroundColor: Color.white,
    width: width * 0.19,
    marginTop: 5,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    height: height * 0.03,
  },
  blurRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingVertical: 5,
    alignItems: 'center',
  },
  blurTitle: {
    fontSize: font.fontSize.XXLARGE,
    fontWeight: '700',
    color: Color.black,
  },
  blurPrice: {
    fontWeight: '600',
    marginTop: 5,
    color: Color.black,
  },
  cart: {
    height: 25,
    width: 25,
  },
  cartView: {
    height: 45,
    width: 45,
    borderRadius: 45,
    backgroundColor: Color.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 4,
  },
};
