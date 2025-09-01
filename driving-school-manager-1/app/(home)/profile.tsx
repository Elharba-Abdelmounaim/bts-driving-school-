import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

const ProfileOption = ({ icon, title, subtitle, onPress }) => (
  <Pressable style={styles.optionContainer} onPress={onPress}>
    <View style={styles.optionLeft}>
      <View style={styles.iconWrapper}>{icon}</View>
      <View>
        <Text style={styles.optionTitle}>{title}</Text>
        <Text style={styles.optionSubtitle}>{subtitle}</Text>
      </View>
    </View>
    <MaterialIcons name="keyboard-arrow-right" size={30} color="black" />
  </Pressable>
);

const Profile = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
       

        {/* User Card */}
        <View style={styles.userCard}>
          <View style={styles.userInfo}>
            <Image
              source={require("@/assets/images/user-image.png")}
              style={{ width: 50, height: 50 }}
            />
            <View>
              <Text style={styles.userName}>Cole Baidoo</Text>
              <Text style={styles.userHandle}>@block_cs</Text>
            </View>
          </View>
          <Feather name="edit-3" size={22} color="white" />
        </View>

        {/* Account Section */}
        <View style={styles.sectionCard}>
          <ProfileOption
            icon={<FontAwesome6 name="user" size={22} color="#0601B4" />}
            title="My Account"
            subtitle="Make changes to your account"
          />
          <ProfileOption
            icon={<FontAwesome6 name="address-book" size={22} color="#0601B4" />}
            title="Saved Beneficiary"
            subtitle="Manage your saved accounts"
          />
          <ProfileOption
            icon={<Ionicons name="lock-closed-outline" size={22} color="#0601B4" />}
            title="Face ID / Touch ID"
            subtitle="Enable biometric authentication"
          />
          <ProfileOption
            icon={<Ionicons name="shield-checkmark-outline" size={22} color="#0601B4" />}
            title="Two-Factor Authentication"
            subtitle="Further secure your account"
          />
          <ProfileOption
            icon={<MaterialIcons name="logout" size={22} color="#0601B4" />}
            title="Log out"
            subtitle="Sign out from your account"
          />
        </View>

        {/* More Section */}
        <Text style={styles.subHeader}>More</Text>
        <View style={styles.sectionCard}>
          <ProfileOption
            icon={<FontAwesome6 name="question-circle" size={22} color="#0601B4" />}
            title="Help & Support"
            subtitle="Get assistance and FAQs"
          />
          <ProfileOption
            icon={<MaterialIcons name="privacy-tip" size={22} color="#0601B4" />}
            title="Privacy Policy"
            subtitle="Read our privacy terms"
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#f5f5f5" },
  header: { fontSize: 32, fontWeight: "600", marginBottom: 20, color: "#000" },
  subHeader: { fontSize: 20, fontWeight: "500", marginVertical: 12 },
  userCard: {
    backgroundColor: "#34967C",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  userInfo: { flexDirection: "row", alignItems: "center", gap: 12 },
  userName: { fontSize: 18, fontWeight: "600", color: "#fff" },
  userHandle: { fontSize: 14, fontWeight: "300", color: "#fff" },
  sectionCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  optionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: "#eee",
  },
  optionLeft: { flexDirection: "row", alignItems: "center", gap: 12 },
  iconWrapper: {
    width: 46,
    height: 46,
    backgroundColor: "#0601B4" + "15",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 23,
  },
  optionTitle: { fontSize: 16, fontWeight: "500" },
  optionSubtitle: { fontSize: 13, color: "#555" },
});

export default Profile;
