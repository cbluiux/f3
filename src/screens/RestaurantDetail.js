import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import resultDetail from '../hooks/resultDetail';

const RestaurantDetail = ({ navigation }) => {
  const id = navigation.getParam('id');
  const [detailAPI, details, detailError] = resultDetail();

  useEffect(() => {
    detailAPI(id);
  }, []);

  return (
    <View>
      <Text>{details.name ? details.name : detailError}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default RestaurantDetail;
