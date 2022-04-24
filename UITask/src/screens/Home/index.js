import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import images from '../../common/styles/image';
import {Color} from '../../common/styles';
import styles from './styles';
const {width, height} = Dimensions.get('window');
import {BlurView, VibrancyView} from '@react-native-community/blur';
import Slider from '../../components/Slider';

export default function Home({navigation}) {
  return (
    <SafeAreaView>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor={Color.white}
      />
      <View style={[styles.nav]}>
        <Image
          source={images.menu}
          style={[styles.menu, {tintColor: Color.grey}]}
        />
        <Text style={styles.tourx}>TOURX</Text>
        <Image source={images.profile} style={styles.profile} />
      </View>
      <View style={styles.main}>
        <View style={styles.titleView}>
          <Text style={styles.title}>Discover</Text>
          <Text style={styles.title}>A New World</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.searchView}>
            <Image
              source={images.search}
              style={[styles.Logo, {tintColor: Color.orange}]}
            />
            <TextInput
              placeholder="Search Places"
              placeholderTextColor={Color.orange}
              style={styles.search}
            />
          </View>
          <TouchableOpacity>
            <View style={styles.filter}>
              <Image
                source={images.filter}
                style={[styles.Logo, {tintColor: Color.white}]}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Slider navigation={navigation} />
    </SafeAreaView>
  );
}
