import { userModel } from "../models/userModel.js";
import { projectModel } from "../models/projectModel.js";

export async function projectCreate (req, res, _next) {
    const { nombre, objGeneral, objEspecificos, presupuesto, lider_id, estado, fase } = req.body;
    console.log(req.body);

    projectModel.create(
        {
            nombre: nombre,
            objGeneral: objGeneral,
            objEspecificos: objEspecificos,
            presupuesto: presupuesto,
            fechaInicio: new Date(),
            fechaFin: new Date(),
            lider_id: lider_id,
            //lider_nombre: "",
            estado: estado,
            fase: fase
            
        }, (err, projectOk) => {
            if (projectOk !== null && !(err !== null)) {
                res.status(200).json('ok');
            } else {
                console.error(err);
                res.status(500).json("Error: " + err);
            }
        }
    );
}


export async function projectsRead (_req, res, _next) {
    console.log("Ingreso a todos los proyectos");
    //res.json({ msg: "Visor de usuarios"});

    const projects = await projectModel.find({});

    console.log(projects);

    if (projects !== null) {
        res.status(200).json(projects);
    } else {
        res.status(200).json("No existen registros");
    }
}


export async function projectsReadByIdLeader (req, res, _next) {
    const id = Number(req.params.id);
    
    const projects = await projectModel.find({"lider_id": id}).populate({path: 'lider_id', model: userModel}).exec();
    console.log(projects.length);

    if (projects.length !== 0) {
        res.status(200).json(projects);
    } else {
        res.status(200).json("No existen registros");
    }
}