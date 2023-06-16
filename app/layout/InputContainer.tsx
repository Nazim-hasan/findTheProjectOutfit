import {
  StyleSheet,
  StyleProp,
  ViewStyle,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions,
  Platform,
  StatusBar
} from 'react-native';
import React from 'react';
type ComponentProps = {
  children: React.ReactNode;
  customStyles?: StyleProp<ViewStyle>;
};
const height = Dimensions.get('window').height;
const InputContainer = ({children, customStyles}: ComponentProps) => {
  return (
    <KeyboardAvoidingView 
    style={customStyles}
    keyboardVerticalOffset={height + 47}
            behavior="padding"
            enabled
    > 
    <ScrollView>
        <TouchableWithoutFeedback>{children}</TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default InputContainer;

const styles = StyleSheet.create({});
