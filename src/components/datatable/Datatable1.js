// Datatable using MUI

import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import ToggleSwitch from "../toggleSwitch/ToggleSwitch";
import ViewButton from "../viewButton/ViewButton";

function createData(
  adminID,
  creationDate,
  adminName,
  assignedDoctors,
  assignedCount,
  patientsHandled,
  accStatus
) {
  return {
    adminID,
    creationDate,
    adminName,
    assignedDoctors,
    assignedCount,
    patientsHandled,
    accStatus,
  };
}

const columns = [
  { id: "adminID", label: "Admin ID", minWidth: 120 },
  { id: "creationDate", label: "Creation Date", minWidth: 100 },
  { id: "adminName", label: "Health Admin Name", minWidth: 170 },
  { id: "assignedDoctors", label: "Assigned Doctors", minWidth: 200 },
  {
    id: "assignedCount",
    label: "Assigned Doctors",
    minWidth: 120,
    align: "right",
  },
  {
    id: "patientsHandled",
    label: "Patients Handled",
    minWidth: 150,
    align: "right",
  },
  {
    id: "accStatus",
    label: "Acc Status",
    minWidth: 100,
    align: "center",
    format: (value) => <ToggleSwitch checked={value} />,
  },
  {
    id: "action",
    label: "Action",
    minWidth: 100,
    align: "center",
    format: () => <ViewButton />,
  },
];

const rows = [
  createData(
    "AYUSH123",
    "02/02/23",
    "Health Admin Name",
    "Doctor Name 1, Doctor Name 2, Doctor Name 3",
    5,
    50,
    true
  ),
  createData(
    "AYUSH123",
    "02/02/23",
    "Health Admin Name",
    "Doctor Name 1, Doctor Name 2, Doctor Name 3",
    5,
    44,
    false
  ),
  // Add more rows as needed...
];

export default function DatatableCus() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleActionClick = (adminID) => {
    console.log("View action for:", adminID);
    // You can define additional logic here based on adminID
  };

  return (
    <div className="max-w-[98vw] sm:max-w-full">
      <TableContainer
        sx={{ maxHeight: 440, maxWidth: "100%"}}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.adminID}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format ? column.format(value) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}
