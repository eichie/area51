Navigation = {
    displayName: function(){
        var user = Meteor.user();
        return (user.profile && user.profile.name) || user.username || (user.emails && user.emails[0] && user.emails[0].address);
    }
};


