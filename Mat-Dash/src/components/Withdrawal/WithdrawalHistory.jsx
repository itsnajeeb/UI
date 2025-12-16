import * as React from 'react';
import { wathdrawalHistoryData } from '../../data/Income';
// import SearchTab from './SearchInput';
import Breadcrumb from "../CommonComponents/Breadcrumb";
import Card from '../CommonComponents/Card';
import { formatWallet } from '../../utils/utils';
import CommonTable from '../CommonComponents/CommomTable'
import { TableCell, TableRow } from '@mui/material';
import { Link } from 'react-router-dom';



/*MAIN TABLE */
export default function WithdrawalHistory() {

  const [rows, _] = React.useState(wathdrawalHistoryData)
  const originalData = React.useRef(wathdrawalHistoryData);

  const totalWithdrawalHistory = originalData.current.reduce(
    (sum, item) => sum + item.withdrawalAmount,
    0);

  const requestedAmount = originalData.current.reduce((sum, item) => sum + item.requestedAmount, 0)
  const adminCharge = originalData.current.reduce((sum, item) => sum + item.adminCharge, 0)

  const referralColumns = [
    // { id: "sno", label: "S.No.", sortable: true },
    { id: "userId", label: "User ID", sortable: true },
    { id: "wallet", label: "Wallet", sortable: true },
    { id: "requestedAmount", label: "Requested Amount", sortable: true },
    { id: "adminCharge", label: "Admin Charge", sortable: true },
    { id: "withdarawalAmount", label: "Withdrawal Amount", sortable: true },
    { id: "usdtTxn", label: "USDT Txn", sortable: true },
    { id: "requestedDate", label: "Requested Date", sortable: true },
    { id: "status", label: "status", sortable: true },
    { id: "padiDate", label: "Paid Date", sortable: true },
  ];

  return (
    <div className="space-y-7 w-full min-w-0 relative">
      <Breadcrumb title={"withdrawal History "} fontStyle='uppercase' />
      <div className='bg-white py-8 manrope-fontFamliy px-8 rounded-xl'>
        <h1 className='mb-5 font-bold text-xl'>Your Withdrawal History Summary</h1>
        <div className='flex w-full gap-10 flex-wrap justify-center md:justify-start   '>
          <Card bgColor={"#DFE0FC"} text={"Requested Amount "} total={requestedAmount} icon={'icon-3.png'} />

          <Card bgColor={"#DFE0FC"} text={"Total Withdrawal "} total={totalWithdrawalHistory} icon={'icon-3.png'} />
          <Card bgColor={"#DFE0FC"} text={"Admin Charge "} total={adminCharge} icon={'icon-3.png'} />

        </div>
      </div>
      {/* <SearchTab onSearch={handleSearch} /> */}
      <div className="relative w-full max-w-full overflow-hidden">
        <div className="bg-white shadow-xl rounded-xl px-2 py-4 overflow-x-auto w-full">

          <CommonTable
            columns={referralColumns}
            rows={rows}
            renderRow={(row) => (
              <TableRow key={row.sno} hover>
                {/* <TableCell align="center">{row.sno}</TableCell> */}
                <TableCell align="center">{row.userId}</TableCell>
                <TableCell align="center"> {formatWallet(row.wallet)}</TableCell>
                <TableCell align="center">{"$ " + row.requestedAmount}</TableCell>
                <TableCell align="center">{"$ " + row.adminCharge}</TableCell>

                <TableCell align="center">{"$ " + row.withdrawalAmount}</TableCell>
                <TableCell align="center" sx={{ color: "#635BFF", fontWeight: "600" }}><Link>View Txn</Link></TableCell>
                <TableCell align="center">{row.requestedDate}</TableCell>
                <TableCell align="center">{row.status}</TableCell>
                <TableCell align="center">{row.paidDate}</TableCell>
              </TableRow>
            )}
          />
        </div>

      </div>
    </div>

  );
}
