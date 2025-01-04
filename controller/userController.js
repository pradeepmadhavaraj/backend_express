import users from '../model/usermodel.js';


export const fetch=async(req, res)=>{
  try {
    const users1 = await users.find();
    if(users1.length==0){
      return res.status(404).json({error:"no user found"})
    }
    res.status(200).json({users1});
  } catch (error) {
        res.status(500).json({error:"internal server error"});
  }
}
export const create =async (req, res)=>{
  try{
    let userdata=new users(req.body);
    const {email}=userdata;
    const userExist = await users.findOne({email});
    if(userExist){
      return res.status(400).json({message:"User"})
    }
    const saveduser=await userdata.save();
    res.status(200).json({saveduser});
  }
  catch{
    res.status(500).json({error:"internal server error"});
  }
}
export const update=async(req, res)=>{
  try {
    const id=req.params.id;
    const userExist=await users.findOne({_id:id});
    if(!userExist){
      return res.status(404).json({message:"User not found"});
    }
    const updateUser=await users.findByIdAndUpdate(id, req.body,{new:true});
    res.status(200).json({updateUser});
  } catch (error) {
    res.status(500).json({error:"internal server error"});
  }
}

export const remove=async(req, res)=>{
  try {
    const id=req.params.id;
    const userExist=await users.findOne({_id:id});
    if(!userExist){
      return res.status(404).json({message:"User not found"});
    }
    await users.findByIdAndDelete(id);
    res.status(200).json({message:"user Deleted successfully"});
  } catch (error) {
    res.status(500).json({error:"internal server error"});
  }
}

export const find = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await users.findOne({ _id: id });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
