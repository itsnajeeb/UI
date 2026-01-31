import React, {  useState } from 'react'
import {  TableCell } from "@mui/material";
import './DepositHistory.css'
import { formatWallet } from '../../../../Utility/utils';
import CustomTable from '../../CommonComponents/CustomTable';
import { Link } from 'react-router-dom';
import { withdarawalHistoryData } from '../../../../data/data';
export const DepositHistory = () => {

    const [rows] = useState(withdarawalHistoryData);
    // const originalData = useRef(withdarawalHistoryData);
    const referralColumns = [
        { id: "userId", label: "User ID", sortable: true },
        { id: "wallet", label: "Wallet", sortable: true },
        { id: "requestedAmount", label: "Requested Amount", sortable: true },
        { id: "adminCharge", label: "Admin Charge", sortable: true },
        { id: "withdarawalAmount", label: "Withdrawal Amount", sortable: true },
        { id: "usdtTxn", label: "USDT Txn", sortable: true },
        { id: "requestedDate", label: "Requested Date", sortable: true },
        { id: "status", label: "Status", sortable: true },
        { id: "padiDate", label: "Paid Date", sortable: true },
    ];
    return (

        <div className='deposit-history table-container'>
            <h1>Deposit History</h1>
            <div className="table-wrapper">
                <div className="table-card ">
                    <CustomTable
                        columns={referralColumns}
                        rows={rows}
                        renderRow={(row) => (
                            <>
                                <TableCell align="center">{row.userId}</TableCell>

                                <TableCell align="center">
                                    {formatWallet(row.wallet)}
                                </TableCell>

                                <TableCell align="center">
                                    ${row.requestedAmount}
                                </TableCell>

                                <TableCell align="center">
                                    ${row.adminCharge}
                                </TableCell>

                                <TableCell align="center">
                                    ${row.withdrawalAmount}
                                </TableCell>

                                <TableCell align="center" className="txn-link">
                                    <Link to="#">View Txn</Link>
                                </TableCell>

                                <TableCell align="center">
                                    {row.requestedDate}
                                </TableCell>

                                <TableCell align="center">
                                    {row.status}
                                </TableCell>

                                <TableCell align="center">
                                    {row.paidDate}
                                </TableCell>
                            </>
                        )}

                    />
                </div>
            </div>
        </div>
    )
}

export default DepositHistory