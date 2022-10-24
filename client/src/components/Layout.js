import React, { useState } from 'react'
import '../layout.css'
import { Link, useLocation,useNavigate  } from 'react-router-dom'
import { useSelector  } from 'react-redux'
function Layout({ children }) {
    const [collapsed, setcollapsed] = useState(false)
    const { user } = useSelector((state) => state.user)
    const location = useLocation()
    const navigate=useNavigate()
    console.log({ user }, "{ user }{ user }");
    const userMenu = [
        {
            name: 'Home',
            path: '/',
            icon: 'ri-home-5-line'

        },
        {
            name: 'ADD Applications',
            path: '/ADD-Applications',
            icon: 'ri-file-list-line'

        }


    ];

    const adminMenu = [
        {
            name: 'Home',
            path: '/',
            icon: 'ri-home-5-line'

        },
        {
            name: 'users',
            path: '/users',
            icon: 'ri-user-line'

        },
        {
            name: 'new Applications',
            path: '/new-Applications',
            icon: 'ri-file-list-line'

        },
        {
            name: 'pending-Applications',
            path: '/pending-Applications',
            icon: 'ri-file-list-line'

        },
        {
            name: 'rejected-Applications',
            path: '/rejected-Applications',
            icon: 'ri-file-list-line'

        },


    ];
    const menuToBeRendered = user?.isAdmin ? adminMenu : userMenu

    return (
        <div className='main'>
            <div className="d-flex layout">
                <div className={collapsed ? 'collapsed-sidebar' : 'sidebar'}>
                    <div className="sidebar-header">
                        <h1 className='logo'>A</h1>
                    </div>
                    <div className="menu">
                        {menuToBeRendered.map((menu) => {
                            const isActive = location.pathname === menu.path
                            return (
                                <div className={`d-flex menu-item ${isActive && 'active-menu-item'}`}>
                                    <i className={menu.icon}></i>
                                    {!collapsed && < Link to={menu.path} >{menu.name}</Link>}
                                </div>
                            )
                        })}
                        <div className={`d-flex menu-item `} onClick={()=>{
                            localStorage.clear()
                            navigate('/login')
                        }}>
                            <i className='ri-logout-circle-line'></i>
                            {!collapsed && < Link to='/login' >Logout</Link>}
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="header">
                        {collapsed ? <i className="ri-menu-line close-icons" onClick={() => { setcollapsed(false) }}></i> : <i className="ri-close-line close-icons" onClick={() => { setcollapsed(true) }}></i>}
                        <div className="d-flex align-items-center px-4">
                            <i class="ri-notification-4-line header-icons mr-2 px-3"></i>
                            <Link className='anchor' to='/profile'>{user?.name}</Link>
                        </div>
                    </div>
                    <div className="body">
                        {children}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Layout