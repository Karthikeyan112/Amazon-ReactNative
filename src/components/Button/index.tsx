import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

interface ButtonI {
  text: string;
  onPress: () => void;
  containerStyles?: object;
}

const Button = ({ text, onPress, containerStyles }: ButtonI) => {
  return (
    <Pressable onPress={onPress} style={[styles.root, containerStyles ]}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#e47911',
    marginVertical: 10,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  text: {
    color: '#FFF',
    textTransform: 'uppercase',
    fontWeight: '600',
    fontSize: 16
  }
})

export default Button;
