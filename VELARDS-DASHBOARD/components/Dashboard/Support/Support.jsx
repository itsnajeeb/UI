import React, { useState } from 'react'
import { TableCell } from "@mui/material";
import CustomTable from '../CommonComponents/CustomTable';
import { queryData } from '../../../data/data';
import buttonBg from '/dashboardimg/buttonBg.png'
import './style.css' 
export const Support = () => {
    const [rows] = useState(queryData);
    const referralColumns = [
        { id: "sno", label: "S. No", sortable: true },
        { id: "query", label: "Query", sortable: true },
        { id: "querydate", label: "Query Date", sortable: true },
        { id: "status", label: "Status", sortable: true },
        { id: "adminreplay", label: "Admin Replay", sortable: true },
        { id: "adminreplaydate", label: "Admin Replay Date", sortable: true },
    ];
    return (
        <div className='support-section'>
            <div className='support-info'>
                <h1 className='heading'>We are here for you...</h1>
                <div className='support-field'>
                    <h4>Help Desk</h4>
                    <div className='text-area'>
                        <textarea name="" id="" ></textarea>
                        <label htmlFor="">Please Explain Your Problem here...</label>
                    </div>
                </div>
                <div className='send-btn'>
                    <img src={buttonBg} alt="" />
                    <p>Send Query</p>
                </div>
            </div>
            <div className="table-wrapper">
                <div className="table-card ">
                    <CustomTable
                        columns={referralColumns}
                        rows={rows}
                        renderRow={(row) => (
                            <>
                                <TableCell align="center">{row.sno}</TableCell>

                                <TableCell align="center">
                                    {row.query}
                                </TableCell>

                                <TableCell align="center">
                                    ${row.queryDate}
                                </TableCell>

                                <TableCell align="center">
                                    <span className={`${row.status === 'closed' ? 'closed' : 'pending'} status capitalize`}>{row.status}</span>
                                </TableCell>

                                <TableCell align="center">
                                    {row.adminReplay}
                                </TableCell>

                                <TableCell align="center">
                                    {row.adminReplayDate}
                                </TableCell>
                            </>
                        )}

                    />
                </div>
            </div>
        </div>
    )
}
