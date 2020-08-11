import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    return( 
    <View>
        <TextInput style={{
            borderColor: 'black',
            borderRadius: 10,
            borderWidth: 1,
            padding: 20,
            fontFamily: 'Montserrat',
            marginBottom: 10,
            fontSize: 20
        }}
            placeholder="Write a goal"
            onChangeText={goalInputHandler}
            value={enteredGoal}
        />
        <Button title="Add Goal" padding="20px" style={{ borderRadius: 10 }} onPress={props.onAddGoal.bind(this, enteredGoal)} />
    </View> 
    );
};


export default GoalInput;


