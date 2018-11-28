import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import TableHeader from './components/table-header';
import TableBody from './components/table-body';
import Table from './components/table';

export const GET_GITHUB_ISSUES = gql`
  query { 
    repository(name:"create-react-app" owner:"facebook") { 
      closedIssueCount: issues(states:CLOSED) {
        totalCount
      }
      issues(states:OPEN last:25) {
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
            if (error) return <p>ERROR: {error.message}</p>;
            let totalCount = data.repository.issues.totalCount;
            let issues = data.repository.issues.nodes.reverse();
            return(
              <Table>
                <TableHeader header={totalCount} />
                <TableBody data={issues} />
              </Table>
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

