import * as React from 'react';
import { roiData } from '../../../data/Income';
// import SearchTab from './SearchInput';
import Breadcrumb from "../../CommonComponents/Breadcrumb";
// import SearchBox from '../SearchBox';
import { ParseCustomDateFormate } from '../../../utils/utils';
import CommonTable from '../../CommonComponents/CommomTable'
import { TableCell, TableRow } from '@mui/material';



/*MAIN TABLE */
export default function DailyRevenue() {

  // const [order, setOrder] = React.useState('asc');
  const [rows, _] = React.useState(roiData)

  const referralColumns = [
    { id: "sno", label: "S.No.", sortable: true },
    { id: "userId", label: "User ID", sortable: true },
    { id: "income", label: "Income", sortable: true },
    { id: "onAmount", label: "On Amount", sortable: true },
    { id: "remark", label: "Remark", sortable: true },
    { id: "date", label: "Date", sortable: true },
  ];
  return (
    <>
      <Breadcrumb title={"Daily Revenue Bonus "} fontStyle='uppercase' />
      <div className='w-full overflow-hidden rounded-xl  ' >
        <div className='bg-white shadow-xl rounded-xl overflow-hidden px-2 py-4'>

          <CommonTable
            columns={referralColumns}
            rows={rows}
            renderRow={(row) => (
              <TableRow key={row.sno} hover>
                <TableCell align="center">{row.sno}</TableCell>
                <TableCell align="center">{row.userId}</TableCell>
                <TableCell align="center">{row.income}</TableCell>
                <TableCell align="center">{row.onAmount}</TableCell>

                <TableCell align="center">{row.remark}</TableCell>
                <TableCell align="center">{row.date}</TableCell>
              </TableRow>
            )}
          />

        </div>
      </div>
    </>

  );
}
