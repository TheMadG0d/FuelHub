import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Firebase from './Firebase';
import * as firebase from 'firebase';

class Credit extends React.Component {
    
    handleAddCredit=()=>{
        firebase.firestore().collection('credit').add({
            amount: 100
        })
    }
    
  render() {
    return (
      <View style={styles.container}>
            <Button
                title="Add Credit"
                onPress={this.handleAddCredit}
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
});

export default Credit;
