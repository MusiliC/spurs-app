import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const [isSelected, setSelection] = useState(false);

  const handleCheck = () => {
    setSelection(!isSelected);
  };

  const toggleHandle = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          {/* image */}
          <ImageBackground
            style={styles.logo}
            source={require("./images/image3.png")}
          >
            <View style={styles.overlay}>
              <Image
                style={styles.image}
                source={require("./images/logo2.png")}
              />
              <View style={styles.title}>
                <Text style={styles.text}>Steak {"\n"} Ranches</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.mainContainer}>
          {/* form */}
          {/* title */}
          <View style={styles.topView}>
            {isSignUp ? (
              <View>
                <Text style={styles.header}>Welcome back!</Text>
                <Text>
                  Don't have an account?{" "}
                  <Text style={styles.link} onPress={toggleHandle}>
                    Sign Up
                  </Text>
                </Text>
              </View>
            ) : (
              <View>
                <Text style={styles.header}>Welcome</Text>
                <Text>
                  Already have an account?{" "}
                  <Text style={styles.link} onPress={toggleHandle}>
                    Sign In
                  </Text>
                </Text>
              </View>
            )}
          </View>

          {/* form */}

          <View>
            {isSignUp ? (
              <>
                <Text>Email</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your email"
                />
                <Text>Password</Text>
                <TextInput
                  style={styles.passInput}
                  placeholder="Enter your password"
                />
                <View style={styles.password}>
                  <View style={styles.passwordText}>
                    <Text>
                      {" "}
                      <Icon
                        name={isSelected ? "check-square-o" : "square-o"}
                        size={15}
                        color="#000"
                      />{" "}
                      Remember me?
                    </Text>
                  </View>
                  <View style={styles.passwordText}>
                    <Text>Forgot Password?</Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.textBtn}>Sign In</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <Text>Name</Text>
                <TextInput style={styles.input} placeholder="Enter your name" />
                <Text>Email</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your email"
                />
                <Text>Password</Text>
                <TextInput
                  style={styles.passInput}
                  placeholder="Enter your password"
                />
                <Text>Must be at least 8 characters</Text>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.textBtn}>Sign Up</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 20
  },
  mainContainer: {
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  topView: {
    marginVertical: 20,
  },
  header: {
    fontWeight: "bold",
    fontSize: 22,
  },
  link: {
    color: "blue",
    marginHorizontal: 10,
  },
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    marginVertical: 3,
  },
  passInput: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    marginVertical: 3,
  },
  button: {
    backgroundColor: "#DA242B",
    borderRadius: 10,
    paddingHorizontal: 40,
    paddingVertical: 10,
    textAlign: "center",
    marginTop: 40,
  },
  textBtn: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  logo: {
    height: 300,
    resizeMode: "cover",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: "70%",
    width: "100%",
    resizeMode: "contain",
  },
  title: {
    textAlign: "center",
    position: "absolute",
    top: 210,
    left: 160,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },

  password: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
    alignItems: "center",
  },
});

export default Auth;
