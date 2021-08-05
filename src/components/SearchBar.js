import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Octicons } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.searchBackgroundStyle}>
      <Octicons name="search" color="black" style={styles.searchIconStyle} />
      <TextInput
        placeholder="Search"
        style={styles.inputStyle}
        value={term}
        onChangeText={onTermChange}
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBackgroundStyle: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginTop: 10,
  },
  inputStyle: { flex: 1, fontSize: 20 },
  searchIconStyle: { fontSize: 35, alignSelf: 'center', marginHorizontal: 15 },
});

export default SearchBar;
