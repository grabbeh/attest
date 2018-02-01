const LawyerName = props => (
  <div>
    {!props === null
      ? <div>
        <span>
          <i className='mr2 mt1 fa fa-id-card-o' />
          {`${props.firstName} ${props.lastName}`}
        </span>
      </div>
      : <div />}
  </div>
)

export default LawyerName
