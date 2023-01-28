import React from 'react';
import * as PropTypes from 'prop-types';
import {
   Chart as KendoChart,ChartSeries,ChartSeriesItem,
   ChartLegend,
   
} from '@progress/kendo-react-charts';
import { groupBy, filterBy } from '@progress/kendo-data-query';
import 'hammerjs';

export const Chart = (props) => {
   const {
      data, groupByField, seriesCategoryField, seriesField,
      filterStart, filterEnd, seriesType, groupResourceData, groupTextField,
      groupColorField, onRefresh
  } = props;

  const filteredData = filterBy(data, {
   logic: "and",
   filters: [
       { field: "Booking_Month", operator: "gt", value: filterStart },
       { field: "Booking_Month", operator: "lt", value: filterEnd }]});

  const groupedData = groupBy(filteredData, [{ field: groupByField }]);


return(
  
<KendoChart style={{ height: 300 }} onRefresh={onRefresh}>
<ChartLegend position="bottom" orientation="horizontal" background={'#f4f5f8'} padding={{ left: 80 }} labels={{padding: { right: 80 }}}/>

<ChartSeries>
{
                    groupedData.map(group => {
                        const groupResource = groupResourceData.find(item => item[groupByField] === group.value);
     
return(
   <ChartSeriesItem
                                key={group.value}
                                name={groupResource[groupTextField]}
                                type={seriesType}
                                field={seriesField}
                                categoryField={seriesCategoryField}
                                data={group.items}
                                color={groupResource[groupColorField]}
                            >
</ChartSeriesItem>
);

     })}


  
</ChartSeries>
   </KendoChart>
   
)
}

Chart.displayName = 'Chart';
Chart.propTypes = {
    data: PropTypes.array,
    groupByField: PropTypes.string,
    seriesCategoryField: PropTypes.string,
    seriesField: PropTypes.string,
    filterStart: PropTypes.object,
    filterEnd: PropTypes.object,
    seriesType: PropTypes.string,
    groupResourceData: PropTypes.array,
    groupTextField: PropTypes.string,
    onRefresh: PropTypes.func
};


