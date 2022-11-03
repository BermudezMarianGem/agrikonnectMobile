import React from 'react';
import {Text, View,StyleSheet,Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

const App = () => {
  const [selected,setSelected] = React.useState("");
  const data = [
    {key:'1',value:'Vegetable'},
    {key:'2',value:'Fruit'},];
  const countries = ["Vegetable", "Fruit"]
  return(
    <ScrollView contentContainerStyle={styles.contentContainer}>
    <View style = {styles.ground}>
    <View style = {styles.foreground}>
      <Text style = {styles.edit}>Edit Product</Text>
      <Text style = {styles.addtext}>Add product image</Text>
      <Text style = {styles.text}>Upload an image of your product</Text>

      <View style={styles.circle} />

      <Text style = {styles.addtext}>Add product details</Text> 
      <Text style = {styles.text}>Select product category</Text>
      <SelectDropdown
        defaultButtonText={' '}
        buttonStyle={styles.dropdown1BtnStyle}
        buttonTextStyle={styles.dropdown1BtnTxtStyle}
        dropdownStyle={styles.dropdown1DropdownStyle}
        rowStyle={styles.dropdown1RowStyle}
        rowTextStyle={styles.dropdown1RowTxtStyle}
          data={countries}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index)
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item
          }}
        />
        <Text style = {styles.text}>Product Name</Text>
       <TextInput 
      style = {styles.input}>
      </TextInput>

      <Text style = {styles.text}>Product Price</Text>
      <TextInput 
      placeholder='Price in Peso (ex. 20.00)'
      style = {styles.input}
      keyboardType='numeric'>
      </TextInput>

      <Text style = {styles.text}>Product Quantity</Text>
      <TextInput 
      placeholder='Quantity in Kilograms'
      style = {styles.input}
      keyboardType='numeric'>
      </TextInput>

      <View style={styles.bottom}>
      <TouchableOpacity 
      style = {styles.button}>
        <Text 
        style = {styles.buttonText}>
          SAVE CHANGES</Text>
      </TouchableOpacity>
      </View>
      
    </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    color: '#F4F4F4',
  },
  ground:{
    backgroundColor: '#F4F4F4',
    flex:1,
    justifyContent: 'center',
  },
  foreground:{
    flex: 1,
    flexDirection: 'column',
    alignContent: 'space-around',
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
  },
  edit:{
    color: 'green',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 5,
   
  },
  addtext:{
    color: 'green',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 15,
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 10,
    backgroundColor: "#388E3C",
    marginTop: 10,
  },
  text:{
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
  },
  inputsBox:{
    marginBottom: 0,
  },
  input:{
    backgroundColor: '#D9D9D9',
    borderRadius: 4,
    flexDirection: 'row',
    marginBottom: 15,
    fontSize: 18,
    padding: 10,
    fontWeight: 'bold',
  },
  bottom:{
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 15
  },
  button:{
    backgroundColor: 'green',
    borderRadius: 10,
    marginTop: 20,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  buttonText:{
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  dropdown1BtnStyle: {
    width: '100%',
    height: 50,
    backgroundColor: '#D9D9D9',
    borderRadius: 4,
    marginBottom: 15,
  },
  dropdown1BtnTxtStyle: {
    color: '#444', 
    textAlign: 'left', 
    fontWeight: 'bold'
  },
  dropdown1DropdownStyle: {
    backgroundColor: 'white'
  },
  dropdown1RowStyle: {
    backgroundColor: 'green', 
    borderBottomColor: 'green'
  },
  dropdown1RowTxtStyle: {
    color: 'white', 
    textAlign: 'left'
  },

})

export default App;