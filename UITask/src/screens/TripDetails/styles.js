import {Matrics, Font, Color} from '../../common/styles';
import {Platform, Dimensions} from 'react-native';
import font from '../../common/styles/font';
const {width, height} = Dimensions.get('window');

export default styles = {
  Main: {
    backgroundColor: Color.white,
    flex: 1,
  },
  ImageView: {
    alignItems: 'center',
    marginTop: 10,
  },
  Tripimage: {
    height: height * 0.5,
    width: width,
  },
  TopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 35,
    paddingHorizontal: 15,
  },
  btn: {
    height: 20,
    width: 20,
    tintColor: Color.grey,
  },
  btnView: {
    backgroundColor: Color.white,
    padding: 10,
    borderRadius: 25,
  },
  tripDetails: {
    fontWeight: '900',
    fontFamily: font.fontFamily.VarelaRound,
    fontSize: font.fontSize.XLARGE,
    color: Color.black,
  },
  sliderView: {
    position: 'absolute',
    width: width,
    bottom: 5,
  },
  selectImages: {
    height: height * 0.1,
    width: height * 0.1,
    borderColor: Color.white,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    marginBotton: 20,
  },
  slide: {
    margin: 5,
  },
  details: {
    flex: 1,
  },
  placeView: {
    backgroundColor: Color.lightorange,
    width: 75,
    height: 25,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  place: {
    color: Color.orange,
    fontSize: Font.fontSize.LARGE,
    fontWeight: '700',
  },
  placeName: {
    color: Color.black,
    fontSize: Font.fontSize.XXXXLARGE,
    fontWeight: '700',
    marginTop: 5,
  },
  price: {
    color: Color.black,
    fontSize: Font.fontSize.XXXXLARGE,
    fontWeight: '700',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginVertical: height * 0.03,
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 25,
  },
  icon: {
    height: 18,
    width: 18,
    tintColor: Color.orange,
    marginRight: 5,
  },
  text: {
    color: Color.grey,
    fontSize: Font.fontSize.XLARGE,
    fontWeight: '500',
    marginRight: 20,
  },
  info: {
    color: Color.grey,
    fontSize: Font.fontSize.XLARGE,
    fontFamily: font.fontFamily.VarelaRound,
    marginHorizontal: 25,
    marginVertical: 25,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: Color.orange,
    height: 55,
    width: width * 0.7,
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  next: {
    height: 8,
    width: 8,
    tintColor: Color.orange,
    transform: [{rotate: '180deg'}],
  },
  nextView: {
    backgroundColor: Color.white,
    height: 18,
    width: 18,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextBtn: {
    alignItems: 'center',
    bottom: 10,
  },
  btntext: {
    color: Color.white,
    fontWeight: '700',
    fontSize: Font.fontSize.XLARGE,
    marginRight: 15,
  },
};
