// Session.set("mobile", true);

Template.MasterLayout.helpers({
    isMobile: function () {
        // return Session.get("mobile")
        return Meteor.isCordova
    }
})

