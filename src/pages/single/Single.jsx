import './single.scss';
import logo from "./R.jpg"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import List from "../../components/table/Table"
import Chart from '../../components/chart/Chart'

const Single = () => {
    return (
        <div className="single">
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <button className='editButton'>edit</button>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img 
                                src={logo}
                                alt="" 
                                className="itemImg" 
                            />
                            <div className="details">
                                <h1 className="itemTitle">Jane Doe</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">janeDoe@gmail.com</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone:</span>
                                    <span className="itemValue">+234 7039 575074</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Address:</span>
                                    <span className="itemValue">Otukpo road, makurdi</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Country:</span>
                                    <span className="itemValue">Nigeria</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart aspect={3/1} title='User spending (Last 6 months )' />
                    </div>
                </div>
                <div className="bottom">
                    <div className="title">Last Transactions</div>
                    <List />
                </div>
            </div>
        </div>
    )
}

export default Single;