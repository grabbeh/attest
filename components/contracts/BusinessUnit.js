const BusinessUnit = props => (
  <div>
    {props.length > 0
      ? <div>
        <span>
          <i className='mr2 mt1 fa fa-building-o' />
          {props.businessUnit}
        </span>
      </div>
      : <div />}
  </div>
)

export default BusinessUnit
