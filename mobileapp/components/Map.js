import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Location } from 'expo';

const { width, height } = Dimensions.get('window')

const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

class Map extends React.Component {
  
  constructor(props){
    super(props)

  
    this.state = {
      initialPosition: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0
      },
      markerPosition: {
        latitude: 0,
        longitude: 0
      }
    }
    }

  watchID: ?number = null

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position)=>{
    var lat = parseFloat(position.coords.latitude)
    var long = parseFloat(position.coords.longitude)
    
    var initialRegion = {
      latitude: lat,
      longitude: long,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA
    }
    
    this.setState({initialPosition: initialRegion})
    this.setState({markerPosition: initialRegion})
    
  }, 
                                             
  (error) => alert(JSON.stringify(error)),
  {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000})
  
  this.watchID = navigator.geolocation.watchPosition((position) =>{
    var lat = parseFloat(position.coords.latitude)
    var long = parseFloat(position.coords.longitude)
    
    var lastRegion = {
      latitude: lat,
      longitude: long,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA
    }
    
    this.setState({initialPosition: lastRegion})
    this.setState({markerPosition: lastRegion})
  })
                                           
}
    componentWillUnmount(){
      navigator.geologcation.clearWatch(this.watchID)
    }

    onRegionChange=(initialPosition)=>{ console.log(initialPosition);
      this.setState({initialPosition});
    }
    
    onRegionChangeComplete=(initialPosition)=>{ console.log(initialPosition);
      this.setState({initialPosition});
    }
  render() {
    
    return (
        <View style={styles.container}>
            <View style={styles.background}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Chevron Stations</Text>
                </View> 
                  <MapView
                  style={styles.map}
                  zoomEnabled = {true}
                  showUserLocation
                  followUserLocation
                  loadingEnabled
                  region={this.state.initialPosition}
                  onRegionChange={this.onRegionChange}
                  onRegionChangeComplete={this.onRegionChangeComplete}
                >
                  <MapView.Marker
                    coordinate={this.state.markerPosition}/>
              
              </MapView>
              
            <View style={styles.footer}></View>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
    map: {
        height:400,
        marginTop: 180,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    header: {
        height: 180,
        top: 0,
        backgroundColor: '#242424',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right:0,
        alignItems: 'center'
    },
    background: {
        height: 850,
        backgroundColor: '#ececec',
        position: 'absolute',
        bottom: 0,
        top: 0,
        left: 0,
        right: 0,
        alignItems: 'center'
    },
    footer: {
        height: 130,
        backgroundColor: '#242424',
        bottom: 0,
        left: 0,
        right:0,
        position: 'absolute',
        flex: 0.1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerText: {
        color: 'white',
        fontSize: 36,
        position: 'absolute',
        bottom: 0,
        top: 60,
        alignItems: 'center',
    }
});

export default Map;
