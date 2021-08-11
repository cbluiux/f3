import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import resultDetail from '../hooks/resultDetail';

const RestaurantDetail = ({ navigation }) => {
  const id = navigation.getParam('id');
  const [detailAPI, details, detailError] = resultDetail();

  function formatPhoneNumber(phoneNumberString) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      var intlCode = match[1] ? '+1 ' : '';
      return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
    }
    return null;
  }

  function formatAddress(addressArr) {
    let resultAddress = '';

    if (addressArr[2]) {
      resultAddress +=
        addressArr[0] + ' ' + addressArr[1] + ' ' + addressArr[2];
    } else {
      resultAddress += addressArr[0] + ' ' + addressArr[1];
    }

    return resultAddress;
  }

  useEffect(() => {
    detailAPI(id);
  }, []);

  return (
    <View>
      <Text>{details ? details.name : detailError}</Text>
      <Text>{`Yelp Rating: ${details.rating} stars`}</Text>
      <Text>{`${
        !details.is_closed
          ? `Come on in, we're open!`
          : 'Sorry, we are currently closed'
      }`}</Text>
      <Text>{formatPhoneNumber(details.phone)}</Text>
      <Text>
        {details.location
          ? formatAddress(details.location.display_address)
          : null}
      </Text>
      <FlatList
        data={details.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => (
          <Image style={styles.image} source={{ uri: item }} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({ image: { height: 200, width: 300 } });

export default RestaurantDetail;
