import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { COLORS } from '../utils'

const toPercent = (decimal, fixed = 2) => `${(decimal * 100).toFixed(fixed)}%`;
const toTooltipPercent = (decimal, fixed = 2) => `${(decimal * 1).toFixed(fixed)}%`;

const populateAreas = function(data, xAxisKey) {
    if(data.length) {
      return Object.keys(data[0]).filter(key => key !== xAxisKey).map((key, index) => {
        return <Area stackId={1} dataKey={key} stroke={COLORS[index % COLORS.length]} fill={COLORS[index % COLORS.length]}/>
      })
    } else {
      return ''
    }
  }

class KnowledgeBasePercentAreaChart extends PureComponent {
  render() {
    return (
    <>
    <div style={{textAlign:'center', fontWeight:'bold', fontSize:'1.2em'}}>
        {this.props.title}
    </div>
    <ResponsiveContainer width='100%' height={this.props.height}>
        <AreaChart
            data={this.props.data}
            stackOffset="expand"
            margin={{ top: 14, right: 14, left: 14, bottom: 14 }}
        >
            <CartesianGrid/>
            <XAxis dataKey={this.props.xAxisKey} tickCount={this.props.data.length} />
            <YAxis tickFormatter={toPercent} />
            { populateAreas(this.props.data, this.props.xAxisKey) }
            <Tooltip formatter={toTooltipPercent}/>
            <Legend verticalAlign="bottom" height={36}/>
        </AreaChart>
      </ResponsiveContainer>
      </>
    );
  }
}

export default KnowledgeBasePercentAreaChart;
