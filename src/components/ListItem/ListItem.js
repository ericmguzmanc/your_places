import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Fonts } from "../../utils/fonts";

const ListItem = (props) => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItem}>
      <Text style={styles.listItemText}>{props.placeName}</Text>
    </View>
  </TouchableOpacity>
);

export default ListItem;

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    padding: 10,
    backgroundColor: "#eee",
    marginBottom: 0,
  },
  listItemText: {
    fontFamily: Fonts.OpenSans,
    color: "black",
  }
});