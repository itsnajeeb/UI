import * as React from 'react';
import { DirectLegBusinessData } from '../../../data/MyTeamStaticData';
import Breadcrumb from "../../CommonComponents/Breadcrumb";
import CommonTable from '../../CommonComponents/CommomTable'
import { TableCell, TableRow } from '@mui/material';


export default function DirectLegBusiness() {
    const [rows] = React.useState(DirectLegBusinessData)

    const referralColumns = [
        { id: "sno", label: "S.No.", sortable: true },
        { id: "userId", label: "User ID", sortable: true },
        { id: "selfBusiness", label: "Self Business", sortable: true },
        { id: "teamBusiness", label: "Team Business", sortable: true },
        { id: "grossBusiness", label: "Gros Business", sortable: true },
    ];
    return (
        <>
            <Breadcrumb title={"Direct Leg Business"} />
           
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
                                <TableCell align="center">{row.selfBusiness}</TableCell>
                                <TableCell align="center">{row.teamBusiness}</TableCell>
                                <TableCell align="center">{row.gorssBusiness}</TableCell>
                            </TableRow>
                        )}
                    />

                </div>

            </div>
        </>

    );
}
