Accounts.onCreateUser(function (options, user) {
    user.status = null;
    // check(user, Schema.User);
    console.log("adding user data");
    console.log(user._id);
    User_Data.insert({
        createdBy: user._id,
        Tags: ["Unknown"],
    });
    console.log(User_Data.find().fetch())
    if (options.profile)
        user.profile = options.profile;
    return user;
});