import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Fonts } from "../utils/fonts";

const ListItem = (props) => (
  <View style={styles.listItem}>
    <Text style={styles.listItemText}>{props.placeName}</Text>
  </View>
);

export default ListItem;

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    padding: 10,
    backgroundColor: "#eee",
    // borderWidth: 1,
    // borderColor: "#eee",
    // borderBottomColor: "lightgray",
    marginBottom: 0,
  },
  listItemText: {
    fontFamily: Fonts.OpenSans,
    color: "black",
  }
});