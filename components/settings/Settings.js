import MASTER_ENTITY_METADATA_QUERY
  from '../../queries/MasterEntityMetaDataQuery'
import UPDATE_MASTER_ENTITY_MUTATION
  from '../../queries/UpdateMasterEntityMutation'
import { graphql, compose } from 'react-apollo'
import react from 'react'
import Input from '../general/Input'
import cn from 'classnames'
import CheckBox from '../general/CheckBox'
import redirect from '../../lib/Redirect'
import Radio from '../general/Radio'
import FormSection from '../styles/FormSection'
import FormButton from '../styles/FormButton'
import FormTitle from '../styles/FormTitle'
import SectionTitle from '../styles/SectionTitle'
import ClearFix from '../styles/ClearFix'
import Loading from '../general/Loading'
import Flex from '../styles/Flex'
import SideColumn from '../side-menu/SideColumn'
import Box from '../styles/Box'
import DeleteCheckbox from '../general/DeleteCheckbox'
class SettingsForm extends react.Component {
  constructor (props) {
    super(props)
    console.log(props)
    this.state = {
      businessUnits: this.props.masterEntity.businessUnits,
      businessUnit: ''
    }
  }

  handleClick = e => {
    e.preventDefault()
    let { businessUnits } = this.state
    let { id } = this.props.masterEntity
    let o = { businessUnits, id }
    this.props.updateMasterEntity(o)
  }

  saveToState = e => {
    let { name, value, type } = e.target
    this.setState({ [name]: value })
  }

  addBusinessUnit = e => {
    let { businessUnits } = this.state
    let revised = [this.state.businessUnit, ...businessUnits]
    this.setState({ businessUnits: revised, businessUnit: '' })
  }

  delete = e => {
    let { businessUnits } = this.state
    var index = businessUnits.indexOf(e)
    if (index > -1) {
      businessUnits.splice(index, 1)
    }
    this.setState({ businessUnits })
  }

  render () {
    let { businessUnit, businessUnits } = this.state
    console.log(businessUnits)

    return (
      <div>
        {this.props.loading
          ? <Loading />
          : <Flex>
            <div
              className={cn(
                  !this.state.activeMenu && 'w3',
                  this.state.activeMenu && 'w-10-ns'
                )}
              >
              <SideColumn
                active={this.state.activeMenu}
                toggleMenu={this.toggleMenu}
                />
            </div>
            <div
              className={cn(
                  !this.state.activeMenu && 'w-94',
                  this.state.activeMenu && 'w-90-ns'
                )}
              >

              <Box>
                <form>
                  <FormTitle title='Filters' />
                  <FormSection>
                    <div className='fl'>
                      <Input
                        onChange={this.saveToState}
                        value={businessUnit}
                        label='Business units'
                        name='businessUnit'
                        />
                      <span className='fl' onClick={this.addBusinessUnit}>
                        <i className='fa fa-plus' />
                      </span>
                    </div>

                    <ClearFix />
                    <ul className='list ma0 pa0'>
                      {businessUnits.map(b => (
                        <DeleteCheckbox
                          checked
                          handleCheckboxChange={this.delete}
                          label={b}
                          key={b}
                          />
                        ))}
                    </ul>

                  </FormSection>
                  <ClearFix />
                  <FormButton onClick={this.handleClick} text='Submit' />
                  <ClearFix />
                </form>
              </Box>
            </div>
          </Flex>}
      </div>
    )
  }
}

const MasterEntityMetaDataQuery = graphql(MASTER_ENTITY_METADATA_QUERY, {
  options: props => ({
    variables: { masterEntityID: props.user.masterEntityID }
  }),
  props: ({ data: { loading, masterEntity } }) => ({
    loading,
    masterEntity
  })
})

const UpdateMasterEntityMutation = graphql(UPDATE_MASTER_ENTITY_MUTATION, {
  props ({ mutate }) {
    return {
      updateMasterEntity (masterEntity) {
        const id = masterEntity.id
        return mutate({
          variables: { id, masterEntity },
          update: (store, response) => {
            console.log(response)
            // redirect({}, '/contracts')
          }
        })
      }
    }
  }
})

const SettingsFormWithQueries = compose(
  MasterEntityMetaDataQuery,
  UpdateMasterEntityMutation
)(SettingsForm)

export default SettingsFormWithQueries
