import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  Platform,
  Dimensions,
  TouchableOpacity,
  Animated,
  ImageBackground,
} from 'react-native';
import images from '../../common/styles/image';
import styles from './styles';
const { width, height } = Dimensions.get('window');
const Item_Size = Platform.OS === 'ios' ? width * 0.84 : width * 0.87;
import { BlurView } from '@react-native-community/blur';
import slides from '../../../assets/array/array';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function Slider({ navigation }) {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={{ marginRight: 0 }}>
      <Animated.FlatList
        data={slides}
        horizontal
        pagingEnabled={true}
        snapToAlignment="start"
        decelerationRate={0}
        scrollEventThrottle={16}
        snapToInterval={Item_Size}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true },
        )}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * Item_Size,
            index * Item_Size,
            (index + 1) * Item_Size,
          ];
          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [0, -50, 0],
          });
          return (
            <View
              style={[
                { width: Item_Size, marginRight: item.id == 4 ? 10 : 0 },
                styles.Carousel,
              ]}>
              <Animated.View style={[styles.item, { transform: [{ translateY }] }]}>
                <TouchableOpacity onPress={() => navigation.navigate('TripDetails')}>
                  <ImageBackground
                    imageStyle={{ borderRadius: 25 }}
                    source={item.image}
                    style={styles.itemImage}>
                    <TouchableOpacity
                      style={{ alignItems: 'center' }}
                      onPress={() => navigation.navigate('TripDetails')}>
                      <View style={styles.blur}>
                        <View style={styles.blurRow}>
                          <View>
                            <View style={styles.blurTitleView}>
                              <Text style={styles.blurPlace}>{item.place}</Text>
                            </View>
                            <Text style={styles.blurTitle}>{item.title}</Text>
                            <Text style={styles.blurPrice}>{item.price}</Text>
                          </View>
                          <View style={styles.cartView}>
                            <Image source={images.cart} style={styles.cart} />
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </ImageBackground>
                </TouchableOpacity>
              </Animated.View>
            </View>
          );
        }}
      />
    </View>
  );
}
