import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Dimensions,
} from 'react-native';
import MapView from 'react-native-maps';
import flagBlueImg from '../../assets/flag-blue.png';
import flagPinkImg from '../../assets/flag-pink.png';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) * min
}


export default class GoogleMapPlayground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [],
      LATITUDE: this.props.shop._objs[0].latitude,
      LONGITUDE: this.props.shop._objs[0].longitude,
      marker1: true,
      marker2: false,
    }
    this.handlePress = this.handlePress.bind(this)
  }

  handlePress(e) {
    const rand = `$${getRandomInt(50, 300)}`
    this.setState({
      markers: [
        ...this.state.markers,
        {
          key: rand,
          coordinate: e.nativeEvent.coordinate,
          cost: rand
        }
      ]
    })
  }

  render() {
    return (
      <MapView
          style={styles.container}
          provider={this.props.provider}
          initialRegion={{
            latitude: this.state.LATITUDE,
            longitude: this.state.LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
          onPress={this.handlePress}
        >
        {this.state.markers.map(marker => {
          return (
            <MapView.Marker {...marker}>
              <View style={styles.marker}>
              <Text style={styles.text}>{marker.cost}</Text>
              </View>
            </MapView.Marker>
          )
        })}
      </MapView>
    );
  }
}

GoogleMapPlayground.propTypes = {
  provider: MapView.ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
