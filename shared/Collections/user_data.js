User_Data = new Mongo.Collection('user_data');

User_Data.attachSchema(new SimpleSchema({
    createdBy: {
        type: String,
    },
    Account: {
        type: [String],
        optional: true,
        autoform: {
            afFieldInput: {
                type: "text"
            }
        }
    },
    Tags: {
        type: [String],
        optional: true,
        autoform: {
            afFieldInput: {
                type: "text"
            }
        }
    },
}));


if (Meteor.isServer) {
    User_Data.allow({
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

    Meteor.methods({
        addTag: function (label, value) {
            if (value != null) {
                console.log("adding Tag " + label + " " + value);
                User_Data.update({createdBy: Meteor.userId()}, {$push: {Tags: value}})
            }
        },
        removeTag: function (label, value, userID) {
            if (!(value == null)) {
                console.log("removing Tag " + label + " " + value);
                return User_Data.update({createdBy: Meteor.userId()}, {$pull: {Tags: value}})
            }
        },
        addAccount: function (label, value) {

            if (value != null) {
                console.log("adding Account " + label + " " + value);
                User_Data.update({createdBy: Meteor.userId()}, {$push: {Account: value}})
            }
        },
        removeAccount: function (label, value, userID) {
            if (!(value == null)) {
                console.log("removing Account " + label + " " + value);
                return User_Data.update({createdBy: Meteor.userId()}, {$pull: {Account: value}})
            }
        }
    })
}
if (Meteor.isClient) {
    Ground.Collection(User_Data);
}
