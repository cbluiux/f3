import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useRestaurants from '../hooks/useRestaurants';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchAPI, restaurants, error] = useRestaurants();

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchAPI(term)}
      />
      {error ? (
        <Text>{error}</Text>
      ) : (
        <Text>{`We've found ${restaurants.length} restaurants!`}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
