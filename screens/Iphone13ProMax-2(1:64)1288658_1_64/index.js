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
      <View style={styles.View_1_69}>
        <Text style={styles.Text_1_69}>Vester Cafe</Text>
      </View>
      <View style={styles.View_1_70}>
        <Text style={styles.Text_1_70}>Business Hours Website Menu </Text>
      </View>
      <View style={styles.View_2_75} />
      <View style={styles.View_2_76}>
        <Text style={styles.Text_2_76}>Summary</Text>
      </View>
      <View style={styles.View_1_73}>
        <View style={styles.View_1_71} />
        <View style={styles.View_1_72}>
          <Text style={styles.Text_1_72}>Your Match:</Text>
        </View>
        <View style={styles.View_3_77}>
          <Text style={styles.Text_3_77}>7.6</Text>
        </View>
      </View>
      <View style={styles.View_3_82}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2fcc4f72-17cc-4eb2-ab23-ae7b5ec43d27"
          }}
          style={styles.ImageBackground_3_79}
        />
        <View style={styles.View_3_78}>
          <Text style={styles.Text_3_78}>Food</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2a02f397-b8b1-49a6-a37a-cf2c03359b30"
        }}
        style={styles.ImageBackground_3_86}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/beb00cc2-e79c-4e9a-98de-f7e74b2bfe87"
        }}
        style={styles.ImageBackground_3_83}
      />
      <View style={styles.View_3_89}>
        <Text style={styles.Text_3_89}>Atmosphere</Text>
      </View>
      <View style={styles.View_3_90}>
        <Text style={styles.Text_3_90}>Service</Text>
      </View>
      <View style={styles.View_4_91}>
        <Text style={styles.Text_4_91}>Check In</Text>
      </View>
      <View style={styles.View_4_92}>
        <Text style={styles.Text_4_92}>Vester </Text>
      </View>
      <View style={styles.View_4_93} />
      <View style={styles.View_4_94} />
      <View style={styles.View_4_183} />
      <View style={styles.View_4_186} />
      <View style={styles.View_4_187}>
        <Text style={styles.Text_4_187}>
          A “Match” score, determined algorithmically, that descibes how well
          the restaurant fits your preferences{" "}
        </Text>
      </View>
      <View style={styles.View_4_182}>
        <Text style={styles.Text_4_182}>
          A summary of each aspect of service, aggregated from platforms such as
          Yelp, Google Reviews, and Table Talk
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7f318768-8d81-49e0-976f-b98e97fd5954"
        }}
        style={styles.ImageBackground_4_175}
      />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("127%") },
  View_1_69: {
    width: wp("49%"),
    minWidth: wp("49%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("47%"),
    justifyContent: "flex-start"
  },
  Text_1_69: {
    color: "rgba(20, 79, 93, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_70: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("48%"),
    justifyContent: "flex-start"
  },
  Text_1_70: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_75: {
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
  View_2_76: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("59%"),
    justifyContent: "flex-start"
  },
  Text_2_76: {
    color: "rgba(20, 79, 93, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_73: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("30%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_71: {
    flexGrow: 1,
    width: wp("35%"),
    height: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(20, 79, 93, 1)"
  },
  View_1_72: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_1_72: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_77: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_3_77: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_82: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("65%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_3_79: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3_78: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_3_78: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_3_86: {
    width: wp("23%"),
    height: hp("5%"),
    top: hp("65%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%")
  },
  ImageBackground_3_83: {
    width: wp("23%"),
    height: hp("5%"),
    top: hp("65%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  View_3_89: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("67%"),
    justifyContent: "flex-start"
  },
  Text_3_89: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_90: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("67%"),
    justifyContent: "flex-start"
  },
  Text_3_90: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_91: {
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
  Text_4_91: {
    color: "rgba(20, 79, 93, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_92: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("75%"),
    justifyContent: "flex-start"
  },
  Text_4_92: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_93: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("75%"),
    backgroundColor: "rgba(217, 217, 217, 1)",
    opacity: 0.5
  },
  View_4_94: {
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
  View_4_183: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("85%"),
    backgroundColor: "rgba(217, 217, 217, 1)",
    opacity: 0.5
  },
  View_4_186: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("98%"),
    backgroundColor: "rgba(217, 217, 217, 1)",
    opacity: 0.5
  },
  View_4_187: {
    width: wp("71%"),
    minWidth: wp("71%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("99%"),
    justifyContent: "flex-start"
  },
  Text_4_187: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_182: {
    width: wp("65%"),
    minWidth: wp("65%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("86%"),
    justifyContent: "flex-start"
  },
  Text_4_182: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_175: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("113%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
