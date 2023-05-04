//create
const createAcctCtrl =  async(req, res)=>{
    try {
        res.json({ msg: 'Create account route' });
    } catch (error) {
        res.json(error);
    }
};

//get single account
const fetchAcctCtrl = async(req, res)=>{
    try {
        res.json({ msg: 'Get single account route' });
    } catch (error) {
        res.json(error);
    }
};

//delete
const deleteAcctCtrl = async(req, res)=>{
    try {
        res.json({ msg: 'Delete account route' });
    } catch (error) {
        res.json(error);
    }
};

//update
const updateAcctCtrl = async(req, res)=>{
    try {
        res.json({ msg: 'Update account route' });
    } catch (error) {
        res.json(error);
    }
};

//get all accounts
const fetchAllAcctCtrl = async(req, res)=>{
    try {
        res.json({ msg: 'Get all accounts route' });
    } catch (error) {
        res.json(error);
    }
};



module.exports = {
    createAcctCtrl,
    fetchAcctCtrl,
    deleteAcctCtrl,
    updateAcctCtrl,
    fetchAllAcctCtrl,
};