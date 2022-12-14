import { StyleSheet, View, TextInput } from "react-native";

const Navbar = () => {
  return (
    <View style={styles.nav}>
      <TextInput
        style={{
          height: 40,
          backgroundColor: "white",
          placeholderTextColor: "gray",
          width: "90%",
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 20,
          borderRadius: 20,
          borderWidth: 2,
          borderColor: "azure",
        }}
        onChangeText={(text) => setTextInputValue(text)}
        placeholder="Chercher une ville"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },

  navText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
});

export default Navbar;
