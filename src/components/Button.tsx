//@ts-ignore
import React, { useState } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDecay,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import {
  View,
  Text,
  ImageSourcePropType,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import THEMES, { width } from "constants/Themes";

interface ButtonProps {
  label: string;
  size?: "s" | "m" | "l";
  variant?: "primary" | "secondary";
  disabled?: boolean;
  isSwitch?: boolean;
  icon?: ImageSourcePropType;
  onPress?: () => void;
}

const TOGGLE_SIZE = 35;

const { COLORS, TYPOGRAPHY, SPACING } = THEMES;
const Button = ({
  label,
  size = "l",
  variant = "primary",
  disabled,
  isSwitch,
  icon,
  onPress,
}: ButtonProps) => {
  const backgroundColor =
    variant == "primary" ? COLORS.darkGrey : COLORS.gray20;
  const color = variant == "primary" ? COLORS.white : COLORS.black;
  const [isActive, setIsActive] = useState(false);
  const toggleBtnX = width * 0.35 - TOGGLE_SIZE - 10;

  const translateX = useSharedValue(isActive ? toggleBtnX : 0);
  const switchStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });
  const switchTextStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(isActive ? 0 : 1),
    };
  });

  const btnSize =
    size == "l"
      ? width - SPACING.m * 2
      : size == "m"
      ? width * 0.5
      : width * 0.35;

  const iconSize = size == "s" ? 18 : 20;
  const onSwitch = () => {
    setIsActive(!isActive);
    translateX.value = withTiming(isActive ? 0 : toggleBtnX);
  };

  return (
    <TouchableOpacity
      onPress={() => {
        if (isSwitch) onSwitch();
        else onPress && onPress();
      }}
      style={[
        styles.btnContainer,
        {
          backgroundColor,
          height: 45,
          maxWidth: btnSize,
          borderRadius: 30,
          opacity: disabled ? 0.5 : 1,
          justifyContent: isSwitch ? "flex-end" : "center",
          paddingHorizontal: SPACING.l,
        },
        { ...((size == "l" || isSwitch) && { width: "100%" }) },
      ]}
    >
      {icon &&
        (isSwitch ? (
          <Animated.View style={[styles.switchBtn, switchStyle]}>
            <Image
              source={icon}
              style={{
                width: iconSize,
                height: iconSize,
                tintColor: color,
                opacity: disabled ? 0.5 : 1,
              }}
              resizeMode="contain"
            />
          </Animated.View>
        ) : (
          <Image
            source={icon}
            style={{
              width: iconSize,
              height: iconSize,
              tintColor: color,
              opacity: disabled ? 0.5 : 1,
            }}
            resizeMode="contain"
          />
        ))}
      <Animated.Text
        style={[
          TYPOGRAPHY.btn,
          {
            color,
            opacity: disabled ? 0.5 : 1,
          },
          switchTextStyle,
        ]}
      >
        {label}
      </Animated.Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    overflow: "hidden",
  },
  switchBtn: {
    width: TOGGLE_SIZE,
    height: TOGGLE_SIZE,
    borderRadius: TOGGLE_SIZE / 2,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 5,
    backgroundColor: COLORS.white,
    zIndex: 10,
  },
});
