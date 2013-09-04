

if (Meteor.isClient) {
Subscriptions = {
    members: Meteor.subscribe('members')
};
}