import * as React from 'react';
import { LeadershipBonus } from '../../../data/Income';
// import SearchTab from './SearchInput';
import Breadcrumb from "../../Breadcrumb";
// import SearchBox from '../SearchBox';
import { ParseCustomDateFormate } from '../../../utils/utils';
import CommonTable from '../../CommonComponents/CommomTable'
import { TableCell, TableRow } from '@mui/material';



/*MAIN TABLE */
export default function LeadershpBnous() {
  
  // const [order, setOrder] = React.useState('asc');
  const [rows, setRows] = React.useState(LeadershipBonus)
  const [setStatusFilter] = React.useState('ALL')
  const originalData = React.useRef(LeadershipBonus);
  
  const totalCount = originalData.current.length;
  const activeCount = originalData.current.filter((row) =>
    row.status?.toLowerCase() === 'active').length

  const InactiveCount = originalData.current.filter((row) =>
    row.status?.toLowerCase() === 'inactive').length

  const applyFilter = (filterType) => {
    console.log("FILTER APPLIED ");

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
    { id: "level", label: "Level", sortable: true },
    { id: "onAmount", label: "On Amount", sortable: true },
    { id: "income", label: "Income", sortable: true },
    { id: "date", label: "Date", sortable: true },
  ];
  return (
    <>
      <Breadcrumb title={"leadership Bonus "} fontStyle='uppercase' />
      <div className='flex w-full gap-5 flex-1  '>
        {/* <SearchBox bgColor={"#DFE0FC"} text={"Total "} total={totalCount + " Referral"} icon={'icon-3.png'} filterClick={handleAllClick} /> */}
        {/* <SearchBox bgColor={"#eef0d8"} text={"Last Week Referral"} total={lastWeekReferralCount + " Referral"} icon={'icon-4.png'} filterClick={handleLastWeekClick} /> */}

        {/* <SearchBox bgColor={"#d8f0e6"} text={"Active"} total={activeCount + " Referral"} icon={'icon-1.png'} filterClick={handleActiveClick} /> */}
        {/* <SearchBox bgColor={"#f0d8d9"} text={"Inactive"} total={InactiveCount + " Referral"} icon={'icon-2.png'} filterClick={handleInActiveClick} /> */}
      </div>
      {/* <SearchTab onSearch={handleSearch} /> */}
      <div className='w-full overflow-hidden rounded-xl  ' >
        <div className='bg-white shadow-xl rounded-xl overflow-hidden px-2 py-4'
        //  sx={{ width: '100%', mb: 2, boxShadow:2 }}
        >

          <CommonTable
            columns={referralColumns}
            rows={rows}
            renderRow={(row) => (
              <TableRow key={row.sno} hover>
                <TableCell align="center">{row.sno}</TableCell>
                <TableCell align="center">{row.userId}</TableCell>
                <TableCell align="center">{row.level}</TableCell>
                <TableCell align="center">{row.onAmount}</TableCell>
                <TableCell align="center">{row.income}</TableCell>
                <TableCell align="center">{row.date}</TableCell>
              </TableRow>
            )}
          />

        </div>
      </div>
    </>

  );
}
