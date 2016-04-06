import React from 'react';
import AppCanvas from 'material-ui/lib/app-canvas';
import Paper from 'material-ui/lib/paper';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import themeDecorator from 'material-ui/lib/styles/theme-decorator';
import Colors from 'material-ui/lib/styles/colors';
import Header from './header.jsx';
import Footer from './footer.jsx';


const muiTheme = getMuiTheme( {
  canvasColor : Colors.grey200,
  primary1Color: '#A0BBC6'
} );


const Layout = ( { content = () => null } ) => (


    <AppCanvas>

        <Header />

        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12">
              <div className="box">
                <main role="main" className="main-content">
                  <Paper>
                    {content()}
                  </Paper>
                </main>
              </div>
            </div>
          </div>
        </div>
        <Footer />
    </AppCanvas>
);

export default themeDecorator( muiTheme )( Layout );
