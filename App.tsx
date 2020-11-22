import React, { useState } from "react";
import { ActivityIndicator, Image, View } from "react-native";
import { Container, Text, Icon } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";

import colors from "./myTheme";

import musicScreen from "./app/musicScreen";
import playingScreen from "./app/playingScreen";
import watchScreen from "./app/watchScreen";

const HomeTab = createBottomTabNavigator();

function cacheImages(images: any) {
  return images.map((image: any) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

const App: React.FC = () => {
  const [isReady, setIsReady] = useState(false);

  const _LoadingAsset = async () => {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });

    const imageAssets = cacheImages([
      require("./assets/favicon.png"),
      require("./assets/icon.png"),
      require("./assets/profile.jpg"),
    ]);

    await Promise.all([...imageAssets]);
  };

  if (!isReady) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <AppLoading
          startAsync={_LoadingAsset}
          onFinish={() => setIsReady(true)}
          onError={console.warn}
        />
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <HomeTab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: colors.activeTintColor,
          inactiveTintColor: colors.inactiveTintColor,
          style: {
            height: 60,
          },
        }}
      >
        <HomeTab.Screen
          name="musicScreen"
          component={musicScreen}
          options={{
            tabBarIcon: ({ color }: any) => (
              <Icon name="md-headset" style={{ color: color }} />
            ),
            tabBarLabel: ({ color }) => (
              <Text style={{ fontSize: 12, color: color, paddingBottom: 5 }}>
                My music
              </Text>
            ),
          }}
        />
        <HomeTab.Screen
          name="playingScreen"
          component={playingScreen}
          options={{
            tabBarIcon: ({ focused }: any) => (
              <Container
                style={{
                  width: 60,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgba(124, 216, 160)",
                  borderRadius: 100,
                  paddingRight: 5,
                  borderWidth: 3,
                  borderColor: `${colors.primary}`,
                }}
              >
                <Icon
                  name="ios-musical-notes"
                  style={{
                    color: `${focused ? colors.primary : colors.secondary}`,
                    fontSize: 35,
                  }}
                />
              </Container>
            ),
            tabBarLabel: () => <Text style={{ fontSize: 0 }}></Text>,
          }}
        />
        <HomeTab.Screen
          name="watchScreen"
          component={watchScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="logo-youtube" style={{ color: color }} />
            ),
            tabBarLabel: ({ color }) => (
              <Text style={{ fontSize: 12, color: color, paddingBottom: 5 }}>
                Watch
              </Text>
            ),
          }}
        />
      </HomeTab.Navigator>
    </NavigationContainer>
  );
};

export default App;
