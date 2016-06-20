Meteor.methods({
    parseTransactionUpload( data, userID ) {
        console.log(data)
        for ( let i = 0; i < data.length; i++ ) {
            let item   = data[ i ],
                exists = Transactions.findOne( { Description: item.Description, createdBy: userID} );
            if ( !exists ) {
                Transactions.insert( item );
            } else {
                console.warn('Rejected. This item already exists.' );
            }
        }
    },
    parseBudgetItemUpload( data, userID) {
        for ( let i = 0; i < data.length; i++ ) {
            let item   = data[ i ],
                exists = BudgetItems.findOne( { Name: item.Name, createdBy: userID} );
            if ( !exists ) {
                BudgetItems.insert( item );
            } else {
                console.warn( 'Rejected. This item already exists.' );
            }
        }
    }
});