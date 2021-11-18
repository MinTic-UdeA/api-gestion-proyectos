enum Enum_Rol {
    estudiante = "Estudiante",
    lider = "Lider",
    administrador = "Administrador"
  }
  
  enum Enum_EstadoUsuario {
    pendiente = "Pendiente",
    autorizado = "Autorizado",
    no_autorizado = "No Autorizado"
  }

  enum Enum_EstadoProyecto {
    activo = "activo",
    inactivo = "inactivo"
    
  }

  enum Enum_FaseProyecto { 
    iniciado = "iniciado",
    desarrollo = "desarrollo",
    terminado = "terminado",
    nulo = " "
    
  }

  enum Enum_TipoObjetivo {
  
  }

  export { Enum_Rol, Enum_EstadoUsuario, Enum_EstadoProyecto, Enum_FaseProyecto, Enum_TipoObjetivo }