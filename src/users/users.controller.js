const createUsercontroller = async(req,res) => {
    res.send({message: "Create ok"});
}

const findAllUsercontroller = async(req,res) => {
    res.send({message: "Find All ok"});
}

module.exports = { createUsercontroller, findAllUsercontroller};