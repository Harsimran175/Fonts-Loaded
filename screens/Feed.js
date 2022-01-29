import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image
} from "react-native";

//expo install expo-app-loading
//expo install expo-font
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

let customFonts = {
  "Bubble": require("../assets/fonts/BubblegumSans-Regular.ttf"),
  "Geo":require('../Georgia.ttf')
};


export default class Feed extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() { 
    this._loadFontsAsync();
  }



  render() {
    
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
      
    <Text style={{color:"black",fontSize:25,justifyContent:"center",alignSelf:"center",margin:60}}>Font Styles</Text>
    
          <Text style={{fontFamily:'Bubble'}}>Hello!</Text>
          <Text style={{fontFamily:'Geo'}}>Hello!</Text> 
          <Text>Hello!</Text>
          <Text>Hello!</Text>
          <Text>Hello!</Text>

        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent:'center',
    backgroundColor:"lightgreen",
    alignItems:'center'
  },
  
});
