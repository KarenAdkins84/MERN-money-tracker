const bcrypt = require('bcryptjs');
const User = require("../../model/User");
const { AppErr, appErr } = require('../../utils/appErr');
const generateToken = require('../../utils/generateToken');
const verifyToken = require('../../utils/verifyToken');


//register
const registerUserCtrl = async(req, res, next)=>{
    const {fullname, email, password} = req.body
    try {
        //check if email exists
        const userFound = await User.findOne({ email });
        if (userFound) {
            return next(appErr('User already exists', 400));
        }
        
        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //create user
        const user = await User.create({
            fullname,
            email,
            password: hashedPassword,
        });
        res.json({
            status: 'Success',
            fullname: user.fullname,
            email: user.email,
            id: user._id,
        });
    } catch (error) {
        next(new Error(error));
    }
};

//login
const loginUserCtrl = async(req, res)=>{
    const {email, password} = req.body;
    try {
        //check if email exists
        const userFound = await User.findOne({ email });
        if (!userFound) return next(new AppErr('Invalid login credentials', 400));
        //check for password validity
        const isPasswordMatch = await bcrypt.compare(password, userFound.password);
        if (!isPasswordMatch)
        return next(new Error('Invalid login credentials'))

        res.json({
            status: 'success', 
            fullname: userFound.fullname,
            id: userFound._id,
            token: generateToken(userFound._id),
        });
    } catch (error) {
        next(error);
    }
};

//profile
const userProfileCtrl = async(req, res)=>{
    console.log(req.user);
    try {
        const user = await User.findById(req.user);
        res.json(user)
    } catch (error) {
        res.json(error);
    }
};

//delete
const deleteUserCtrl = async(req, res)=>{
    try {
        res.json({msg: 'Delete route'})
    } catch (error) {
        res.json(error);
    }
};

//update
const updateUserCtrl = async(req, res)=>{
    try {
        res.json({msg: 'Update route'})
    } catch (error) {
        res.json(error);
    }
};

module.exports = {
    registerUserCtrl,
    loginUserCtrl,
    userProfileCtrl,
    deleteUserCtrl,
    updateUserCtrl,
};

