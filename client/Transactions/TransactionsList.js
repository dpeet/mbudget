Template.TransactionList.helpers({
    transactions: function () {
        return Transactions.find({}, {sort: {TransactionDate: -1, EffectiveDate: -1, Description: 1} });
    },
    transactionDateFormat: function () {
        return moment(this.TransactionDate).format("MM-DD-YYYY");
    },
    effectiveDateFormat: function () {
        return moment(this.EffectiveDate).format("MM-DD-YYYY");
    },
});

Template.TransactionList.events({
    'click .transaction': function (e) {
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