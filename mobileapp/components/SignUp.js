import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Firebase from './Firebase';
import * as firebase from 'firebase';

import { connect } from "react-redux";
import { ChangePage } from "../redux/actions";

class SignUp extends React.Component {
    
    state = {
        email:'',
        password:'',
        errorMsg:'',
        firstname:'',
        lastname:''
    }
    
    handleSignUp=(email,password)=>{
    firebase.auth().createUserWithEmailAndPassword(email,password)
            .then((user) => {
            alert("Welcome to FuelHub!")
                console.log("New User Created");
                console.log(user);
        
            })
            .catch((error) =>{
                console.log("Error was found when making a new user");
                console.log(error);
        });
         }
    
    handleGoBack=()=>{
      this.props.dispatch(ChangePage(1));
    }
    
  render() {
    return (
      <View style={styles.container}>
            <TextInput
                style={styles.signUpInput}
                placeholder='First Name'
                onChangeText={firstname=>this.setState({firstname})}
                value={this.state.firstname}
                />
            <TextInput
                style={styles.signUpInput}
                placeholder='lastname'
                onChangeText={lastname=>this.setState({lastname})}
                value={this.state.lastname}
                />
            <TextInput
                style={styles.signUpInput}
                placeholder='email'
                onChangeText={email=>this.setState({email})}
                value={this.state.email}
                />
            <TextInput
                style={styles.signUpInput}
                placeholder='password'
                onChangeText={(password)=>this.setState({password})}
                value={this.state.password}
                secureTextEntry={true}
                />
            <Button
                title="Create Account"
                onPress={()=> this.handleSignUp(this.state.email,this.state.password)}
                />
            <Button
              title="Go Back"
              onPress={this.handleGoBack}
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
    signUpInput: {
        width: 240,
        height: 50,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ffe',
        textAlign: 'center'
    }
});

function mp(state){
  return {
    
  }
}

export default connect(mp)(SignUp);