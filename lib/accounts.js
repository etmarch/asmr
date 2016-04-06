import { Accounts } from 'meteor/std:accounts-ui';

Accounts.config({
  sendVerificationEmail: true,
  forbidClientAccountCreation: false
});

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL',
  loginPath: '/login',
  onSignedInHook: () => FlowRouter.go('/'),
  onSignedOutHook: () => FlowRouter.go('/login')
});
