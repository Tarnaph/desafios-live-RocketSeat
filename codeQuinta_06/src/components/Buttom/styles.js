import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.red,
    height: 60,
    width: 60,
    borderRadius: 30,
    zIndex: 2,
    position: 'absolute',
    top: (metrics.screenHeight - 80) - metrics.btnAndroid,
    left: (metrics.screenWidth - 80),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.regular,
    shadowRadius: 4,
    shadowOffset: { width: -3, height: 5 },
    shadowOpacity: 1,
  },
});

export default styles;
