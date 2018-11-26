import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export const GET_GITHUB_ISSUES = gql`
  query { 
    repository(name:"create-react-app" owner:"facebook") { 
      closedIssueCount: issues(states:CLOSED) {
        totalCount
      }
      issues(states:OPEN last:3 before:"Y3Vyc29yOnYyOpHOFt9ufw==") {
        nodes {
          author {
            login
          }
          title
          createdAt
          comments {
            totalCount
          }
          number
          
        }
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
        totalCount
      }
    }
  }
`;

export const GET_USER = gql`
    query {
      viewer {
        login
      }
    }
`;

class App extends Component {
  render() {
    return (
      <Fragment>
        <Query query={GET_GITHUB_ISSUES}>
          {({ data, loading, error }) => {
            if(loading) return <h1>LOADING!</h1>;
            if(error) console.log(error);
            if (error) return <p>ERROR: {error.message}</p>;
            console.log(JSON.stringify(data));
            return(
              <h1>{data.repository.issues.totalCount}</h1>
            );
          }}
        </Query>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </Fragment>
    );
  }
}

export default App;
