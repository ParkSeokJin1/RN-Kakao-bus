import { COLOR } from "./color";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const AlarmButton = ({ onPress, style, NEWCOLOR }) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Ionicons name="alarm-outline" size={24} color={NEWCOLOR.GRAY_3_GRAY_2} />
    </TouchableOpacity>
  );
};

export default AlarmButton;
