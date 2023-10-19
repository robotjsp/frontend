import dayjs from 'dayjs'
import React, { useState } from 'react';


export default function Table({ directores = [], borrarDirector }) {
  
  
  const [directorToEdit, setDirectorToEdit] = useState(null);

  const openUpdateModal = (director) => {
    setDirectorToEdit(director);
    open();
  };
  
  const borrarPorId = (e) => {
    e.preventDefault()
    borrarDirector(e)
  }


  const clear = () => {
      clearForm()
  }
  return (
    <table className="table">
      <thead>

        <tr>
          <th>#</th>
          <th>name</th>
          <th>status</th>
          <th>Creación</th>
          <th>Ultima edición</th>
          <th scope="col">Opciones</th>
        </tr>
      </thead>
      <tbody>
        {
          directores.map((director, index) => {
            const { name, status } = director
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{name}</td>
                <td>{status ? 'Activo' : 'Inactivo'}</td>
                <td>{dayjs(directores.createdate).format('YYYY-MM-DD')}</td>
                <td>{dayjs(directores.update).format('YYYY-MM-DD')}</td>
                <td>
                  <button
                  type="button"
                  className="btn btn-secondary"
                  onClick='alert("Esta funcion no esta programada")'
                  >
                   ✎Editar
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger"
                    id={director._id}
                    onClick={borrarPorId}
                  >
                    ✖ Borrar
                  </button>
                </td>
                {directorToEdit && director === directorToEdit && (
                <EditForm
                  director={director}
                  change={handleChange}
                  updateDirector={directorupdate}
                  clearForm={clear}
                />
              )}
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}
