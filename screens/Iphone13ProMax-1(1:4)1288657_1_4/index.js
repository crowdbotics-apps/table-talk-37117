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
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e8f6070a-1120-4bc5-8c6c-4061d9089b3a"
        }}
        style={styles.ImageBackground_1_3}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dfdda471-6044-4769-86cf-9c0cb8647ccf"
        }}
        style={styles.ImageBackground_1_24}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aba7e30e-f607-400b-a3d5-c13912329de2"
        }}
        style={styles.ImageBackground_1_25}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8af3206e-9cb2-4a19-b914-0ded0973660d"
        }}
        style={styles.ImageBackground_1_28}
      />
      <View style={styles.View_1_32}>
        <Text style={styles.Text_1_32}>7.3</Text>
      </View>
      <View style={styles.View_1_33}>
        <Text style={styles.Text_1_33}>7.1</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/37b6fdbc-c4fe-46f2-a332-9b7f6115051c"
        }}
        style={styles.ImageBackground_1_21}
      />
      <View style={styles.View_1_7} />
      <View style={styles.View_1_8} />
      <View style={styles.View_1_9}>
        <Text style={styles.Text_1_9}>Explore</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5beea0e2-6b81-44f0-9645-94d5ae5f2ac0"
        }}
        style={styles.ImageBackground_1_13}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/57f81835-4d1e-4e4b-a832-a1c1dfed8317"
        }}
        style={styles.ImageBackground_1_14}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bfe6e441-b18c-4288-b677-26acf89fc357"
        }}
        style={styles.ImageBackground_1_15}
      />
      <View style={styles.View_1_17}>
        <Text style={styles.Text_1_17}>4</Text>
      </View>
      <View style={styles.View_1_31}>
        <Text style={styles.Text_1_31}>7.1</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6f3b955a-e336-4ee4-bd58-2c4927982c06"
        }}
        style={styles.ImageBackground_1_20}
      />
      <View style={styles.View_1_52}>
        <Text style={styles.Text_1_52}>5.6</Text>
      </View>
      <View style={styles.View_1_53}>
        <Text style={styles.Text_1_53}>9.1</Text>
      </View>
      <View style={styles.View_1_54} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/79371828-2963-4df3-878a-bbea49aaaf3f"
        }}
        style={styles.ImageBackground_1_55}
      />
      <View style={styles.View_1_56}>
        <Text style={styles.Text_1_56}>Points</Text>
      </View>
      <View style={styles.View_1_57} />
      <View style={styles.View_1_58} />
      <View style={styles.View_1_59} />
      <View style={styles.View_1_60}>
        <Text style={styles.Text_1_60}>Your Taste</Text>
      </View>
      <View style={styles.View_1_61}>
        <Text style={styles.Text_1_61}>Trending</Text>
      </View>
      <View style={styles.View_1_62}>
        <Text style={styles.Text_1_62}>Explore</Text>
      </View>
      <View style={styles.View_1_63}>
        <Text style={styles.Text_1_63}>Profile</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/930d3b16-8be1-493c-9419-e779ce883fe1"
        }}
        style={styles.ImageBackground_4_181}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("127%") },
  ImageBackground_1_3: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("124%"),
    minHeight: hp("124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  ImageBackground_1_24: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("124%"),
    minHeight: hp("124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  ImageBackground_1_25: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%")
  },
  ImageBackground_1_28: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("76%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%")
  },
  View_1_32: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%"),
    top: hp("76%"),
    justifyContent: "flex-start"
  },
  Text_1_32: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_33: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("68%"),
    justifyContent: "flex-start"
  },
  Text_1_33: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_21: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  View_1_7: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("10%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_8: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("9%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_9: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_1_9: {
    color: "rgba(20, 79, 93, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_13: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("36%")
  },
  ImageBackground_1_14: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("36%")
  },
  ImageBackground_1_15: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("37%")
  },
  View_1_17: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("37%"),
    justifyContent: "flex-start"
  },
  Text_1_17: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_31: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("68%"),
    justifyContent: "flex-start"
  },
  Text_1_31: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_20: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  View_1_52: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("31%"),
    justifyContent: "flex-start"
  },
  Text_1_52: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_53: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("75%"),
    justifyContent: "flex-start"
  },
  Text_1_53: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_54: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("114%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_1_55: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("114%")
  },
  View_1_56: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("119%"),
    justifyContent: "flex-start"
  },
  Text_1_56: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_57: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("119%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_58: {
    width: wp("53%"),
    minWidth: wp("53%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("119%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_59: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("120%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_60: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("119%"),
    justifyContent: "flex-start"
  },
  Text_1_60: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_61: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("119%"),
    justifyContent: "flex-start"
  },
  Text_1_61: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_62: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("119%"),
    justifyContent: "flex-start"
  },
  Text_1_62: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_63: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("119%"),
    justifyContent: "flex-start"
  },
  Text_1_63: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_181: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("71%"),
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
