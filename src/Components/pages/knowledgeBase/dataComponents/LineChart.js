import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { COLORS } from '../utils'

const populateLines = function(data, xAxisKey) {
  if(data.length) {
    return Object.keys(data[0]).filter(key => key !== xAxisKey).map((key, index) => {
      return <Line yAxisId={1} dataKey={key} stroke={COLORS[index % COLORS.length]}/>
    })
  } else {
    return ''
  }
}

const percent = (decimal, fixed = 2) => `${(decimal * 1).toFixed(fixed)}%`

const dollars = (value) =>  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD',}).format(value);

export default class KnowledgeBaseLineChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data,
      left: 'dataMin',
      right: 'dataMax',
      animation: true,
      showButton: false
    };
  }

  render() {
    const {
      data, left, right
    } = this.state;

    return (
      <div className="highlight-bar-charts" style={{ userSelect: 'none' }}>
        <div style={{textAlign:'center', fontWeight:'bold', fontSize:'1.2em'}}>
          {this.props.title}
        </div>

        <ResponsiveContainer width='100%' height={this.props.height}>
        <LineChart
          data={data}
          margin={{ top: 14, right: 14, left: 14, bottom: 14 }}
        >
          <CartesianGrid/>
          <XAxis
            dataKey={this.props.xAxisKey}
            domain={[left, right]}
            tickCount={this.props.data.length}
            type="number"
          />
          <YAxis
            domain={this.props.domain}
            type="number"
            yAxisId="1"
            tickFormatter={this.props.format === 'percent' ? percent : this.props.format === 'dollar' ? dollars : null}
          />
          <Tooltip formatter={this.props.format === 'percent' ? percent : this.props.format === 'dollar' ? dollars : null}/>
          { populateLines(this.props.data, this.props.xAxisKey) }
        <Legend verticalAlign="bottom" height={36}/>
        </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
