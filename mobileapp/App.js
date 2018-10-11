import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Credit from './components/Credit';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { createStackNavigator,} from 'react-navigation';

//class App extends React.Component {
//    
//    //const db = firebase.firestore();
//    
////    handleSignIn=()=>{
////        firebase.auth().signInWIthEmailAndPassword('Testing@test.com', 'Password')
////    }
//    
//  render() {
//    return (
//      <View style={styles.container}>
//            <Credit/>
//            <SignIn/>
//      </View>
//    );
//  }
//}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const App = createStackNavigator({
    Home: { screen: SignIn },
    Register: { screen: SignUp },
});

export default App;
