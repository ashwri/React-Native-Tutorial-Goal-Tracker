import React, {useState} from 'react';
import { TextInput, View, Button, Text, StyleSheet, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);

  /* Flatlists will automatically add keys if the lists provided has a key within
       the object. Otherwise, you will be required to provide a key */
  const addGoalHandler = (enteredGoal) => {
    setCourseGoals(currentGoals => [...courseGoals, { id: Math.random().toString(), value: enteredGoal }]);
  } 

  return (
    <View style={styles.mainView}>
      <GoalInput onAddGoal={addGoalHandler} ></GoalInput>

      {/* ScrollView is not good for long lists or lists with an unknown
       size as it is inefficient. Use FlatList instead. FlatList optimize
       scrolling by only rendering the components that will be visible
      */}

      <FlatList
        data={courseGoals}
        keyExtractor={(item) => item.id}
        renderItem={itemData => 
          (<View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    padding: 50
  },

  listItem: {
    padding: 10,
    marginTop: 10,
    backgroundColor: '#fee9e1',
    borderColor: 'black',
    borderWidth: 1
  }
});

