const LawyerName = props => (
  <div>
    {props.name
      ? <div>
        <span>
          <i className='mr2 mt1 fa fa-id-card-o' />
          {props.name}
        </span>
      </div>
      : <div />}
  </div>
)

export default LawyerName
