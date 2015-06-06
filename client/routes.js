Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.route('/', function () {
  this.render('login');
});
Router.route('/login', function () {
  this.render('login');
});
