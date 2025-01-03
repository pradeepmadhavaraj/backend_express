const express=require('express');
let router=express.Router();

router.route('/:id/1')
    .get((req,res)=>{res.send("retrive id value "+req.params.id/1);

    })
    .put((req,res)=>{res.send("update the id value "+req.params.id);

    })
    .delete((req,res)=>{res.send("delete the id value "+req.params.id);
      
    })

// router.get('/',(req,res)=>{
//   res.send("<h1>user information</h1");
// })
// router.get('/newuser',(req,res)=>{
//   res.send("<h1>new user information</h1");
// })
module.exports = router;