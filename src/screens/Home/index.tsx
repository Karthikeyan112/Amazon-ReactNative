import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ProductItem from '../../components/ProductItem';
import ProductList from '../../data/products';

const Home = () => {
  return (
    <View style={styles.page}>
      <FlatList 
        data={ProductList}
        renderItem={({item}) => (<ProductItem item={item} />)}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    width: '100%',
    padding: 10
  },
});

export default Home;
