const todoModel = require("../schema/list");//importing model from the schema file
const {StatusCodes} = require("http-status-code") // to use words instead of numbers
// const empty_arr =["ebube", "some", "ifeany", "victor"]
async function todo (req,res){
    const {name} = req.body
    const todo = await todoModel.create({
        name,
        createdAt:new Date(),
        updatedAt:new Date(),
        deletedAt:"",
    })

    return res.status(StatusCodes.CREATED).json({
        message:"Created successfully",
        todo
    })
}

function Delete(req, res) {
    const data = req.body.data;
    let removed = null;
    for (let i = 0; i < empty_arr.length; i++){ 
        if (empty_arr[i] === data) {
            removed = empty_arr.splice(i, 1)[0]
            break; 
        }
    }
    return res.status(200).json({
        message: `The data removed is ${removed}`, 
        code: 200, 
        empty_arr,
    })
}


function change_item(req, res){ 
    try{
        const { data, update } = req.body
        empty_arr.forEach((value, index) => {
            if (value == data) {
                empty_arr.splice(index, 1, update)
            } else {
                throw new Error("No element found")
            }
        });
        return res.status(200).json({
            message: "item updated successfully",
            code: 200, 
            empty_arr,
        })
    }catch (error){
        console.error(error)
        return res.status(500).json({
            message:"Something went wrong", 
        })
    }
}

async function read_arr(req, res) {
    try{
        const todo = await todoModel.find()// find to retrieve everything findOne to retrieve a particular document
        return res.status(200).json({
            message: "array retrieved successfully", 
            code: 200, 
            todo,
        })
    } catch (error){
        console.error(error)
        return res.status(500).json({
            message:"Something went wrong",
        })
    }
}



module.exports = {
    todo, 
    Delete, 
    change_item, 
    read_arr,
}