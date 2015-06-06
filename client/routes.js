Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.route('/', function () {
  this.render('home');
});

Router.route('/login', function () {
  this.render('login');
});
Router.route('/register', function () {
  this.render('register');
});
