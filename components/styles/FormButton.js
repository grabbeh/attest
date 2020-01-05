const FormButton = ({ onClick, text }) => (
  <button
    className='pv2 ph3 font f5 mt3 bg-green white'
    onClick={onClick}
    type='submit'
  >
    {text}
  </button>
)

export default FormButton
