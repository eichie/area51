_.extend(Template.registerForm, {

    /**
     * event mapping
     */
    events: {

        'submit #register-form' : function(event, element) {
            Template.registerForm.register(element);
            return false;
        },

        'click a.google' : function(){
            var self = this;
            Meteor.loginWithGoogle(function(error){
                Template.registerForm.onRegister(error);
            });
        },

        'click a.facebook' : function(){
            var self = this;
            Meteor.loginWithFacebook(function(error){
                Template.registerForm.onRegister(error);
            });
        },

        'click a.twitter' : function(){
            var self = this;
            Meteor.loginWithTwitter(function(error){
                Template.registerForm.onRegister(error);
            });
        }
    },

    /**
     *
     * @param element
     * @returns {boolean}
     */
    register: function(element)
    {
        var self = this;

        /**
         * filter input values
         */
        var username  = Accounts.Filter.trimInput(element.find('#account-username').value);
        var firstname = Accounts.Filter.trimInput(element.find('#account-firstname').value);
        var lastname  = Accounts.Filter.trimInput(element.find('#account-lastname').value);
        var email     = Accounts.Filter.trimInput(element.find('#account-email').value.toLowerCase());
        var password  = element.find('#account-password').value;

        /**
         * validate input values
         */
        var validFirstname = Accounts.Validator.isNotEmpty(firstname);
        var validLastname  = Accounts.Validator.isNotEmpty(lastname);
        var validUsername  = Accounts.Validator.isNotEmpty(username);
        var validEmail     = Accounts.Validator.isEmail(email);
        var validPassword  = Accounts.Validator.isValidPassword(password);

        if (validFirstname && validLastname && validUsername && validEmail && validPassword) {

            Accounts.createUser({
                email: email,
                password : password,
                username: username,
                profile: {
                    firstname: firstname,
                    lastname: lastname
                }
            }, function (error) {
                self.onRegister(error);
            });
        }

        return false;
    },

    /**
     * after login
     *
     * @param err
     */
    onRegister: function (error)
    {
        if (error) {
            Session.set('displayMessage', error.reason);
            return;
        }

        Router.go('home');
        return;
    }
});
