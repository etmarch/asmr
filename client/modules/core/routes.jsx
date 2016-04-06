import React from 'react';
import {mount} from 'react-mounter';
import { Accounts } from 'meteor/std:accounts-ui';

import MainLayout from './components/main_layout.jsx';
import Home from './components/home.jsx';


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
}
