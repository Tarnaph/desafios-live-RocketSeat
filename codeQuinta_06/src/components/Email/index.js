import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors, fonts } from 'styles';

import styles from './styles';

const Email = ({ email }) => (
  <TouchableOpacity style={styles.container}>
    <View style={styles.iconContainer}>
      <Text style={styles.icon}>A</Text>
    </View>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{email.title}</Text>
      <Text style={styles.subTitle}>{email.description}</Text>
    </View>
    <View style={styles.rightContainer}>
      <View style={styles.timeContainer}>
        <Icon name="attachment" size={fonts.regular} color={colors.light} />
        <Text style={styles.time}>1:45 PM</Text>
      </View>
      <Icon style={styles.iconStar} name="star" size={fonts.bigger} color={colors.yellow_medium} />
    </View>
  </TouchableOpacity>
);

export default Email;
