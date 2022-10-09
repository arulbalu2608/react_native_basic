import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: '#F6F7FB',
  },
  title: {
    padding: hp('2%'),
    backgroundColor: '#004C6B',
    color: '#ffff',
    fontSize: hp('3%'),
    textAlign: 'center',
  },

  noData: {
    textAlign: 'center',
    color: '#0D0E11',
    fontSize: hp('2%'),
    fontWeight: '700',
    paddingVertical: hp('5%'),
  },
  card: {
    backgroundColor: '#F6F8FA',
    margin: hp('2%'),
    padding: hp('2%'),
    elevation: 10,
    shadowColor: '#52006A',
  },

  cardTitle: {
    fontSize: hp('3%'),
    fontWeight: '700',
    color: '#0D0E11',
  },
  cardContent: {
    fontSize: hp('1.8%'),
    fontWeight: '400',
    paddingVertical: hp('2%'),
    color: '#0D0E11',
  },
});
