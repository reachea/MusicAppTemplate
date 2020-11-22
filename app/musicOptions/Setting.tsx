import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";

const Setting: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" />
      <Text>This is Setting</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
});

export default Setting;
