
import './App.css';
import BottomFiveOrder from './components/BottomFiveOrder';
import BottomFiveUser from './components/BottomFiveUser';
import ChartLine from './components/ChartLine';
import DetailOrder from './components/DetailOrder';
import TilePage from './components/Tilepage';
import TopFiveOrder from './components/TopFiveOrder';
import TopFiveUser from './components/TopFiveUser';

import Order from './files/order'
import Order2 from './files/Order2'


function App() {

  const keys =Object.keys(Order)
  const values = Object.values(Order)

  const TopFive=Order2.sort((a,b)=>Number(a.TotalAmount)- Number(b.TotalAmount) ).slice(0,5)
  // console.log(TopFive);

  const BottomFive=Order2.sort((a,b) => Number(b.TotalAmount)- Number(a.TotalAmount)).slice(0,5)
  console.log(BottomFive);


  return (
    <div className="App">

      <div className="Tiles">
        <TilePage 
        row1={keys[0]} 
        row2={keys[1]}
        value1={values[0]} 
        value2={values[1]}
        />

        <TilePage
        row1={keys[2]} 
        row2={keys[3]}
        value1={values[2]} 
        value2={values[3]}
          />

        <TilePage
        row1={keys[4]} 
        row2={keys[5]}
        value1={values[4]} 
        value2={values[5]}
          />

        <TilePage
        row1={keys[6]} 
        row2={keys[7]}
        value1={values[6]} 
        value2={values[7]}
          />

        </div>


        <h2 style={{textAlign: 'center'}}> <u>Line Chart</u></h2>

        <ChartLine />
        
        
        
        <h2 style={{textAlign: 'center'}}><u>Top 5 Order Tables(ascending)</u></h2> 
            <TopFiveOrder />

            <h2 style={{textAlign: 'center'}}> <u>Bottom 5 Order Tables</u>(descending)</h2>
            
      
            <BottomFiveOrder    />

            <h2 style={{textAlign: 'center'}}> <u>Top 5 User Tables</u>(ascending)</h2> 
            <TopFiveUser  />

            <h2 style={{textAlign: 'center'}}> <u>Bottom 5 User Tables</u>(descending)</h2> 
            <BottomFiveUser />

            <h2 style={{textAlign: 'center'}}> <u>Detail Order Report </u> </h2>
            <DetailOrder />

       
    </div>
  );
}

export default App;
