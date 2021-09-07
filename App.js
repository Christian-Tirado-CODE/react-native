import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Header from "./components/Header";
import User from "./components/User";

export default function App() {
  const [users, setUsers] = useState([]);

  const fetchUsersHandler = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();

      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

 
  

  let content = <Text>No users found</Text>;

  if (users.length > 0) {
    
   content = <View testID="users-container">
              {users.map(user => <User key={user.id} name={user.name} email={user.email} />)}
             </View>
  }

   

  return (
    <View style={styles.container}>
      <Header onFetchUsers={fetchUsersHandler} />
      <ScrollView>
        {content}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
