import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ListItem from '../ListItem/ListItem';

const PlaceList = (props) => {
  const placesItemOutput = (item) => (
    <ListItem 
      placeName={item.name}
      placeImage={item.image} 
      onItemPressed={() => props.onItemDeleted(item.key)}
    />
  );

  return (
    <FlatList 
      style={styles.listContainer}
      data = {props.places}
      renderItem = {({item}) => placesItemOutput(item)}
    >
    </FlatList> 
  );
};

export default PlaceList;

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
  }
});