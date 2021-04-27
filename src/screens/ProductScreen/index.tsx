import React, { useState } from 'react';
import { View, Text } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './Styles';
import product from '../../data/product';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';

const ProductScreen = () => {
  const [selectedOption, setSelectedOption] = useState(product.options ? product.options[0] : null);
  const [quantity, setQuantity] = useState(1);

  return (
    <View style={styles.root}>
       <Text style={styles.title}>{product.title}</Text>
       <ImageCarousel images={product.images} />
       {/* <Picker
          selectedValue={selectedOption}
          onValueChange={(itemValue) => setSelectedOption(itemValue)}>
          {product.options.map(option => (
            <Picker.Item label={option} value={option} />
          ))}
        </Picker> */}
        <Text style={styles.price}>
          from ${product.price}
          {product.oldPrice && <Text style={styles.oldPrice}>${product.oldPrice}</Text>}
        </Text>
        <Text style={styles.description}>{product.description}</Text>
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        <Button 
          text='Add to Cart' 
          onPress={() => {console.log('Add to Cart')}} 
          containerStyles={{backgroundColor: '#e3c905'}}
        />
        <Button text='Buy Now' onPress={() => {console.log('Buy Now')}} />
    </View>
  )
}

export default ProductScreen;
