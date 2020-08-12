import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    };
 
    return( 
<Modal visible = {props.visible} animationType = "slide">
    <View style ={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
}}>
        <TextInput style={{
            borderColor: 'black',
            borderRadius: 10,
            borderWidth: 1,
            padding: 20,
            fontFamily: 'Montserrat',
            marginBottom: 10,
            fontSize: 20,
            width:'80%'

        }}
            placeholder="Write a goal"
            onChangeText={goalInputHandler}
            value={enteredGoal}
        />
        <View style = {styles.buttonContainer}>
            <View style= {styles.button}>
                <Button title="Cancel" color="red" onPress={props.onCancel} />
            </View>
            <View style = {styles.button}> 
                 <Button title="Add" padding="20px" style={{ borderRadius: 10 }} onPress={addGoalHandler} />
            </View>      
        </View>
    </View> 
</Modal>
    );
};

const styles = StyleSheet.create({ 
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%'
    },

    button: {
        width: '40%',
        borderRadius: 20
    }
})

export default GoalInput;


