import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLOR } from "./color";
import { useState } from "react";

const BookmarkButton = ({
  isBookmarked: isBookmarkedProp,
  onPress,
  style,
  size,
  NEWCOLOR,
}) => {
  const [isBookmarked, setIsBookmarked] = useState(isBookmarkedProp);

  return (
    <TouchableOpacity
      onPress={() => {
        setIsBookmarked(!isBookmarked);
        onPress();
      }}
      style={style}
    >
      <Ionicons
        name="star"
        size={size}
        color={isBookmarked ? COLOR.YELLOW : NEWCOLOR.GRAY_1_GRAY_4}
      />
    </TouchableOpacity>
  );
};

export default BookmarkButton;
