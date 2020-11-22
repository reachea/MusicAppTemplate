import React from "react";

import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, TouchableOpacity } from "react-native";
import {
  Container,
  Header,
  Content,
  Text,
  Grid,
  Row,
  Col,
  Icon,
  Item,
  Input,
  Button,
  List,
  ListItem,
  Left,
  Right,
  Thumbnail,
  Body,
} from "native-base";

import colors from "../../myTheme";

const MusicList = [
  { name: "Die In Park Water Eye", author: "Pich Sophea" },
  { name: "Loser", author: "Vann Jesdar" },
  { name: "រាស្ត្រសាមញ្", author: "Por Xeang Ft. Ela Ela" },
  { name: "ព្រះវេស្សន្ដរ", author: "Hak Record" },
  { name: "24/7", author: "Tena" },
  { name: "អចេតនា", author: "Suly Pheng" },
  { name: "គេជាមនុស្សបែបណា", author: "Tena" },
];

const musicStatic: React.FC = ({ navigation }: any) => {
  return (
    <Container style={styles.container}>
      <Content>
        <Grid>
          <Row style={styles.searchBar}>
            <Col
              style={{
                width: 40,
                height: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => navigation.openDrawer()}
              >
                <Icon name="ios-options" style={{ fontSize: 25 }} />
              </TouchableOpacity>
            </Col>
            <Col>
              <Header
                searchBar
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#fff",
                  paddingTop: 0,
                  marginTop: 0,
                }}
                iosBarStyle="light-content"
                transparent
              >
                <StatusBar translucent backgroundColor="#fff" />
                <Item
                  style={{
                    backgroundColor: "rgba(149, 149, 149,0.25)",
                    borderRadius: 7,
                  }}
                >
                  <Input placeholder="search" />
                  <Icon name="ios-search" />
                </Item>
              </Header>
            </Col>
          </Row>
          <Row style={styles.secondRow}>
            <Col style={styles.secondRowItem}>
              <Button
                style={{
                  flexDirection: "column",
                  width: 85,
                  height: 50,
                  alignSelf: "center",
                }}
                onPress={() => navigation.navigate("Recent")}
                transparent
              >
                <Icon
                  name="ios-time"
                  style={{ fontSize: 30, color: colors.primary }}
                />
                <Text
                  style={{
                    fontSize: 11,
                    textTransform: "capitalize",
                    color: colors.primary,
                  }}
                >
                  Recent
                </Text>
              </Button>
            </Col>
            <Col style={styles.secondRowItem}>
              <Button
                style={{
                  flexDirection: "column",
                  width: 90,
                  height: 50,
                  alignSelf: "center",
                }}
                onPress={() => navigation.navigate("Favourites")}
                transparent
              >
                <Icon
                  name="ios-heart"
                  style={{ fontSize: 30, color: colors.primary }}
                />
                <Text
                  style={{
                    fontSize: 11,
                    textTransform: "capitalize",
                    color: colors.primary,
                  }}
                >
                  Favourites
                </Text>
              </Button>
            </Col>
            <Col style={styles.secondRowItem}>
              <Button
                style={{
                  flexDirection: "column",
                  width: 85,
                  height: 50,
                  alignSelf: "center",
                }}
                onPress={() => navigation.navigate("Playlist")}
                transparent
              >
                <Icon
                  name="ios-musical-notes"
                  style={{
                    fontSize: 25,
                    width: 30,
                    height: 30,
                    backgroundColor: colors.primary,
                    paddingVertical: 3,
                    paddingHorizontal: 5,
                    borderRadius: 5,
                    color: "#fff",
                  }}
                />
                <Text
                  style={{
                    fontSize: 11,
                    textTransform: "capitalize",
                    color: colors.primary,
                  }}
                >
                  Playlists
                </Text>
              </Button>
            </Col>
          </Row>
          <Row style={styles.thirdRow}>
            <Col
              style={{
                width: 190,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                iconLeft
                style={{
                  width: "100%",
                  height: 35,
                  borderRadius: 50,
                  backgroundColor: "#f1f1f1",
                }}
                onPress={() => alert("Shuffle Playback Worked!")}
              >
                <Icon
                  name="ios-shuffle"
                  style={{ fontSize: 30, color: colors.default }}
                />
                <Text
                  style={{
                    textTransform: "capitalize",
                    color: colors.default,
                  }}
                >
                  Shuffle playback
                </Text>
              </Button>
            </Col>
            <Col></Col>
            <Col
              style={{
                width: 150,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Col>
                <Button
                  icon
                  transparent
                  onPress={() => alert("Checklist Worked!")}
                >
                  <Icon name="ios-list" style={{ color: colors.default }} />
                </Button>
              </Col>
              <Col>
                <Button
                  icon
                  transparent
                  onPress={() => alert("Shuffle Worked!")}
                >
                  <Icon name="md-shuffle" style={{ color: colors.default }} />
                </Button>
              </Col>
              <Col>
                <Button
                  icon
                  transparent
                  onPress={() => alert("More Option Worked!")}
                >
                  <Icon name="md-apps" style={{ color: colors.default }} />
                </Button>
              </Col>
            </Col>
          </Row>
          <Row style={styles.listMusic}>
            <List style={styles.listMusicItem}>
              {MusicList.map((item, index) => (
                <ListItem thumbnail key={index}>
                  <Left>
                    <Thumbnail
                      square
                      source={require("../../assets/favicon.png")}
                    />
                  </Left>
                  <Body>
                    <Text style={styles.listMusicItemText}>{item.name}</Text>
                    <Text
                      style={styles.listMusicItemTextSub}
                      note
                      numberOfLines={1}
                    >
                      By: {item.author}
                    </Text>
                  </Body>
                  <Right>
                    <Button
                      transparent
                      onPress={() => alert(`Playing ${item.name}`)}
                    >
                      <Text style={styles.listMusicItemButtonColor}>View</Text>
                    </Button>
                  </Right>
                </ListItem>
              ))}
            </List>
          </Row>
        </Grid>
      </Content>
    </Container>
  );
};

export default musicStatic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight * 2,
  },
  searchBar: {
    height: 40,
    backgroundColor: "#fff",
    marginHorizontal: 5,
  },
  secondRow: {
    height: 100,
    alignItems: "center",
  },
  secondRowItem: {
    alignItems: "center",
  },
  thirdRow: {
    height: 50,
    paddingHorizontal: 15,
  },
  listMusic: {
    paddingHorizontal: 15,
  },
  listMusicItem: {
    flex: 1,
  },
  listMusicItemText: {
    color: "#445059",
  },
  listMusicItemTextSub: {
    color: colors.default,
  },
  listMusicItemButtonColor: {
    color: colors.primary,
  },
});
