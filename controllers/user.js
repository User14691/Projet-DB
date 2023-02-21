async function userGet(req, res) {
    try {
        const User = req.app.get("models").User;
        const MyUser = await User.find();
        res.json(MyUser);
    } catch (error) {
        return error.message;
    }
};

async function userCreate(req, res) {
    try {
        const User = req.app.get("models").User;
        const NewUser = await new User({
            firstName: "John",
            lastName: "Doe",
            dateOfBirth: new Date()
        }).save();
        console.log(User);
        res.json(NewUser);
    } catch (error) {
        res.json(error.message);
    }

};

module.exports = { userGet, userCreate };