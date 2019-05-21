import React from 'react';
import { View, StyleSheet, ScrollView} from 'react-native';
import ListItem from '../ListItem/ListItem';

const PlaceList = (props) => {
  const placesOutput = props.places.map((place, i) => (
    <ListItem 
      key={i} 
      placeName={place} 
      onItemPressed={() => props.onItemDeleted(i)}
    /> 
  ));

  return (
    <ScrollView style={styles.listContainer}>
      {placesOutput}
    </ScrollView> 
  );
};

export default PlaceList;

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
  }
});