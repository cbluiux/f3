import React from 'react';
import ResultDetail from './ResultDetail';
import { withNavigation } from 'react-navigation';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const ResultsList = ({ header, results, navigation }) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>{results.length ? header : null}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Detail', { id: item.id })}
            >
              <ResultDetail result={item} />
            </TouchableOpacity>
          );
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

export default withNavigation(ResultsList);
