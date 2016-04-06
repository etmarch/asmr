import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import VideosList from '../components/videos_list.jsx';

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
)(VideosList);
