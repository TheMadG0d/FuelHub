import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import Firebase from './Firebase';
import * as firebase from 'firebase';

import { connect } from "react-redux";
import { ChangePage } from "../redux/actions";

class Main extends React.Component {
    
    state = {
        gasPrices: []
    }

    handleAddCredit=()=>{
        firebase.firestore().collection('credit').add({
            amount: 100
        })
    }
    
    componentDidMount=()=>{
        fetch("https://testserver555.herokuapp.com/fuelhubdata")
        .then((resp)=>resp.json())
        .then((respJson)=>{
            this.setState({
                gasPrices: respJson
            })
        })
        .catch((error)=>{
            console.error(error);
        })
    }
    
    //if (this.state.gasPrices.length !==0){
    //JSON.stringify(this.state.gasPrices)
    //} else {
    //    "Loading..."
    //}
    //   
    
    
  render() {
    var texts = this.state.gasPrices.map((obj)=>{
      return <View style={{width:250, height:250, justifyContent:"center"}}>
        <Text style={styles.gasInfo}>
          Price: {obj.price} 
        </Text>
        <Text style={styles.gasInfo}>
          Address: {obj.addr}
        </Text>
        </View>
    })
    
    return (      

      <View style={styles.container}>
                <Text style={styles.prices}>
                {(this.state.gasPrices.length !==0)?
                null
                : "Loading..."}
                </Text>
        {texts}
        </View>
    );
  }
} 

const styles = StyleSheet.create({
    buyButton: {
    backgroundColor: 'orange',
    width: 50,
    height: 50,
    },
  gasInfo: {
    fontSize:16, 
    color:"steelblue", 
  },
  mainFooter: {
    backgroundColor: "gray",
    width:400,
    bottom:0,
    position:'absolute',
  }
});

function mp(state){
  return {
    
  }
}

export default connect(mp)(Main);
