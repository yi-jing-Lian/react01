import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components' 
import { GrPieChart } from "react-icons/gr";
import {RiShoppingBag3Line,RiArrowRightSLine} from "react-icons/ri"
import {BsFolder,BsBook} from "react-icons/bs"
import headphoto from "./../img/headphoto.jpg"
import "./Sidebar.css"

const fontsize = {
    textsize:'14px',
}
const textindent = {
    t:'0em',
}


const Side = styled.div`
    border-color:#b1b1b1;
    height:100vh;
    float:right;
    width:10%;
    border-right-style: solid;
    border-width:1px;
    // background-color: #ff9933;
    font-size:50 px;
    background-size: 208px 100%;
    padding: 0px 25px;
    margin: 0px 0px;
    // box-shadow: 0 0 100px rgba(0,0,0,0.2);
`;

const Title = styled.p`
    color: #6a6a6a;
    font-size: ${fontsize.textsize};
    margin: 20px 0 0 0;
    padding: 0px;
    // text-indent: 1em;
    
`;

const Text = styled.p`
    font-size: ${fontsize.textsize};
    margin: 10px 0;
    padding: 0px;
    // text-indent: ${textindent.t};
    
`;
const Iconstyle= { color: '#cccccc' }
const Linkstyle={
    'text-decoration': 'none',
    'color':'black'
}

// 5/5上課

const Account=styled.div`
    display:flex;
    text-align:center;
    flow-wrap:norow;
    algn-item:center;
    p{
        margin:4px;
        font-size:18px;
    }
    
`
const Favorites=styled.div`
    
    text-align:left;
    justify-content:center;
    div{
        display:flex;
        flow-wrap:nowrap;
        p{
            margin:4px;
            font-size:18px;
        }
        ul{
            margin:0;
            padding:0;
            margin-left:20px;
        }
        li{
            margin:4px;
            font-size:16px;
        }

    }
    
`



function Sidebar(){
    return (
        <Side>
            <Account>
                <img src={headphoto} alt="headphoto" className="headphoto"></img>
                <p> lian</p>
            </Account>
            <Favorites>
                <div>
                    <p>Favorites</p>
                    <p>Recently</p>
                </div>
                <div>
                    <ul>
                        <li>Overview</li>
                        <li>Projects</li>
                    </ul>
                    
                </div>                
            </Favorites>
            <dashboards>
                <Title>Dashboards</Title> 
                <Text>
                    {/* <i className="arrow right"></i>test */}
                    <RiArrowRightSLine style={Iconstyle}/><Link to="/"  style={Linkstyle}><GrPieChart/> Default </Link>
                </Text>    
                <Text>
                    <RiArrowRightSLine style={Iconstyle}/><Link to="/"  style={Linkstyle}><RiShoppingBag3Line/> eCommerce</Link>
                </Text> 
                <Text>
                    <RiArrowRightSLine style={Iconstyle}/><Link to="/"  style={Linkstyle}><BsFolder/> Projects</Link>
                </Text>
                <Text>
                    <RiArrowRightSLine style={Iconstyle}/><Link to="/"  style={Linkstyle}><BsBook/> Online courses</Link>
                </Text>
            </dashboards>
            <pages>
            </pages>

        </Side>
        // <div>

        //     <h1>Sidebar</h1>
        //     <p> There is Sidebar </p>
        //     <ul>
        //         <li><Link to="/"> Dashboard </Link></li>
        //         <li><Link to="/Settings"> Setting </Link></li>
        //         <li><Link to="/Visuallizations"> Visuallizations </Link></li>
        //         <li><Link to="/Hello"> Hello </Link></li>
        //         <li><Link to="/Upload"> Upload </Link></li>
        //     </ul>
        // </div>
    );
}

export default Sidebar;
