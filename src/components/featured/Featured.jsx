import "./featured.scss";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"

export default function Featured() {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" /> 
      </div>
      <div className="bottom">
        <div className="featuredChart">
            <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$430</p>
        <p className="desc">
            Previous transaction processing. Last payment may not be included.
        </p>
        <div className="summary">
            <div className="item">
                <div className="itemTitle">Target</div>
                <div className="itemResult negative">
                    <KeyboardArrowDownIcon fontSize='small' />
                    <div className="resultAmmount">$12.4</div>
                </div>
            </div>
            <div className="item">
                <div className="itemTitle">Last week</div>
                <div className="itemResult positive">
                    <KeyboardArrowUpIcon fontSize='small' />
                    <div className="resultAmmount">$12.4</div>
                </div>
            </div>
            <div className="item">
                <div className="itemTitle">Last Month</div>
                <div className="itemResult positive">
                    <KeyboardArrowUpIcon fontSize='small' />
                    <div className="resultAmmount">$12.4</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
