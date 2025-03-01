const express=require("express")
const { getRecipes,getRecipe,addRecipe,editRecipe,deleteRecipe} = require("../controller/recipe")
const router=express.Router()
router.get("/",getRecipes)
router.get("/:id",getRecipe) //Get recipe by id
router.post("/",addRecipe)
router.put("/:id",editRecipe)
router.delete("/id",deleteRecipe)

module.exports=router