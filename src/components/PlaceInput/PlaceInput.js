import React, { PureComponent } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Fonts } from "../../utils/fonts";


class PlaceInput extends PureComponent {

  state = {
    placeName: ""
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "")
      return;

    this.props.onPlaceAdded(this.state.placeName);
    this.setState({
      placeName: ""
    });
  }


  render() {
    return (
      <View style={styles.inputContainer}>
      <TextInput
        style={styles.placeInput}
        onChangeText={this.placeNameChangedHandler}
        value={this.state.placeName}
        placeholder="Awesome place"
        placeholderColor="gray"
        selectionColor="#6200EE"
        underlineColorAndroid="#7C4DFF"
      />

      <TouchableOpacity onPress={this.placeSubmitHandler} style={styles.touchableContainer}>
        <View >
          <Text style={styles.placeButton}>ADD</Text>
        </View>
      </TouchableOpacity>
      {/* <Button
        styles={styles.placeButton}
        title="Add"
        color="#03DAC5"
        Fonts={Fonts.OpenSans}
        onPress={this.placeSubmitHandler}
      /> */}
    </View>
    );
  }
}

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
    // width: "30%",
    color: "black",
    fontFamily: Fonts.OpenSansBolder
  },
  touchableContainer: {
    width: "15%", 
    backgroundColor: "#03DAC5", 
    padding: 10, 
    elevation: 4, 
    alignItems: 'center'
  }
});