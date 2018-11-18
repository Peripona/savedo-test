import timeAgo from 'timeago.js';

const timeAgoInstance = new timeAgo();

export const meaningFullTime = dateTime => timeAgoInstance.format(dateTime);
