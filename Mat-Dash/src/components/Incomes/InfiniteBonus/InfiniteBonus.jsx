import * as React from 'react';
import { InfinitBonus } from '../../../data/Income';
import Breadcrumb from "../../CommonComponents/Breadcrumb";
import CommonTable from '../../CommonComponents/CommomTable'
import { TableCell, TableRow } from '@mui/material';



/*MAIN TABLE */
export default function Infinite() {
    const [rows, _] = React.useState(InfinitBonus)

    const referralColumns = [
        { id: "sno", label: "S.No.", sortable: true },
        { id: "userId", label: "User ID", sortable: true },
        { id: "fromId", label: "From ID", sortable: true },
        { id: "income", label: "Income", sortable: true },
        { id: "onAmount", label: "On Amount", sortable: true },
        { id: "rate", label: "Rate", sortable: true },
        { id: "rank", label: "Rank", sortable: true },
        { id: "date", label: "Date", sortable: true },
    ];
    return (
        <>
            <Breadcrumb title={"INFINITY BONUS "} fontStyle='uppercase' />
         
            <div className='w-full overflow-hidden rounded-xl  ' >
                <div className='bg-white shadow-xl rounded-xl overflow-hidden px-2 py-4'
                >

                    <CommonTable
                        columns={referralColumns}
                        rows={rows}
                        renderRow={(row) => (
                            <TableRow key={row.sno} hover>
                                <TableCell align="center">{row.sno}</TableCell>
                                <TableCell align="center">{row.userId}</TableCell>
                                <TableCell align="center">{row.fromId}</TableCell>
                                <TableCell align="center">{row.income}</TableCell>
                                <TableCell align="center">{row.onAmount}</TableCell>
                                <TableCell align="center">{row.rate}</TableCell>
                                <TableCell align="center">{row.rank}</TableCell>
                                <TableCell align="center">{row.date}</TableCell>
                            </TableRow>
                        )}
                    />

                </div>
            </div>
        </>

    );
}
