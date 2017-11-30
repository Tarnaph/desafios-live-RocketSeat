import { StyleSheet } from 'react-native';
import { colors, fonts, metrics, general } from 'styles';


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderBottomWidth: 2,
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
    backgroundColor: colors.purple,
    justifyContent: 'center',
    alignItems: 'center',
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
