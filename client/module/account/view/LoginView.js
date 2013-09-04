_.extend(Template.loginForm, {

    /**
     * event mapping
     */
    events: {
        'submit #login-form': function(event, element) {
            event.preventDefault();
            Template.loginForm.login(element);
        },

        'click a.google' : function(){
            var self = this;
            Meteor.loginWithGoogle(function(error){
                self.onLogin(err);
            });
        },

        'click a.facebook' : function(){
            var self = this;
            Meteor.loginWithFacebook(function(error){
                self.onLogin(err);
            });
        },

        'click a.twitter' : function(){
            var self = this;
            Meteor.loginWithTwitter(function(error){
                self.onLogin(err);
            });
        }
    },

    /**
     * login handler
     *
     * @param element
     * @returns {boolean}
     */
    login: function(element)
    {
        var self = this;

        /**
         * filter input values
         */
        var username = Accounts.Filter.trimInput(element.find('#login-username').value.toLowerCase());
        var password = element.find('#login-password').value;

        /**
         * validate input values
         */
        var validUsername = Accounts.Validator.isNotEmpty(username);
        var validPassword = Accounts.Validator.isValidPassword(password);

        if (validUsername && validPassword) {
            Meteor.loginWithPassword(username, password, function (error) {
                self.onLogin(error);
            });
        }

        return false;
    },

    /**
     * after login
     *
     * @param err
     */
    onLogin: function (error)
    {
        if (error) {
            Session.set('displayMessage', error.reason);
            return;
        }

        Router.go('home');
        return;
    }
});
