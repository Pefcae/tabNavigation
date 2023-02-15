import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';  //se agrega en clase 12

import { styles } from './styles';

const ProductDetail = ({ navigation }) => {
  const product = useSelector((state) => state.products.selected);//se agrega en clase 12

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.title}>{product.description}</Text>
      <Text style={styles.title}>{product.weight}</Text>
      <Text style={styles.title}>${product.price}</Text>
    </View>
  );
};

export default ProductDetail;
