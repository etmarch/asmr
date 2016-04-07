import Videos from '/lib/collections/videos';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  //console.dir(Collections);
  console.dir(Videos);
  Meteor.publish('videos.single', function (videosId) {
    return Videos.find(videosId);
  });

  Meteor.publish('videos.list', function () {
    check(this.userId, String);
    const selector = {};
    const options = {
      //fields: {updatedAt: 0},
      sort: {createdAt: -1},
      limit: 10
    };

    return Videos.find(selector, options);
  });


}
