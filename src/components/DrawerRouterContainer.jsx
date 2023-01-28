import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { Drawer, DrawerContent } from '@progress/kendo-react-layout';

import Appbar from './Appbar.jsx';



const items = [
   { text: 'Executive Overview', icon: 'k-i-toggle-full-screen-mode', selected: true, route: '/'},
   { text: 'Operational Overview', icon: 'k-i-gear',route: '/operational'},
   { text: 'Carriers Analysis',icon: 'k-i-stumble-upon',route: '/analysis'},  
   { text: 'Performance Scorecard', icon: 'k-i-file-txt', route: '/scorecard'},
   { text: 'Tender Acceptance',icon: 'k-i-user',route: '/tender'},  
   { text: 'Carriers Utilization', icon: 'k-i-style-builder', route: '/utilization'},
   { text: 'On Time Delivery',icon: 'k-i-clock',route: '/ontime'},  
   { text: 'Damage - Matrix', icon: 'k-i-align-top-element', route: '/damage'},
   
 ];


 class DrawerRouterContainer extends React.Component {
    state = {
        expanded: false,
        selectedId: items.findIndex(x => x.selected === true),
        isSmallerScreen: window.innerWidth < 768
    }

    resizeWindow = () => {
        this.setState({ isSmallerScreen: window.innerWidth < 768 })
    }

    handleClick = () => {
        this.setState((e) => ({expanded: !e.expanded}));
    }

    handleSelect = (e) => {
        this.setState({selectedId: e.itemIndex, expanded: false});
        this.props.history.push(e.itemTarget.props.route);
    }

    getSelectedItem = (pathName) => {
        let currentPath = items.find(item => item.route === pathName);
        if (currentPath.name) {
            return currentPath.name;
        }
    }

    componentDidUpdate() {
        try {       
            const parent = window.parent;
            if(parent) {
                parent.postMessage({ url: this.props.location.pathname, demo: true }, "*")
            }
        } catch(err) {
            console.warn('Cannot access iframe')
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.resizeWindow, false)
        this.resizeWindow();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resizeWindow)
    }


    render() {
      let selected = this.getSelectedItem(this.props.location.pathname);
      


    return (
      <React.Fragment>
          <Appbar
              onButtonClick={this.handleClick}   
          />
          
          <Drawer
              expanded={this.state.expanded}
              animation={{duration: 100}}
              items={items.map((item, index) => ({
                          ...item,
                          
                          selected: index === selected
                      }))
              }
              position='start'
              mode={this.state.isSmallerScreen ? 'overlay' : 'push'}
              mini={this.state.isSmallerScreen ? false : true}

              onOverlayClick={this.handleClick}
              onSelect={this.handleSelect}
          >
              <DrawerContent style={{height: 1066}}>
                  {this.props.children}
              </DrawerContent>
          </Drawer>

      </React.Fragment>
  );

 };

   
 };
 export default withRouter(DrawerRouterContainer);