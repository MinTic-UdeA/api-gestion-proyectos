import express from "express";

export const project = express.Router();

project.get('/proyectos', (req, res, next) => {
    res.send("Visor de proyectos")
});

project.get('/proyecto/:id', (req, res, next) => {
    res.send("Acerca del proyecto: " + req.params.id)
});

//project.post()