import { Text, View } from "react-native";
import BookmarkButton from "./BookmarkButton";
import { COLOR } from "./color";
import AlarmButton from "./AlarmButton";
import NextBusInfo from "./NextBusInfo";

const BusInfo = ({
  isBookmarked,
  onPressBookmark,
  num,
  directionDescription,
  numColor,
  processedNextBusInfos,
  NEWCOLOR,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 75,
        backgroundColor: NEWCOLOR.WHITE_BLACK,
      }}
    >
      <View style={{ flex: 0.85, flexDirection: "row", alignItems: "center" }}>
        {/*북마크 */}
        <BookmarkButton
          NEWCOLOR={NEWCOLOR}
          size={20}
          isBookmarked={isBookmarked}
          onPress={onPressBookmark}
          style={{ paddingHorizontal: 10 }}
        />
        {/*버스번호, 방향 */}
        <View style={{ justifyContent: "center", flex: 1 }}>
          <Text style={{ color: numColor, fontSize: 20 }}>{num}</Text>
          <Text style={{ fontSize: 13, color: COLOR.GRAY_3, marginRight: 5 }}>
            {directionDescription} 방향
          </Text>
        </View>
      </View>

      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        {/*M분 s초 / N번째 전/ 여유  */}
        <View style={{ flex: 1 }}>
          {processedNextBusInfos.map((info, index) => (
            <NextBusInfo
              NEWCOLOR={NEWCOLOR}
              key={index}
              hasInfo={info.hasInfo} // remainedTimeText="도착 정보 없음" => 일 때 true
              remainedTimeText={info.remainedTimeText} // 8분 0초, 곧 도착, 도착 정보 없음
              numOfRemainedStops={info.numOfRemainedStops} // 1 , 2 , 15 째 전
              seatStatusText={info.seatStatusText} // 1석, 여유, 보통
            />
          ))}
        </View>
        {/* 알람아이콘 */}
        <AlarmButton NEWCOLOR={NEWCOLOR} />
      </View>
    </View>
  );
};

export default BusInfo;
