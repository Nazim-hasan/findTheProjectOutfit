import React from "react";
import { TouchableOpacity, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { metrics } from "theme/metrics";
import { colors } from "theme/colors";
import Text from "../text/Text";

interface ButtonProps {
  title: string;
  onPress: () => void;
  customStyles?: StyleProp<ViewStyle>;
  inactiveText?: boolean;
  smallTitle?: boolean,
  icon?: JSX.Element;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, customStyles, smallTitle, icon, inactiveText }) => {
  return (
    <TouchableOpacity style={[styles.button, customStyles, icon && {flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}]} onPress={onPress}>
      { icon && icon}
      <Text preset= {smallTitle ? 'MediumSm' : "SemiBoldLg"}  customStyles={inactiveText ? {color: colors.primary} :styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: metrics.spacing.s,
    paddingVertical: metrics.spacing.m,
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
