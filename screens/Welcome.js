import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  TouchableOpacity,
  Image,
} from "react-native";

const Welcome = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("./images/image1.png")}
    >
      <View style={styles.overlay}>
        {/* image  */}
        <View style={styles.imageClass}>
          <Image style={styles.image} source={require("./images/logo2.png")} />
          <View style={styles.title}>
            <Text style={styles.text}>Steak {"\n"} Ranches</Text>
          </View>
        </View>
        {/* button */}
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Profile", { name: "Profile" })}
          >
            <Text style={styles.textBtn}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
    justifyContent: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    position: "absolute",
    top: 280,
    left: 125,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
  },
  imageClass: {
    marginVertical: 30,
    height: "75%",
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  image: {
    width: "100%",
    height: "80%",
    resizeMode: "contain",
  },
  button: {
    backgroundColor: "#DA242B",
    borderRadius: 30,
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  textBtn: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Welcome;
