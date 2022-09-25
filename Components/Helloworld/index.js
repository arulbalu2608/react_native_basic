import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

function HelloWorld() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World</Text>
    </View>
  );
}

export default HelloWorld;
