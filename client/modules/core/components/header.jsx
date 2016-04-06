import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import MenuItem from 'material-ui/lib/menus/menu-item';
import LeftNav from 'material-ui/lib/left-nav';
import Divider from 'material-ui/lib/divider';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import SocialPublic from 'material-ui/lib/svg-icons/social/public';
import ActionAssessment from 'material-ui/lib/svg-icons/action/assessment';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import ActionSettings from 'material-ui/lib/svg-icons/action/settings';
import ActionCardMembership from 'material-ui/lib/svg-icons/action/card-membership';
import ActionExitToApp from 'material-ui/lib/svg-icons/action/exit-to-app';
import IconButton from 'material-ui/lib/icon-button';
import MapsTerrain from 'material-ui/lib/svg-icons/maps/terrain';

// Array of menu elements for leftNav
const leftNavMenuItems = [
  { url : '/dashboard', text : 'Dashboard', icon : <SocialPublic /> },
  { url : '/admin/invite', text : 'Invite New Client', icon : <ActionAssessment /> },
  { url : '/logout', text : 'Sign Out', icon : <ActionExitToApp /> }
];

export default class Header extends React.Component {
  // ToDo: Place all state stuff in actions
  constructor( props ) {
    super( props );
    this.state = { open : false, name : null };
  }

  handleToggle() {
    this.setState( { open : !this.state.open } );
  }

  handleClose() {
    this.setState( { open : false } );
  }

  componentDidMount() {
    console.log( JSON.stringify( this.props ) + ' ' + this );
  }


  menuItemRender( menuItems ) {
    return (
        <div>
          {menuItems.map( ( menuItem, index ) => {
                return (
                    <div key={`menuItem-${ index }` }>
                      <MenuItem
                          containerElement={<a href={menuItem.url} />}
                          primaryText={menuItem.text}
                          leftIcon={menuItem.icon}
                          onTouchTap={this.handleClose.bind(this)}
                      />
                      <Divider />
                    </div>
                );
              }
          )}
        </div>
    );
  }

  render() {
    return (
        <div>
          <header>
            <AppBar
                title={<h3 className="app-title display-1 mdl-color-text--white-600">ASMR Calls</h3>}
                onTitleTouchTap={FlowRouter.go('/')}
                iconElementRight={<IconButton tooltip='Future place of Notification Badge'><MoreVertIcon /></IconButton>}
                onLeftIconButtonTouchTap={this.handleToggle.bind(this)}>
            </AppBar>
          </header>

          <LeftNav
              docked={false}
              width={200}
              open={this.state.open}
              onRequestChange={open => this.setState({open})}
          >
            <AppBar showMenuIconButton={false} title="ASMR CALLS"/>
            {this.menuItemRender( leftNavMenuItems )}
          </LeftNav>

        </div>
    );
  }
}
