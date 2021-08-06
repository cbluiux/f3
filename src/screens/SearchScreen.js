import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchAPI(term)}
      />
      {error ? <Text>{error}</Text> : null}
      <ResultsList results={filterResultsByPrice('$')} header="Frugal" />
      <ResultsList results={filterResultsByPrice('$$')} header="Bit Pricier" />
      <ResultsList
        results={filterResultsByPrice('$$$')}
        header="Money Aint a Thang"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
