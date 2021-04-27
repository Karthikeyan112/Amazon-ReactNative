import React from 'react';
import { View, Text, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './Styles';

type ProductItemType = {
  item: {
    id: string,
    title: string,
    image: string,
    avgRating: number,
    ratings: number,
    price: number,
    oldPrice?: number,
  }
}
const ProductItem = ({ item }: ProductItemType) => {
  const { 
    id,
    title,
    image,
    avgRating,
    ratings,
    price,
    oldPrice
  } = item;

  return (
    <View>
      <View style={styles.root}>
        <Image style={styles.image} source={{
          uri: image
        }} />

        <View style={styles.right}>
          <Text style={styles.title} numberOfLines={3}>
            {title}
          </Text>
          <View style={styles.ratingsContainer}>
            {[...Array(5).keys()].map((el, index) => 
              <FontAwesome
                key={`${id}-${index}`}
                style={styles.star}
                name={index < avgRating-1 ? 'star' : 'star-o'}
                size={18}
                color='#e47911'
              />
            )}
            <Text>{ratings}</Text>
          </View>
          <Text style={styles.price}>
            {`from $${price}`}
            {oldPrice && <Text style={styles.oldPrice}>${oldPrice}</Text>}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default ProductItem;
