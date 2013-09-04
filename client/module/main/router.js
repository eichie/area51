Router.configure({
    layout: 'layout',
    notFoundTemplate: 'notFound',
    loadingTemplate: 'loading',

    renderTemplates: {
        /* render the templated named footer to the 'footer' yield */
        'navigation': { to: 'navigation', waitOn: false, data: Navigation }
    }
});

Router.map(function () {
    this.route('home', {path: '/'});
});