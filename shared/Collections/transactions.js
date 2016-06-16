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
    Card:{  //TODO think about how to do this
        type:String,
        label: "Card*"
    },
    TransactionDate: {
        type: Date,
        label: "Date*",
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
        label: "Date*",
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
    Description:{
        type:String,
        label: "Description*"
    },
    Cost:{
        type:Number,
        decimal: true,
        defaultValue: 0,
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
