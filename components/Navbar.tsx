import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'


const Navbar = () => {
  return (
     <View style={styles.container}>
      <View style={styles.icon}>
        <Image source={require('../assets/images/wave.png')}style={styles.image}/>
        <Text style={styles.title}>HealthCast</Text>
      </View>
      <Image
        source={{ uri: 'https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww&fm=jpg&q=60&w=3000' }}
        style={styles.avatar}
      />
    </View>
  );
}

export default Navbar

const styles = StyleSheet.create({
    container: {
    backgroundColor: "#e4f0fc",
    paddingHorizontal: 20,
    flexDirection: 'row',
    padding:20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginLeft: 8,
    fontSize: 20,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  image:{
    width: 40,
    height: 40,
  }
})