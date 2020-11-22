import React from "react";
import Constant from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { Container, Text, Grid, Row, Col } from "native-base";

import colors from "../../myTheme";

const Favourites: React.FC = () => {
  return (
    <Container>
      <StatusBar style="auto" />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constant.statusBarHeight * 2,
  },
});

export default Favourites;
