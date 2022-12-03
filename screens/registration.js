import React, { useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import SelectDropdown from "react-native-select-dropdown";

const Registration = ({ navigation }) => {
  const [firstname, setFirstname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [validusername, setValidUsername] = useState("");
  const [mobilephone, setMobilephone] = useState("");
  const [validnumber, setValidNumber] = useState("");
  const [email, setEmail] = useState("");
  const [validemail, setValidEmail] = useState("");
  const [validpassword, setValidPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [validconfirm, setValidConfirm] = useState("");
  const [verified, setVerified] = useState("");
  const [selectedImage, setSelectedImage] = useState([
    { fileName: "Choose a photo" },
  ]);

  const [data, setData] = useState([]);

  const RegisterSeller = async () => {
    const formData = new FormData();
    formData.append("firstname", firstname);
    formData.append("middlename", middlename);
    formData.append("lastname", lastname);
    formData.append("username", username);
    formData.append("mobilephone", validnumber);
    formData.append("email", validemail);
    formData.append("password", password);
    formData.append("confirmPw", confirmPw);
    formData.append("verified", verified);

    // temp
    formData.append("shippingfee", 0)

    // [
    //     {
    //       "fileName":"rn_image_picker_lib_temp_ff3f441f-4f03-47ed-81b8-f24d2165126c.jpg",
    //       "fileSize":20546,
    //       "height":165,
    //       "type":"image/jpeg",
    //       "uri":"file:///data/user/0/com.anonymous.agrikonnectmobile/cache/rn_image_picker_lib_temp_ff3f441f-4f03-47ed-81b8-f24d2165126c.jpg",
    //       "width":200
    //     }
    // ]
    formData.append("image", {
      uri: selectedImage[0].uri,
      type: selectedImage[0].type,
      name: selectedImage[0].fileName,
    });

    const response = await fetch(
      "https://stark-earth-17329.herokuapp.com/api/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      }
    );

    const json = await response.json();
    console.log(json);
  };

  const handleCheckUsername = (text) => {
    if (text.length < 8) {
      setValidUsername(true);
    } else {
      setValidUsername(false);
    }
  };

  const handleCheckPassword = (text) => {
    if (text.length < 8) {
      setValidPassword(true);
    } else {
      setValidPassword(false);
    }
  };

  const handleCheckConfirmPassword = (text, password) => {
    if (text != password) {
      setValidConfirm(true);
    } else {
      setValidConfirm(false);
    }
  };

  const handleCheckEmail = (text) => {
    let regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setEmail(text);
    if (regex.test(text)) {
      setValidEmail(false);
    } else {
      setValidEmail(true);
    }
  };

  const launchImageLibraryHandler = () => {
    const options = {
      mediaType: "photo",
      includeBase64: false,
      maxHeight: 200,
      maxWidth: 200,
    };

    launchImageLibrary(options, (response) => {
      console.log(response);

      setSelectedImage(response.assets);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      }
      if (response.errorCode) {
        console.log("Image picker error: ", response.errorCode);
      }
      if (response.assets) {
        console.log("Image picker response: ", response.assets);
      }
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.ground}>
        <View style={styles.foreground}>
          <Text style={styles.create}>Create an Account</Text>
          <Text style={styles.subcreate}>Sign up as a Seller</Text>
          <View style={styles.inputsBox}>
            <TextInput
              placeholder="First Name"
              style={styles.input}
              onChangeText={(text) => setFirstname(text)}
            ></TextInput>

            <TextInput
              placeholder="Middle Name"
              style={styles.input}
              onChangeText={(text) => setMiddlename(text)}
            ></TextInput>

            <TextInput
              placeholder="Last Name"
              style={styles.input}
              onChangeText={(text) => setLastname(text)}
            ></TextInput>

            <TextInput
              placeholder="Username"
              style={styles.input}
              onChangeText={(text) => setUsername(text)}
            ></TextInput>

            <TextInput
              placeholder="Email "
              style={styles.input}
              onChangeText={(text) => setValidEmail(text)}
            ></TextInput>

            <TextInput
              placeholder="Mobile Phone "
              style={styles.input}
              onChangeText={(text) => setValidNumber(text)}
            ></TextInput>

            <TextInput
              placeholder="Password"
              style={styles.input}
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            ></TextInput>

            <TextInput
              placeholder="Confirm Password"
              style={styles.input}
              secureTextEntry={true}
              onChangeText={(text) => setConfirmPw(text)}
            ></TextInput>

            <View style={styles.imageBox}>
              <Text style={styles.imageFilename} numberOfLines={1}>
                {selectedImage[0].fileName}
              </Text>
              <TouchableOpacity
                style={styles.imageButton}
                onPress={launchImageLibraryHandler}
              >
                <Text style={styles.imageButtonText}>Select Image</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={styles.button} onPress={RegisterSeller}>
            <Text style={styles.buttonText}>REGISTER</Text>
          </TouchableOpacity>

          <Text style={styles.ask}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SellerSignIn")}>
            <Text style={styles.loginButton}>Login Here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20,
    color: "#F4F4F4",
  },
  ground: {
    backgroundColor: "#F4F4F4",
    flex: 1,
    justifyContent: "center",
  },
  foreground: {
    flex: 1,
    flexDirection: "column",
    alignContent: "space-around",
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
  },
  create: {
    color: "green",
    fontSize: 32,
    fontWeight: "bold",
    alignSelf: "center",
  },
  subcreate: {
    fontSize: 20,
    alignSelf: "center",
  },
  inputsBox: {
    marginTop: 20,
  },
  input: {
    backgroundColor: "white",
    borderColor: "green",
    borderWidth: 1,
    borderRadius: 4,
    flexDirection: "row",
    marginVertical: 10,
    fontSize: 18,
    padding: 10,
  },
  button: {
    backgroundColor: "green",
    borderRadius: 30,
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  ask: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 16,
  },
  loginButton: {
    textAlign: "center",
    color: "green",
    fontWeight: "bold",
    fontSize: 16,
  },
  dropdown1BtnStyle: {
    width: "100%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "green",
  },
  dropdown1BtnTxtStyle: {
    color: "#444",
    textAlign: "left",
    fontWeight: "bold",
  },
  dropdown1DropdownStyle: { backgroundColor: "white" },
  dropdown1RowStyle: { backgroundColor: "green", borderBottomColor: "green" },
  dropdown1RowTxtStyle: { color: "white", textAlign: "left" },
  imageBox: {
    marginTop: 20,
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imageFilename: {
    maxWidth: 200,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  imageButton: {
    padding: 10,
    backgroundColor: "green",
    borderRadius: 4,
  },
  imageButtonText: {
    color: "white",
  },
});

export default Registration;
