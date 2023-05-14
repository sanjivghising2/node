import express  from "express";

const router= express.Router();
router.get("/",(req, res)=>{
    res.status(200).send(" Book List");
});

router.get("/add",(req, res)=>{

       //authentication



    res.status(200).json({ Book: "add"});
});
router.get("/delete",(req, res)=>{
    console.log(req.query);
    res.status(200).json({ delete: "true" });
});


export default router;