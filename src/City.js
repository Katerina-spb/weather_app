function City (props) {
  var date = new Date();
  var formatDate = date.toLocaleDateString(undefined, { month: 'long', day: 'numeric' })

  return (
    <div style = {{
      display: 'flex',
      flexDirection: 'column',
      margin: '15px',
      marginRight: '150px'
      }}>

      <span style ={{
        fontSize: '30px',
        marginBottom: '10px'
      }}>
        {props.city}
      </span>
      <span>{date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
      <span>{formatDate}</span>

    </div>
  )
}

export default City;



