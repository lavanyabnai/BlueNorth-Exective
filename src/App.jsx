import React from 'react';
import { Route, Switch } from 'react-router-dom';

//import Appbar from './components/Appbar';
import Home from './pages/Home';
import DrawerRouterContainer from './components/DrawerRouterContainer';
import Executive from './pages/Executive';
import Operational from './pages/Operational';
import Analysis from './pages/Analysis';
import Scorecard from './pages/Scorecard';
import Tender from './pages/Tender';
import Utilization from './pages/Utilization';
import Ontime from './pages/Ontime';
import Damage from './pages/Damage';





// import Home from './pages/Home';
// import Products from './pages/Products';
// import Storyboard from './pages/appbar/Storyboard'

// import Sales from './pages/appbar/storypages/Sales';
// import Inventory from './pages/appbar/storypages/Inventory';
// import Production from './pages/appbar/storypages/Production';
// import Logistics from './pages/appbar/storypages/Logistics';

function App() {
  
  return (
    <>
    <div>
    
    {/* <Route exact={true} path="logistics" component={AppLogistics} /> */}
      {/* <Route exact={true} path="supplychain" component={AppSupplyChain} />
      <Route exact={true} path="sales" component={AppSales} />
      <Route exact={true} path="production" component={AppProduction} /> */}

        <Switch>
         <DrawerRouterContainer>
          <Route exact={true} path="/" component={Executive} />
          <Route exact={true} path="/operational" component={Operational} />
          <Route exact={true} path="/analysis" component={Analysis} />
          <Route exact={true} path="/scorecard" component={Scorecard} />
          <Route exact={true} path="/tender" component={Tender} />
          <Route exact={true} path="/utilization" component={Utilization} />
          <Route exact={true} path="/ontime" component={Ontime} />
          <Route exact={true} path="/damage"component={Damage} />
          </DrawerRouterContainer>
        </Switch>
     

  </div>
  
{/* <Switch>
  <Route exact={true} path="/home" component={Home} />
  
  <Route exact={true} path="/products" component={Products} />
  <Route exact={true} path="/storyboard" component={Storyboard} />



  <Route  exact={true} path="/storyboard/sales" component={Sales} />
  <Route  exact={true} path="/storyboard/inventory" component={Inventory} />
  <Route  exact={true} path="/storyboard/production" component={Production} />
  <Route  exact={true} path="/storyboard/logistics" component={Logistics} />

  </Switch> */}

  </>
  );
}

export default App;
