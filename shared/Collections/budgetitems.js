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
    Name:{
        type:String,
    },
    Type:{
        type:String,
        autoform: {
            options: function () {
                return [
                    {label: "Income", value: "Income"},
                    {label: "Expense", value: "Expense"}
                ];
            }
        }
    },

    Tags: {
        type: [String],
        optional: true,
        autoform: {
            type: "select2",
            options: function () {
                var tagsArray = User_Data.findOne(Meteor.userId, {fields: {Tags: 1}})["Tags"]
                return tagsArray.map(function (d) {
                    return {label: d, value: d};
                });
            },
            afFieldInput: {
                multiple: true,
                select2Options: {
                    // data:function () {
                    //     return titles_mapped
                    // },
                    tags: true
                    //TODO need to be able to add more tags somehow
                }
            },
        }
    },
    
    Notes:{
        type:String,
        optional:true,
    },
    Amount:{
        type:Number,
        decimal: true,
        defaultValue: 0,
    },
    //TODO Calculated Stuff
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
