
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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

//async function getShop() {
//  try {
//    let res = await fetch('https://api-datastore.appiaries.com/v1/dat/_sandbox/pecolog/shop/-')
//    let responseJson = await res.json()
//    return responseJson
//  } catch(error) {
//    console.error(error);
//  }
//}

export default class GoogleMapPlayground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      LATITUDE,
      LONGITUDE,
      marker1: true,
      marker2: false,
    }
    //fetch('https://api-datastore.appiaries.com/v1/dat/_sandbox/pecolog/shop/-')
    //.then((response) => response.json())
    //.then((res) => {
    //  console.log(res)
    //  this.state = {
    //    LATITUDE: res._objs[0].latitude,
    //    LONGITUDE: res._objs[0].longitude,
    //    marker1: true,
    //    marker2: false,
    //  }
    //})
  }
  //componentDidMount() {
  //  fetch('https://api-datastore.appiaries.com/v1/dat/_sandbox/pecolog/shop/-')
  //  .then((response) => response.json())
  //  .then((res) => {
  //    console.log(res)
  //    this.setState({
  //      LATITUDE: res._objs[0].latitude,
  //      LONGITUDE: res._objs[0].longitude,
  //    })
  //  })
  //}

  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={this.props.provider}
          style={styles.map}
          initialRegion={{
            latitude: this.state.LATITUDE,
            longitude: this.state.LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
        >
          <MapView.Marker
            onPress={() => this.setState({ marker1: !this.state.marker1 })}
            coordinate={{
              latitude: LATITUDE + SPACE,
              longitude: LONGITUDE + SPACE,
            }}
            centerOffset={{ x: -18, y: -60 }}
            anchor={{ x: 0.69, y: 1 }}
            image={this.state.marker1 ? flagBlueImg : flagPinkImg}
          >
            <Text style={styles.marker}>X</Text>
          </MapView.Marker>
          <MapView.Marker
            onPress={() => this.setState({ marker2: !this.state.marker2 })}
            coordinate={{
              latitude: LATITUDE - SPACE,
              longitude: LONGITUDE - SPACE,
            }}
            centerOffset={{ x: -42, y: -60 }}
            anchor={{ x: 0.84, y: 1 }}
            image={this.state.marker2 ? flagBlueImg : flagPinkImg}
          />
          <MapView.Marker
            onPress={() => this.setState({ marker2: !this.state.marker2 })}
            coordinate={{
              latitude: LATITUDE + SPACE,
              longitude: LONGITUDE - SPACE,
            }}
            centerOffset={{ x: -42, y: -60 }}
            anchor={{ x: 0.84, y: 1 }}
            opacity={0.6}
            image={this.state.marker2 ? flagBlueImg : flagPinkImg}
          />
        </MapView>
      </View>
    );
  }
}

GoogleMapPlayground.propTypes = {
  provider: MapView.ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  marker: {
    marginLeft: 46,
    marginTop: 33,
    fontWeight: 'bold',
  },
});

