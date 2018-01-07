const FormButton = ({ onClick }) => (
  <input
    className='fr pv2 ph3 br2 grow mt3 b bg-green white shadow-4'
    onClick={onClick}
    type='submit'
    value='Submit'
  />
)

export default FormButton
