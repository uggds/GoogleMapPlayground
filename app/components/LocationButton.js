import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

export default class LocationButton extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={() => {
        this.props.moveMaptoLocation(this.props.marker.coordinate)}}>
        <Text>{this.props.marker.title}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'lightgray',
    borderColor: 'black',
    margin: 10
  }
})
