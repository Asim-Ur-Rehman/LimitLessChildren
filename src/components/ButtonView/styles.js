// @flow
import { StyleSheet } from "react-native";
import { Metrics, Colors } from "../../themes";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: Metrics.baseMargin,
    backgroundColor: Colors.primary.backgroundColor
  }
});
