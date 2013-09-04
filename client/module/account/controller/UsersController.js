UsersController = RouteController.extend({
    template: 'usersList',

    waitOn: Subscriptions.members,

    data: function () {
        return { users: Meteor.users.find() };
    }
});