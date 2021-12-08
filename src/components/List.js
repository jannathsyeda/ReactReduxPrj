import React from 'react';
import { Link } from 'react-router-dom';
import { deleteUser } from '../Redux/AllAction';
import {useDispatch} from 'react-redux';

const List = ({user}) => {
    const dispatch=useDispatch();
    const {name,email,phone,id}=user
    return (
       
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td><Link to={'/edit-user/${id}'}> <button type="button" class="btn btn-success me-2">Edit</button></Link>
                    <button type="button" class="btn btn-danger" onClick={()=>dispatch(deleteUser(id))}>Delete</button>
</td>

            </tr>
       
    );
};

export default List;