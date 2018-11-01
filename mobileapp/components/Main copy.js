import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Firebase from './Firebase';
import * as firebase from 'firebase';


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
      return <Text style={{fontSize:18, color:"#ffggbb"}}>{obj.price}</Text>
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    buyButton: {
    backgroundColor: 'orange',
    width: 50,
    height: 50,
    },
    prices: {
    color: 'gray',
    }
});

export default Main;
