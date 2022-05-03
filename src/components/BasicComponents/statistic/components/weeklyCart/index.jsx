import React from 'react';
import { BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./monthly.css"
function WeeklyCart({data,title}) {
  return (
    <div className="shadow-2xl md:w-[47%] w-full">
      <h3 className='p-5 font-medium'>{title}</h3>
       <div className='w-full'>
          <BarChart
         
         height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 0,
          }}
         className="barChart">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" stackId="a" fill="#8884d8" />
          <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
        </BarChart>
      
      </div>
    </div>
  )
}

export default WeeklyCart;