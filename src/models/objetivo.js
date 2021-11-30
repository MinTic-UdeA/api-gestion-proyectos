
// import { Schema, model, SchemaTypes } from "mongoose";
// import { Enum_TipoObjetivo } from "./enums/enums";
// import { ProyectoModel } from "./proyecto";

// interface Objetivo {
//     descripcion: string,
//     objetivo: Enum_TipoObjetivo,
//     proyecto: Schema.Types.ObjectId
// }

// const objetivoSchema = new Schema<Objetivo>({
//     descripcion: {
//       type: String,
//       required: true,
//     },
//     objetivo: {
//       type: String,
//       enum: Enum_TipoObjetivo,
//       required: true,
//     },
//     proyecto: {
//         type: SchemaTypes.ObjectId,
//         ref: ProyectoModel
//     }
//   });

// const ObjetivoModel = model("Objetivo", objetivoSchema)

// export { ObjetivoModel };