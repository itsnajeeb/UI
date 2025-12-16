import * as React from 'react';
import { ReferralData } from '../../../data/MyTeamStaticData';
import Breadcrumb from "../../CommonComponents/Breadcrumb";
import SearchBox from '../SearchBox';
import { formatWallet, ParseCustomDateFormate } from '../../../utils/utils';
import CommonTable from '../../CommonComponents/CommomTable'
import { TableCell, TableRow } from '@mui/material';



export default function Downline() {

    const [rows, setRows] = React.useState(ReferralData)
    const [_, setStatusFilter] = React.useState('ALL')
    const originalData = React.useRef(ReferralData);
    const totalCount = originalData.current.length;
    const activeCount = originalData.current.filter((row) =>
        row.status?.toLowerCase() === 'active').length

    const InactiveCount = originalData.current.filter((row) =>
        row.status?.toLowerCase() === 'inactive').length

    const applyFilter = (filterType) => {
        // console.log("FILTER APPLIED ", filterType);

        let filteredData = originalData.current;
        const today = new Date();

        switch (filterType) {

            case 'ALL':
                // no filter, keep all data
                filteredData = originalData.current;
                break;

            case 'Active':
                filteredData = filteredData.filter(
                    row => row.status?.toLowerCase() === 'active'
                );
                break;

            case 'Inactive':
                filteredData = filteredData.filter(
                    row => row.status?.toLowerCase() === 'inactive'
                );
                break;

            case 'LAST_WEEK': {
                const last7Days = new Date();
                last7Days.setDate(today.getDate() - 7);

                filteredData = filteredData.filter((row) => {
                    const date = ParseCustomDateFormate(row.registrationDate);
                    return date >= last7Days && date <= today;
                });
                break;
            }

            default:
                break;
        }

        setRows(filteredData);
        // setPage(0);
    };

    const handleActiveClick = () => {
        setStatusFilter("Active")
        applyFilter("Active")
    }
    const handleInActiveClick = () => {
        setStatusFilter("Inactive")
        applyFilter('Inactive')
    }

    const handleAllClick = () => {
        setStatusFilter('ALL')
        applyFilter('ALL')
    }

    const referralColumns = [
        { id: "sno", label: "S.No.", sortable: true },
        { id: "userId", label: "User ID", sortable: true },
        { id: "wallet", label: "Wallet", sortable: true },
        { id: "registrationDate", label: "Registration Date", sortable: true },
        { id: "status", label: "Status", sortable: true },
        { id: "package", label: "Package", sortable: true },
        { id: "activationDate", label: "Activation Date", sortable: true },
    ];
    return (
        <>
            <Breadcrumb title={"Downline"} />
            <div className='grid gap-5 md:grid-cols-3 '>
                <SearchBox bgColor={"#DFE0FC"} text={"Total "} total={totalCount + " Downline"} icon={'icon-3.png'} filterClick={handleAllClick} />
                <SearchBox bgColor={"#d8f0e6"} text={"Active"} total={activeCount + " Downline"} icon={'icon-1.png'} filterClick={handleActiveClick} />
                <SearchBox bgColor={"#f0d8d9"} text={"Inactive"} total={InactiveCount + " Downline"} icon={'icon-2.png'} filterClick={handleInActiveClick} />
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
                                <TableCell align="center"> {formatWallet(row.wallet)}</TableCell>
                                <TableCell align="center">{row.registrationDate}</TableCell>

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


                    {/* <TablePagination
            sx={{ marginY: 2 }}
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          /> */}
                </div>

                {/* <FormControlLabel
        control={<Switch checked={dense} onChange={(e) => setDense(e.target.checked)} />}
        label="Dense padding"
      /> */}
            </div>
        </>

    );
}
