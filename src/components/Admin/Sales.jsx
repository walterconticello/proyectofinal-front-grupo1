import React from 'react'
import { useContext } from 'react'
import { useSalesContext } from '../../context/SalesContext'

const Sales = () => {
    const { getSales , sales } = useSalesContext()
    console.log(sales);
    getSales();

  return (
    <div>Sales</div>
  )
}

export default Sales