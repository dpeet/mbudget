Template.upload_transactions.onCreated( () => {
    Template.instance().uploading = new ReactiveVar( false );
});

Template.upload_transactions.helpers({
    uploading() {
        return Template.instance().uploading.get();
    }
});

Template.upload_budgetitems.onCreated( () => {
    Template.instance().uploading = new ReactiveVar( false );
});

Template.upload_budgetitems.helpers({
    uploading() {
        return Template.instance().uploading.get();
    }
});


Template.upload_transactions.events({
    'change [name="uploadCSVtransactions"]' ( event, template ) {
        template.uploading.set( true );
        Papa.parse( event.target.files[0], {
            header: true,
            complete( results, file ) {
                Meteor.call( 'parseTransactionUpload', results.data, Meteor.userId, ( error, response ) => {
                    if ( error ) {
                        template.uploading.set( false );
                        console.log( error.reason );
                        Bert.alert( 'An Error has occurred', 'failure', 'growl-top-right' );
                    } else {
                        template.uploading.set( false );
                        Bert.alert( 'Upload complete!', 'success', 'growl-top-right' );
                    }
                });
            }
        });
    }
});

Template.upload_budgetitems.events({
    'change [name="uploadCSVbudgetitems"]' ( event, template ) {
        template.uploading.set( true );

        Papa.parse( event.target.files[0], {
            header: true,
            complete( results, file ) {
                Meteor.call( 'parseBudgetItemUpload', results.data, Meteor.userId, ( error, response ) => {
                    if ( error ) {
                        template.uploading.set( false );
                        console.log( error.reason );
                        Bert.alert( 'An Error has occurred', 'failure', 'growl-top-right' );

                    } else {
                        template.uploading.set( false );
                        Bert.alert( 'Upload complete!', 'success', 'growl-top-right' );
                    }
                });
            }
        });
    }
});
