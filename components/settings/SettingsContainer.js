import SettingsHolder from './SettingsHolder'
import { Query } from 'react-apollo'
import Loading from '../general/Loading'
import MASTER_ENTITY_METADATA_QUERY
  from '../../queries/MasterEntityMetaDataQuery'

import FadeRightDiv from '../styles/FadeRightDiv'

const SettingsContainer = () => (
  <Query query={MASTER_ENTITY_METADATA_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <Loading />
      if (error) return 'Error'
      return (
        <FadeRightDiv>
          <SettingsHolder {...data} />
        </FadeRightDiv>
      )
    }}
  </Query>
)

export default SettingsContainer
