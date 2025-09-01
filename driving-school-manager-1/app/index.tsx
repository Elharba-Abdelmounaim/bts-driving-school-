import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Easing,
} from "react-native";
import { useEffect, useRef } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          source={require("@/assets/images/pexels-hazardos-804130.jpg")}
          style={styles.background}
          resizeMode="cover"
        >
          {/* طبقة التدرج */}
          <View style={styles.overlay} />

          <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
            {/* الشعار */}
            <View style={styles.companyLogo}>
              <Image source={require("@/assets/images/Logo.png")} />
            </View>

            {/* النصوص */}
            <View style={styles.textGroup}>
              <Text style={styles.textLarge}>Welcome to DriveMaster</Text>
              <Text style={styles.textSmall}>
                Manage lessons, students, and instructors with ease
              </Text>
              <Text style={styles.textSmall}>
                Everything you need for your driving school
              </Text>
            </View>

            {/* الأزرار */}
            <View style={styles.buttonGroup}>
              <TouchableOpacity style={styles.button}>
                <Link href="/join" style={styles.linkText}>
                  Sign Up
                </Link>
              </TouchableOpacity>

              <TouchableOpacity style={styles.transparentButton}>
                <Link href="/Signin" style={styles.linkText}>
                  Sign In
                </Link>
              </TouchableOpacity>
            </View>

            {/* رابط الانتقال */}
            <TouchableOpacity style={styles.continueLink}>
              <Link href="/(home)" style={styles.continueText}>
                Continue to dashboard
              </Link>
              <AntDesign name="arrowright" size={26} color="white" />
            </TouchableOpacity>
          </Animated.View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: Dimensions.get("window").height,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.4)", // تظليل خلف النصوص
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  companyLogo: {
    alignItems: "center",
    marginBottom: 40,
  },
  textGroup: {
    alignItems: "center",
    marginBottom: 40,
  },
  textLarge: {
    color: "white",
    fontWeight: "800",
    fontSize: 34,
    textAlign: "center",
    marginBottom: 12,
  },
  textSmall: {
    color: "white",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    marginBottom: 4,
  },
  buttonGroup: {
    flexDirection: "row",
    gap: 15,
    marginBottom: 30,
  },
  button: {
    flex: 1,
    backgroundColor: "white",
    paddingVertical: 15,
    borderRadius: 40,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  transparentButton: {
    flex: 1,
    borderColor: "white",
    borderWidth: 2,
    paddingVertical: 15,
    borderRadius: 40,
    alignItems: "center",
  },
  linkText: {
    color: "black",
    fontSize: 16,
    fontWeight: "600",
  },
  continueLink: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
  },
  continueText: {
    color: "white",
    fontSize: 16,
  },
});
