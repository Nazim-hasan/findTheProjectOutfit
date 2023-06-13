import { Text as RNText, TextStyle } from "react-native";
import React , { ReactNode } from "react";
import { presets } from "./Text.preset";
import { colors } from "../../../theme/colors";
import { StyleSheet } from "react-native";

interface TextProps {
  children: ReactNode;
  customStyles?: TextStyle;
  preset?: keyof typeof presets;
  centered?: boolean;
}

export default function Text({
  children,
  customStyles,
  preset = "body",
  centered,
}: TextProps) {
  const textStyle = presets[preset];
  return (
    <RNText
      style={[textStyle, styles.text, centered && styles.centerd, customStyles]}
    >
      {children}
    </RNText>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.black,
  },
  centerd: {
    textAlign: "center",
  },
});
