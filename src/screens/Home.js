import React, { PureComponent } from "react";
import { connect } from 'react-redux';

import {
  View,
  StatusBar,
  StyleSheet,
  Text
} from "react-native";

import { Fonts } from "../utils/fonts";
import { PlaceInput, PlaceList, PlaceDetail } from "../components";

import { addPlace, deletePlace, deselectPlace, selectPlace } from '../store/actions/index';


class HomeScreen extends PureComponent {

  // state = {
  //   places: [],
  //   selectedPlace: null
  // };

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
    // this.setState( prevState => {
    //   return {
    //     places: prevState.places.concat({
    //       key: Math.random().toString(), 
    //       name: placeName,
    //       image: {
    //         uri: "https://www.westsideintltravel.com/wp-content/uploads/2015/04/germany-frankfort.jpg"
    //       }
    //     })
    //   }
    // });
    this.props.onAddPlace(placeName);
  };

  placeSelectedHandler = key => {
    // this.setState(prevState => {
    //   return {
    //     selectedPlace: prevState.places.find(place => place.key === key)
    //   }
    // });
    this.props.onSelectPlace(key);
  };
  
  placeDeletedHandler = () => {
    //  this.setState(prevState => {
      //   return {
        //     places: prevState.places.filter( place => {
          //       return place.key !== prevState.selectedPlace.key
          //     }),
          //     selectedPlace: null
          //   }
          // });
    this.props.onDeletePlace();
  }

  modalClosedHandler = () => {
    // this.setState({
    //   selectedPlace: null
    // });
    this.props.onDeselectPlace();
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#3700B3" barStyle="light-content" />

        <PlaceDetail 
          selectedPlace={this.props.selectedPlace} 
          onItemDeleted={this.placeDeletedHandler} 
          onModalClosed={this.modalClosedHandler}
          />

        <PlaceInput onPlaceAdded={this.placeAddedHandler} /> 
        <PlaceList places={this.props.places} onItemSelected={this.placeSelectedHandler}/>
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


const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
