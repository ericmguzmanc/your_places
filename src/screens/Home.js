import React, { PureComponent } from 'react';
import { View, Text, StatusBar, StyleSheet, TextInput } from 'react-native';

import { Fonts } from '../utils/fonts';

class HomeScreen extends PureComponent {

  state = {
    placeName: "",
    isFocused: true
  };
  
  static navigationOptions = {
    title: "Home",
    headerStyle: {
      backgroundColor: '#7C4DFF',
    },
    headerTintColor: '#FFFFFF',
    headerTitleStyle: {
      fontFamily: Fonts.OpenSansBold
    }
  };

  placeNameChangedHandler = event => {
    console.log('event -> ', event)
    this.setState({
      placeName: event.value
    });
  }

  handleFocus = () => this.setState({isFocused: true});
  handleBlur = () => this.setState({isFocused: false});


  render() {
    return(
     <View style={styles.container}>
        <StatusBar backgroundColor="#7C4DFF" barStyle="light-content" />
        <Text style={styles.welcome}>This is the HomeScreen!</Text>
        <TextInput 
          style={[styles.placeInput, {
            borderBottomColor: this.state.isFocused
              ? 'pink'
              : 'red',
          }]}
          onChangeText={this.placeNameChangedHandler}
          value={this.state.placeName}
          placeholder="Place Input"
          placeholderColor="gray"
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 0.3,
    borderColor: 'lightgray',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'black',
    fontFamily: Fonts.OpenSansBold
  },
  placeInput: {
    margin: 15,
    flexDirection: 'column',
    height: 52,
    paddingLeft: 15,
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: 'lightgray',
    fontFamily: Fonts.OpenSans,
    borderColor: 'lightgray',
    // borderTopColor: 'lightgray',
    // borderLeftColor: 'lightgray',
    // borderRightColor: 'lightgray',
    // borderBottomColor: 'black',
  }
  
});

export default HomeScreen;
