import React, {useState} from 'react';
import { TextInput, View, Button, Text } from 'react-native';

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
    <View style={{padding: 50}}>
      {/* flexDirection's default value is column
        For more information: https://reactnative.dev/docs/flexbox */}
      <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
        <TextInput
         placeholder="Course Goal"
         onChangeText={goalInputHandler}
         style={{borderColor: 'black', 
                borderWidth: 1, 
                padding: 10,
                width: '80%'}}/>
        <Button title="ADD" onPress={addGoalHandler}/>
      </View>

      <View>
        {courseGoals.map((goal) => <Text>{goal}</Text>)}
      </View>
    </View>
  );
}

