import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Firebase from './Firebase';
import * as firebase from 'firebase';

import { connect } from "react-redux";
import { ChangePage } from "../redux/actions";

class SignIn extends React.Component {
   
    state = {
        email:'',
        password:'',
        errorMsg:''
    }
    
    handleButton=()=>{
      this.props.dispatch(ChangePage(2));
    }

    handleSignIn=(email, password)=>{
            console.log("handleSignIn Called");
            console.log(email);
            
        firebase.auth().signInWithEmailAndPassword(email,password)
            .then((user) => {
                console.log("login successful");
                console.log(user);
            })
            .catch((error) =>{
                console.log("Login error");
                console.log(error);
        });
      
      
        this.props.dispatch(ChangePage(3));
        
    }

  render() {
    return (
      <View style={styles.container}>
            <TextInput
                style={styles.signInput}
                placeholder='email'
                onChangeText={(value)=>this.handleTextInput(value,"email")}
                />
            <TextInput
                style={styles.signInput}
                placeholder='password'
                onChangeText={(password)=>this.setState({password})}
                value={this.state.password}
                secureTextEntry={true}
                />
            <Button
                title="Sign In"
                onPress={()=> this.handleSignIn(this.state.email,this.state.password)}
                />
            <Button
                title="Sign Up"
                onPress={this.handleButton}
                />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    signInput: {
        width: 240,
        height: 50,
        backgroundColor: 'lightgrey',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'white',
        textAlign: 'center'
    }
});


function mapStateToProps(state){
  return {
    compPage:state.Page.page
  }
}

export default connect(mapStateToProps)(SignIn);