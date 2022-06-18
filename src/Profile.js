import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { connect } from 'react-redux';

class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount() {}

    componentWillUnmount() {}

    render() {
        return(
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <Text style={{fontSize: 20, color: "blue"}}>Profile Screen</Text>
            </View>
        )
    }
}

/** Get data from store and assign to props */
const mapStateToProps = (state) => {
return {
    
  }
}

export default connect(mapStateToProps)(Profile);