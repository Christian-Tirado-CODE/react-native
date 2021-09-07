import React from 'react';
import {View, Text, StyleSheet} from "react-native";
const User = (props) => {
    return (
        <View style={styles.container}>
            <Text>Name: {props.name}</Text>
            <Text>E-mail: {props.email}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightgrey',
        marginVertical: 20
    },

});

export default User;