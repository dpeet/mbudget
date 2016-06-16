Template.editTransaction.helpers({
    beforeRemove: function () {
        return function (collection, id) {
            var doc = collection.findOne(id);
            if (confirm('Really delete transaction item id: "' + doc.Name + '"?')) {
                this.remove();
                Router.go('transactionList');
            }
        };
    }
});

AutoForm.hooks({
    editTransactionsForm: {
        onSubmit: function (insertDoc, updateDoc, currentDoc) {
            var doc = this.insertDoc;
            //check if user has tag in array already
            if(!(doc.Tags == undefined)){
                var tagsArray =  User_Data.findOne({},{fields: {Tags: 1}})["Tags"]
                console.log(doc.Tags + " " + doc.Tags.length);
                for (var i=0; i<doc.Tags.length; i++){
                    console.log(doc.Tags[i] + " " + tagsArray.indexOf(doc.Tags[i]) > -1)
                    var hasCurrTagsForm = tagsArray.indexOf(doc.Tags[i]) > -1
                    if(!hasCurrTagsForm){
                        Meteor.call("addTag", doc.Tags[i], doc.Tags[i]);
                    }
                }
            }
            Router.go('transactionList');

        },
        onSuccess: function (operation, result, template) {

            Router.go('transactionList');
        }
    }
});