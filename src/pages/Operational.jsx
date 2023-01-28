import React from 'react'
import { TileLayout } from '@progress/kendo-react-layout';


const tiles = [{
  defaultPosition: {
    col: 1,
    colSpan: 1,
    rowSpan: 1
  },
  header: "Tile 1",
  body: <p>Reorderable tile.</p>
}, {
  defaultPosition: {
    col: 2,
    colSpan: 1,
    rowSpan: 1
  },
  header: "Tile 2",
  body: <p>Reorderable tile.</p>
}, ];

const Operational = () => {
  return (
    <>
    
    <TileLayout columns={2} rowHeight={300} gap={{
      rows: 10,
      columns: 10
    }} items={tiles} />
    </>
  )
}

export default Operational
