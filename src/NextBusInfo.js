// 몇분 몇초 부터 여유까지 재사용 컴포넌트

import { View, Text } from "react-native";
import { COLOR } from "./color";

const NextBusInfo = ({
  NEWCOLOR,
  hasInfo, // remainedTimeText="도착 정보 없음" => 일 때 true
  remainedTimeText, // 8분 0초, 곧 도착, 도착 정보 없음
  numOfRemainedStops, // 1 , 2 , 15 째 전
  seatStatusText, // 1석, 여유, 보통
}) => {
  if (!hasInfo)
    return (
      <Text style={{ color: NEWCOLOR.GRAY_2_GRAY_3 }}>도착 정보 없음</Text>
    );
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Text style={{ color: NEWCOLOR.BLACK_WHITE, marginRight: 10 }}>
        {" "}
        {remainedTimeText}
      </Text>
      <View
        style={{
          borderWidth: 0.5,
          borderColor: NEWCOLOR.GRAY_1_GRAY_4,
          borderRadius: 3,
          flexDirection: "row",
          alignContent: "center",
          padding: 2,
        }}
      >
        <Text style={{ color: NEWCOLOR.GRAY_3_GRAY_2, marginRight: 3 }}>
          {numOfRemainedStops}번째전
        </Text>
        <Text style={{ color: COLOR.CORAL }}>{seatStatusText}</Text>
      </View>
    </View>
  );
};

export default NextBusInfo;
