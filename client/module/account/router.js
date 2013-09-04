

Router.map(function () {
    this.route('login', {
        path: '/login',
        controller: 'LoginController',
        action: 'prepareAction'
    });

    this.route('register', {
        path: '/register',
        controller: 'RegisterController',
        action: 'prepareAction'
    });

    this.route('reset', {
        path: '/reset',
        controller: 'ResetController'
    });

    this.route('member', {
        path: '/users',
        controller: 'UsersController'
    });
});