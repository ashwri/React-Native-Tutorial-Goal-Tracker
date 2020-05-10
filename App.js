import React, {useState} from 'react';
import { TextInput, View, Button, Text, StyleSheet } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  
  function goalInputHandler(enteredText){
    setEnteredGoal(enteredText);
  }

  function addGoalHandler(){
    setCourseGoals(currentGoals => [...courseGoals, enteredGoal]);
    console.log(courseGoals);
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
      
      <View>
        {courseGoals.map((goal) =>
          <View style={styles.listItem}><Text>{goal}</Text></View>)}
      </View>
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

