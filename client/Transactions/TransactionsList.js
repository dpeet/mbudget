Template.TransactionList.helpers({
    transactions: function () {
        return Transactions.find({}, {sort: {TransactionDate: -1, EffectiveDate: -1, Description: 1} });
    },
    transactionDateFormat: function () {
        return (this.TransactionDate).toISOString().slice(0,10);
    },
    effectiveDateFormat: function () {
        return (this.EffectiveDate ? (this.EffectiveDate).toISOString().slice(0,10) : "")
    },
    FormatCost:function(){
        return (this.Cost).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');

    }
});

Template.TransactionList.events({
    'click #transaction': function (e) {
        var transactionId = this._id;
        Router.go('editTransaction', {_id: transactionId});
    },
});


Template.TransactionListCard.helpers({
    // transactions: function () {
    //     return Transactions.find({}, {sort: {TransactionDate: -1, EffectiveDate: -1, Description: 1} });
    // },
    // transactionDateFormat: function () {
    //     return (this.TransactionDate).toISOString().slice(0,10);
    // },
    // effectiveDateFormat: function () {
    //     return (this.EffectiveDate ? (this.EffectiveDate).toISOString().slice(0,10) : "")
    // },
    // FormatCost:function(){
    //     return (this.Cost).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    // }
});

Template.TransactionListCard.events({
    'click .tx-list-card': function (e) {
        var transactionId = this._id;
        Router.go('editTransaction', {_id: transactionId});
    },
});

// Template.takePhoto.helpers({
//     'photo': function(){
//         return Session.get('photo');
//     }
// });



// if(Meteor.isClient){
//     Template.takePhoto.events({
//         'click .capture': function(){
//             MeteorCameraUI.getPicture({}, function(error, data){
//                 Session.set('photo', data);
//             });
//         }
//     });
// }