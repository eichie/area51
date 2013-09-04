LoginController = RouteController.extend({
    template: 'loginForm',
    waitOn: false,

    prepareAction: function() {
        if(Meteor.userId() === null) {
            this.run();
        } else {
            Router.go('home');
        }
    }
});