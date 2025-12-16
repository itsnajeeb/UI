import * as React from 'react';
import { LevelData } from '../../../data/MyTeamStaticData';
// import SearchTab from './SearchInput';
import Breadcrumb from "../../CommonComponents/Breadcrumb";
import SearchBox from '../SearchBox';
import { formatWallet, ParseCustomDateFormate } from '../../../utils/utils';
import CommonTable from '../../CommonComponents/CommomTable'
import { TableCell, TableRow } from '@mui/material';
import FilterTab from './FilterTab';



/*MAIN TABLE */
export default function LevelDetails() {

    // const [order, setOrder] = React.useState('asc');
    const [rows, setRows] = React.useState(LevelData)
    const originalData = React.useRef(LevelData);

    const clickHandleFilter = ({ levels, status }) => {
        let data = [...originalData.current];
        // console.log(data);

        if (levels && levels.length > 0) {
            const isAllLevelSelected = levels.includes('ALL');

            if (!isAllLevelSelected) {
                data = data.filter(row =>
                    levels.includes(row.level)
                );
            }
            //  otherwaise ALL selected, no level filter
        }

        // STATUS FILTER
        if (status && status !== 'ALL') {
            data = data.filter(row =>
                row.status === status
            );
        }

        setRows(data);
    };


    const referralColumns = [
        { id: "sno", label: "S.No.", sortable: true },
        { id: "userId", label: "User ID", sortable: true },
        { id: "wallet", label: "Wallet", sortable: true },
        { id: "registrationDate", label: "Registration Date", sortable: true },
        { id: "level", label: "Level", sortable: true },
        { id: "status", label: "Status", sortable: true },
        { id: "package", label: "Package", sortable: true },
        { id: "activationDate", label: "Activation Date", sortable: true },
    ];
    return (
        <>
            <Breadcrumb title={"Level Details"} />
            <FilterTab onFilter={clickHandleFilter} />
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
                                <TableCell align="center"> {formatWallet(row.wallet)}</TableCell>
                                <TableCell align="center">{row.registrationDate}</TableCell>
                                <TableCell align="center">{row.level}</TableCell>

                                <TableCell align="center">
                                    <div
                                        className={`px-2 py-1 rounded text-white ${row.status === "Active" ? "bg-green-500" : "bg-red-500"
                                            }`}
                                    >
                                        {row.status}
                                    </div>
                                </TableCell>

                                <TableCell align="center">{row.package}</TableCell>
                                <TableCell align="center">{row.activationDate}</TableCell>
                            </TableRow>
                        )}
                    />


                </div>

                {/* <FormControlLabel
        control={<Switch checked={dense} onChange={(e) => setDense(e.target.checked)} />}
        label="Dense padding"
      /> */}
            </div>
        </>

    );
}
