import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Button from '../components/Button/'

const WelcomeScreen = ({navigation}) => {

    function goToMemberSign(){
        navigation.navigate("MemberSignScreen")
    }


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Fitness Salonu</Text>
      <Button text="Üye kaydı oluştur" onPress={goToMemberSign} />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
       
    },
    header:{
        color:'black',
        textAlign:'center',
        fontSize:24,
        fontWeight:'bold',
    },
});

export default WelcomeScreen;