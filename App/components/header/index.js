import moment from 'moment';
import { 
  StyleSheet,
  SafeAreaView, 
  Text 
} from 'react-native';
export const Header = () => {
  const today = moment().locale('fr').format('dddd, DD MMM');
  return (
    <SafeAreaView>
      <Text style={styles.text}>{today}</Text>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  text: {
    margin: 21,
    fontSize: 30,
  }
});
