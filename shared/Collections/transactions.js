Transactions = new Mongo.Collection('transactions');

Transactions.attachSchema(new SimpleSchema({
    createdBy: {
        type: String,
        autoValue: function () {
            return this.userId
        },
        autoform: {
            omit: true
        }
    },
    Account:{  //TODO think about how to do this
        type:String,
        label: "Account*",
        autoform: {
            type: "typeahead",
            options: function () {
                var cardsArray = User_Data.findOne(Meteor.userId, {fields: {Cards: 1}})["Cards"]
                return cardsArray.map(function (d) {
                    return {label: d, value: d};
                });
            },
        }
    },
    TransactionDate: {
        type: Date,
        label: "Transaction Date*",
        autoValue: function() {
            if(this.isSet){
                return this.value;
            } else {
                return new Date();
            }
        },
        autoform: {
            afFieldInput: {
                type: "bootstrap-datepicker"
            }
        }
    },
    EffectiveDate: {
        type: Date,
        label: "Effective Date",
        optional:true,
        autoform: {
            afFieldInput: {
                type: "bootstrap-datepicker"
            }
        }
    },
    Description:{
        type:String,
        label: "Description*"
    },
    Cost:{
        type:Number,
        decimal: true,
        defaultValue: 0,
    },
    Category:{
        type:String,
        optional:true,
        autoform: {
            type: "typeahead",
            options: function () {
                let budgetArray = [];
                for(let item of BudgetItems.find().fetch()){
                    budgetArray.push(item.Name)
                }
                return budgetArray.map(function (d) {
                    return {label: d, value: d};
                });
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
    //TODO Insert Schemas
}));

if (Meteor.isServer){
    Transactions.allow({
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
    Ground.Collection(Transactions);
}
