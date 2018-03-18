const FormButton = ({ onClick, text }) => (
  <input
    className='fl pv2 ph3 font f5 br2 mt3 bg-green white shadow-4'
    onClick={onClick}
    type='submit'
    value={text}
  />
)

export default FormButton
