import React from "react";
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from "../redux/userSlice"
import axios from "axios"
import { hideLoading, showLoading } from '../redux/alertSlice'
function ProtectedRoute(props) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.user)
    const getUser = async () => {
        try {
            dispatch(showLoading() )
            const response = await axios.post('/user/get-user-info-by-id',
                { token: localStorage.getItem('token') },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }
            )
 
            dispatch(hideLoading() )
            if (response.data.success) {
                dispatch(setUser(response.data.data))
            } else {
                localStorage.clear() 
                navigate('/login')
            }
        } catch (error) {
            dispatch(hideLoading() )
            localStorage.clear() 
            navigate('/login')
        }
    }


    useEffect(() => {
        if (!user) {
            getUser()
        }


    }, [user])

    if (localStorage.getItem('token')) {
        return props.children;
    } else {
        return <navigate to="/login" />
    }
}
export default ProtectedRoute