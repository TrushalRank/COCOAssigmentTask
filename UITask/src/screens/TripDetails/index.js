import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect, useMemo } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  ScrollView,
  FlatList,
  SafeAreaView,
} from 'react-native';
import images from '../../common/styles/image';
import styles from './styles';
const { width, height } = Dimensions.get('window');

// slider images
const slides = [
  {
    id: 1,
    image: images.carousel3,
  },
  {
    id: 2,
    image: images.carousel2,
  },
  {
    id: 3,
    image: images.carousel1,
  },
  {
    id: 4,
    image: images.carousel4,
  },
];
export default function TripDetails(props) {
  const [imageId, setimageId] = useState(0);
  const navigation = useNavigation()

  // diaplay slider images with map function
  const Slide = (item, index) => {
    return slides.map((item, index) => (
      <View style={styles.slide}>
        <TouchableOpacity onPress={() => setimageId(index)}>
          <Image
            source={item.image}
            style={[
              styles.selectImages,
              imageId === index ? { borderWidth: 4 } : { borderWidth: 1.5 },
            ]}
          />
        </TouchableOpacity>
      </View>
    ));
  };

  //--- Custom UI Functions -----//


  return (
    <SafeAreaView style={styles.Main}>
      <View style={styles.Main}>
        {/* <StatusBar translucent backgroundColor={'transparent'} /> */}
        <View style={styles.ImageView}>
          <ImageBackground
            source={slides[imageId].image}
            style={styles.Tripimage}>
            <View style={styles.TopRow}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <View style={styles.btnView}>
                  <Image source={images.Previous} style={styles.btn} />
                </View>
              </TouchableOpacity>
              <Text style={styles.tripDetails}>Trip Details</Text>
              <TouchableOpacity>
                <View style={styles.btnView}>
                  <Image source={images.remove} style={styles.btn} />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.sliderView}>
              <View style={styles.row}>
                <Slide />
              </View>
            </View>
          </ImageBackground>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.details}>
            <View style={styles.priceRow}>
              <View>
                <View style={styles.placeView}>
                  <Text style={styles.place}>Turkey</Text>
                </View>
                <Text style={[styles.placeName]}>Cappadocia</Text>
              </View>
              <View>
                <Text style={styles.price}>$50.00</Text>
              </View>
            </View>
            <View style={styles.iconRow}>
              <Image source={images.star} style={styles.icon} />
              <Text style={styles.text}>5.0</Text>
              <Image source={images.clock} style={styles.icon} />
              <Text style={styles.text}>30 mins</Text>
              <Image source={images.location} style={styles.icon} />
              <Text style={styles.text}>20km</Text>
            </View>
            <Text style={styles.info}>
              Cappadocia before I arrived in Turkey, but I was not prepared for
              the magnitude of it all. I mean, when you visit a destination that
              is famous for its landscape, it is usually limited to a part of
              the city, or maximum the full city itself. . But this is WAY more
              than that. It is more than 10 towns (or villages)!
            </Text>
          </View>
        </ScrollView>
        <View style={styles.nextBtn}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.btntext}>Book Now</Text>
            <View style={styles.nextView}>
              <Image source={images.Previous} style={styles.next} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
