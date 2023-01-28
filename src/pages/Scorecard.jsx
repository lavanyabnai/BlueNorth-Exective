import React from 'react'
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartTitle,
  ChartLegend,
} from "@progress/kendo-react-charts";
import "hammerjs";

const categories = [2002, 2003, 2004];
const series = [
  {
    name: "India",
    data: [3.907, 7.943, 7.848],
  },
  {
    name: "Russian Federation",
    data: [4.743, 7.295, 7.175],
  },
  {
    name: "Germany",
    data: [0.21, 0.375, 1.161],
  },
  {
    name: "World",
    data: [1.988, 2.733, 3.994],
  },
];
const areaData = [
  {
    name: "World",
    data: [3.988, 3.733, 3.994],
  },
  {
    name: "Germany",
    data: [2.21, 2.375, 2.161],
  },
  {
    name: "Russian Federation",
    data: [1.743, 1.295, 1.175],
  },
  {
    name: "India",
    data: [0.907, 0.943, 0.848],
  },
];
const pieData = [
  {
    name: "India",
    share: 0.24,
  },
  {
    name: "Russian Federation",
    share: 0.26,
    explode: true,
  },
  {
    name: "Germany",
    share: 0.1,
  },
  {
    name: "World",
    share: 0.4,
  },
];


const Scorecard = () => {
  return (
    <div className='grid-container'>

      <div className='grid-item'>
      <div className="k-card ">
          <Chart
            style={{
              height: 350,
              width:500
            }}
          >
            <ChartTitle text="Column Chart" />
            <ChartLegend position="top" orientation="horizontal" />
            <ChartCategoryAxis>
              <ChartCategoryAxisItem categories={categories} startAngle={45} />
            </ChartCategoryAxis>
            <ChartSeries>
              {series.map((item, idx) => (
                <ChartSeriesItem
                  key={idx}
                  type="column"
                  tooltip={{
                    visible: true,
                  }}
                  data={item.data}
                  name={item.name}
                />
              ))}
            </ChartSeries>
          </Chart>
        </div>
      </div>






     
      <div className='grid-item'>
      <div className="k-card ">
          <Chart
            style={{
              height: 350,
              width:500
            }}
          >
            <ChartTitle text="Column Chart" />
            <ChartLegend position="top" orientation="horizontal" />
            <ChartCategoryAxis>
              <ChartCategoryAxisItem categories={categories} startAngle={45} />
            </ChartCategoryAxis>
            <ChartSeries>
              {series.map((item, idx) => (
                <ChartSeriesItem
                  key={idx}
                  type="column"
                  tooltip={{
                    visible: true,
                  }}
                  data={item.data}
                  name={item.name}
                />
              ))}
            </ChartSeries>
          </Chart>
        </div>
      </div>
      




























      <div className='grid-item'>
      <div className="k-card ">
          <Chart
            style={{
              height: 350,
              width:500
            }}
          >
            <ChartTitle text="Column Chart" />
            <ChartLegend position="top" orientation="horizontal" />
            <ChartCategoryAxis>
              <ChartCategoryAxisItem categories={categories} startAngle={45} />
            </ChartCategoryAxis>
            <ChartSeries>
              {series.map((item, idx) => (
                <ChartSeriesItem
                  key={idx}
                  type="column"
                  tooltip={{
                    visible: true,
                  }}
                  data={item.data}
                  name={item.name}
                />
              ))}
            </ChartSeries>
          </Chart>
        </div>



      </div>
      <div className='grid-item'>
      <div className="k-card ">
          <Chart
            style={{
              height: 350,
              width:500
            }}
          >
            <ChartTitle text="Column Chart" />
            <ChartLegend position="top" orientation="horizontal" />
            <ChartCategoryAxis>
              <ChartCategoryAxisItem categories={categories} startAngle={45} />
            </ChartCategoryAxis>
            <ChartSeries>
              {series.map((item, idx) => (
                <ChartSeriesItem
                  key={idx}
                  type="column"
                  tooltip={{
                    visible: true,
                  }}
                  data={item.data}
                  name={item.name}
                />
              ))}
            </ChartSeries>
          </Chart>
        </div>
      </div>












    </div>
  )
}

export default Scorecard
