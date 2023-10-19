 //Este modal se va a usar para crear
import React, { useState } from 'react';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { editEstadoEquipo, obtenerDirectoresPorID } from '../../services/estadoEquipoService';
import Swal from 'sweetalert2';

export default function update({
    director,
    change,
    crearDirector,
    clearForm,
    directorupdate
}) {

    const handleChange = e => {
        change(e)
    }

    const crear_Director = (e) => {
        e.preventDefault()
        crearDirector()
    }

    const clear = () => {
        clearForm()
    }

    return (
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Actualizar Director</h1>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={clear}
                        >
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={crear_Director}>
                            <div className="mb-3">
                                <label for="recipient-name" className="col-form-label">Nombre:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="recipient-name"
                                    onChange={handleChange}
                                    value={director.name}
                                    name="name"
                                />
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                    onClick={clear}
                                >
                                    Cerrar
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={director.name.length == 1}
                                >
                                    Guardar
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}