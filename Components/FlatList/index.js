import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {movies} from '../../helpers/constant';
import {styles} from './styles';

function FlatListExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FlatList Example</Text>
      <FlatList
        data={movies}
        keyExtractor={data => data.id}
        ListEmptyComponent={<Text>No Data</Text>}
        renderItem={({item}) => {
          return (
            <View style={[styles.card, styles.elevation]}>
              <Text style={styles.cardTitle}>{item.name}</Text>
              <Text>{item.year}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

export default FlatListExample;
