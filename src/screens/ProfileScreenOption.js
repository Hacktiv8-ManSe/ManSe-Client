import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux'
import { signOut } from '../store/actions/userAction'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileScreen = (props) => {
  const dispatch = useDispatch()
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image 
            source={require('../../assets/images/profile.jpg')}
            size={80}
          />
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>Lisa</Title>
            <Caption style={styles.caption}>@lisa_z</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="gender-male-female" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>Female</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>john_doe@email.com</Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox, {
            borderRightColor: '#dddddd',
            borderRightWidth: 1
          }]}>
            <Title>50</Title>
            <Caption>kg</Caption>
          </View>
          <View style={styles.infoBox}>
            <Title>175</Title>
            <Caption>cm</Caption>
          </View>
      </View>

      <View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox2, {
            borderRightColor: '#dddddd',
            borderRightWidth: 1
          }]}>
            <Title>1150</Title>
            <Caption>cal/day</Caption>
          </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="heart-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Your Favorites</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="history" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>History</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple 
          onPress={() => {
            props.navigation.navigate("LoginScreen")
            dispatch(signOut())
          }}>
          <View style={styles.menuItem}>
            <Icon name="logout" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Log Out</Text>
          </View>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoBox2: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});