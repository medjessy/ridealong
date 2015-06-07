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
Router.route('/home', function () {
  this.render('home');
});
Router.route('/wantride', function () {
  this.render('wantride');
});
Router.route('/giveride', function () {
  this.render('giveride');
});
