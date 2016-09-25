Template.editBudgets.helpers({
    beforeRemove: function () {
        return function (collection, id) {
            var doc = collection.findOne(id);
            if (confirm('Really delete budget id: "' + doc.Name + '"?')) {
                this.remove();
                Router.go('budgetList');
            }
        };
    }
});

AutoForm.hooks({
    editBudgetsForm: {
        onSubmit: function (insertDoc, updateDoc, currentDoc) {
            Router.go('budgetList');

        },
        onSuccess: function (operation, result, template) {

            Router.go('budgetList');
        }
    }
});
