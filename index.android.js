import React, { Component } from 'react';
import { AppRegistry, StatusBar, StyleSheet, Text, View } from 'react-native';
import CondensedForecast from './app/components/condensedForecast';

export default class AirAround extends Component {
  constructor(props) {
    super();
    this.state = {
      weather: {
        city: 'Cidade',
        country: 'País',
        temperature: '??',
        condition: 'Condição'
      }
    }
  }

  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  getWeather() {
    return fetch('http://api.openweathermap.org/data/2.5/weather?q=Juiz%20de%20Fora,BR&APPID=ade0b23e943de9269f808f2525537f32&units=metric&lang=pt')
      .then((response) => response.json())
      .then((weatherData) => {
        this.setState({
          weather: {
            city: weatherData.name,
            country: weatherData.sys.country,
            temperature:  Math.floor(weatherData.main.temp),
            condition: this.capitalize(weatherData.weather[0].description)
          }
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentWillMount() {
    this.getWeather();
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <StatusBar backgroundColor="#3498db" barStyle="light-content" />
        <View style={styles.mainView}>
          <View style={styles.mainTemperatureWrapper}>
            <Text style={styles.mainTemperature}>
              {this.state.weather.temperature}°
            </Text>
          </View>
          <View style={styles.homeDetails}>
            <Text style={styles.chosenPlace}>
              {this.state.weather.city}, {this.state.weather.country}
            </Text>
            <Text style={styles.weatherKind}>
              {this.state.weather.condition}
            </Text>
          </View>
        </View>
        <View style={styles.nextDays}>
          <CondensedForecast />
          <CondensedForecast />
          <CondensedForecast />
          <CondensedForecast />
          <CondensedForecast />
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
    flexDirection: 'row',
    flex: 3,
    backgroundColor: '#34495e',
  }
});

AppRegistry.registerComponent('AirAround', () => AirAround);
