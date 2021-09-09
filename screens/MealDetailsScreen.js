import React from 'react';
import {View, Text, StyleSheet, Button} from "react-native";
const MealDetailsScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>The Meal Details Screen</Text>

             <Button title="Go Back" onPress={() => {
        props.navigation.popToTop();
       //props.navigation.pop(); Same functionality as goBack() but only works in the stack navigator. pop() works on the rest of the navigators.
    }} />
        </View>
    );

   
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MealDetailsScreen;