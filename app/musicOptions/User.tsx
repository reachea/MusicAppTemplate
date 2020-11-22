import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";

const User: React.FC = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" />
      <Text>This is User</Text>
      <Button title="Click Me!" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
});

export default User;
