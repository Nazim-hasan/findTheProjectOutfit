import React from "react";
import { TouchableOpacity, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { metrics } from "theme/metrics";
import { colors } from "theme/colors";
import Text from "../text/Text";

interface ButtonProps {
  title: string;
  onPress: () => void;
  customStyles?: StyleProp<ViewStyle>;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, customStyles }) => {
  return (
    <TouchableOpacity style={[styles.button, customStyles]} onPress={onPress}>
      <Text preset="SemiBoldLg" customStyles={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: metrics.spacing.s,
    paddingVertical: metrics.spacing.m,
    borderWidth: 2,
    borderColor: colors.primary,
    backgroundColor: colors.primary,
    // alignSelf: "flex-start",
    borderRadius: metrics.spacing.s
  },
  btnText: {
    color: colors.white,
    fontFamily: "heading",
    textAlign: 'center',
    fontWeight: 'bold'
    // textTransform: "uppercase",
  },
});

export default Button;
