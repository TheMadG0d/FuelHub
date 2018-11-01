import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

import { Provider } from "react-redux";
import Thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

import combine from "./redux/combine";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Nav from "./components/Nav";

import Map from "./components/Map";

const store = createStore(
  combine,
  applyMiddleware(
    Thunk
  )
);

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Map />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;
