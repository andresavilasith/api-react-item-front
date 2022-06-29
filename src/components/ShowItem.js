import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom'


const ShowItem = () => {
    const endpoint = 'http://localhost:8000/api/item/'
    
    const [item, setItem] = useState([])
    
    const { id } = useParams()
    
    useEffect(() => {
        const getProductById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
    
    
            setItem(response.data.item)
    
        }
        getProductById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>
            <h3>Edit Product</h3>
            <div className='mb-3'>
                <label className='form-label'>Titulo</label>
                <input
                    value={item.titulo}
                    type='text'
                    className='form-control'
                    disabled
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Descripcion</label>
                <input
                    value={item.descripcion}
                    type='text'
                    className='form-control'
                    disabled
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Precio</label>
                <input
                    value={item.precio}
                    type='number'
                    className='form-control'
                    disabled
                />
            </div>
            <Link to='/' className='btn btn-primary'>Inicio</Link>
        </div>
    )
}

export default ShowItem