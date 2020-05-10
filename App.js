import React, {useState} from 'react';
import { View, StyleSheet, FlatList, Button } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  /* Flatlists will automatically add keys if the lists provided has a key within
       the object. Otherwise, you will be required to provide a key */
  const addGoalHandler = enteredGoal => {
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      { id: Math.random().toString(), value: enteredGoal }
    ]);
    setIsAddMode(false);
  } 

  const cancelGoalHandler = enteredGoal => {
    setIsAddMode(false);
  }

  const deleteGoalHandler = (id) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal => goal.id !== id));
    });
  }

  return (
    <View style={styles.mainView}>
      <Button title="ADD NEW BUTTON" onPress={() => setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancelGoal={cancelGoalHandler} />

      {/* ScrollView is not good for long lists or lists with an unknown
       size as it is inefficient. Use FlatList instead. FlatList optimize
       scrolling by only rendering the components that will be visible
      */}

      <FlatList
        data={courseGoals}
        keyExtractor={(item) => item.id}
        renderItem={itemData => (<GoalItem id={itemData.item.id} onDelete={deleteGoalHandler} text={itemData.item.value}/>)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    padding: 50
  },
});

