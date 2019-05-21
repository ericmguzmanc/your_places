import React from 'react';
import { View, StyleSheet } from 'react-native';
import ListItem from './ListItem';

const PlaceList = (props) => {
  const placesOutput = props.places.map((place, index) => (
    <ListItem key={index} placeName={place}/> 
  ));

  return (
    <View style={styles.listContainer}>
      {placesOutput}
    </View> 
  );
};

export default PlaceList;

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
  }
});