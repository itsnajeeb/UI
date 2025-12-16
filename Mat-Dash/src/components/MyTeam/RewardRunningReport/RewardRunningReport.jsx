import * as React from 'react';
import { RankBusinessData } from '../../../data/MyTeamStaticData';
import Breadcrumb from "../../CommonComponents/Breadcrumb";
import CommonTable from '../../CommonComponents/CommomTable'
import { TableCell, TableRow } from '@mui/material';


export default function RewardRunningReport() {
    const [rows] = React.useState(RankBusinessData)
    
    const referralColumns = [
        { id: "sno", label: "S.No.", sortable: true },
        { id: "userId", label: "User ID", sortable: true },
        { id: "selfBusiness", label: "Rank Name", sortable: true },
        { id: "requiredBusiness", label: "Required Business", sortable: true },
        { id: "completesBusiness", label: "Complete Business", sortable: true },
        { id: "remainingBusiness", label: "Remaining Business", sortable: true },
        { id: "remark", label: "Remark ", sortable: true },
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
                                <TableCell align="center">{row.rankName}</TableCell>
                                <TableCell align="center">{row.requiredBusiness}</TableCell>
                                <TableCell align="center">{row.completeBusiness}</TableCell>
                                <TableCell align="center">{row.remainingBusiness}</TableCell>
                                <TableCell align="center">{row.remark}</TableCell>
                            </TableRow>
                        )}
                    />

                </div>

            </div>
        </>

    );
}
