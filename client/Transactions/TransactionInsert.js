AutoForm.hooks({
    insertTransactionForm: {
        onError: function (name, error, template) {
            console.log(name + " error:", error);
        },
        onSubmit: function (insertDoc, updateDoc, currentDoc) {
            var doc = this.insertDoc;
            //check if user has tag in array already
            if(!(doc.Tags == undefined)) {
                var tagsArray = User_Data.findOne({}, {fields: {Tags: 1}})["Tags"]
                console.log(doc.Tags + " " + doc.Tags.length);
                for (var i = 0; i < doc.Tags.length; i++) {
                    console.log(doc.Tags[i] + " " + tagsArray.indexOf(doc.Tags[i]) > -1)
                    var hasCurrTagsForm = tagsArray.indexOf(doc.Tags[i]) > -1
                    if (!hasCurrTagsForm) {
                        Meteor.call("addTag", doc.Tags[i], doc.Tags[i]);
                    }
                }
            }
            if(!(doc.Account == undefined)) {
                var accountArray = User_Data.findOne({}, {fields: {Account: 1}})["Account"]
                var hasCurrAccountForm = accountArray.indexOf(doc.Account) > -1
                if (!hasCurrAccountForm) {
                    Meteor.call("addAccount", doc.Account, doc.Account);
                }
            }
            Router.go('transactionList');
        }
    }
});
