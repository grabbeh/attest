const FormButton = ({ onClick, text }) => (
  <input
    className='fr pv2 ph3 br2 mt3 b bg-green white shadow-4'
    onClick={onClick}
    type='submit'
    value={text}
  />
)

export default FormButton
