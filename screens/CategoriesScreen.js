import React from "react";
import { StyleSheet, FlatList, View, Text, TouchableOpacity, Platform } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";

const CategoriesScreen = (props) => {

    const renderGridItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.gridItem} onPress={() => {
                props.navigation.navigate({routeName: 'CategoryMeals', params: {
                    categoryId: item.id
                }});
            }}>
             <View>
             <Text>{item.title}</Text>
             </View>
          </TouchableOpacity>
          
        );
      };

  return (
    <View>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={CATEGORIES}
        renderItem={renderGridItem}
        numColumns={2}
      />
    </View>
  );
};

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal categories',
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ?  Colors.primaryColor : 'white'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  
  gridItem: {
      flex: 1,
      margin: 15,
      height: 150,
  }
});

export default CategoriesScreen;
