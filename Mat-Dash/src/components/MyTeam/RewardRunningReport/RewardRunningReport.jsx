import * as React from 'react';
import { RankBusinessData } from '../../../data/MyTeamStaticData';
// import SearchTab from './SearchInput';
import Breadcrumb from "../../Breadcrumb";
import { ParseCustomDateFormate } from '../../../utils/utils';
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
            <div className='flex w-full gap-5 flex-1  '>
                {/* <SearchBox bgColor={"#DFE0FC"} text={"Total "} total={totalCount + " Referral"} icon={'icon-3.png'} filterClick={handleAllClick} /> */}
                {/* <SearchBox bgColor={"#d8f0e6"} text={"Active"} total={activeCount + " Referral"} icon={'icon-1.png'} filterClick={handleActiveClick} /> */}
                {/* <SearchBox bgColor={"#f0d8d9"} text={"Inactive"} total={InactiveCount + " Referral"} icon={'icon-2.png'} filterClick={handleInActiveClick} /> */}
            </div>
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
