import { useRef } from 'react';
import { Animated, Easing } from 'react-native';

export const useAnimation = (initialValue = 0, duration = 300) => {
  const animation = useRef(new Animated.Value(initialValue)).current;

  const animate = (toValue, config = {}) => {
    return Animated.timing(animation, {
      toValue,
      duration,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
      ...config,
    });
  };

  const fadeIn = (config = {}) => {
    return animate(1, config);
  };

  const fadeOut = (config = {}) => {
    return animate(0, config);
  };

  const slideIn = (config = {}) => {
    return animate(1, {
      ...config,
      easing: Easing.out(Easing.back()),
    });
  };

  const slideOut = (config = {}) => {
    return animate(0, {
      ...config,
      easing: Easing.in(Easing.back()),
    });
  };

  const spring = (toValue, config = {}) => {
    return Animated.spring(animation, {
      toValue,
      useNativeDriver: true,
      ...config,
    });
  };

  const sequence = (animations) => {
    return Animated.sequence(animations);
  };

  const parallel = (animations) => {
    return Animated.parallel(animations);
  };

  const stop = () => {
    animation.stopAnimation();
  };

  const reset = () => {
    animation.setValue(initialValue);
  };

  return {
    animation,
    animate,
    fadeIn,
    fadeOut,
    slideIn,
    slideOut,
    spring,
    sequence,
    parallel,
    stop,
    reset,
  };
};

export default useAnimation; 