import { Text, View, TouchableOpacity, Image } from "react-native"
import styles from "./login.style"
import { icons } from "../../constants"

const LoginPage = () => {

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode='contain'
          style={styles.logImage}
        />
      </TouchableOpacity>
        <Text style={styles.headerTitle}>Welcome to the Ultimate Developer Job Search</Text>
        <TouchableOpacity style={styles.loginContainer}>
            <View>
                <Text style={styles.loginText}>Login</Text>
                <Text style={styles.descriptionText}>You need to have a Google Account to continue</Text>
            </View>
            <TouchableOpacity style={styles.loginBtnContainer}>
                <Image 
                source={icons.google}
                style={styles.googleImage}
                />
                <Text>Continue With Google</Text>
            </TouchableOpacity>
        </TouchableOpacity>
        
    </View>
  )
}

export default LoginPage