import './Empty.css'

function Empty({searchInfo}) {
  return (
    <div className='empty'>
        {
          searchInfo ?
          (<h2>No movie found</h2>):
          (<h2>Welcome to Phimmoi</h2>)
        }
    </div>
  )
}
export default Empty