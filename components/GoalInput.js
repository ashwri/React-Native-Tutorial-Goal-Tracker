import React, {useState} from 'react'
import { TextInput, View, Button, StyleSheet, Modal } from 'react-native';


const GoalInput = props => {

  const [enteredGoal, setEnteredGoal] = useState('');
  
  function goalInputHandler(enteredText){
    setEnteredGoal(enteredText);
  }

 const addGoalHandler = () => {
  props.onAddGoal(enteredGoal)
  setEnteredGoal('');
 }

 const cancelGoalHandler = () => {
  props.onCancelGoal();
  setEnteredGoal('');
 }

  return (
    /* flexDirection's default value is column
      For more information: https://reactnative.dev/docs/flexbox */
    /* Using stylesheets are better than using inline styling
     <View style={{flexDirection: 'row',justifyContent: 'space-between'}}> */
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          onChangeText={goalInputHandler}
          style={styles.input}
          value={enteredGoal} />
        {/*The .bind(this, enteredGoal) allows for the enteredGoal to be passed back to App.js */}
       <View style={styles.buttonContainer}>
        <Button title="CANCEL" color="red" onPress={cancelGoalHandler} />
        <Button title="ADD" onPress={addGoalHandler} />
       </View>
        
      </View>
    </Modal>

  );
}
// Views by default take up only enough space for their children element
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%', 
    margin: 10
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: "space-between",
    width: '35%',
    margin: 10
  }

});

export default GoalInput;
