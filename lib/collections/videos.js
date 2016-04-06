import {Mongo} from 'meteor/mongo';


const Videos = new Mongo.Collection( 'videos' );


Videos.attachSchema( new SimpleSchema( {
  title: {
    type: String,
    label: "Title",
    max: 60,
    min: 1
  },
  ownerId: {
    type: String,
    label: "Owner Id",
    optional: true,
    regEx: SimpleSchema.RegEx.Id
  },
  createdAt: {
    type: Date,
    label: "Published On",
    optional: true,
    denyUpdate: true,
    autoValue: function () {
      if ( this.isInsert ) {
        return new Date;
      } else if ( this.isUpsert ) {
        return { $setOnInsert: new Date };
      } else {
        this.unset();
      }
    }
  },
  updatedAt: {
    type: Date,
    optional: true,
    autoValue: function () {
      if ( this.isUpdate ) {
        return new Date();
      }
    }
  },
  likes: {
    type: Number,
    label: "Likes",
    optional: true,
    defaultValue: 0
  },
  likers: {
    type: [ String ],
    optional: true,
    defaultValue: []
  },
  tagIds: { // Ids relating to tags
    type: [ String ],
    optional: true,
    defaultValue: []
  },
  isYT: {
    type: Boolean,
    optional: true
  },
  youtubeUrl: { // make this conditional in the future
    type: String,
    optional: true,
    regEx: SimpleSchema.RegEx.Url
  },
  youTubeId: {
    type: String,
    optional: true
  },
  s3Url: {
    type: String,
    optional: true

  },
  comments: { // holds ids to comment docs
    type: [ String ],
    optional: true,
    defaultValue: []
  },
  playCount: {
    type: Number,
    optional: true,
    defaultValue: 0
  }
} ) );

export default Videos;