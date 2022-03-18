import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'

import { ApolloProvider} from '@apollo/client'

import API, { client } from './sources/references/API';

const App = () => {
  const getAllAccounts = async(index) => {
    const res = await API.accounts(index)

    console.log(JSON.stringify(res.data, null, 2))
  }

  const getAllArticles = async(index) => {
    const res = await API.articles(index)

    console.log(JSON.stringify(res.data, null, 2))
  }

  const getAccountDetails = async(index) => {
    const res = await API.getAccount(index)

    console.log(JSON.stringify(res.data, null, 2))
  }

  return (
    <ApolloProvider client={client}>
      <View
        style = {styles.container}
      >
        <TouchableOpacity
          onPress={() => getAllAccounts()}
          style = {styles.buttonContainer}
        >
          <Text
            style = {styles.buttonText}
          >
            Get All Accounts
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => getAllArticles()}
          style = {styles.buttonContainer}
        >
          <Text
            style = {styles.buttonText}
          >
            Get All Articles
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => getAccountDetails(2)}
          style = {styles.buttonContainer}
        >
          <Text
            style = {styles.buttonText}
          >
            Get Account Details With id 2
          </Text>
        </TouchableOpacity>
      </View>
    </ApolloProvider>
  )
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: 'green',
    borderRadius: 10,
    marginVertical: 10,
    paddingVertical: 15,
    width: 250
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

export default App
