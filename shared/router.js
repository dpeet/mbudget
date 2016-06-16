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

Router.route('/insert_budget_item', {
    name: 'insertBudgetItem',
    controller: 'BudgetItemController',
    action: 'insert',
    where: 'client'
});

Router.route('budget_list', {
    name: 'budgetList',
    controller: 'BudgetItemController',
    action: 'list',
    where: 'client'
});

Router.route('/edit_budget_item/:_id', {
    name: 'editBudgetItem',
    controller: 'BudgetItemController',
    action: 'edit',
    where: 'client'
});



Router.route('/transactions', {
    name: 'viewTransactions',
    controller: 'TransactionController',
    action: 'list',
    where: 'client'
});

Router.route('/account', {
    name: 'account_settings',
    controller: 'AccountController',
    action: 'edit_settings',
    where: 'client'
});


Router.route('/v', {
    name: 'version',
    controller: 'VersionController',
    action: 'version',
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