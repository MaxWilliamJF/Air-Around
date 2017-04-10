import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class CondensedForecast extends Component {
  constructor() {
    super();
    this.setState = {
      forecast: []
    }
  }

  render() {
    return(
      <View style={styles.condensedForecast}>
        <Text style={styles.textLight}>Dia</Text>
        <Text style={styles.textLight}>??°</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  condensedForecast: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textLight: {
    fontSize: 18,
    color: '#ffffff'
  }
})

AppRegistry.registerComponent('CondensedForecast', () => CondensedForecast);
