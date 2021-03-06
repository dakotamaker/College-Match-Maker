import React from 'react';
import { PieChart, Pie, Sector, Legend, Cell, ResponsiveContainer } from 'recharts'
import { COLORS } from '../utils'
import '../../../../Assets/css/components/pages/knowledgeBase/pieChart.css'

/* 
  RenderActiveShape function and basis of this class were taken from or inspired by Rechart's example docs.
  The particular example being located here: http://recharts.org/en-US/examples/CustomActiveShapePieChart
*/
const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
      cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
      fill, payload, value,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';
  
    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill} className="pie-chart-text">{payload.name}</text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333" width={60}>{`${(value * 100).toFixed(2)}%`}</text>
      </g>
    );
  };

class KnowledgeBasePieChart extends React.Component {
    state = {
        activeIndex: 0,
    };
    
    onPieEnter = (data, index) => {
        this.setState({
            activeIndex: index,
        });
    };
    

    render() {
        return (
          <>
            <div style={{textAlign:'center', fontWeight:'bold', fontSize:'1.2em'}}>
              Current Enrollment By {this.props.title}
            </div>
            <ResponsiveContainer width='100%' height={this.props.height}>
            <PieChart>
                <Pie
                    activeIndex={this.state.activeIndex}
                    activeShape={renderActiveShape}
                    data={this.props.data}
                    cx='50%'
                    cy='50%'
                    innerRadius={90}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    paddingAngle={1}
                    onMouseEnter={this.onPieEnter}
                    margin={{ top: 14, right: 24, left: 14, bottom: 14 }}
                >
                    {
                        this.props.data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                    }
                </Pie>
                <Legend layout="vertical" verticalAlign="middle" align="right" width={240}/>
            </PieChart>
            </ResponsiveContainer>
          </>
        );
    }
}

export default KnowledgeBasePieChart;