import React from "react";
import { Text, View, Dimensions, Animated, StyleSheet } from "react-native";

import SlidingUpPanel from "rn-sliding-up-panel";

const { height } = Dimensions.get("window");

const BottomSheet = ({ details = [], ...props }) => {
  const { draggableRange: propsRange } = props;
  const draggableRange = propsRange || { top: height + 180 - 64, bottom: 180 };

  const _draggedValue = React.useRef(new Animated.Value(180)).current;
  const _panel = React.useRef(null);

  const { top, bottom } = draggableRange;

  const showPanel = () => {
    _panel.current.show(360);
  };

  const backgoundOpacity = _draggedValue.interpolate({
    inputRange: [height - 48, height],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  const iconTranslateY = _draggedValue.interpolate({
    inputRange: [height - 56, height, top],
    outputRange: [0, 56, 180 - 32],
    extrapolate: "clamp",
  });

  const textTranslateY = _draggedValue.interpolate({
    inputRange: [bottom, top],
    outputRange: [0, 8],
    extrapolate: "clamp",
  });

  const textTranslateX = _draggedValue.interpolate({
    inputRange: [bottom, top],
    outputRange: [0, -112],
    extrapolate: "clamp",
  });

  const textScale = _draggedValue.interpolate({
    inputRange: [bottom, top],
    outputRange: [1, 0.7],
    extrapolate: "clamp",
  });

  return (
    <View style={styles.container}>
      <Text onPress={showPanel}>Show panel</Text>
      <SlidingUpPanel
        ref={_panel}
        draggableRange={draggableRange}
        animatedValue={_draggedValue}
        snappingPoints={[360]}
        height={height + 180}
        friction={0.5}
      >
        <View style={styles.panel}>
          <Animated.View
            style={[
              styles.iconBg,
              {
                opacity: backgoundOpacity,
                transform: [{ translateY: iconTranslateY }],
              },
            ]}
          />
          <View style={styles.panelHeader}>
            <Animated.View
              style={{
                transform: [
                  { translateY: textTranslateY },
                  { translateX: textTranslateX },
                  { scale: textScale },
                ],
              }}
            >
              <Text style={styles.textHeader}>Sliding Up Panel</Text>
            </Animated.View>
          </View>
          <View style={styles.container}>
            <Text>Promotion Details</Text>
            {details.map((detail) => (
              <>
                <View style={{ flexDirection: "row" }}>
                  <Text>{detail.icon}</Text>
                  <Text>{detail.title}</Text>
                </View>
                <Text>{detail.description}</Text>
              </>
            ))}
          </View>
        </View>
      </SlidingUpPanel>
    </View>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    alignItems: "center",
    justifyContent: "center",
  },
  panel: {
    flex: 1,
    backgroundColor: "white",
    position: "relative",
  },
  panelHeader: {
    height: 180,
    backgroundColor: "#b197fc",
    justifyContent: "flex-end",
    padding: 24,
  },
  textHeader: {
    fontSize: 28,
    color: "#FFF",
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: -24,
    right: 18,
    width: 48,
    height: 48,
    zIndex: 1,
  },
  iconBg: {
    backgroundColor: "#2b8a3e",
    position: "absolute",
    top: -24,
    right: 18,
    width: 48,
    height: 48,
    borderRadius: 24,
    zIndex: 1,
  },
});
