const BusinessUnit = props => (
  <div>
    {props
      ? <div>
        <span>
          <i className='mr2 mt1 fa fa-building-o' />
          {props.businessUnit.name}
        </span>
      </div>
      : <div />}
  </div>
)

export default BusinessUnit
