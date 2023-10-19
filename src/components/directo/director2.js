import React, { useEffect, useState } from 'react';
import { obtenerDirectores, crearDirectores, editarDirectoresPorID, borrarDirectoresPorID } from '../../services/director'
import Title from '../ui/Title'
import Swal from 'sweetalert2'
import Spinner from '../ui/Spinner'
import Modal from './Modal'
import Table from './Table'
import ButtonModal from '../ui/ButtonModal'

export default function director() {

  const [openModalEditDirector, setOpenModalEditDirector] = useState(false);
  const [directores, setDirectores] = useState([])
  const [loader, setLoading] = useState(false)
  const [director, setDirector] = useState({
    name: ''
  })

  useEffect(() => {
    getDirectores()
  }, [])

  const getDirectores = async () => {
    setLoading(true)
    try {
      const { data } = await obtenerDirectores()
      setDirectores(data)
      setTimeout(() => {
        setLoading(false)
      }, 500)

    } catch (e) {
      setError(true)
      setLoading(false)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error al cargar datos, Components/director | getDirectores... ',
        e,
        footer: 'Intenta de nuevo!'
      })
    }
  }

  // Método para crear un nuevo director
  const crearDirector = async () => {
    setLoading(true)
    try {
      const response = await crearDirectores(director)
      console.log(response)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        text: 'Director creado correctamente',
        showConfirmButton: false,
        timer: 1900
      })
      setLoading(false)
      clearForm()
      getDirectores()
    } catch (e) {
      console.log(e)
      setLoading(false)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error al intentar guardar!',
        footer: 'Intenta de nuevo!'
      })
    }
  };

  const handleChange = e => {
    //console.log(e.target)
    setDirector({
      ...director,
      [e.target.name]: e.target.value
    })
  }

  const clearForm = () => {
    setDirector({
      name: ''
    })
  }


  // Método para borrar un director existente
  const borrarDirector = (e) => {
    const id = e.target.id
    setLoading(true)
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: '¡Alerta! 🚨',
      text: "Este proceso eliminara al director. Si lo borras, no podrás recuperarlo.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, elimiar',

      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await borrarDirectoresPorID(id)
          console.log(response)
          setLoading(false)
          getDirectores()
        } catch (e) {
          console.log(e)
          setLoading(false)
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error al intentar eliminar!',
            footer: 'Intenta de nuevo!'
          })
        }
        swalWithBootstrapButtons.fire(
          'Director eliminado..🗑️',
          'ℹ️ | Recarga la página para ver los cambios.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado 👌',
          'ℹ️ | Esta operación no afectará al sistema.',
          'error'
        )
        setLoading(false)
      }
    })
  }

  const updateDirector = async () => {
    setLoading(true)
    try {
      const response = await editarDirectoresPorID(id)
      console.log(response)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Editado con exito.',
        showConfirmButton: false,
        timer: 1500
      })
      setLoading(false)
      getDirectores()
    } catch (e) {
      console.log(e)
      setLoading(false)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error al intentar Editar!',
        footer: 'Intenta de nuevo!'
      })
    }
  };

  return (
    <>
      <Title title={'Directores'} />
      {
        loader && (<Spinner />)
      }
      <Table
        directores={directores}
        borrarDirector={borrarDirector}
        directorupdate={updateDirector}
        open={openModalEditDirector}

      />
      <ButtonModal title=' ✚ Nuevo director' />
      <Modal
        director={director}
        change={handleChange}
        crearDirector={crearDirector}
        clearForm={clearForm}
      />
    </>
  );
}
