import React, {  useState } from 'react'
import {  TableCell } from "@mui/material";
import { formatWallet } from '../../../Utility/utils';
import CustomTable from '../CommonComponents/CustomTable';
import { RoiIncomeData } from '../../../data/data';
// import './style.css'
export const DirectIncome = () => {

    const [rows] = useState(RoiIncomeData);
    // const originalData = useRef(withdarawalHistoryData);
    const referralColumns = [
        { id: "sno", label: "S. No", sortable: true },
        { id: "userid", label: "User Id", sortable: true },
        { id: "walletid", label: "Wallet Id", sortable: true },
        { id: "registrationdate", label: "Registration Date", sortable: true },
        { id: "status", label: "Status", sortable: true },
        { id: "package", label: "Package", sortable: true },
        { id: "activationdate", label: "Activation Date", sortable: true },
    ];
    return (

        <div className='deposit-history'>
            <h1>Direct Income</h1>
            <div className="table-wrapper">
                <div className="table-card ">
                    <CustomTable
                        columns={referralColumns}
                        rows={rows}
                        renderRow={(row) => (
                            <>
                                <TableCell align="center">{row.sno}</TableCell>

                                <TableCell align="center">
                                  ${row.userId}
                                </TableCell>

                                <TableCell align="center">
                                    {formatWallet(row.wallet)}
                                </TableCell>

                                <TableCell align="center">
                                    ${row.registrationDate}
                                </TableCell>

                                <TableCell align="center">
                                    <span className={`${row.status === 'Active' ? 'active' : 'in-active'} status`}>{row.status}</span>
                                </TableCell>

                                <TableCell align="center">
                                    {row.package}
                                </TableCell>

                                <TableCell align="center">
                                    {row.activationDate}
                                </TableCell>
                            </>
                        )}

                    />
                </div>
            </div>
        </div>
    )
}

export default DirectIncome