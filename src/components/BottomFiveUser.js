import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Order2 from '../files/Order2'

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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 400,
    maxWidth:1200,
    marginBottom:50,
    marginLeft:50,
    marginRight:50,
  },
  tab:{
      width:'100%',
      textAlign: 'center',
      display: 'flex',
      flexWrap:'wrap',
      justifyContent: 'center'

  }
});

export default function BottomFiveUser({items}) {
  const classes = useStyles();
  let Orderkeys = Order2.map((item) => Object.keys(item)).slice(0,1)



//   console.log(Orderkeys);

const TopFive=Order2.sort((a,b)=>b.UserName.localeCompare(a.UserName)).slice(0,5)
// console.log(TopFive);


 

  return (
    <TableContainer component={Paper} className={classes.tab} >
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
              {/* { Orderkeys.map((i,index) => <StyledTableCell align="right" key={index}> {i} </StyledTableCell>
            )} */}

           
            <StyledTableCell align="center">{Orderkeys[0][3]}</StyledTableCell>
            <StyledTableCell align="center">{Orderkeys[0][1]}</StyledTableCell>
            <StyledTableCell align="center">{Orderkeys[0][2]}</StyledTableCell>
            <StyledTableCell align="center">{Orderkeys[0][4]}</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {TopFive?.map(k => {
                  
                  return <StyledTableRow key={k.id}>
                        <StyledTableCell align="center">
                          {k.UserName}
                        </StyledTableCell>
                        <StyledTableCell align="center">{k.TotalAmount}</StyledTableCell>
                        <StyledTableCell align="center">{k.TotalQuantity}</StyledTableCell>
                        <StyledTableCell align="center">{k.city}</StyledTableCell>
                       
                      </StyledTableRow> }
            )}
            
        </TableBody>
      </Table>
    </TableContainer>
  );
}