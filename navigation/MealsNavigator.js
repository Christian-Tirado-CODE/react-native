import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation-stack';
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealscreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeasls: {
        screen: CategoryMealscreen,
    },
    MealDetails: MealDetailsScreen 
});

export default createAppContainer(MealsNavigator);
