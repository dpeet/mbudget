Template.BudgetList.helpers({
    transactions: function () {
        return Transactions.find();
    },
});

Template.BudgetList.events({
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