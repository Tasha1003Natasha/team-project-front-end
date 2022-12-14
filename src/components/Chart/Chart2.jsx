import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
import {
  getCurrectAnswer,
  getIncurrectAnswer,
} from '../../redux/tests/test-selector';

const renderActiveShape = props => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    payload,
    percent,
  } = props;

  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 15) * cos;
  const my = cy + (outerRadius + 15) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text
        x={cx}
        y={cy}
        dy={8}
        textAnchor="middle"
        fill={payload.name === 'Correct' ? '#FF6B09' : 'var(--secondary-color)'}
      >
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={payload.name === 'Correct' ? '#FF6B09' : '#555555'}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={payload.name === 'Correct' ? '#FF6B09' : '#555555'}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={payload.name === 'Correct' ? '#FF6B09' : '#555555'}
        fill="none"
      />
      <circle
        cx={ex}
        cy={ey}
        r={2}
        fill={payload.name === 'Correct' ? '#FF6B09' : '#555555'}
        stroke="none"
      />

      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={2}
        textAnchor={textAnchor}
        fill="var(--secondary-color"
      >
        {` ${(percent * 100).toFixed(0)}%`}
      </text>
    </g>
  );
};

const Chart2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  const correct = useSelector(getCurrectAnswer);
  const incorrect = useSelector(getIncurrectAnswer);

  const data = [
    { name: 'Correct', value: correct },
    { name: 'Incorrect', value: incorrect },
  ];
  const COLORS = ['#FF6B09', '#555555'];

  return (
    <ResponsiveContainer width={320} height={320}>
      <PieChart>
        <Pie
          startAngle={-300}
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data}
          cx={155}
          cy={150}
          innerRadius={50}
          outerRadius={65}
          fill={COLORS[COLORS.length]}
          dataKey="value"
          onMouseEnter={onPieEnter}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Chart2;
