import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Pagination from "react-js-pagination";

const ShowItems = () => {
    const endpoint = 'http://127.0.0.1:8000/api'

    const [items, setItems] = useState([])
    const [itemsPaginate, setItemsPaginate] = useState([])

    useEffect(() => {
        getAllItems()
    }, []);

    const getAllItems = async (pageNumber = 1) => {
        const resp = await axios.get(`${endpoint}/item?page=${pageNumber}`)
        setItemsPaginate(resp.data.items);
        setItems(resp.data.items.data)

    }
    const deleteItem = async (id) => {
        axios.delete(`${endpoint}/item/${id}`)
        getAllItems()
    }


    return (
        <div className='d-grid gap-2'>
            <Link to='/create' className='btn btn-success mt-2 mb-2'>Crear</Link>
            <table className="table table-striped table-inverse table-responsive">
                <thead className="thead-inverse">
                    <tr>
                        <th>Titulo</th>
                        <th>Descripcion</th>
                        <th>Precio</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.id}>
                            <td>{item.titulo}</td>
                            <td>{item.descripcion}</td>
                            <td>{item.precio}</td>
                            <td>
                                <Link to={`/edit/${item.id}`} className='btn btn-warning'>Editar</Link>
                                <Link to={`/item/${item.id}`} className='btn btn-primary'>Ver</Link>
                                <button onClick={() => deleteItem(item.id)} className='btn btn-danger'>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination
                activePage={itemsPaginate?.current_page ? itemsPaginate?.current_page : 0}
                itemsCountPerPage={itemsPaginate?.per_page ? itemsPaginate?.per_page : 0}
                totalItemsCount={itemsPaginate?.total ? itemsPaginate?.total : 0}
                onChange={(pageNumber) => {
                    getAllItems(pageNumber)
                }}
                pageRangeDisplayed={5}
                itemClass="page-item"
                linkClass="page-link"
                firstPageText="First Page"
                lastPageText="Last Lage"
            />
        </div>
    )
}

export default ShowItems