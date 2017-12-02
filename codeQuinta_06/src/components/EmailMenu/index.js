/* Core */
import React from 'react';

/* Presentational */
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors, fonts } from 'styles';

import styles from './styles';

const EmailMenu = ({ menuEmail, iconType, iconColor, bagdeColor }) => (

  <TouchableOpacity style={styles.container}>
    <View style={styles.iconContainer}>
      <Icon name={iconType} size={fonts.bigger} color={iconColor} />
    </View>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{menuEmail.title}</Text>
      <Text style={styles.subTitle}>{menuEmail.description}</Text>
    </View>
    <View style={[styles.badges,
      bagdeColor ? styles[`bg-${bagdeColor}`] : {}]}
    >
      <Text style={styles.badgesText}>{menuEmail.qty} New</Text>
    </View>
  </TouchableOpacity>
);

export default EmailMenu;
