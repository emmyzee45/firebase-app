import React from 'react';
import logo from "./R.jpg"
import "./table.scss"
import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";


function List() {
    const rows = [
        {
            id: 12342453,
            product: "Playstation 5",
            img: "C:/Users/Aondohemba  Emmanuel/Desktop/admindashboard/react-dashboard/src/components/navbar/R.jpg",
            customer: "Michael Doe",
            date: "1 March",
            amount: 900,
            method: "Online Payment",
            status: "Pending"
        },
        {
            id: 234245,
            product: "Acer Nitro 5",
            img: "C:/Users/Aondohemba  Emmanuel/Desktop/admindashboard/react-dashboard/src/components/navbar/R.jpg",
            customer: "John Smith",
            date: "1 March",
            amount: 343,
            method: "Cash on delivery",
            status: "Approved"
        },
        {
            id: 9524225,
            product: "Redragon S101",
            img: "C:/Users/Aondohemba  Emmanuel/Desktop/admindashboard/react-dashboard/src/components/navbar/R.jpg",
            customer: "John Smith",
            date: "1 March",
            amount: 463,
            method: "Cash on delivery",
            status: "Pending"
        },
        {
            id: 11234245,
            product: "Razer Blade 15",
            img: "C:/Users/Aondohemba  Emmanuel/Desktop/admindashboard/react-dashboard/src/components/navbar/R.jpg",
            customer: "Jane Smith",
            date: "1 March",
            amount: 903,
            method: "Online",
            status: "Approved"
        },
        {
            id: 23098512,
            product: "Asus Rog Strix",
            img: "C:/Users/Aondohemba  Emmanuel/Desktop/admindashboard/react-dashboard/src/components/navbar/R.jpg",
            customer: "Harold Carol",
            date: "1 March",
            amount: 2000,
            method: "Online",
            status: "Pending"
        },
    ]
  return (

    <TableContainer component={Paper} className="table">
        <Table sx={{minwidth: 650 }} arial-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell className="tableCell">Tracking ID</TableCell>
                    <TableCell className="tableCell">Product</TableCell>
                    <TableCell className="tableCell">Customer</TableCell>
                    <TableCell className="tableCell">Date</TableCell>
                    <TableCell className="tableCell">Amount</TableCell>
                    <TableCell className="tableCell">Payment method</TableCell>
                    <TableCell className="tableCell">Status</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                { rows.map((row)=> (
                    <TableRow key={row.id}>
                        <TableCell className="tableCell">{ row.id }</TableCell>
                        <TableCell className="tableCell">
                        <div className="cellWrapper">
                            <img src={logo} alt="" className="image" />
                            { row.product }
                        </div>
                        </TableCell>
                        <TableCell className="tableCell">{ row.customer }</TableCell>
                        <TableCell className="tableCell">{ row.date }</TableCell>
                        <TableCell className="tableCell">{ row.amount }</TableCell>
                        <TableCell className="tableCell">{ row.method }</TableCell>
                        <TableCell className="tableCell">
                            <span className={`status ${row.status}`}>{ row.status }</span>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
      </TableContainer>
  ) 
}

export default List
