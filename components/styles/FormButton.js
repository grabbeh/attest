const FormButton = ({ onClick, text }) => (
  <input
    className='pv2 ph3 font f5 mt3 bg-green white'
    onClick={onClick}
    type='submit'
    value={text}
  />
)

export default FormButton
