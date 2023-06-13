import { TextInput, StyleSheet, TextStyle, ViewStyle, View } from "react-native";
import React from "react";
import { colors } from "theme/colors";
import { metrics } from "theme/metrics";

interface InputProps {
  placeholder?: string;
  onChangeText?: (text: string) => void;
  customStyles?: TextStyle | ViewStyle | TextStyle[] | ViewStyle[];
  onBlur?: () => void;
  secureTextEntry?: boolean;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  multiline?: boolean;
  defaultValue?: string;
  value?: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
}

export default function Input({
  placeholder,
  onChangeText,
  customStyles,
  onBlur,
  secureTextEntry,
  autoCapitalize,
  multiline,
  defaultValue,
  value,
  leftIcon,
  rightIcon,
}: InputProps) {
  return (
    <View style={styles.inputContainer}>
      {leftIcon && <View style={styles.leftIconContainer}>{leftIcon}</View>}
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        style={[styles.input, customStyles]}
        placeholderTextColor={colors.gray}
        onBlur={onBlur}
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
        autoCorrect={false}
        multiline={multiline}
        defaultValue={defaultValue}
        value={value}
      />
      {rightIcon && <View style={styles.rightIconContainer}>{rightIcon}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: colors.white,
    borderBottomWidth: 1,
    marginBottom: metrics.spacing.m,
    fontFamily: "body",
  },
  input: {
    borderColor: colors.lightGrey,
    borderWidth: 1,
    backgroundColor: colors.lightGrey,
    paddingVertical: metrics.spacing.sm,
    color: colors.black,
    marginBottom: metrics.spacing.xs,
    fontFamily: "body",
    flex: 1,
    paddingLeft: 40, // Adjust this value to change the position of the text inside the TextInput
  },
  leftIconContainer: {
    position: "absolute",
    zIndex: 10,
    top: metrics.spacing.m,
    left: metrics.spacing.s, // Adjust this value to change the position of the icon inside the TextInput
  },
  rightIconContainer: {
    position: "absolute",
    zIndex: 10,
    top: metrics.spacing.m,
    right: metrics.spacing.l, // Adjust this value to change the position of the icon inside the TextInput
  },
});
