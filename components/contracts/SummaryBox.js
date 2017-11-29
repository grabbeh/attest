const SummaryBox = ({ total }) => (
  <div className='bg-haus w-30-ns mt3 mt0-ns w-100 pa3'>
    <div className='b f4 bb pb2'>Summary</div>
    <div className='mt3 f5 b'>{`Total: ${total}`}</div>
  </div>
)

export default SummaryBox
