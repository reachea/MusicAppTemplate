import React from "react";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { Container, Text } from "native-base";

const watchScreen: React.FC = () => {
  return (
    <Container style={styles.container}>
      <StatusBar style="auto" backgroundColor="#fff" />
      <Text>Features Youtube API</Text>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default watchScreen;
