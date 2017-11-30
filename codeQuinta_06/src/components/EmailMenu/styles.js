import { StyleSheet } from 'react-native';
import { colors, fonts, metrics, general } from 'styles';


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderColor: colors.lighter,
    height: 65,
    paddingHorizontal: metrics.baseMargin,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {

  },
  titleContainer: {
    flex: 1,
    marginLeft: 20,
  },
  title: {
    fontSize: fonts.regular,
    fontWeight: '600',
    color: colors.darker,
  },
  subTitle: {
    fontSize: fonts.small,
    color: colors.light,
    marginTop: 5,
  },
  badges: {
    backgroundColor: colors.blue,
    width: 60,
  },
  badgesText: {
    color: colors.white,
    fontSize: fonts.small,
    alignSelf: 'center',
    padding: 3,
  },
});

export default styles;
