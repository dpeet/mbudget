BudgetItems = new Mongo.Collection('budgetItem');

BudgetItems.attachSchema(new SimpleSchema({
    createdBy: {
        type: String,
        autoValue: function () {
            return this.userId
        },
        autoform: {
            omit: true
        }
    },
    //TODO Insert Schemas
}));

if (Meteor.isServer){
    BudgetItems.allow({
        insert: function (userId, doc) {
            return true;
        },
        update: function (userId, doc, fieldNames, modifier) {
            return true;
        },
        remove: function (userId, doc) {
            return true;
        }
    });
}

if (Meteor.isClient) {
    Ground.Collection(BudgetItems);
    Ground.Collection(Meteor.users);
}
