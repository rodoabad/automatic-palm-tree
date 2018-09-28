/* eslint-disable */
import AppBar from '@material-ui/core/AppBar';
import Home from '@material-ui/icons/Home';
import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export class Navigation extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: 0
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, value) {
    this.setState({value});
  };

  render() {
    const {value} = this.state;

    return (
      <div className={this.props.className}>
        <AppBar position="static">
          <Tabs

            onChange={this.handleChange}
            value={value}
          >
            <Tab
              disableRipple={true}
              disableTouchRipple={true}
              component={Link}
              icon={<Home />}
              to='/'
            />
            <Tab
              disableRipple={true}
              disableTouchRipple={true}
              component={Link}
              label='Anonymous'
              to='/anonymous'
            />
            <Tab
              disableRipple={true}
              disableTouchRipple={true}
              component={Link}
              label='Restricted A'
              to='/restricted-a'
            />
            <Tab
              disableRipple={true}
              disableTouchRipple={true}
              component={Link}
              label='Restricted B'
              to='/restricted-b'
            />
          </Tabs>
        </AppBar>
      </div>
    )
  }
}
