
import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const CreateItem = () => {
    const endpoint = 'http://127.0.0.1:8000/api/item'
    
    const [titulo, setTitulo] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [precio, setPrecio] = useState(0)
    const navigate = useNavigate()


    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, {titulo: titulo, descripcion: descripcion, precio: precio})
        navigate('/')
    }
    return (
        <div className='col-md-4'>
        <h3>Crear Item</h3>
        <form onSubmit={store}>
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
                    type='text'
                    className='form-control'
                />
            </div>
            
            <button type='submit' className='btn btn-primary'>Guardar</button>
        </form>
    </div>
    )
}

export default CreateItem