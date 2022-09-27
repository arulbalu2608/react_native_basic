import React from 'react';
import {SectionList, Text, View} from 'react-native';
import {sectionData} from '../../helpers/constant';
import {styles} from './styles';

function SectionListExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SectionList Example</Text>
      <SectionList
        sections={sectionData}
        keyExtractor={(data, index) => index}
        renderItem={({item}) => {
          return <Text style={styles.subText}>{item}</Text>;
        }}
        renderSectionHeader={({section}) => {
          return <Text style={styles.cardTitle}>{section?.title}</Text>;
        }}
      />
    </View>
  );
}

export default SectionListExample;
