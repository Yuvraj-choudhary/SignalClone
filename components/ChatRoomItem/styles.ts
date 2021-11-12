import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    badgeText: {
      color: 'white'
    },
    badgeContainer: {
      backgroundColor: '#3777f0',
      width: 20,
      height: 20,
      borderRadius: 100,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      left:45,
      top: 10,
      borderWidth: 1,
      borderColor: 'white'
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      
    },
    name: {
      fontWeight: 'bold',
      fontSize: 16.6,
      marginBottom: 3,
    },
    image: {
      width: 49,
      height: 49,
      borderRadius: 100,
      marginRight: 10,
    },
    container: {
      flexDirection: 'row',
      padding: 10,
    },
    rightContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    text: {
      color:'grey',
    }
  });

  export default styles;