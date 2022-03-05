import React from 'react';
import { Typography } from '@material-ui/core';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const Chart = ({ data }) => {
  if (data.length === 0) {
    return (
      <Typography variant="title">
        Set your income and create some budgets!
      </Typography>
    );
  }
  return (
    <BarChart
      width={550}
      height={300}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="category" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="amount" fill="#8884d8" background={{ fill: '#eee' }} />
    </BarChart>
  );
};

export default Chart;
