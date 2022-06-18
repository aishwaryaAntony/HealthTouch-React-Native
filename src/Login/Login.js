import React from 'react';
import { Text, View, Dimensions, SafeAreaView, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { connect } from "react-redux";
import { LOGIN_SUCCESS } from '../../actions/actionTypes'
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: null,
      password: null
    }
  }

  componentDidMount() {

  }


  loginButtonAction = () => {
    if(this.state.email !==null && this.state.password !==null){
       this.props.dispatch({ type: LOGIN_SUCCESS });
       this.props.navigation.navigate("Home");
     }
  }

  render() {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: "#EAEAEA" }}>
        <View style={{ width: SCREEN_WIDTH, height: 0, borderBottomColor: "#1D8878", borderBottomWidth: SCREEN_HEIGHT / 1, borderRightWidth: SCREEN_WIDTH, borderRightColor: 'transparent' }}>
          {/* <Image source={require("../../assets/images/logo512.png")}
            style={{ width: 90, height: 90, marginTop: 15, marginLeft: 10 }} /> */}
          <View style={{ backgroundColor: "white", justifyContent: "center", marginLeft: 70, marginTop: 250, alignItems: "center", width: 280, height: 300, borderRadius: 5, elevation: 20, borderTopColor: "#ACD573", borderTopWidth: 5 }}>
            <Text style={{ flex: 0.2 / 1, fontSize: 20, fontWeight: "bold" }} >Health Touch</Text>
            <View style={{ height: 10 }} />
            <TextInput
              style={styles.input}
              placeholder="Email Address"
              placeholderTextColor="#1D8878"              
              onChangeText={(text) => this.setState({ email: text})}
              value={this.state.email}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#1D8878"
              onChangeText={(text) => this.setState({ password: text})}
              value={this.state.password}
            />
            <TouchableOpacity style={{ flex: 0.3 / 1, backgroundColor: "#1D8878", width: 200, marginTop: 10, height: 100, justifyContent: "center" }} onPress ={() => this.loginButtonAction()} >
              <Text style={{ color: "white", alignSelf: "center" }} >LOG IN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    borderRadius: 5
  },
})

/** Get data from store and assign to props */
const mapStateToProps = (state) => {
  return {
    isLoginSuccess: state.loginReducer.isLoginSuccess,
  };
};

export default connect(mapStateToProps)(Login);

