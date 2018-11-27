import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import TableRow from './components/table-row';
import TableHeader from './components/table-header';

export const GET_GITHUB_ISSUES = gql`
  query { 
    repository(name:"create-react-app" owner:"facebook") { 
      closedIssueCount: issues(states:CLOSED) {
        totalCount
      }
      issues(states:OPEN last:25 before:"Y3Vyc29yOnYyOpHOFt9ufw==") {
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
            
            return(
              <div>
                <TableHeader header={data.repository.issues.totalCount} />
                <div>
                  {data.repository.issues.nodes.map(node => <TableRow text={node.title} />)}
                </div>
              </div>
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

