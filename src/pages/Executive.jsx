import React from 'react'

import { Chart,ChartArea,ChartSubtitle, ChartSeries, ChartSeriesItem, ChartCategoryAxis, ChartCategoryAxisItem, ChartTitle, ChartLegend } from "@progress/kendo-react-charts";
import 'hammerjs';
import {DropDownList} from "@progress/kendo-react-dropdowns";
import { RangeSlider, SliderLabel } from "@progress/kendo-react-inputs";
import { DateRangePicker } from "@progress/kendo-react-dateinputs";

const Executive = () => {
  const bar = [
    { month: 'Jan', sales: 35 }, 
    { month: 'Feb', sales: 28 },
    { month: 'Mar', sales: 34 }, 
    { month: 'Apr', sales: 32 },
    { month: 'May', sales: 40 }, 
    { month: 'Jun', sales: 32 },
    { month: 'Jul', sales: 35 }, 
    { month: 'Aug', sales: 55 },
    { month: 'Sep', sales: 38 }, 
    { month: 'Oct', sales: 30 },
    { month: 'Nov', sales: 25 },
    { month: 'Dec', sales: 32 }
  ];
  
  const seriesLabels = {
    visible: true,
    // Note that visible defaults to false
    padding: 3,
    font: " 10px Arial, sans-serif",
  };
  
  const categories = [2002, 2003, 2004];
  const series = [{
    name: "India",
    data: [3.907, 7.943, 7.848]
  }, {
    name: "Russian Federation",
    data: [4.743, 7.295, 7.175]
  }, {
    name: "Germany",
    data: [0.21, 0.375, 1.161]
  }, {
    name: "World",
    data: [1.988, 2.733, 3.994]
  }];
  
  
  const areaData = [{
    name: "World",
    data: [3.988, 3.733, 3.994]
  }, {
    name: "Germany",
    data: [2.21, 2.375, 2.161]
  }, {
    name: "Russian Federation",
    data: [1.743, 1.295, 1.175]
  }, {
    name: "India",
    data: [0.907, 0.943, 0.848]
  }];
  
  const pieData = [{
    name: "India",
    share: 0.24
  }, {
    name: "Russian Federation",
    share: 0.26,
    explode: true
  }, {
    name: "Germany",
    share: 0.1
  }, {
    name: "World",
    share: 0.4
  }];

  const [range, setRange] = React.useState({
    start: new Date('2020-01-01T21:00:00.000Z'),
    end: new Date('2020-04-29T21:00:00.000Z')
  });
  const onRangeChange = React.useCallback(
    (event) => {
        setRange({
            start: event.value.start,
            end: event.value.end
        })
    },
    [setRange]
  );

  const [state, setState] = React.useState({
    value: {
      month: 'Dec',
      //sales: 32,
    },
  });
  const handleChange = (event) => {
    setState({
      value: event.target.value,
    });
  };


return (
  <>
    <div className='mb-1 bg-white align justify-center text-center text-2xl font-semibold text-BlueNorth italic'> EXECUTIVE OVERVIEW</div>
              <div className="card-ranges">
                    <DateRangePicker value={range} onChange={onRangeChange} />
                      </div>
                      
  <div className="executive-grid ">
  
    <div className="chart1">
        <div className="k-card">
        
        <div className='flex flex-row m-2 bg-gray text-xl border-slate-300 border-b '>
        <div className='flex mx-3 text-xl font-semibold'>Freight to Sales Ratio</div>
        <div className=' ml-3 text-base italic'>Transportation impact on Gross Margin</div>
        <div className='flex text-right align-middle object-center'>

           <p>
         <DropDownList
         style={{
          width: '300px',
           border:'1'
         }}
        
         fillMode={'outline'}
         data={bar}
         value={state.value}
         textField='month'
         onChange={handleChange}
         />
         
        </p>
          </div>
          </div>
        <Chart style={{
          height: 350,
        }}>
            <ChartLegend position="top" orientation="horizontal" />
           
            <ChartSeries>
            <ChartSeriesItem
             data={bar}
             type="line"
             field="sales"
             categoryField="month"
             labels={seriesLabels}
              />
             </ChartSeries>
          </Chart>
          
        </div>
      </div>



      <div className="chart2">
        <div className="k-card">
        <div className='m-2 bg-gray text-xl border-slate-300 border-b '>
        <div className=' mx-3 text-xl font-semibold'>On-Time Delivery</div>
        <div className=' ml-3 text-base italic'>Customer experience of delivery service</div>
        </div>
        <Chart style={{height: 350}}>
          <ChartLegend position="top" orientation="horizontal" />
          <ChartArea  margin={15}/>

          <ChartSeries>
          <ChartSeriesItem
           data={bar}
           type="column"
           field="sales"
           categoryField="month"
           tooltip={{
            visible: true
          }}
            />
           </ChartSeries>
          </Chart>
        </div>
      </div>
  


    
      <div className="chart3">
        <div className="k-card">
        <div className='m-2 bg-gray text-xl border-slate-300 border-b '>
        <div className=' mx-3 text-xl font-semibold'>Damage Occurances</div>
        <div className=' ml-3 text-base italic'>Damage parts per million (DPPM)</div>
        </div>
          <Chart style={{
          height: 350
        }}>
            <ChartTitle text="Area Chart" />
        <ChartLegend position="top" orientation="horizontal" />
           
            <ChartCategoryAxis>
              <ChartCategoryAxisItem categories={categories} startAngle={45} />
            </ChartCategoryAxis>
            <ChartSeries>
              {areaData.map((item, idx) => <ChartSeriesItem key={idx} type="bar" tooltip={{
              visible: true
            }} data={item.data} name={item.name} />)}
            </ChartSeries>
          </Chart>
        </div>
      </div>


      <div className="chart4">
        <div className="k-card">
        <div className='m-2 bg-gray text-xl border-slate-300 border-b '>
        <div className=' mx-3 text-xl font-semibold'>Mode Mix</div>
        <div className=' ml-3 text-base italic'>Percentage Spend by Mode</div>
        </div>
          <Chart style={{
          height: 350
        }}>
            <ChartTitle text="Pie Chart" />
            <ChartLegend position="top" orientation="horizontal" />
            <ChartSeries>
              <ChartSeriesItem type="bar" overlay={{
             
            }} tooltip={{
              visible: true
            }} data={pieData} categoryField="name" field="share" />
            </ChartSeries>
          </Chart>
        </div>
      </div>
   


  </div>
</>
  );
}

export default Executive;