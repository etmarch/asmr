import Colls from '../../lib/collections/index';
import {Accounts} from 'meteor/std:accounts-ui';

const users = [
  { name: 'admin', email: 'admin@admin.com', roles: [ 'admin' ], pw: 'admin1' },
  { name: 'artist', email: 'artist@artist.com', roles: [ 'artist' ], pw: 'artist1' },
  { name: 'member', email: 'member@member.com', roles: [ 'member' ], pw: 'member1' }
];


function getRandomInt( min, max ) {
  return Math.floor( Math.random() * (max - min) ) + min;
}

export default function () {

  let userCount = Meteor.users.find().count();

  if ( userCount < 1 ) {
    _.each(
        users, function ( user ) {
          let id;

          id = Accounts.createUser(
              {
                email: user.email,
                password: user.pw,
                username: user.name
              }
          );

          Roles.addUsersToRoles( id, user.roles, Roles.GLOBAL_GROUP );

          for ( let i = 0; i < 3; i++ ) {
            const notifyData = {
              title: 'Video ' + i + ' for ' + Date.now(),
              link: '/my-notifications',
              ownerId: id,
              className: 'centered',
              createdAt: new Date(),
              isRead: false
            };

            Colls.Notifications.insert( notifyData, ( err, res ) => {
              if ( err ) {
                console.log( "error doing initial report inserts", err.reason );
              } else {
                console.log( "Created! " + res );
              }

            } );

            let videoData = {
              title: 'Video ' + i + ' for ' + new Date(),
              ownerId: id,
              s3Url: '/public/sample_vids/vid' + i + '.mp4',
              playCount: getRandomInt( 5, 50 )
            };


            Colls.Videos.insert( videoData, ( err, res ) => {
              if ( err ) {
                console.log( "error doing initial report inserts", err.reason );
              } else {
                console.log( "Created! " + res );
              }

            } );
          }

        }
    );
  }


  if ( userCount > 1 && userCount < 5 ) {
    for ( let j = 0; j < 3; j++ ) {
      // Add 'client' users and store the id
      let id = Accounts.createUser(
          {
            email: 'client' + j + '@client.com',
            password: 'client' + j,
            username: 'client' + j
          }
      );
      if ( Boolean( id ) ) {
        for ( let k = 0; k < 3; k++ ) {

          let videoData = {
            title: 'Video ' + k + ' for ' + new Date(),
            ownerId: id,
            likes: 0,
            likers: [],
            s3Url: '../public/sample_vids/vid' + k + '.mp4',
            playCount: getRandomInt( 5, 50 )
          };


          Colls.Videos.insert( videoData, ( err, res ) => {
            if ( err ) {
              console.log( "error doing initial report inserts", err.reason );
            } else {
              console.log( "Created! " + res );
            }

          } );
        }
      }
    }
  }
}
