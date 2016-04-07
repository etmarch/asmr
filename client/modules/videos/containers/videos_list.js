import VideosList from '../components/videos_list.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ( { context }, onData ) => {
  // console.dir(context);
  const { Meteor, Collections } = context();
  if (Meteor.subscribe('videos.list').ready()) {
    const videos = Collections.Videos.find().fetch();
    onData(null, {videos});
  }
};

export const depsMapper = ( context, actions ) => ({
  context: () => context
});

export default composeAll(
    composeWithTracker( composer ),
    useDeps( depsMapper )
)( VideosList );
