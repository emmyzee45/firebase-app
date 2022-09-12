export const userColumns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'user', headerName: 'User', width: 230, renderCell: (params) =>{
        return (
            <div className="cellWithImg">
                <img src={params.row.img} className="cellImg" alt="avatar" />
                { params.row.username}
            </div>
        )
    }},
    {
        field: 'email',
        headerName: 'Email',
        width: 230
    },
    {
        field: 'age',
        headerName: 'Age',
        width: 100
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 160,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
        }
    },
]

// temperary data
export const userRows = [
    {
        id: 1,
        username: 'Snow',
        img: 'C:/Users/Aondohemba  Emmanuel/Desktop/admindashboard/react-dashboard/src/components/navbar/R.jpg',
        status: 'active',
        email: '1snow@gmail.com',
        age: 35
    },
    {
        id: 2,
        username: 'Dean',
        img: 'C:/Users/Aondohemba  Emmanuel/Desktop/admindashboard/react-dashboard/src/components/navbar/R.jpg',
        status: 'active',
        email: '1snow@gmail.com',
        age: 35
    },
    {
        id: 3,
        username: 'Snow',
        img: 'C:/Users/Aondohemba  Emmanuel/Desktop/admindashboard/react-dashboard/src/components/navbar/R.jpg',
        status: 'active',
        email: '1snow@gmail.com',
        age: 35
    },
    {
        id: 4,
        username: 'Kan',
        img: 'C:/Users/Aondohemba  Emmanuel/Desktop/admindashboard/react-dashboard/src/components/navbar/R.jpg',
        status: 'active',
        email: '1snow@gmail.com',
        age: 35
    },
    {
        id: 5,
        username: 'Jeph',
        img: 'C:/Users/Aondohemba  Emmanuel/Desktop/admindashboard/react-dashboard/src/components/navbar/R.jpg',
        status: 'active',
        email: '1snow@gmail.com',
        age: 35
    }
]