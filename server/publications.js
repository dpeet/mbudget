Meteor.publish('BudgetItems', function () {
    var currentUserId = this.userId;
    if (!this.userId) {
        this.ready();
        return;
    }
    return BudgetItems.find({createdBy: currentUserId})
});

Meteor.publish('user_data', function () {
    var currentUserId = this.userId;
    if (!this.userId) {
        this.ready();
        return;
    }
    return User_Data.find({createdBy: currentUserId})
});

Meteor.publish('Transactions', function () {
    var currentUserId = this.userId;
    if (!this.userId) {
        this.ready();
        return;
    }
    return Transactions.find({createdBy: currentUserId})
});