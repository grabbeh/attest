import React from 'react'
import Loading from '../general/Loading'
import { Query } from 'react-apollo'
import CONTRACTS_QUERY from '../../queries/ContractsQuery'
import Chart from './Chart'

export default class Example extends React.Component {
  render () {
    return (
      <Query query={CONTRACTS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <Loading />
          if (error) return 'Error'
          return <Chart data={data} />
        }}

      </Query>
    )
  }
}
