Accounts.Validator = {

    isEmail: function (val) {
        if (val.indexOf('@') !== -1) {
            return true;
        } else {
            Session.set('displayMessage', 'Please enter a valid email address.');
            return false;
        }
    },

    isValidPassword: function (val) {

        if (val.length >= 6) {
            return true;
        } else {
            Session.set('displayMessage', 'Your password should be 6 characters or longer.');
            return false;
        }
    },

    isNotEmpty: function (val)
    {
        if (!val || val === '') {
            Session.set('displayMessage', 'Please fill in all required fields.');
            return false;
        }
        return true;
    }
};


