const Input = ({ label, type, placeholder, name, onChange, value }) => (
  <div className='pv2 w-100 bb bw1'>
    <label className='b'>
      {label}
      <div>
        <input
          className='pa1'
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          type={type}
          name={name}
        />
      </div>
    </label>
  </div>
)

export default Input
