Router.configure({
    layoutTemplate: 'MasterLayout',
    loadingTemplate: 'Loading',
    notFoundTemplate: 'NotFound'
});

Router.route('/', {
    name: 'home',
    controller: 'HomeController',
    action: 'action',
    where: 'client'
});

Router.route('/budget', {
    name: 'viewBudget',
    controller: 'BudgetItemController',
    action: 'list',
    where: 'client'
});

Router.route('/transactions', {
    name: 'viewTransactions',
    controller: 'TransactionController',
    action: 'list',
    where: 'client'
});


Router.onBeforeAction(function() {
    if (!Meteor.user()) {
        this.render('AccessDenied');
    } else
    {
        this.next();
    }
}, {only: ['viewBudget', 'viewTransactions']});