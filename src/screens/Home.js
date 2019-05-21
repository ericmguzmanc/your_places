import React, { PureComponent } from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TextInput,
  Button
} from "react-native";

import { Fonts } from "../utils/fonts";
import ListItem from "../components/ListItem";
import PlaceInput from "../components/PlaceInput";
import PlaceList from "../components/PlaceList";

class HomeScreen extends PureComponent {
  state = {
    placeName: "",
    places: []
  };

  // status #6200EE
  // header #7C4DFF

  static navigationOptions = {
    title: "Home",
    headerStyle: {
      backgroundColor: "#6200EE"
    },
    headerTintColor: "#FFFFFF",
    headerTitleStyle: {
      fontFamily: Fonts.OpenSansBold
    }
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "")
      return;
    
    this.setState( prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      }
    }, () => { 
      this.setState({
        placeName: ""
      });
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#3700B3" barStyle="light-content" />
        <PlaceInput 
          placeNameChangedHandler={() => this.placeNameChangedHandler}
          placeName={this.state.placeName}
          placeSubmitHandler={() => this.placeSubmitHandler}
        /> 

        <PlaceList places={this.state.places} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "flex-start"
  },
});

export default HomeScreen;
