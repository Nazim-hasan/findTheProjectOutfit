import React, {
  useCallback,
  useState,
  useMemo,
  useEffect,
  useRef,
  useImperativeHandle,
} from 'react';
import {View, BackHandler, KeyboardAvoidingView, Platform} from 'react-native';
// import { Text } from "@ui-kitten/components";
import {BottomSheetModal, BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import Text from '../text/Text';
import {metrics} from 'theme/metrics';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import tw from "tailwind";

type SnapPoint = `${number}%`;
type ComponentProps = {
  title?: string;
  snapPointArr?: SnapPoint[];
  children?: React.ReactNode;
};

export type BottomSheetForwardRefType = {
  activateSheet: () => void;
  closeSheet: () => void;
};

const CustomBottomSheet = React.forwardRef<
  BottomSheetForwardRefType,
  ComponentProps
>((props, ref) => {
  const {title, snapPointArr, children} = props;
  const [snapIndex, setSnapIndex] = useState(-1); //! Don't change this value
  // ref
  // const bottomSheetRef = ref || useRef(null)
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints: SnapPoint[] = useMemo(() => {
    if (snapPointArr) return snapPointArr;
    return ['55%', '75%', '90%'];
  }, [snapPointArr]);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    bottomSheetRef?.current?.snapToIndex(index);
    setSnapIndex(index);
  }, []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);

  const handleCloseModalPress = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  // renders
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    [],
  );

  useEffect(() => {
    const onBackPress = () => {
      bottomSheetRef.current?.close();
      // remove event for default back handling
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      return true;
    };
    // add event for default back handling
    if (snapIndex !== -1) {
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
    } else {
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
  }, [snapIndex]);

  useImperativeHandle(ref, () => ({
    activateSheet: () => {
      handlePresentModalPress();
    },
    closeSheet: () => {
      handleCloseModalPress();
    },
  }));

  return (
    <>
      <BottomSheetModal
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        // onChange={handleSheetChanges}
        // enablePanDownToClose={true}
        backdropComponent={renderBackdrop}>
          <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <KeyboardAwareScrollView
          // ...other props for KeyboardAwareScrollView
        >
          <View
          style={{
            marginTop: metrics.spacing.s,
          }}>
          {title ? <Text preset="body">{title}</Text> : null}
          <View style={{paddingHorizontal: metrics.spacing.xl}}>
            {children}
          </View>
        </View>
          {/* Your content here */}
        </KeyboardAwareScrollView>
      </KeyboardAvoidingView>
        
      </BottomSheetModal>
    </>
  );
});

export default CustomBottomSheet;
