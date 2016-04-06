import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import MenuItem from 'material-ui/lib/menus/menu-item';
import LeftNav from 'material-ui/lib/left-nav';
import Divider from 'material-ui/lib/divider';
import Badge from 'material-ui/lib/badge';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import SocialPublic from 'material-ui/lib/svg-icons/social/public';
import ActionAssessment from 'material-ui/lib/svg-icons/action/assessment';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import ActionSettings from 'material-ui/lib/svg-icons/action/settings';
import ActionCardMembership from 'material-ui/lib/svg-icons/action/card-membership';
import ActionExitToApp from 'material-ui/lib/svg-icons/action/exit-to-app';
import IconButton from 'material-ui/lib/icon-button';
import NotificationsIcon from 'material-ui/lib/svg-icons/social/notifications';
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
                style={{backgroundColor: '#27586B'}}
                title='ASMR Calls'
                onTitleTouchTap={FlowRouter.go('/')}
                iconElementRight={<NotificationsBadge />}
                onLeftIconButtonTouchTap={this.handleToggle.bind(this)}/>
          </header>

          <LeftNav
              docked={false}
              width={200}
              open={this.state.open}
              onRequestChange={open => this.setState({open})}
          >
            <AppBar showMenuIconButton={false} title='asmr'/>
            {this.menuItemRender( leftNavMenuItems )}
          </LeftNav>
        </div>
    );
  }
}


const NotificationsBadge = () => (
    <span style={{marginTop: 0}}>
    <Badge
        badgeContent={10}
        primary={true}
        badgeStyle={{top: 12, right: 12, marginTop: 0}}
    >
      <IconButton tooltip="Notifications">
        <NotificationsIcon/>
      </IconButton>
    </Badge>
    </span>
);
