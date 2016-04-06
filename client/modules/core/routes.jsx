import React from 'react';
import {mount} from 'react-mounter';
import { Accounts } from 'meteor/std:accounts-ui';

import MainLayout from './components/main_layout.jsx';
import Home from './components/home.jsx';
import NewVideo from '../videos/containers/new_video';
import SingleVideo from '../videos/containers/single_video';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'home',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Home />)
      });
    }
  });

  FlowRouter.route('/login', {
    name: 'login',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Accounts.ui.LoginForm />)
      });
    }
  });

  FlowRouter.route('/logout', {
    name: 'logout',
    action() {
      // Accounts.logout();
      Meteor.logout(() => {
        FlowRouter.go('/login');
      });
    }
  });

  FlowRouter.route('/new-video', {
    name: 'new-video',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NewVideo />)
      });
    }
  });

  FlowRouter.route('/videos/:videoId', {
    name: 'single-video',
    action({videoId}) {
      mount(MainLayoutCtx, {
        content: () => (<SingleVideo videoId={videoId} />)
      });
    }
  });





}
