import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';

import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchAPI, restaurants, error] = useRestaurants();
 

  const filterResultsByPrice = (price) => {
    return restaurants.filter((restaurant) => {
      return restaurant.price === price;
    });
  };

  return (
    <View style={styles.containerStyle}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchAPI(term)}
      />
      {error ? <Text>{error}</Text> : null}
      <ScrollView>
        <ResultsList results={filterResultsByPrice('$')} header="Frugal" />
        <ResultsList
          results={filterResultsByPrice('$$')}
          header="A Bit Pricier"
        />
        <ResultsList
          results={filterResultsByPrice('$$$')}
          header="Big Spender"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({ containerStyle: { flex: 1 } });

export default SearchScreen;
