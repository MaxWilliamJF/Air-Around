import React, { Component } from 'react';
import { AppRegistry, StatusBar, StyleSheet, Text, View } from 'react-native';

export default class AirAround extends Component {
  constructor() {
    super();
    this.state = {
      currentTemperature: 16,
      chosenPlace: {
        city: 'Juiz de Fora',
        state: 'Minas Gerais'
      },
      weatherKind: 'Nublado'
    }
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <StatusBar backgroundColor="#3498db" barStyle="light-content" />
        <View style={styles.mainView}>
          <View style={styles.mainTemperatureWrapper}>
            <Text style={styles.mainTemperature}>
              {this.state.currentTemperature}°
            </Text>
          </View>
          <View style={styles.homeDetails}>
            <Text style={styles.chosenPlace}>
              {this.state.chosenPlace.city}, {this.state.chosenPlace.state}
            </Text>
            <Text style={styles.weatherKind}>
              {this.state.weatherKind}
            </Text>
          </View>
        </View>
        <View style={styles.nextDays}>
          <Text style={styles.nextDaysPlaceHolder}>Next few days forecast</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column'
  },
  mainView: {
    flex: 5,
    backgroundColor: '#3498db',
    padding: 20
  },
  mainTemperatureWrapper: {
    flex: 14,
    justifyContent: 'flex-end',
    padding: 0
  },
  mainTemperature: {
    fontSize: 160
  },
  homeDetails: {
    flex: 3,
    justifyContent: 'flex-start'
  },
  chosenPlace: {
    fontSize: 20
  },
  weatherKind: {
    fontSize: 18
  },
  nextDays: {
    flex: 3,
    backgroundColor: '#34495e',
    justifyContent: 'center',
    alignItems: 'center'
  },
  nextDaysPlaceHolder: {
    fontSize: 15,
    color: '#ffffff'
  }
});

AppRegistry.registerComponent('AirAround', () => AirAround);
