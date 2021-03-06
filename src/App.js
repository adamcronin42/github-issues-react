import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import TableHeader from './components/table-header';
import TableBody from './components/table-body';
import TableRow from './components/table-row';
import RowItem from './components/row-item';
import SecondaryRowItem from './components/secondary-row-item';
import Table from './components/table';
import Loading from './components/loading';
var util = require('./util/helper-functions');

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
      <Query query={GET_GITHUB_ISSUES}>
        {({ data, loading, error }) => {
          if(loading) return <span className="vertical-center"><Loading /></span>;
          if (error) return <p>ERROR: {error.message}</p>;
          let openCount = data.repository.issues.totalCount;
          let closedCount = data.repository.closedIssueCount.totalCount;
          let issues = data.repository.issues.nodes.reverse();
          return(
            <Table>
              <TableHeader openCount={openCount} closedCount={closedCount} />
              <TableBody>
                {issues.map(node => {
                  return (
                    <TableRow key={node.number}>
                      <RowItem>{node.title}</RowItem>
                      <SecondaryRowItem>#{node.number} opened {util.getElapsedTime(new Date(node.createdAt))} by {node.author.login}</SecondaryRowItem>
                    </TableRow>
                  )})
                }
              </TableBody>
            </Table>
          );
        }}
      </Query>
    );
  }
}

export default App;

