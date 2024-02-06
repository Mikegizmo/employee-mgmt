import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {
	Feather,
	Entypo,
	Ionicons,
	Octicons,
	MaterialCommunityIcons,
	FontAwesome,
	FontAwesome6,
} from '@expo/vector-icons';
import { useRouter } from "expo-router";

const index = () => {
  const router = useRouter();

	return (
		<ScrollView>
			<LinearGradient colors={['#0f82de', '#ca85e4']} style={{ flex: 1 }}>
				<View style={{ padding: 12 }}>
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'space-between',
						}}
					>
						<Feather name="bar-chart" size={24} clor="black" />
						<Text style={{ fontSize: 16, fontWeight: '600' }}>
							Employee Management System
						</Text>
						<Entypo name="lock" size={24} color="black" />
					</View>
					<View
						style={{
							marginTop: 20,
							flexDirection: 'row',
							alignItems: 'center',
							gap: 20,
						}}
					>
						<Pressable
              onPress={() => router.push("/home/employees")}
							style={{
								backgroundColor: '#d3d3d3',
								padding: 12,
								borderRadius: 6,
                borderColor: 'black',
								borderWidth: 2,
								borderStyle: 'solid',
								alignItems: 'center',
								justifyContent: 'center',
								flex: 1,
							}}
						>
							<View
								style={{
									width: 50,
									height: 50,
									borderRadius: 25,
									backgroundColor: 'white',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<Ionicons name="people-sharp" size={24} color="black" />
							</View>
							<Text style={{ marginTop: 7, fontWeight: '600' }}>
								Employee List
							</Text>
						</Pressable>
						<Pressable
							style={{
								backgroundColor: '#d3d3d3',
								padding: 12,
								borderRadius: 6,
                borderColor: 'black',
								borderWidth: 2,
								borderStyle: 'solid',
								alignItems: 'center',
								justifyContent: 'center',
								flex: 1,
							}}
						>
							<View
								style={{
									width: 50,
									height: 50,
									borderRadius: 25,
									backgroundColor: 'white',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<Ionicons name="people-sharp" size={24} color="black" />
							</View>
							<Text style={{ marginTop: 7, fontWeight: '600' }}>
								Mark Attendance
							</Text>
						</Pressable>
					</View>
					<View
						style={{
							marginTop: 20,
							backgroundColor: '#d3d3d3',
							padding: 8,
							borderRadius: 7,
						}}
					>
						<Pressable
							style={{
								backgroundColor: '#0000CD',
								borderRadius: 6,
								padding: 10,
								flexDirection: 'row',
								alignItems: 'center',
								marginVertical: 10,
							}}
						>
							<View
								style={{
									padding: 7,
									width: 45,
									height: 45,
									borderRadius: 7,
									backgroundColor: 'white',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<Ionicons name="newspaper-outline" size={24} color="black" />
							</View>
							<Text
								style={{
									marginLeft: 10,
									color: 'white',
									fontSize: 16,
									fontWeight: '600',
									flex: 1,
								}}
							>
								Attendance Report
							</Text>
							<View
								style={{
									width: 35,
									height: 35,
									borderRadius: 7,
									backgroundColor: 'white',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<Entypo name="chevron-right" size={24} color="black" />
							</View>
						</Pressable>
						<Pressable
							style={{
								backgroundColor: '#0000CD',
								borderRadius: 6,
								padding: 10,
								flexDirection: 'row',
								alignItems: 'center',
								marginVertical: 10,
							}}
						>
							<View
								style={{
									padding: 7,
									width: 45,
									height: 45,
									borderRadius: 7,
									backgroundColor: 'white',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<Octicons name="repo-pull" size={24} color="black" />
							</View>
							<Text
								style={{
									marginLeft: 10,
									color: 'white',
									fontSize: 16,
									fontWeight: '600',
									flex: 1,
								}}
							>
								Summary Report
							</Text>
							<View
								style={{
									width: 35,
									height: 35,
									borderRadius: 7,
									backgroundColor: 'white',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<Entypo name="chevron-right" size={24} color="black" />
							</View>
						</Pressable>
						<Pressable
							style={{
								backgroundColor: '#0000CD',
								borderRadius: 6,
								padding: 10,
								flexDirection: 'row',
								alignItems: 'center',
								marginVertical: 10,
							}}
						>
							<View
								style={{
									padding: 7,
									width: 45,
									height: 45,
									borderRadius: 7,
									backgroundColor: 'white',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<Octicons name="report" size={24} color="black" />
							</View>
							<Text
								style={{
									marginLeft: 10,
									color: 'white',
									fontSize: 16,
									fontWeight: '600',
									flex: 1,
								}}
							>
								All Generate Reports
							</Text>
							<View
								style={{
									width: 35,
									height: 35,
									borderRadius: 7,
									backgroundColor: 'white',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<Entypo name="chevron-right" size={24} color="black" />
							</View>
						</Pressable>
						<Pressable
							style={{
								backgroundColor: '#0000CD',
								borderRadius: 6,
								padding: 10,
								flexDirection: 'row',
								alignItems: 'center',
								marginVertical: 10,
							}}
						>
							<View
								style={{
									padding: 7,
									width: 45,
									height: 45,
									borderRadius: 7,
									backgroundColor: 'white',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<Ionicons name="people" size={24} color="black" />
							</View>
							<Text
								style={{
									marginLeft: 10,
									color: 'white',
									fontSize: 16,
									fontWeight: '600',
									flex: 1,
								}}
							>
								Overtime Employees
							</Text>
							<View
								style={{
									width: 35,
									height: 35,
									borderRadius: 7,
									backgroundColor: 'white',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<Entypo name="chevron-right" size={24} color="black" />
							</View>
						</Pressable>
					</View>
					<View
						style={{
							marginTop: 20,
							flexDirection: 'row',
							alignItems: 'center',
							gap: 12,
						}}
					>
						<View
							style={{
								backgroundColor: '#f79d00',
								borderRadius: 5,
								borderColor: 'black',
								borderWidth: 2,
								borderStyle: 'solid',
								padding: 11,
								alignItems: 'center',
								justifyContent: 'center',
								flex: 1,
							}}
						>
							<View
								style={{
									width: 35,
									height: 35,
									borderRadius: 7,
									backgroundColor: 'white',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<MaterialCommunityIcons
									name="calendar-clock"
									size={24}
									color="black"
								/>
							</View>
							<Text style={{ marginTop: 7 }}>Attendance Criteria</Text>
						</View>
						<View
							style={{
								backgroundColor: '#abcaba',
								borderRadius: 5,
                borderColor: 'black',
								borderWidth: 2,
								borderStyle: 'solid',
								padding: 11,
								alignItems: 'center',
								justifyContent: 'center',
								flex: 1,
							}}
						>
							<View
								style={{
									width: 35,
									height: 35,
									borderRadius: 7,
									backgroundColor: 'white',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<FontAwesome6 name="chart-line" size={24} color="black" />
							</View>
							<Text style={{ marginTop: 7 }}>Increased Workflow</Text>
						</View>
					</View>
					<View
						style={{
							marginTop: 20,
							flexDirection: 'row',
							alignItems: 'center',
							gap: 12,
						}}
					>
						<View
							style={{
								backgroundColor: '#d3cce3',
								borderRadius: 5,
                borderColor: 'black',
								borderWidth: 2,
								borderStyle: 'solid',
								padding: 11,
								alignItems: 'center',
								justifyContent: 'center',
								flex: 1,
							}}
						>
							<View
								style={{
									width: 35,
									height: 35,
									borderRadius: 7,
									backgroundColor: 'white',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<FontAwesome name="dollar" size={24} color="black" />
							</View>
							<Text style={{ marginTop: 7 }}>Cost Savings</Text>
						</View>
						<View
							style={{
								backgroundColor: '#bdc3c7',
								borderRadius: 5,
                borderColor: 'black',
								borderWidth: 2,
								borderStyle: 'solid',
								padding: 11,
								alignItems: 'center',
								justifyContent: 'center',
								flex: 1,
							}}
						>
							<View
								style={{
									width: 35,
									height: 35,
									borderRadius: 7,
									backgroundColor: 'white',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<Ionicons name="person" size={24} color="black" />
							</View>
							<Text style={{ marginTop: 7 }}>Employee Performance</Text>
						</View>
					</View>
				</View>
			</LinearGradient>
		</ScrollView>
	);
};

export default index;

const styles = StyleSheet.create({});
