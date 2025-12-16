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
import { visuallyHidden } from "@mui/utils";
import '../../App.css'
/* SORT HELPERS */
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) return -1;
  if (b[orderBy] > a[orderBy]) return 1;
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export default function ShowDataTable({
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
    [rows, order, orderBy, page, rowsPerPage]
  );

  return (
    <>
      <TableContainer className="sliding-panel-scroll scrollbar-thin" >
        <Table className="custom-scrollbar" sx={{
          // tableLayout: "fixed"
        }}>
          <TableHead >
            <TableRow className="manrope-fontFamily">
              {columns.map((col) => (
                <TableCell
                  key={col.id}
                  align="center"
                  sx={{ fontWeight: "600", paddingLeft: 3 }}
                  sortDirection={orderBy === col.id ? order : false}
                >
                  {col.sortable ? (
                    <TableSortLabel
                      active={orderBy === col.id}
                      direction={orderBy === col.id ? order : "asc"}
                      onClick={(e) => handleRequestSort(e, col.id)}
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
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {visibleRows.length > 0 ? (
              visibleRows.map(renderRow)
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} align="center">
                  No Data Found!
                </TableCell>
              </TableRow>
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
      />
    </>
  );
}
