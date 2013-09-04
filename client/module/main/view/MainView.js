_.extend(Template.layout, {

    events: {
        'click .logout' : function() {
            Meteor.logout();
            Router.go('login');
            return false;
        }
    }
});
