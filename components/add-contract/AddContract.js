import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import GET_CONTRACTS from '../../queries/ContractsQuery'
import ADD_CONTRACT from '../../queries/AddContractMutation'
import CheckBox from '../general/CheckBox'
import { Formik, Field, Form } from 'formik'
import Radio from '../general/Radio'
import FormSection from '../styles/FormSection'
import FormTitle from '../styles/FormTitle'
import SectionTitle from '../styles/SectionTitle'
import ClearFix from '../styles/ClearFix'
import DatePicker from 'react-datepicker'
import _ from 'lodash'
import FormButton from '../styles/FormButton'
import Notification from '../general/Notification'

const AddContractForm = props => {
  let [success, setSuccess] = useState(null)
  // as the form collects basic values only (to keep things simple), these need to be supplemented with full details which we can do on submission only
  const processValues = values => {
    const { allUsers } = props
    const { businessUnits, statuses, tags } = props.masterEntity
    let contract = _.cloneDeep(props.contract) || values
    // business unit
    contract.businessUnit = businessUnits.find(
      b => b.name === values.businessUnit
    )
    // assigned person
    contract.assignedTo = allUsers.find(u => u.email === values.assignedTo)
    // status
    let currentStatus = statuses.find(s => s.name === values.currentStatus)
    if (currentStatus) {
      currentStatus.date = new Date().getTime()
      contract.statuses = contract.statuses.concat(currentStatus)
    }
    // tags
    contract.tags = values.appliedTags.map(a => {
      if (tags.find(t => t.name === a)) return tags.filter(t => t.name === a)
      else return { name: a }
    })
    return contract
  }

  const [addContract] = useMutation(ADD_CONTRACT, {
    update (cache, res) {
      let contract = res.data.addContract
      let { id } = contract
      // if closeModal present then editable contract
      if (props.closeModal) {
        let data = cache.readQuery({ query: GET_CONTRACTS })
        _.extend(_.find(data.contracts, { id }), contract)
        cache.writeQuery({ query: GET_CONTRACTS, data })
      } else {
        // else new contract so push into cache
        let { contracts } = cache.readQuery({ query: GET_CONTRACTS })
        cache.writeQuery({
          query: GET_CONTRACTS,
          data: { contracts: contracts.concat([contract]) }
        })
      }
    },
    onCompleted () {
      setSuccess('Contract updated')
    }
  })

  let {
    allUsers,
    contract = { businessUnit: {}, assignedTo: {}, currentStatus: {} },
    masterEntity
  } = props
  let { businessUnits, tags, statuses } = masterEntity

  if (tags && props.contract) {
    tags = _.uniqBy(tags.concat(props.contract.tags), 'name')
  }
  return (
    <>
      <Formik
        initialValues={{
          externalParty: [] || contract.externalParties,
          appliedTags: [] || contract.tags.map(t => t.name),
          businessUnit: '' || contract.businessUnit.name,
          assignedTo: '' || contract.assignedTo.email,
          currentStatus: '' || contract.currentStatus.name
        }}
        validate={values => {
          let isError = false
          const errors = {
            externalPartyError: ''
          }
          if (values.externalParty.length < 1) {
            isError = true
            errors.externalPartyError = 'Please provide an external party'
          }
          return isError
        }}
        onSubmit={values => {
          console.log(values)
          addContract({
            variables: { id: contract.id, contract: processValues(values) }
          })
        }}
      >
        {({ values, handleChange, setFieldValue }) => {
          return (
            <Form>
              {props.closeModal && (
                <span onClick={props.closeModal} className='fr'>
                  <i className='fa fa-times fa-lg' />
                </span>
              )}
              <FormTitle title={props.title} />
              <FormSection>
                <label className='mr3 f4 b'>External party</label>
                <Field
                  className='w-100 bb bw1 b--black-20 f4 font pa1 mw5'
                  value={values.externalParty}
                  name='externalParty'
                  //error={this.state.externalPartyError}
                />
              </FormSection>
              <ClearFix />
              <FormSection>
                <SectionTitle text='Tags' />
                <div className='mt2'>
                  {tags ? (
                    tags.map((t, i) => {
                      return (
                        <div key={i} className='list'>
                          <label>
                            <Field name='appliedTags'>
                              {({ form }) => (
                                <CheckBox
                                  name='appliedTags'
                                  value={t.name}
                                  handleChange={form.handleChange}
                                  checked={values.appliedTags.includes(t.name)}
                                  color={t.color}
                                />
                              )}
                            </Field>
                          </label>
                        </div>
                      )
                    })
                  ) : (
                    <div className='mt2'>Add tags here</div>
                  )}
                </div>
              </FormSection>
              <ClearFix />
              <FormSection>
                <SectionTitle text='Status' />
                <div className='mt2'>
                  {statuses && statuses.length ? (
                    <Radio
                      selectedItem={values.currentStatus}
                      items={statuses}
                      handleChange={handleChange}
                    />
                  ) : (
                    <div>Add statuses here</div>
                  )}
                </div>
              </FormSection>
              <ClearFix />
              <FormSection>
                <SectionTitle text='Execution date' />
                <DatePicker
                  className='font f4 mt2 pa1 mb2 bb bw1 b--black-20'
                  selected={values.executionDate}
                  name='executionDate'
                  onChange={date => {
                    setFieldValue('executionDate', date)
                  }}
                  showMonthDropdown
                  showYearDropdown
                  dateFormat='dd/MM/yyyy'
                />
              </FormSection>
              <ClearFix />
              <FormSection>
                <SectionTitle text='Effective date' />
                <DatePicker
                  className='font f4 mt2 pa1 mb2 bb bw1 b--black-20'
                  selected={values.effectiveDate}
                  name='effectiveDate'
                  onChange={date => {
                    setFieldValue('effectiveDate', date)
                  }}
                  showMonthDropdown
                  showYearDropdown
                  dateFormat='dd/MM/yyyy'
                />
              </FormSection>
              <ClearFix />
              <FormSection>
                <SectionTitle text='Expiry date' />
                <DatePicker
                  className='font f4 mt2 pa1 mb2 bb bw1 b--black-20'
                  selected={values.expiryDate}
                  name='expiryDate'
                  onChange={date => {
                    setFieldValue('expiryDate', date)
                  }}
                  showMonthDropdown
                  showYearDropdown
                  dateFormat='dd/MM/yyyy'
                />
              </FormSection>
              <ClearFix />
              <FormSection>
                <SectionTitle text='Business unit' />
                {businessUnits ? (
                  <div className='mb2'>
                    <Field
                      as='select'
                      className='f4 pa1 font pa2 mb2 bb bw1 b--black-20'
                      name='businessUnit'
                    >
                      <option>Please select</option>
                      {businessUnits.map(unit => (
                        <option key={unit.name} value={unit.name}>
                          {unit.name}
                        </option>
                      ))}
                    </Field>
                  </div>
                ) : (
                  <div className='mt1'>Add business units here</div>
                )}
              </FormSection>
              <ClearFix />
              <FormSection>
                <SectionTitle text='Lawyer' />
                {allUsers && allUsers.length > 0 ? (
                  <Field
                    as='select'
                    name='assignedTo'
                    className='f4 pa1 font pa2 mb2 bb bw1 b--black-20'
                  >
                    <option>Please select</option>
                    {allUsers.map(l => (
                      <option key={l.name} value={l.email}>
                        {l.email}
                      </option>
                    ))}
                  </Field>
                ) : (
                  <div className='mt3 f4'>Add lawyers here</div>
                )}
              </FormSection>
              <ClearFix />
              <FormButton text='SUBMIT' />
              <ClearFix />
            </Form>
          )
        }}
      </Formik>
      <Notification success={success} closeModal={props.closeModal} />
    </>
  )
}

export default AddContractForm
