import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Image } from "react-native";
import { Text, View } from "native-base";

import Recent from "./musicSecondRow/Recent";
import Favourites from "./musicSecondRow/Favourites";
import Playlist from "./musicSecondRow/Playlist";

import musicStatic from "./musicOptions/musicStatic";
import User from "./musicOptions/User";
import Setting from "./musicOptions/Setting";
import { Colors } from "react-native/Libraries/NewAppScreen";

import colors from "../myTheme";

// Drawer Logic
const optionsDrawer = createDrawerNavigator();
const optionsDrawerTab = () => {
  return (
    <optionsDrawer.Navigator>
      <optionsDrawer.Screen
        name="musicStatic"
        component={musicStatic}
        options={{
          swipeEnabled: false,
          drawerLabel: (): any => null,
          drawerIcon: (): any => null,
          title: undefined,
        }}
      />
      <optionsDrawer.Screen
        name="User"
        component={User}
        options={{
          swipeEnabled: false,
          drawerLabel: (): any => (
            <View
              style={{
                height: 120,
                width: 240,
                flex: 1,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#f1f1f1",
              }}
            >
              <Image
                source={require("../assets/profile.jpg")}
                style={{ width: 70, height: 70, borderRadius: 100 }}
              />
              <Text style={{ alignSelf: "center", color: colors.default }}>
                សុខ​ តារា
              </Text>
            </View>
          ),
        }}
      />
      <optionsDrawer.Screen name="Setting" component={Setting} />
    </optionsDrawer.Navigator>
  );
};

// Stack Logic
const secondRowStack = createStackNavigator();

const musicScreen: React.FC = () => {
  return (
    <secondRowStack.Navigator
      initialRouteName="musicStataic"
      headerMode="screen"
    >
      <secondRowStack.Screen
        name="musicStatic"
        component={optionsDrawerTab}
        options={{
          header: (props: any) =>
            (props.headerMode = <Text style={{ height: 0 }}></Text>),
        }}
      />
      <secondRowStack.Screen
        name="Recent"
        component={Recent}
        options={{ animationTypeForReplace: "push" }}
      />
      <secondRowStack.Screen name="Favourites" component={Favourites} />
      <secondRowStack.Screen name="Playlist" component={Playlist} />
    </secondRowStack.Navigator>
  );
};

export default musicScreen;
