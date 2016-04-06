import conversations from './conversations';
import notifications from './notifications';
import users from './users';
import videos from './videos';
import requests from './requests';

export default function () {
  conversations();
  notifications();
  users();
  videos();
  requests();
}
