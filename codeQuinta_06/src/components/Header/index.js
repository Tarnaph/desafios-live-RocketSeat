/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors, fonts } from 'styles';


import styles from './styles';

export default class Email extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Icon name="menu" size={fonts.bigger} color={colors.white} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Primary</Text>
        </View>
        <TouchableOpacity>
          <Icon name="search" size={fonts.bigger} color={colors.white} />
        </TouchableOpacity>
      </View>
    );
  }
}
