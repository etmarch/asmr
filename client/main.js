import {createApp} from 'mantra-core';
import initContext from './configs/context';

// modules
import coreModule from './modules/core';
import requestsModule from './modules/requests';
import videosModule from './modules/videos';
import usersModule from './modules/users';
import notificationsModule from './modules/notifications';
import conversationsModule from './modules/conversations';

// MUI Fix
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(requestsModule);
app.loadModule(videosModule);
app.loadModule(usersModule);
app.loadModule(notificationsModule);
app.loadModule(conversationsModule);
app.init();
