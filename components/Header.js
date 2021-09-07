import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Header = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Users</Text>
      <Button title="Fetch Users"color={'white'} onPress={() => props.onFetchUsers()}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "blue",
    color: "white",
    height: 150,
    alignItems: "center",
    justifyContent: "flex-end",
  },

  title: {
    fontSize: 30,
  },

  button: {
    color: "white",
    backgroundColor: "white"
    
  },
});

export default Header;
