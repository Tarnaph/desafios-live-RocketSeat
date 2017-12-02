import { StyleSheet } from 'react-native';
import { colors, fonts, metrics, general } from 'styles';


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderColor: colors.lighter,
    height: metrics.email,
    paddingLeft: 15,
    paddingRight: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 3,
  },
  'bg-aqua': {
    backgroundColor: colors.aqua,
  },
  'bg-red': {
    backgroundColor: colors.red,
  },
  'bg-yellow': {
    backgroundColor: colors.yellow,
  },
  'bg-green': {
    backgroundColor: colors.green,
  },
  icon: {
    color: colors.white,
    fontSize: fonts.bigger,
  },
  titleContainer: {
    flex: 1,
    marginLeft: 10,
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
  rightContainer: {

  },
  timeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 15,
  },
  time: {
    fontSize: fonts.small,
    color: colors.light,
    marginLeft: 5,
  },
  iconStar: {
    flex: 1,
    alignSelf: 'flex-end',
  },
});

export default styles;
