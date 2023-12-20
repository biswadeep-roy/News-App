import React, { useState } from "react";
import {
  StatusBar,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  useColorScheme,
  View,
  Linking,
  Image,
} from "react-native";
import { Text } from "../components/Themed";
import Email from "react-native-email";
import Ionicons from "react-native-vector-icons/Ionicons";

interface ModalScreenProps {}

const ModalScreen: React.FC<ModalScreenProps> = () => {
  const colorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === "dark");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = () => {
    const to = "biswadeeproy1230@gmail.com";
    const subject = `Contact from ${name} (${email})`;
    const body = message;

    Email(email, { subject, body }).catch(console.error);
  };

  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
      backgroundColor: isDarkMode ? "#000" : "#fff",
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      color: isDarkMode ? "#fff" : "black",
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: "80%",
      backgroundColor: isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
    },
    input: {
      height: 40,
      borderColor: "gray",
      borderWidth: 1,
      marginBottom: 20,
      padding: 10,
      width: "100%",
      color: isDarkMode ? "white" : "black",
    },
    emailButton: {
      marginTop: 20,
      backgroundColor: "grey",
      padding: 10,
      borderRadius: 5,
    },
    emailButtonText: {
      color: "white",
      textAlign: "center",
    },
    socialLinks: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      marginTop: 20,
      padding: 10,
      backgroundColor: isDarkMode ? "#000" : "#fff",
      borderRadius: 10,
      borderWidth: 1,
      borderColor: isDarkMode ? "#fff" : "#000",
    },
    icon: {
      padding: 5,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <View style={styles.separator} />
      <Image
        source={require("../assets/images/contact.jpg")}
        style={{ width: 100, height: 100, marginBottom: 20 }}
      />
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
        placeholderTextColor={isDarkMode ? "white" : "black"}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        placeholderTextColor={isDarkMode ? "white" : "black"}
      />

      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Message"
        value={message}
        onChangeText={(text) => setMessage(text)}
        multiline
        placeholderTextColor={isDarkMode ? "white" : "black"}
      />

      <TouchableOpacity onPress={sendEmail} style={styles.emailButton}>
        <Text style={styles.emailButtonText}>Contact Me</Text>
      </TouchableOpacity>

      <View style={styles.separator} />

      <View style={styles.socialLinks}>
        <TouchableOpacity
          onPress={() => openLink("https://github.com/biswadeep-roy/")}
        >
          <Ionicons
            name="logo-github"
            size={32}
            color={isDarkMode ? "#fff" : "#000"}
            style={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            openLink(
              "https://www.facebook.com/profile.php?id=61553915821870&mibextid=ZbWKwL/"
            )
          }
        >
          <Ionicons
            name="logo-facebook"
            size={32}
            color={isDarkMode ? "#fff" : "#000"}
            style={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            openLink("https://www.linkedin.com/in/biswadeep-roy-022804219/")
          }
        >
          <Ionicons
            name="logo-linkedin"
            size={32}
            color={isDarkMode ? "#fff" : "#000"}
            style={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => openLink("https://twitter.com/biswadeep___roy/")}
        >
          <Ionicons
            name="logo-twitter"
            size={32}
            color={isDarkMode ? "#fff" : "#000"}
            style={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => openLink("https://www.instagram.com/_biebs__/")}
        >
          <Ionicons
            name="logo-instagram"
            size={32}
            color={isDarkMode ? "#fff" : "#000"}
            style={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            openLink("https://biswadeep-roy-portfolio.vercel.app/")
          }
        >
          <Ionicons
            name="briefcase"
            size={32}
            color={isDarkMode ? "#fff" : "#000"}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      <StatusBar
        backgroundColor="black"
        barStyle={isDarkMode ? "light-content" : "dark-content"}
      />
    </View>
  );
};

export default ModalScreen;
