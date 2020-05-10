import React, {useState} from 'react'
import { TextInput, View, Button, StyleSheet } from 'react-native';


const GoalInput = props => {

  const [enteredGoal, setEnteredGoal] = useState('');
  
  function goalInputHandler(enteredText){
    setEnteredGoal(enteredText);
  }

  return (
    /* flexDirection's default value is column
      For more information: https://reactnative.dev/docs/flexbox */
    /* Using stylesheets are better than using inline styling
     <View style={{flexDirection: 'row',justifyContent: 'space-between'}}> */

    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        onChangeText={goalInputHandler}
        style={styles.input} 
        value={enteredGoal}/>
      {/*The .bind(this, enteredGoal) allows for the enteredGoal to be passed back to App.js */}
      <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%'
  }
});

export default GoalInput;
