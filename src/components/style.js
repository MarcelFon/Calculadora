import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "flex-end",
  },
  screen: {
    padding: 20,
    minHeight: 120,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  screenText: {
    fontSize: 60,
    color: "#fff",
  },
  buttons: {
    flexWrap: "wrap",
  },
  row: {
    flexDirection: "row",
    width: "100%",
  },
  button: {
    width: "25%",
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#505050",
    borderWidth: 0.5,
    borderColor: "#000",
  },
  buttonZero: {
    width: "25%",
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#505050",
    borderWidth: 0.5,
    borderColor: "#000",
  },
  buttonOperator: {
    width: "25%",
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff9500",
    borderWidth: 0.5,
    borderColor: "#000",
  },
  buttonClear: {
    width: "25%",
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#a5a5a5",
    borderWidth: 0.5,
    borderColor: "#000",
  },
  buttonText: {
    fontSize: 32,
    color: "#fff",
  },
  empty: {
    width: "25%",
    height: 90,
  },
});
