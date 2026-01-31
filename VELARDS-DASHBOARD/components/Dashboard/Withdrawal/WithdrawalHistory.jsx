import React, { useState } from 'react'
import { TableCell } from "@mui/material";
import { formatWallet } from '../../../Utility/utils';
import CustomTable from '../CommonComponents/CustomTable';
import { withdarawalHistoryData } from '../../../data/data';
export const WithdrawalHistory = () => {

    const [rows] = useState(withdarawalHistoryData);
    // const originalData = useRef(withdarawalHistoryData);
    const referralColumns = [
        { id: "userid", label: "User Id", sortable: true },
        { id: "walletid", label: "Wallet Id", sortable: true },
        { id: "Requestamount", label: "Request Amount", sortable: true },
        { id: "admincharge", label: "Admin Charge", sortable: true },
        { id: "withdrawalamount", label: "Withdrawal Amount", sortable: true },
        { id: "requesteddate", label: "Requested Date", sortable: true },
        { id: "status", label: "Status", sortable: true },
        { id: "paiddate", label: "Paid Date", sortable: true },
    ];
    return (

        <div className='deposit-history table-container'>
            <h1>Withdrawal History</h1>
            <div className="table-wrapper">
                <div className="table-card ">
                    <CustomTable
                        columns={referralColumns}
                        rows={rows}
                        renderRow={(row) => (
                            <>

                                <TableCell align="center">
                                    ${row.userId}
                                </TableCell>

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

export default WithdrawalHistory