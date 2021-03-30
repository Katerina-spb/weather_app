import React from 'react';

function City () {
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
        Austin
      </span>
      <span>11:05</span>
      <span>Tuesday March 31</span>

    </div>
  )
}

export default City;



