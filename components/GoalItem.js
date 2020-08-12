import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const GoalItem = props => {

    return (
        <TouchableOpacity onPress = {props.onDelete.bind(this, props.id)}>
                <View style={styles.listItem}>
                    <Text>{props.title}</Text>
                </View>
        </TouchableOpacity>
    );
   
};

const styles = StyleSheet.create({
    listItem: {
        fontFamily: 'Montserrat',
        fontSize: 20,
        borderColor: 'black',
        borderWidth: 1,
        marginVertical: 10,
        backgroundColor: 'pink',
        padding: 10,
        borderRadius: 20
    }
});

export default GoalItem;
