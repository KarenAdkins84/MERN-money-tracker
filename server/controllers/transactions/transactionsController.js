//create
const createTransCtrl = async(req, res)=>{
    try {
        res.json({ msg: 'Create transactions route' });
    } catch (error) {
        res.json(error);
    }
};

//get all transactions
const fetchAllTransCtrl = async(req, res)=>{
    try {
        res.json({ msg: 'Get transactions route' });
    } catch (error) {
        res.json(error);
    }
};

//get single transaction by id
const fetchSingleTransCtrl = async(req, res)=>{
    try {
        res.json({ msg: 'Get single transaction route' });
    } catch (error) {
        res.json(error);
    }
};

//delete
const deleteTransCtrl = async(req, res)=>{
    try {
        res.json({ msg: 'Delete transactions route' });
    } catch (error) {
        res.json(error);
    }
};

//update
const updateTransCtrl = async(req, res)=>{
    try {
        res.json({ msg: 'Update transactions route' });
    } catch (error) {
        res.json(error);
    }
};


module.exports = {
    createTransCtrl,
    fetchAllTransCtrl,
    fetchSingleTransCtrl,
    deleteTransCtrl,
    updateTransCtrl,
};