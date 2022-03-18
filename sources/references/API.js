import {ApolloClient, InMemoryCache, gql} from '@apollo/client'

export const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
})

const API = {
    accounts,
    articles,
    getAccount
}

export default API

async function accounts() {
    return await client.query({
        query: gql`
            query accounts {
                accounts {
                    id
                    username
                }
            }
        `
    })
}

async function articles() {
    return await client.query({
        query: gql`
            query articles {
                articles {
                    id
                    title
                    content
                    account {
                        id
                        username
                    }
                }
            }
        `
    })
}

async function getAccount(id) {
    return await client.query({
        query: gql`
            query getAccount {
                getAccount(id: ${id}) {
                    id
                    username
                }
            }
        `
    })
}
