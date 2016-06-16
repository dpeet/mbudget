Meteor.startup(function () {
    if (Meteor.isCordova) {
        Meteor.subscribe("budgetItem");
    }
});