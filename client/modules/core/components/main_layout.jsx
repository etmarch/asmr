import React from 'react';
import AppCanvas from 'material-ui/lib/app-canvas';
import Paper from 'material-ui/lib/paper';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import themeDecorator from 'material-ui/lib/styles/theme-decorator';
import Colors from 'material-ui/lib/styles/colors';
import Header from './header.jsx';
import Footer from './footer.jsx';


const muiTheme = getMuiTheme( {
  canvasColor : Colors.grey200
} );


const Layout = ( { content = () => null } ) => (


    <AppCanvas>
  <div>
      <Header />

      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12">
            <div className="box">
              <Paper>
                {content()}
              </Paper>

            </div>
          </div>
        </div>
      </div>
      <Footer /></div>
    </AppCanvas>
);

export default themeDecorator( muiTheme )( Layout );
