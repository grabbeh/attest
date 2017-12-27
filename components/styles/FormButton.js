const FormButton = ({ onClick }) => (
  <input
    className='fr pa2 mt3 b bg-green'
    onClick={onClick}
    type='submit'
    value='Submit'
  />
)

export default FormButton
