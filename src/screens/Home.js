import React, { PureComponent } from "react";
import {
  View,
  StatusBar,
  StyleSheet,
  Text
} from "react-native";

import { Fonts } from "../utils/fonts";
import { PlaceInput, PlaceList, PlaceDetail } from "../components";

class HomeScreen extends PureComponent {

  state = {
    places: [],
    selectedPlace: null
  };

  // status #6200EE
  // header #7C4DFF

  static navigationOptions = {
    // title: "Home",
    headerStyle: {
      backgroundColor: "#6200EE"
    },
    headerTintColor: "#FFFFFF",
    headerTitleStyle: {
      fontFamily: Fonts.OpenSans
    },
    headerTitle: <Text style={{textAlign: 'left', flex: 1, fontFamily: Fonts.OpenSansBolder, fontSize: 20, color: "#FFFFFF", padding: 15}}> Home </Text>
  };

  placeAddedHandler = placeName => { 
    this.setState( prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random().toString(), 
          name: placeName,
          image: {
            uri: "https://www.westsideintltravel.com/wp-content/uploads/2015/04/germany-frankfort.jpg"
          }
        })
      }
    });
  };

  placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => place.key === key)
      }
    })
  };

  placeDeletedHandler = () => {
     this.setState(prevState => {
      return {
        places: prevState.places.filter( place => {
          return place.key !== prevState.selectedPlace.key
        }),
        selectedPlace: null
      }
    });
  }

  modalClosedHandler = () => {
    this.setState({
      selectedPlace: null
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#3700B3" barStyle="light-content" />

        <PlaceDetail 
          selectedPlace={this.state.selectedPlace} 
          onItemDeleted={this.placeDeletedHandler} 
          onModalClosed={this.modalClosedHandler}
          />

        <PlaceInput onPlaceAdded={this.placeAddedHandler} /> 
        <PlaceList places={this.state.places} onItemSelected={this.placeSelectedHandler}/>
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
