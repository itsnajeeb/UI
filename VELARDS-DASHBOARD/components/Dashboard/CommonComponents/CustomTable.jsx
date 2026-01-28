import * as React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import { styled } from '@mui/material/styles';

import { visuallyHidden } from "@mui/utils";
// import "../../App.css";
/* SORT HELPERS */
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) return -1;
  if (b[orderBy] > a[orderBy]) return 1;
  return 0;
}

/* Head Row */
const HeadRow = styled(TableRow)({
  '&:hover': {
    backgroundColor: '#1f2933',
    color: 'red'
  },
  borderBottom: '1px solid red'

});

//  Table Body 
const BodyRow = styled(TableRow)({
  backgroundColor: '#0b0b0b',
  '& td': {
    color: '#fff',
    borderBottom: '1px solid #1f2933'
  },
  '&:hover': {
    backgroundColor: '#1f2933'
  }
});

// Table Cell 
const HeadCell = styled(TableCell)({
  color: '#fbbf24',
  fontWeight: 700
});


function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export default function CustomTable({
  columns,
  rows,
  renderRow,
  rowsPerPageOptions = [5, 10, 25],
}) {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState(columns[0]?.id || "");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (_, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const visibleRows = React.useMemo(
    () =>
      [...rows]
        .sort(getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [rows, order, orderBy, page, rowsPerPage],
  );

  return (
    <>
      <TableContainer >
        <Table >
          <TableHead>
            <HeadRow className="manrope-fontFamily">
              {columns.map((col) => (
                <HeadCell
                  key={col.id}
                  align="center"
                  sortDirection={orderBy === col.id ? order : false}
                >
                  {col.sortable ? (
                    <TableSortLabel
                      active={orderBy === col.id}
                      direction={orderBy === col.id ? order : "asc"}
                      onClick={(e) => handleRequestSort(e, col.id)}
                      sx={{
                        color: '#fbbf24',
                        '&.Mui-active': {
                          color: '#fbbf24',//Active
                        },
                        '&:hover': {
                          color: '#fbbf24', //On Hover
                        },
                        '& .MuiTableSortLabel-icon': {
                          color: '#fbbf24 !important',
                        },
                      }}
                    >
                      {col.label}
                      {orderBy === col.id && (
                        <Box component="span" sx={visuallyHidden}>
                          sorted
                        </Box>
                      )}
                    </TableSortLabel>
                  ) : (
                    col.label
                  )}
                </HeadCell>
              ))}
            </HeadRow>
          </TableHead>


          <TableBody>
            {visibleRows.length > 0 ? (
              visibleRows.map((row, index) => (
                <BodyRow key={index}>
                  {renderRow(row)}
                </BodyRow>
              ))
            ) : (
              <BodyRow>
                <TableCell colSpan={columns.length} align="center">
                  No Data Found!
                </TableCell>
              </BodyRow>
            )}
          </TableBody>


        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={rowsPerPageOptions}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={(_, p) => setPage(p)}
        onRowsPerPageChange={(e) => {
          setRowsPerPage(+e.target.value);
          setPage(0);
        }}

        sx={{
          color: '#fff',                         // text
          '.MuiTablePagination-selectLabel': {
            color: '#9ca3af',
          },
          '.MuiTablePagination-displayedRows': {
            color: '#9ca3af',
          },
          '.MuiSvgIcon-root': {
            color: '#fbbf24',                    // arrows
          },
          '.MuiIconButton-root.Mui-disabled': {
            color: 'rgba(251,191,36,0.3)',
          },
        }}
      />
    </>
  );
}
