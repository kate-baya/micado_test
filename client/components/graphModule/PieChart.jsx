import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import {drawChart} from './pieChartFunction'
import {dateTransform} from '../helperFunctions'

function PieChart({ data, settings }) {
  const outerRadius = 100
  const innerRadius = 70

  const margin = {
    top: 50, right: 50, bottom: 50, left: 50,
  };

  const width = 3 * outerRadius + margin.left + margin.right;
  const height = 2 * outerRadius + margin.top + margin.bottom;

  useEffect(() => {
    drawChart(data, width, height, innerRadius, outerRadius);
  }, [data]);

  return (
    <>
      <div id="pie-container" />
      <div className='container m-5 pt-1'>
      <table className='table is-hoverable is-fullwidth'>
        <thead>
          <tr>
            <th>Code</th>
            <th>Status</th>
            <th className='has-text-right'>Cases</th>
          </tr>
          </thead>
        <tbody>
        {data.map(d => {
          return <tr key={d.subSeries}>
            <td>
            <figure className="image is-16x16">
              <img src={d.img}/>
            </figure>
            </td>
            <td>{d.subSeries}</td>
            <td className='has-text-right'>{d.value.toString()}</td>
          </tr>
        })}
        </tbody>  
      </table>
      <p className='pb-4'>cases status from {dateTransform(settings.start)} to {dateTransform(settings.end)}</p>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    settings: state.settings
  }
}

export default connect(mapStateToProps)(PieChart)