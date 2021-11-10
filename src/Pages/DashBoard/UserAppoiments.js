import React, { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
const UserAppoiments = ({ date }) => {
  const { user } = useAuth();
  const [appoiments, setAppoiments] = React.useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/appoinments?email=${user.email}&date=${date}`)
      .then((res) => res.json())
      .then((data) => {
        setAppoiments(data);
      });
  }, [date]);
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Appoinments</h2>
      <TableContainer component={Paper}>
        <Table sx={{}} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Patient Name</StyledTableCell>
              <StyledTableCell align="center">Time</StyledTableCell>
              <StyledTableCell align="center">Date</StyledTableCell>
              <StyledTableCell align="center">Service</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appoiments.map((appoinment) => (
              <StyledTableRow key={appoinment._id}>
                <StyledTableCell component="th" scope="row">
                  {appoinment.name}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {appoinment.time}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {appoinment.date}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {appoinment.serviceName}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {appoinment.protein}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UserAppoiments;
