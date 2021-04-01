import helpers from './helpers.js'

function City (props) {
  let timezone = props.timezone;

  // function getDate (timezone) {
  //   let date = new Date();
  //   let offset = date.getTimezoneOffset()* 60 * 1000;
  //   var ms = date.getTime() + offset + timezone * 1000;
  //   var newDate = new Date(ms);
  //   return newDate;
  // }

  var adjustedDate = helpers.getDate(timezone);
  var formatDate = adjustedDate.toLocaleDateString(undefined, { month: 'long', day: 'numeric' })

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
      <span>{adjustedDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
      <span>{formatDate}</span>

    </div>
  )
}

export default City;



