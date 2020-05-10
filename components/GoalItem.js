import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoalItem = props => {
  return(
    <View style={styles.listItem}>
      <Text>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginTop: 10,
    backgroundColor: '#fee9e1',
    borderColor: 'black',
    borderWidth: 1
  }
});

export default GoalItem;