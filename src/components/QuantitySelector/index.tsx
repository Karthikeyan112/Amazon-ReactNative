import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './Styles';

type QuantitySelectorType = {
  quantity: number,
  setQuantity: any
}

const QuantitySelector = ({quantity, setQuantity}: QuantitySelectorType) => {
  const onMinus = () => {
    setQuantity(Math.max(0, quantity - 1));
  };

  const onPlus = () => {
    setQuantity(quantity + 1);
  };

  return (
    <View style={styles.root}>
      <Pressable onPress={onMinus} style={styles.button}>
        <Text style={styles.butonText}>-</Text>
      </Pressable>

      <Text style={styles.quantity}>{quantity}</Text>

      <Pressable onPress={onPlus} style={styles.button}>
        <Text style={styles.butonText}>+</Text>
      </Pressable>
    </View>
  );
};

export default QuantitySelector;