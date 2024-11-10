const empty_arr =["Emma","Daniel", "Faaiz"];
function todo(req, res){
  const data = req.body.data;
  empty_arr.push(data);
  return res.status(201).json({
    message: "Created sucessfully",
    code: "201",
    empty_arr,
  });
}

function Delete(req, res){
  const data = req.body.data;
  let removed;
  for(let i=0; i<empty_arr.length;i++){
    if(empty_arr[i] === data){
      empty_arr.splice(empty_arr[i],1);
      removed = empty_arr[i];
    }
  }
  return res.status(200).json({
    message: 'The data is removed $(removed)',
    code: "201", 
    empty_arr,
  });
}

function changeItem(req, res){
  try {
    const {data} = req.body;
    empty_arr.forEach((value,index) =>{
      if(value === data){
        empty_arr.splice(data, 1, update)
      }else{
        throw new Error("Error");
      }
    })
    return res.status(200).json({
      message: "Item succesfully changed",
      code: "200",
      empty_arr,
    });
  } catch (error) {
    throw new Error("Error");
  }
}

function retriveList(req,res){
  return res.status(200).json({
    message: "List retrival succesful",
    code: "200",
    empty_arr,
  })
}

module.exports = {
  todo,
  Delete,
  changeItem,
  retriveList,
};
