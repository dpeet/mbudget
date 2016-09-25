User_Data = new Mongo.Collection('user_data');

User_Data.attachSchema(new SimpleSchema({
    createdBy: {
        type: String,
    },
    Cards: {
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
                console.log("removing location " + label + " " + value);
                return User_Data.update({createdBy: Meteor.userId()}, {$pull: {Tags: value}})
            }
        },
        addCard: function (label, value) {

            if (value != null) {
                console.log("adding Tag " + label + " " + value);
                User_Data.update({createdBy: Meteor.userId()}, {$push: {Tags: value}})
            }
        },
        removeCard: function (label, value, userID) {
            if (!(value == null)) {
                console.log("removing location " + label + " " + value);
                return User_Data.update({createdBy: Meteor.userId()}, {$pull: {Tags: value}})
            }
        }
    })
}

if (Meteor.isClient) {
    Ground.Collection(User_Data);
}
