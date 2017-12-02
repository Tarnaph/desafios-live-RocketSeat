import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors, fonts } from 'styles';

import styles from './styles';

const Email = ({ email, iconColor }) => (
  <TouchableOpacity style={styles.container}>
    <View style={[styles.iconContainer,
    iconColor ? styles[`bg-${iconColor}`] : {}]}>
      <Text style={styles.icon}>{email.title.substring(0,1)}</Text>
    </View>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{email.title}</Text>
      <Text style={styles.subTitle}>{email.description}</Text>
    </View>
    <View style={styles.rightContainer}>
      <View style={styles.timeContainer}>
      { email.attachment
        ? <Icon name="attachment" size={fonts.regular} color={colors.dark} />
        : <Icon name="attachment" size={fonts.regular} color={colors.white} />
      }
        <Text style={styles.time}>{email.time}</Text>
      </View>
      <Icon
        style={styles.iconStar}
        name={email.save
          ? 'star'
          : 'star-border'
        }
        size={fonts.bigger}
        color={colors.yellow_medium}
      />
    </View>
  </TouchableOpacity>
);

export default Email;
