import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Path } from 'react-native-svg';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  return (
    <View style={styles.container}>

      {/* Wave Shape */}
      <View style={styles.box}>
        <View style={styles.waveContainer}>
          <Svg
            height="100%"
            width="100%"
            viewBox="0 0 1440 320"
            style={styles.wave}
          >
          <Defs>
            {/* Define the gradient */}
            <LinearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
            
            <Stop offset="50%" stopColor="#7B00CB" /> {/* Top color */}
            <Stop offset="100%" stopColor="#9A00FF" /> {/* Bottom color */}
            
            </LinearGradient>
          </Defs>

            <Path 
              fill="url(#grad)" 
              fillOpacity={1} 
              d="M1440,64L1320,140C1200,216,960,272,840,192C720,112,480,24,360,60C240,96,120,216,60,240L0,256L0,0L1440,0Z" 
            />
          </Svg>
        </View>
      </View>

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image 
          style={styles.logo} 
          source={require('./assets/logo.png')} // Make sure the path is correct
        />
        <Image
        style={styles.name} 
        source={require('./assets/name.png')} // Make sure the path is correct  
        />
      </View>

      {/* Form */}
      <View style={styles.formContainer}>
        <TextInput
          placeholder="Username"
          style={styles.input}
          placeholderTextColor="#DDD"
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          placeholderTextColor="#DDD"
        />
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot your Password?</Text>
        </TouchableOpacity>
      </View>

      {/* Social Media Login */}
      <Text style={styles.orText}>or connect with</Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="facebook" size={20} color="white" />
          <Text style={styles.socialText}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="google" size={20} color="white" />
          <Text style={styles.socialText}>Google</Text>
        </TouchableOpacity>
      </View>

      {/* Register Link */}
      <TouchableOpacity>
        <Text style={styles.registerText}>Don't have an account? Register here</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5FA',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logoContainer: {
    marginTop: '20%',
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 100,
    height: 100, 
  },
  name: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'white',
    fontSize: 18,
  },
  formContainer: {
    width: '90%',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#7932E5',
    color: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  loginButton: {
    backgroundColor: '#561ABA',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
  },
  forgotPassword: {
    color: '#DDD',
    textAlign: 'center',
  },
  orText: {
    color: '#DDD',
    marginBottom: 10,
    textAlign: 'center',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    marginBottom: 20,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#7932E5',
    padding: 15,
    borderRadius: 10,
    width: '45%',
    justifyContent: 'center',
  },
  socialText: {
    color: 'white',
    marginLeft: 10,
  },
  registerText: {
    color: '#DDD',
    textAlign: 'center',
  },
  box: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 470,
    backgroundColor: '#65298D',
  },
  wave: {
    position: 'absolute',
    left: 0,
    right: 0,
 
  },
  waveContainer: {
    height: 1010,
    width: '100%',
    position: 'absolute',
  },
});
