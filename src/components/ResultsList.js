import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultDetail from './ResultDetail';

const ResultsList = ({ header, results }) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>{header}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => {
          return <ResultDetail result={item} />;
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
  containerStyle: { marginVertical: 10 },
});

export default ResultsList;
