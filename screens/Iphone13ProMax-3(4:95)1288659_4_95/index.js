import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_4_96}>
        <Text style={styles.Text_4_96}>First Last</Text>
      </View>
      <View style={styles.View_4_97}>
        <Text style={styles.Text_4_97}> </Text>
      </View>
      <View style={styles.View_4_98} />
      <View style={styles.View_4_99}>
        <Text style={styles.Text_4_99}>Taste Profile</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ca3009ad-6ae6-4452-a471-0e33f76a0d28"
        }}
        style={styles.ImageBackground_4_101}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/65fdba85-37bf-4fa4-80bc-44191a9c410f"
        }}
        style={styles.ImageBackground_4_102}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/153244a6-70a5-4a83-bdd4-ad272f2e07ba"
        }}
        style={styles.ImageBackground_4_103}
      />
      <View style={styles.View_4_104}>
        <Text style={styles.Text_4_104}>Recs</Text>
      </View>
      <View style={styles.View_4_105}>
        <Text style={styles.Text_4_105}>Inbox</Text>
      </View>
      <View style={styles.View_4_106}>
        <Text style={styles.Text_4_106}>Reviews</Text>
      </View>
      <View style={styles.View_4_107}>
        <Text style={styles.Text_4_107}>You last checked in at </Text>
      </View>
      <View style={styles.View_4_108} />
      <View style={styles.View_4_109} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6cd84839-6801-449c-94b6-b2524c0c2250"
        }}
        style={styles.ImageBackground_4_171}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/611e794a-1027-43e3-85c5-26706b085bb8"
        }}
        style={styles.ImageBackground_4_172}
      />
      <View style={styles.View_4_173}>
        <Text style={styles.Text_4_173}>Favorites</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/36539677-0664-475f-b5df-005a160ac995"
        }}
        style={styles.ImageBackground_4_177}
      />
      <View style={styles.View_4_184} />
      <View style={styles.View_4_185}>
        <Text style={styles.Text_4_185}>
          A robust profile detailing your taste preferences and activity.
          Personalized recommendations and chats with restuarnt owners
        </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("127%") },
  View_4_96: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("47%"),
    justifyContent: "flex-start"
  },
  Text_4_96: {
    color: "rgba(20, 79, 93, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_97: {
    width: wp("0%"),
    minWidth: wp("0%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("48%"),
    justifyContent: "flex-start"
  },
  Text_4_97: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_98: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("57%"),
    backgroundColor: "rgba(217, 217, 217, 1)",
    opacity: 0.25999999046325684
  },
  View_4_99: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("59%"),
    justifyContent: "flex-start"
  },
  Text_4_99: {
    color: "rgba(20, 79, 93, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_101: {
    width: wp("23%"),
    height: hp("5%"),
    top: hp("65%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_4_102: {
    width: wp("23%"),
    height: hp("5%"),
    top: hp("65%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%")
  },
  ImageBackground_4_103: {
    width: wp("23%"),
    height: hp("5%"),
    top: hp("65%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  View_4_104: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("67%"),
    justifyContent: "flex-start"
  },
  Text_4_104: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_105: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("67%"),
    justifyContent: "flex-start"
  },
  Text_4_105: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_106: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("59%"),
    justifyContent: "flex-start"
  },
  Text_4_106: {
    color: "rgba(20, 79, 93, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_107: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("75%"),
    justifyContent: "flex-start"
  },
  Text_4_107: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_108: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("75%"),
    backgroundColor: "rgba(217, 217, 217, 1)",
    opacity: 0.5
  },
  View_4_109: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("80%"),
    backgroundColor: "rgba(217, 217, 217, 1)",
    opacity: 0.5
  },
  ImageBackground_4_171: {
    width: wp("107%"),
    minWidth: wp("107%"),
    height: hp("45%"),
    minHeight: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_4_172: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("29%")
  },
  View_4_173: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("67%"),
    justifyContent: "flex-start"
  },
  Text_4_173: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_177: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("114%"),
    resizeMode: "cover"
  },
  View_4_184: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("86%"),
    backgroundColor: "rgba(217, 217, 217, 1)",
    opacity: 0.5
  },
  View_4_185: {
    width: wp("70%"),
    minWidth: wp("70%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("86%"),
    justifyContent: "flex-start"
  },
  Text_4_185: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
