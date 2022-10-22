import React,{useEffect} from 'react'
import axois from 'axios'



function Home() {


    const getData = async () => {

        try { 
            console.log("12,home");
            const response = await axois.post('/user/get-user-info-by-id',{},
            
                {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token')
                    }
                })
            console.log(response.data,"response.data");
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>Home</div>
    )
}

export default Home