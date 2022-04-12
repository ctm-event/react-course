import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  console.log(dataPointValues);
  const totalMaximum = Math.max(...dataPointValues);
  console.log(totalMaximum);

  return <div className='chart'>
    {props.dataPoints.map((dataPoint) => {
      return <ChartBar 
        value={dataPoint.value} 
        max={totalMaximum}
        label={dataPoint.label}
        key={dataPoint.label}
      />
    })}
  </div>
}

export default Chart;