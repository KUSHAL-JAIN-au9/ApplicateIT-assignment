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

export default function BottomFiveOrder({items}) {
  const classes = useStyles();
  let Orderkeys = Order2.map((item) => Object.keys(item))



//   console.log(Orderkeys);

const BottomFive=Order2.sort((a,b) => Number(b.TotalAmount)- Number(a.TotalAmount)).slice(0,5)
// console.log(BottomFive);

 

  return (
    <TableContainer component={Paper} className={classes.tab} >
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
              {/* { Orderkeys.map((i,index) => <StyledTableCell align="right" key={index}> {i} </StyledTableCell>
            )} */}

           
            <StyledTableCell align="center">{Orderkeys[0][0]}</StyledTableCell>
            <StyledTableCell align="center">{Orderkeys[0][1]}</StyledTableCell>
            <StyledTableCell align="center">{Orderkeys[0][2]}</StyledTableCell>
            <StyledTableCell align="center">{Orderkeys[0][3]}</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {BottomFive?.map(k => {
                  
                  return <StyledTableRow key={k.id}>
                        <StyledTableCell align="center">
                          {k.OrderNo}
                        </StyledTableCell>
                        <StyledTableCell align="center">{k.TotalAmount}</StyledTableCell>
                        <StyledTableCell align="center">{k.TotalQuantity}</StyledTableCell>
                        <StyledTableCell align="center">{k.UserName}</StyledTableCell>
                       
                      </StyledTableRow> }
            )}
            
        </TableBody>
      </Table>
    </TableContainer>
  );
}