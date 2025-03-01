const Recipes=require("../models/recipe")
const getRecipes=async(req,res)=>{
    const recipes=await Recipes.find()
    return res.json(recipes)
}
const getRecipe=async(req,res)=>{
    const recipe=await Recipes.findById(req.params.id)
    res.json(recipe)
}





const addRecipe=async(req,res)=>{
    console.log(req.user)
    const {title,ingredients,instructions,time}=req.body 

    if(!title || !ingredients || !instructions)
    {
        res.json({message:"Required fields can't be empty"})
    }
    const newRecipe=await Recipes.create({
        title,ingredients,instructions,time,coverImage:req.file.filename,
        createdBy:req.user.id
    })
   return res.json(newRecipe)
}
   
const editRecipe=async(req,res)=>{
    const {title,ingredients,instructions,time}=req.body 
    let recipe=await Recipes.findById(req.params.id)

    try{
        if(recipe){
            let coverImage=req.file?.filename ? req.file?.filename : recipe.coverImage
            await Recipes.findByIdAndUpdate(req.params.id,{...req.body,coverImage},{new:true})
            res.json({title,ingredients,instructions,time})
        }
    }
    catch(err){
        return res.status(404).json({message:err})
    }
    
}
const deleteRecipe=(req,res)=>{
    res.json({message:"hello"})
}
module.exports={getRecipes,getRecipe,addRecipe,editRecipe,deleteRecipe}