

Meteor.autorun(function() {

    // Whenever this session variable changes, run this function.
    var message = Session.get('displayMessage');
    if (message) {
        $(".alert").alert();
        $('#alert').append(message).show();
        Session.set('displayMessage', null);
    }
});