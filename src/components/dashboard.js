import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useNavigate, createSearchParams } from 'react-router-dom/dist';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(rollNo, name, percentage, enrollId) {
  return { rollNo, name, percentage, enrollId };
}

const rows = [
  createData(1, 'Bhawna Mussady', '73%', 184845849),
  createData(2, 'Aditya Mussady', '75%', 45895004),
  createData(3, 'Manas Singh', '89%', 984594554),
  createData(4, 'Ravi Agrawal', '96%', 549369666),
  createData(5, 'Aman Kumar', '73%', 389848585),
  createData(6, 'Anurag Singh', '75%', 754899686),
  createData(7, 'Anjali Sinha', '89%', 59850544),
  createData(8, 'Vishu Patel', '96%', 94058046),
  createData(9, 'Akash Vemra', '89%', 129496982),
  createData(10, 'Abhinav Sharma', '96%', 485498654)
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function BasicTable() {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Roll No.</StyledTableCell>
            <StyledTableCell align="center">Student's Name</StyledTableCell>
            <StyledTableCell align="center">Percentage</StyledTableCell>
            <StyledTableCell align="center">Enrollment Id</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name} onClick={()=> navigate({pathname:'/calendar', search: createSearchParams({name: row.name}).toString()})}>
              <StyledTableCell align="center" component="th" scope="row">
                {row.rollNo}
              </StyledTableCell>
              <StyledTableCell align="center">{row.name}</StyledTableCell>
              <StyledTableCell align="center">{row.percentage}</StyledTableCell>
              <StyledTableCell align="center">{row.enrollId}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
