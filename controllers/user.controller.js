const {response, request} = require('express');


const userGet = (req=request,res=response)=>{
    const {q,nombre= 'No name',apikey} = req.query
    res.json({
        ok:true,
        msg: 'api - get - controller',
        q,
        nombre,
        apikey
    });
}

const userPut = (req,res=response)=>{
    const id = req.params.id; 
    res.status(400).json({
        ok: true,
        msg: 'Put API controller',
        id
    });
}

const userPost = (req,res)=>{
    const body = req.body;
    res.status(201).json({
        ok: true,
        msg: 'Post API controller',
        body: body
    });
}

const userDelete =(req,res)=>{
    res.json({
        ok: true,
        msg: 'Delete API controller'
    });
}

module.exports = {
    userGet,
    userPut,
    userPost,
    userDelete
}