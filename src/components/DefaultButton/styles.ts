import { StyleSheet } from 'react-native';
import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.mainOrange,
    justifyContent: 'center',
    height: 50,
    marginTop: 5,
    width: '80%',
  },
  primary: {
    backgroundColor: colors.mainOrange,
    borderColor: colors.mainOrange,
    borderRadius: 8,
    borderWidth: 1,
  },
  secondary: {
    backgroundColor: colors.white,
    borderColor: colors.mainOrange,
    borderRadius: 8,
    borderWidth: 1,
  }
});

export default styles;
