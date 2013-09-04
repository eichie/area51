RegisterController = RouteController.extend({
    template: 'registerForm',
    waitOn: false,

    prepareAction: function() {
        if(Meteor.userId() === null) {
            this.run();
        } else {
            Router.go('home');
        }
    }
});