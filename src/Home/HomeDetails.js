import React from 'react';
import { Text, View } from 'react-native';
import { connect } from "react-redux";
import {LOG_OUT} from '../../actions/actionTypes'


class HomeDetails extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
     
   }

  componentWillUnmount() { 
    
  }


logoutAction=()=>{
  this.props.dispatch({type:LOG_OUT})
  this.props.navigation.navigate("Login")
}

  render() {   
    return (
      <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
        <Text style={{fontSize:20, color:"blue"}} onPress ={() => this.logoutAction()}>Logout</Text>
      </View>
    )
  }
}


/** Get data from store and assign to props */
const mapStateToProps = (state) => {
  return {
     isLoginSuccess: state.loginReducer.isLoginSuccess,
	};
};

export default connect(mapStateToProps)(HomeDetails);

