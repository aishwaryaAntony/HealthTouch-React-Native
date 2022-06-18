import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { connect } from "react-redux";
import LoginScreen from '../src/Login/Login';
import HomeScreen from '../src/Home';
import MyHealth from "../src/MyHealth";
import Profile from "../src/Profile";
import HomeDetails from "../src/Home/HomeDetails";
import Icon from "react-native-vector-icons/FontAwesome";
Icon.loadFont();

/** Create Stack Navigation for authentication components */
const AuthStack = createNativeStackNavigator();

/** Create Stack Navigation for authenticated components */
const HomeStack = createNativeStackNavigator();

const MyHealthStack = createNativeStackNavigator();

const ProfileStack = createNativeStackNavigator();

const BottomNav = createBottomTabNavigator();


/** Created navigation stack with all component*/
function commonStack(param) {
	return [
		<param.Screen key={"1"} options={{ headerShown: false }} name="Login" component={LoginScreen} />,
		<param.Screen key={"2"} options={{ headerShown: false }} name="Home" component={HomeScreen} />,
		<param.Screen key={"3"} options={{ headerShown: false }} name="MyHealth" component={MyHealth} />,
		<param.Screen key={"4"} options={{ headerShown: false }} name="Profile" component={Profile} />,
		<param.Screen key={"5"} name="HomeDetails" component={HomeDetails} />
	]
}


/** Authentication Stack Navigation function */
const AuthStackNavigation = () => {
	return (
		<AuthStack.Navigator
			initialRouteName="Login"
		// screenOptions={{
		// 	headerTintColor: 'white',
		// 	headerStyle: {
		// 		backgroundColor: '#22488F',
		// 		elevation: 0, // remove shadow on Android
		// 		shadowOpacity: 0, // remove shadow on iOS
		// 	},
		// 	headerTitleAlign: 'center',
		// 	headerTitleStyle: {
		// 		fontSize: 20,
		// 		width: "100%"
		// 	},
		// }}
		>
			{commonStack(AuthStack)}
		</AuthStack.Navigator>
	);
};

const HomeStackNavigation = () => {
	return (
		<HomeStack.Navigator
			initialRouteName="Home"
		>
			{commonStack(HomeStack)}
		</HomeStack.Navigator>
	)
};

const MyHealthStackNavigation = () => {
	return (
		<MyHealthStack.Navigator
			initialRouteName="MyHealth">
			{commonStack(MyHealthStack)}
		</MyHealthStack.Navigator>
	)
};

const ProfileStackNavigation = () => {
	return (
		<ProfileStack.Navigator
			initialRouteName="Profile">
			{commonStack(ProfileStack)}
		</ProfileStack.Navigator>
	)
};

const BottomTabNavigation = () => {
	return (
		<BottomNav.Navigator
			screenOptions={{
				headerShown: false
			}}
			swipeEnabled
			tabBarOptions={{
				activeTintColor: "#1D8878",
				inactiveTintColor: "#fff",
				showLabel: false,
				tabStyle: [{ backgroundColor: '#1D8878' }],
				animationEnabled: true,
				swipeEnabled: true
			}}
		>
			<BottomNav.Screen
				name="Home"
				component={HomeStackNavigation}
				options={{
					tabBarLabel: "Home",
					tabBarIcon: ({ focused, color, size }) => (
						<View style={{ flexDirection: 'row', borderWidth: focused ? 1 : 0, borderColor: focused ? "#1D8878" : null, borderRadius: focused ? 20 : null, backgroundColor: focused ? "#fff" : null, alignItems: "center", justifyContent: focused ? "space-between" : "center", paddingVertical: focused ? 6 : null, paddingHorizontal: focused ? 12 : null }}>
							 <Icon name="home" color={color} size={size} /> 
							{focused === true && <Text style={{ textAlign: "center", color: "#1D8878", marginLeft: 3, fontSize: 13, fontWeight: "700" }}>Home</Text>}
						</View>
					),
				}}
			/>
			<BottomNav.Screen
				name="MyHealth"
				component={MyHealthStackNavigation}
				options={{
					tabBarLabel: "MyHealth",
					tabBarIcon: ({ focused, color, size }) => (
						<View style={{ flexDirection: 'row', borderWidth: focused ? 1 : 0, borderColor: focused ? "#1D8878" : null, borderRadius: focused ? 20 : null, backgroundColor: focused ? "#fff" : null, alignItems: "center", justifyContent: focused ? "space-between" : "center", paddingVertical: focused ? 6 : null, paddingHorizontal: focused ? 12 : null }}>
							<Icon name="heartbeat" color={color} size={size} />
							{focused === true && <Text style={{ textAlign: "center", color: "#1D8878", marginLeft: 3, fontSize: 13, fontWeight: "700" }}>My Health</Text>}
						</View>
					),

				}}
			/>
			<BottomNav.Screen
				name="Profile"
				component={ProfileStackNavigation}
				options={{
					tabBarLabel: "Profile",
					tabBarIcon: ({ focused, color, size }) => (
						<View style={{ flexDirection: 'row', borderWidth: focused ? 1 : 0, borderColor: focused ? "#1D8878" : null, borderRadius: focused ? 20 : null, backgroundColor: focused ? "#fff" : null, alignItems: "center", justifyContent: focused ? "space-between" : "center", paddingVertical: focused ? 6 : null, paddingHorizontal: focused ? 12 : null }}>
							<Icon name="user" color={color} size={size} />
							{focused === true && <Text style={{ textAlign: "center", color: "#1D8878", marginLeft: 3, fontSize: 13, fontWeight: "700" }}>Profile</Text>}
						</View>
					),
				}}
			/>
		</BottomNav.Navigator>
	)
}


/** Main Class for Root Navigation */
class RootNav extends React.Component {
	/** Initializing default state and value .*/
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	async componentDidMount() {

	}

	/** Whenever the props changed default states will be changed using getDerivedStateFromProps */
	static getDerivedStateFromProps(props, state) {

		return null;
	}

	render() {
		return (
			<NavigationContainer>
				{this.props.isLoginSuccess === true ? <BottomTabNavigation /> : <AuthStackNavigation />}
			</NavigationContainer>
		);
	}
}




/** Get data from store and assign to props */
const mapStateToProps = state => {
	return {
		isLoginSuccess: state.loginReducer.isLoginSuccess,
	};
};

export default connect(mapStateToProps)(RootNav);
