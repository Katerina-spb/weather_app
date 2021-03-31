function DailyForecast (props) {
  return (
    <div style = {{
      display: 'flex',
      flexDirection: 'column',
      margin: '15px',
      }}>

      <span>13:00</span>
      <img alt ='sunny'></img>
      <span>20 C</span>

    </div>
  )
}

export default DailyForecast;