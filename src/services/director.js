import { axiosConfig } from "../configuration/axiosConfig"

/**
 * Obtiene todos los directores
 */
const obtenerDirectores = (status = true) => {
    return axiosConfig.get('directores?status='+status, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

/**
 * Crea director
 */
const crearDirectores = (data) => {
    return axiosConfig.post('directores', data, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

/**
 * Actualiza director por ID
 */
const editarDirectoresPorID = (id, data) => {
    return axiosConfig.put('directores/'+tipoId, data, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

/**
 * Borra director  por ID
 */
 const borrarDirectoresPorID = (id) => {
    return axiosConfig.delete('directores/'+id, {}, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

/**
 * Consulta director por ID
 */
 const obtenerDirectoresPorID = (id) => {
    return axiosinstall.get('directores/'+tipoId, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

export {
    obtenerDirectores,
    crearDirectores,
    editarDirectoresPorID,
    borrarDirectoresPorID,
    obtenerDirectoresPorID
}