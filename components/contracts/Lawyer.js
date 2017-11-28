const LawyerName = ({ firstName, lastName }) => (
  <div>
    <span>
      <i className='mr2 mt1 fa fa-id-card-o' />
      {`${firstName} ${lastName}`}
    </span>
  </div>
)

export default LawyerName
