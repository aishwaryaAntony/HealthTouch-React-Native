import React from 'react';
import {  View } from 'react-native';
import { connect } from "react-redux";
import {Box,HStack,VStack, Text,Pressable,Image} from 'native-base'

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
     
   }

  componentWillUnmount() { 
    
  }

  render() {   
    return (
      <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
        <Box
        bg="primary.700"
        py={4}
        px={3}
        rounded="md"
        alignSelf="center"
        width={375}
        maxWidth="100%"
      >
        <HStack justifyContent="space-between">
          <Box justifyContent="space-between">
            <VStack space={2}>
              <Text fontSize="sm" color="blue">
                HI USER !
              </Text>
              <Text color="blue" fontSize="lg">
                Health Touch Application
              </Text>
            </VStack>
            <Pressable
              rounded="sm"
              bg="primary.400"
              alignSelf="flex-start"
              py={2}
              px={3}
            >
              <Text
                textTransform="uppercase"
                fontSize={'sm'}
                fontWeight="bold"
                color="white"              
                onPress={() => this.props.navigation.navigate("HomeDetails")}>
               Navigate to Home detail 
              </Text>
            </Pressable>
          </Box>
          <Image
            source={{
              uri: 'https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg',
            }}
            alt="Aang flying and surrounded by clouds"
            height={100}
            rounded="full"
            width={100}
          />
        </HStack>
      </Box>       
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

export default connect(mapStateToProps)(Home);

