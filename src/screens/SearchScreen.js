import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState('');

  const searchAPI = async () => {
    try {
      const response = await yelp.get('/search', {
        params: { limit: 50, term: term, location: 'Boulder' },
      });

      setRestaurants(response.data.businesses);
    } catch (e) {
      setError('Something went wrong...');
    }
  };

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchAPI} />
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
