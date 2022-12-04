import React from 'react';
import {Text, View,StyleSheet,Image, TouchableOpacity, TextInput, ScrollView, Alert} from 'react-native';

/*Icons Library-Start*/
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import MI from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
/*Icons Library-End*/

const Account = ({navigation}) => {
    return(
        <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style = {styles.ground}>
        <View style = {styles.foreground}>
        <View style = {[styles.rSoldBox, styles.elevation]}>
        <TouchableOpacity style = {styles.logo}>
        <MCI name='account-circle' color={'gray'} size={100} iconStyle={''}/>
        </TouchableOpacity>
        <View style={styles.bottom}>
        <Text style = {styles.name}>{global.firstname} {global.lastname}</Text>
          <Text style = {styles.eMail}>{global.username}</Text>
          </View>
        </View>
    
          
          <View style={styles.rectangle}>
          <TouchableOpacity onPress={ () => navigation.navigate('ContactInfoEdit')}>
          <View style = {[styles.mPBox, styles.elevation]}>
          <View style = {styles.leftIcon}>
            <AntDesign name="contacts" color={'black'} size={25} iconStyle={''}/>
            </View>
            <Text style = {styles.menubuttonText}>
                Contact Information
            </Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={ () => navigation.navigate('EditPassword')}>
          <View style = {[styles.mPBox]}>
          <View style = {styles.leftIcon}>
            <MCI name="lock" color={'black'} size={25} iconStyle={''}/>
            </View>
            <Text style = {styles.menubuttonText}>
                Password
            </Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity style = {[styles.mPBox]} onPress={ () => navigation.navigate('ProductReview')}>
          <View style = {styles.leftIcon}>
            <MCI name="message-star-outline" color={'black'} size={25} iconStyle={''}/>
            </View>
            <Text style = {styles.menubuttonText}>
                Product Reviews
            </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={ () => [Alert.alert("You Have been successfully logged out"), navigation.popToTop()] }>
          <View style = {[styles.mPBox]}>
          <View style = {styles.leftIcon}>
            <Ionicons name="log-out-outline" color={'black'} size={25} iconStyle={''}/>
            </View>
            <Text style = {styles.menubuttonText}>
                Logout
            </Text>
        </View>
        </TouchableOpacity>

          </View>
        </View>
        </View>
        </ScrollView>
    );}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        color: 'green',
      },
      ground:{
        flex:1,
        justifyContent: 'center',
        backgroundColor: 'white',
      },
      foreground:{
        flex: 1,
        flexDirection: 'column',
        alignContent: 'space-around',
      },
      rSoldBox:{
        backgroundColor: "white",
        flexDirection: "row",
        flexWrap: 'nowrap',
        height: 200,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      bottom:{
        flex: 1,
        marginLeft: 10, 
      },
      logo:{
        marginLeft: 20,
      },
      name:{
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
      },
      eMail:{
        fontSize: 12,
      },
      rectangle: {
        width: 'auto',
        height: 5000,
        borderRadius: 40,
        backgroundColor: "#388E3C",
        marginTop: 0,
        padding: 20,
        paddingTop: 100,
      },
      mPBox:{
        flexDirection: "row",
        flexWrap:'nowrap',
        height: 50,
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 4,
        marginBottom: 30,
      },
      leftIcon:{
        height: '100%',
        width: '15%',
        justifyContent: 'center',
        marginLeft: 20,
      },
      menubuttonText:{
        color: 'black',
        fontSize: 18,
        textAlign: 'left',
      },
})

export default Account;