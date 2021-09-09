import React from 'react';
import {View, Text, StyleSheet, Button} from "react-native";
import { CATEGORIES } from '../data/dummy-data';
const CategoryMealsScreen = (props) => {




    return (
        <View style={styles.screen}>
            <Text>The Category Meals Screen</Text>
            <Button title="Go to Details" onPress={() => {
                props.navigation.navigate({routeName: 'MealDetails'});
            }} />

            <Button title="Go Back" onPress={() => {
                props.navigation.goBack();
               //props.navigation.pop(); Same functionality as goBack() but only works in the stack navigator. pop() works on the rest of the navigators.
            }} />
        </View>
    );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
      headerTitle: selectedCategory.title
  };
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealsScreen;