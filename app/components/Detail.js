import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Dimensions,
} from 'react-native';
import MapView from 'react-native-maps';
import flagBlueImg from '../../assets/marker.png';
import flagPinkImg from '../../assets/marker.png';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.00922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.001;

const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) * min
}

let key = 0

export default class GoogleMapPlayground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [
        {
          key,
          coordinate: {
            latitude: this.props.shop._objs[0].latitude,
            longitude: this.props.shop._objs[0].longitude,
          },
          title: this.props.shop._objs[0].name,
          description: 'hogehogehoge~',
          image: flagBlueImg
        }
        ],
        region: {
            latitude: this.props.shop._objs[0].latitude,
            longitude: this.props.shop._objs[0].longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
        },
      LATITUDE: this.props.shop._objs[0].latitude,
      LONGITUDE: this.props.shop._objs[0].longitude,
      marker1: true,
      marker2: false,
    }
    this.handlePress = this.handlePress.bind(this)
    this.onRegionChange = this.onRegionChange.bind(this)
    //this.handleMarkPress = this.handleMarkPress.bind(this)
  }

  handlePress(e) {
    this.setState({
      markers: [
        ...this.state.markers,
        {
          key: ++key,
          coordinate: e.nativeEvent.coordinate,
          title: `Hoge ${key}`,
          description: 'hogehogehoge~',
          image: flagPinkImg,
          onMarkerPress: this.handleMarkPress
        }
      ]
    })
  }
  
  handleMarkPress(e) {
  }

  onRegionChange(region) {
    this.setState({region})
  }

  render() {
    return (
      <View style={styles.container} >
      <MapView
          style={styles.map}
          mapType="standard"
          showsUserLocation={true}
          followsUserLocation={true}
          showsCompass={false}
          showsPointOfInterest={false}
          initialRegion={this.state.region}
          onPress={this.handlePress}
          onRegionChange={this.onRegionChange}
        >
        {this.state.markers.map(marker => {
          return (
            <MapView.Marker {...marker} />
          )
        })}
        </MapView>
        <View style={styles.container}>
        <Text>
        Latitude: {this.state.region.latitude}{'\n'}
        Longitude: {this.state.region.longitude}{'\n'}
        LatitudeDelta: {this.state.region.latitudeDelta}{'\n'}
        LongitudeDelta: {this.state.region.longitudeDelta}
        </Text>
        </View>
      </View>
    );
  }
}

GoogleMapPlayground.propTypes = {
  provider: MapView.ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    width: width,
    height: height,
    flex: 2
  },
  marker: {
    backgroundColor: "#550bbc",
    padding: 5,
    borderRadius: 5,
  },
  text: {
    color: "#fff",
    fontWeight: "bold"
  }
});

//const styles = StyleSheet.create({
//  container: {
//    ...StyleSheet.absoluteFillObject,
//    justifyContent: 'flex-end',
//    alignItems: 'center',
//  },
//  map: {
//    ...StyleSheet.absoluteFillObject,
//  },
//  marker: {
//    marginLeft: 46,
//    marginTop: 33,
//    fontWeight: 'bold',
//  },
//});

 //         <MapView.Marker
 //           onPress={() => this.setState({ marker1: !this.state.marker1 })}
 //           coordinate={{
 //             latitude: this.state.LATITUDE + SPACE,
 //             longitude: this.state.LONGITUDE + SPACE,
 //           }}
 //           centerOffset={{ x: -18, y: -60 }}
 //           anchor={{ x: 0.69, y: 1 }}
 //           image={this.state.marker1 ? flagBlueImg : flagPinkImg}
 //         >
 //           <Text style={styles.marker}>X</Text>
 //         </MapView.Marker>
 //         <MapView.Marker
 //           onPress={() => this.setState({ marker2: !this.state.marker2 })}
 //           coordinate={{
 //             latitude: this.state.LATITUDE - SPACE,
 //             longitude: this.state.LONGITUDE - SPACE,
 //           }}
 //           centerOffset={{ x: -42, y: -60 }}
 //           anchor={{ x: 0.84, y: 1 }}
 //           image={this.state.marker2 ? flagBlueImg : flagPinkImg}
 //         />
 //         <MapView.Marker
 //           onPress={() => this.setState({ marker2: !this.state.marker2 })}
 //           coordinate={{
 //             latitude: this.state.LATITUDE + SPACE,
 //             longitude: this.state.LONGITUDE - SPACE,
 //           }}
 //           centerOffset={{ x: -42, y: -60 }}
 //           anchor={{ x: 0.84, y: 1 }}
 //           opacity={0.6}
 //           image={this.state.marker2 ? flagBlueImg : flagPinkImg}
 //         />
