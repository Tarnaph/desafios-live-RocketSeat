import { StyleSheet } from 'react-native';
import { colors, fonts, metrics, general } from 'styles';


const styles = StyleSheet.create({
  container: {
    height: 85,
    backgroundColor: colors.red,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: colors.red_light,
    paddingHorizontal: metrics.baseMargin-5,
    paddingTop: 30,
  },
  titleContainer: {
    flex: 1,
    marginLeft: 20,
  },
  title: {
    fontSize: fonts.big,
    color: colors.white,
    fontWeight: '500',
  },
});

export default styles;
