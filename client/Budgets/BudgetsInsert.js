AutoForm.hooks({
    insertBudgetItemForm: {
        onError: function (name, error, template) {
            console.log(name + " error:", error);
        },
        onSubmit: function (insertDoc, updateDoc, currentDoc) {
            Router.go('budgetList');
        }
    }
});
