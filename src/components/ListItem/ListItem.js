import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Fonts } from "../../utils/fonts";

const ListItem = (props) => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItem}>
      <Image source={props.placeImage} resizeMode="cover" style={styles.placeImage} />
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
    marginBottom: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  placeImage: {
    marginRight: 8,
    height: 35,
    width:35
  },
  listItemText: {
    fontFamily: Fonts.OpenSans,
    color: "black",
  }
});