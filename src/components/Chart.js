import React from 'react'
import { Chart } from 'react-charts'
import ReactFrappeChart from "react-frappe-charts";

 
function DataChart() {
  // //to do: make array of x,y where x=time and y=#active fires counted that day
  // const data = React.useMemo(
  //       () => [
  //           {
  //               label: 'Series 1',
  //               data: [[5, 3], [6, 4], [7, 2], [8, 3], [9, 5]],
  //               backgroundColor: 'rgba(249, 170, 51, 0.1)',
  //               borderColor: 'rgba(249, 170, 51, 1)',
  //               fill: true,
  //           }],
  //       []
  //   )

  //   const axes = React.useMemo(
  //       () => [
  //           { primary: true, type: 'linear', position: 'bottom' },
  //           { type: 'linear', position: 'left' },
  //       ],
  //       []
  //   )

 
  return(
    // <div
    //   style={{
    //     width: '27vw',
    //     height: '33vh'
    //   }}
    // >
    //   <Chart data={data} axes={axes} />
    // </div>

    <div className="graph">
      <ReactFrappeChart
        title="Frequency"
        type="line"
        lineOptions={{regionFill: 1 }}
        colors={["#F9AA33"]}
        height={400}
        data={{
          labels: ["2021-03-01", "2021-03-02", "2021-03-03", "2021-03-04", "2021-03-5", "2021-04-6", "2021-04-7", "2021-04-8"],
          datasets: [{ values: [1, 2, 1, 3, 2, 2, 1, 0] }],
        }}
      />
    </div>
  )
}

export default DataChart;