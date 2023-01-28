import * as React from 'react';
import { Avatar, AppBar, AppBarSection, AppBarSpacer } from '@progress/kendo-react-layout';
//import { Popup } from '@progress/kendo-react-popup'
import {Menu, MenuItem} from '@progress/kendo-react-layout';
import logo from  '../assets/logo-white.png';

import '../style.css';





const Appbar = (props) => {

  const onSelect = event => {
    props.history.push(event.item.data.route);
  };

  //const [show, setShow] = React.useState(false);
  //const anchor = React.useRef(null);
  //const handleClick = () => {
   // this.setState((e) => ({expanded: !e.expanded}));
//}
  
const { onButtonClick } = props;

  return ( 
    
       <AppBar>
           <div className="menu-button p-1">
                    <span className={'k-icon k-i-menu'} onClick={onButtonClick}/>
                </div> 

                

          <AppBarSection className="title">
          <img className="h-5 flex content-center align-middle my-2 ml-4" src={logo} alt="logo"/>
          </AppBarSection>

          <AppBarSpacer style={{
        width: 40
      }} />
       <AppBarSpacer />  

<AppBarSection >

<Menu onSelect={onSelect}>

<MenuItem text="Storyboard" data={{
  route: '/storyboard'
}}>
    <MenuItem text="Sales" data={{
    route: '/storyboard/sales'
  }} />
  
  <MenuItem text="Inventory" data={{
    route: '/storyboard/inventory'
  }} /> 

  <MenuItem text="Production" data={{
    route: '/storyboard/production'
  }} />
  
  <MenuItem text="Logistics" data={{
    route: '/storyboard/logistics'
  }} />
  </MenuItem>

<MenuItem text="Analyze" data={{
  route: '/analyze'
}} />

<MenuItem text="Optimize" data={{
  route: '/optimize'
}} />


  <MenuItem text="Actions" data={{
  route: '/actions'
}} />

</Menu>
       
       </AppBarSection> 
         


       <AppBarSpacer style={{
        width: 32
      }} />
       <AppBarSpacer />



          
          <AppBarSection>
            <button className="k-button k-button-md k-rounded-md k-button-flat k-button-flat-base overflow-button" >
            <span className="k-icon k-i-menu" />
            </button>
    
            <Avatar type="icon" size='medium' border={true} >
              <span className='k-icon k-i-user' />
            </Avatar>
          </AppBarSection>
        </AppBar>

  );
        
        }


export default Appbar;
