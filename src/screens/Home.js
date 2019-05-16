import React, { PureComponent } from 'react';
import { View, Text, StatusBar, StyleSheet, TextInput, Button } from 'react-native';

import { Fonts } from '../utils/fonts';

class HomeScreen extends PureComponent {

  state = {
    placeName: "",
    isFocused: true
  };

  // status #6200EE
  // header #7C4DFF
  
  static navigationOptions = {
    title: "Home",
    headerStyle: {
      backgroundColor: '#6200EE',
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
        <StatusBar backgroundColor="#3700B3" barStyle="light-content" />
        <View style={styles.inputContainer}>

          <TextInput 
            style={styles.placeInput}
            onChangeText={this.placeNameChangedHandler}
            value={this.state.placeName}
            placeholder="Place Input"
            placeholderColor="gray"
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            selectionColor="#6200EE"
            underlineColorAndroid="#7C4DFF"
            
          />
          <Button 
            styles={styles.placeButton}
            title="Add"
            color="#03DAC5"
            Fonts={Fonts.OpenSans}
            
          /> 
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputContainer: {
    // flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput: {
    // margin: 15,
    // flexDirection: 'column',
    width: "70%",
    // paddingLeft: 15,
    fontFamily: Fonts.OpenSans,
  },
  placeButton: {
    width: "30%",
    color: "black"
  }
  
});

export default HomeScreen;
