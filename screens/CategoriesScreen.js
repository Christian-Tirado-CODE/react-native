import React from 'react';
import {View, Text, StyleSheet, Button} from "react-native";
const CategoriesScreen = (props) => {
    
    return (
        <View style={styles.screen}>
            <Text>The Categories Screen</Text>
            <Button title="Go to Meals!" onPress={() => {
                
                props.navigation.navigate('CategoryMeals');
                //props.navigation.push('Categories');
                // push allows you render the same screen with different content.
            
                //props.navigation.replace('CategoryMeals'); replace the current element in the stack.
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

export default CategoriesScreen;