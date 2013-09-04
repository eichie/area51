
Meteor.startup(function () {
    // code to run on server at startup
});

var Future = Npm.require('fibers/future');

Meteor.publish('members', function () {
    var future = new Future;

    // simulate high latency publish function
    Meteor.setTimeout(function () {
        future.return(Meteor.users.find());
    }, 2000);

    return future.wait();
});