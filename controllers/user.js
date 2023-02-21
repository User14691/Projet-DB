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
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            dateOfBirth: req.body.dateOfBirth
        }).save();
        console.log(User);
        res.json(NewUser);
    } catch (error) {
        res.json(error.message);
    }

};

async function userDelete(req, res) {
    try {
        if (!req.body._id) {
            return res.json("_id manquant");
        }
        const User = req.app.get("models").User;
        const ToDeleteUser = await User.findById(req.body._id);
        await ToDeleteUser.remove();
        res.json("Succefully Deleted");
    } catch (error) {
        res.json(error.message);
    }
};

async function userUpdate(req, res) {
    try {
        if (!req.body._id || !req.body.toModify) {
            return res.json("_id ou champs manquant(s)");
        }
        const User = req.app.get("models").User;
        const ToModifyUser = await User.findById(req.body._id);
        const ToMofifyKeys = Object.keys(req.body.toModify);
        for (const key of ToMofifyKeys) {
            ToModifyUser[key] = req.body.toModify[key];
        }
        await ToModifyUser.save();
        res.json(ToModifyUser);
    } catch (error) {
        res.json(error.message);
    }
};

module.exports = { userGet, userCreate, userDelete, userUpdate };