import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    padding: SIZES.medium,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer : {
    backgroundColor: "white",
    shadowColor: "black",
    borderRadius: 20,
    padding: 30,
    display: "flex",
    justifyContent: "center",
    rowGap: 40,
    borderWidth: 1,
    borderColor: COLORS.white,
    shadowOffset: 100
  },
  loginBtnContainer : {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    columnGap: 5,
    borderWidth: 1,
    borderColor: COLORS.tertiary,
    paddingVertical: 9,
    paddingHorizontal: 40,
    borderRadius: 20
  },
  googleImage : {
    width: 30,
    height: 30,
  },
  loginText : {
    fontSize: SIZES.xLarge,
    fontWeight: "bold",
    textAlign: "center",
    color: COLORS.secondary
  },
  descriptionText : {
    textAlign: "center",
    marginTop: 10,
    lineHeight: 23
  },
  headerTitle : {
    fontSize: SIZES.xLarge,
    textAlign: "center",
    marginBottom: 35,
    lineHeight: 35,
    fontWeight: "bold",
    color: COLORS.primary
  },
  logoContainer: {
    width: 100,
    height: 100,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20
  },
  logImage: {
    width: "70%",
    height: "70%",
  },
});

export default styles;
