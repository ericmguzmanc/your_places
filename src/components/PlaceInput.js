import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { Fonts } from "../utils/fonts";


const PlaceInput = (props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.placeInput}
        onChangeText={props.placeNameChangedHandler()}
        value={props.placeName}
        placeholder="Awesome place"
        placeholderColor="gray"
        selectionColor="#6200EE"
        underlineColorAndroid="#7C4DFF"

      />
      <Button
        styles={styles.placeButton}
        title="Add"
        color="#03DAC5"
        Fonts={Fonts.OpenSans}
        onPress={props.placeSubmitHandler()}
      />
    </View>
  )
};

export default PlaceInput;

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10
  },
  placeInput: {
    width: "70%",
    fontFamily: Fonts.OpenSans
  },
  placeButton: {
    width: "30%",
    color: "black"
  },
});