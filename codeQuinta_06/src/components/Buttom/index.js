/* Core */
import React from 'react';

/* Presentational */
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors, fonts } from 'styles';
import styles from './styles';

const Buttom = () => (
  <TouchableOpacity style={styles.container}>
    <Icon style={styles.iconStar} name="create" size={fonts.biggerPlus} color={colors.white} />
  </TouchableOpacity>
);

export default Buttom;
