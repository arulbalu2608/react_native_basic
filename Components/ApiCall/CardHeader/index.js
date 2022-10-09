import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

function CardHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Articles</Text>
      <Text style={styles.content}>List of Articles Created by the admin </Text>
    </View>
  );
}

export default CardHeader;
