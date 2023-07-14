import { Text, SafeAreaView } from "react-native"
import { COLORS } from "../constants"
import { Stack } from "expo-router"
import LoginPage from "../components/login/LoginPage"

const Login = () => {
  return (
    <SafeAreaView style={{ flex: 1 , backgroundColor: COLORS.lightWhite }}>
        <Stack.Screen
            options={{
                headerShown : false
            }}   
        />
        <LoginPage />
    </SafeAreaView>
  )
}

export default Login