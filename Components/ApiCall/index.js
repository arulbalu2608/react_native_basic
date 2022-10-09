import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import {styles} from './styles';
import axios from 'axios';
import {request} from '../../service';
import CardHeader from './CardHeader';

function ApiCall() {
  const [userList, setuserList] = useState([]);
  const [page, setpage] = useState(1);

  useEffect(() => {
    getUserDetails();
  }, [page]);

  const getUserDetails = () => {
    let params = {
      limit: 10,
      page,
    };
    request({
      url: 'http://doodlebluelive.com:2179/api/v1/article',
      method: 'GET',
      params,
    }).then(response => {
      console.log(response?.data?.data);
      const temp = [...userList, ...response?.data?.data?.list];
      setuserList(temp);
    });
  };

  const onPageEnd = () => {
    setpage(page + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ApiCall</Text>
      <FlatList
        data={userList}
        keyExtractor={data => data?._id}
        ListEmptyComponent={<Text style={styles.noData}>No Data Found</Text>}
        ListHeaderComponent={<CardHeader />}
        renderItem={({item}) => {
          return (
            <View style={styles.card}>
              <Text style={styles.cardTitle}>{item?.title}</Text>
              <Text style={styles.cardContent}>{item?.content}</Text>
            </View>
          );
        }}
        onEndReachedThreshold={0.1}
        onEndReached={onPageEnd}
      />
    </View>
  );
}

export default ApiCall;
