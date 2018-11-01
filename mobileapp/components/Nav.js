import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Firebase from './Firebase';
import * as firebase from 'firebase';

import { connect } from "react-redux";
import { ChangePage } from "../redux/actions";

import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Main from "./Main";
import Map from "./Map";

class Nav extends React.Component {
  render() {
    var comp = null;
    
    if(this.props.compPage === 1){
      comp = <SignIn />
    }
    
    if(this.props.compPage === 2){
      comp = <SignUp />
    }
    
    if(this.props.compPage === 3){
      comp = <Main />
    }
    
    if(this.props.compPage === 4){
      comp = <Map />
    }
    
    return (
      <View>
        {comp}
      </View>
    )
  }
}

function mapStateToProps(state){
  return {
    compPage:state.Page.page
  }
}

export default connect(mapStateToProps)(Nav);