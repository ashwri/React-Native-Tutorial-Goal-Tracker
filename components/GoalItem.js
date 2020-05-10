import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

/** When you want to press or touch the components, you can use the various Touchable 
 * implementations such as TouchableOpacity /TouchableNativeFeedback / TouchableWithoutFeedback.
 * You can use these and apply the various press controls such as onPress etc. You can also
 * add various attributes.
 */

const GoalItem = props => {
  return(
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.listItem}>
        <Text>{props.text}</Text>
      </View>
    </TouchableOpacity>
   
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