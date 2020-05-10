import React, {useState} from 'react';
import { TextInput, View, Button, Text, StyleSheet, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  
  function goalInputHandler(enteredText){
    setEnteredGoal(enteredText);
  }

  /* Flatlists will automatically add keys if the lists provided has a key within
       the object. Otherwise, you will be required to provide a key */
  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...courseGoals, { id: Math.random().toString(), value: enteredGoal }]);
  } 

  return (
    <View style={styles.mainView}>

      {/* flexDirection's default value is column
        For more information: https://reactnative.dev/docs/flexbox */}
      {/* Using stylesheets are better than using inline styling
       <View style={{flexDirection: 'row',justifyContent: 'space-between'}}> */}

      <View style={styles.inputContainer}>
        <TextInput
         placeholder="Course Goal"
         onChangeText={goalInputHandler}
         style={styles.input}/>
        <Button title="ADD" onPress={addGoalHandler}/>
      </View>

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

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%'
  },

  listItem: {
    padding: 10,
    marginTop: 10,
    backgroundColor: '#fee9e1',
    borderColor: 'black',
    borderWidth: 1
  }
});

