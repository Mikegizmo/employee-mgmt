import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'

const employees = () => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    const fetchEmployeeData = async () => {
      try{
        const response = await axios.get
      } catch(error) {
        console.log("Error fetching employee data",error)
      }
    }
  })
  return (
    <View>
      <Text>employees</Text>
    </View>
  )
}

export default employees

const styles = StyleSheet.create({})