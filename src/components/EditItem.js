import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = 'http://localhost:8000/api/item/'
const EditItem = () => {
  const [titulo, setTitulo] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [precio, setPrecio] = useState(0)
  const navigate = useNavigate()
  const { id } = useParams()

  const update = async (e) => {
    e.preventDefault()
    await axios.put(`${endpoint}${id}`, {
      titulo: titulo,
      descripcion: descripcion,
      precio: precio,
    })
    navigate('/')
  }

  useEffect(() => {
    const getProductById = async () => {
      const response = await axios.get(`${endpoint}${id}`)


      setTitulo(response.data.item.titulo)
      setDescripcion(response.data.item.descripcion)
      setPrecio(response.data.item.precio)
    }
    getProductById()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
        <h3>Edit Product</h3>
        <form onSubmit={update}>
            <div className='mb-3'>
                <label className='form-label'>Titulo</label>
                <input 
                    value={titulo}
                    onChange={ (e)=> setTitulo(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Descripcion</label>
                <input 
                    value={descripcion}
                    onChange={ (e)=> setDescripcion(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Precio</label>
                <input 
                    value={precio}
                    onChange={ (e)=> setPrecio(e.target.value)}
                    type='number'
                    className='form-control'
                />
            </div>
            <button type='submit' className='btn btn-primary'>Actualizar</button>
        </form>
    </div>
  )
}

export default EditItem