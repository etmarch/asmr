import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import MyNotifications from '../components/my_notifications.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(MyNotifications);
