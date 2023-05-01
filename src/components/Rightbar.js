import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components' 
import {BsBug} from "react-icons/bs"
import {RxPerson} from "react-icons/rx"
import {HiSignal} from "react-icons/hi2"

const fontsize = {
    textsize:'14px',
    timesize:'12px',
}

const Side = styled.div`
    border-color:#b1b1b1;
    height:100vh;
    float: right;
    // background-color:gray;
    border-left-style: solid;
    border-width:1px;
    // background-color: #ff9933;
    font-size:50 px;
    background-size: 208px 100%;
    padding: 0px 0px;
    margin: 0px 0px;
    // box-shadow: 0 0 100px rgba(0,0,0,0.2);
`;

const Title = styled.h3`
    font-size: ${fontsize.textsize};
    margin: 20px 0;
    padding: 0px;
    text-indent: 1em;
    
`;

const Background= styled.div`
    background-color: #e3f5ff;
    border-radius: 6px ;
    width: 20px;
	height: 20px;
    padding: 1px 1px;
    margin:0em 1em;
`;
const Item= styled.div`
    display:flex;
    justify-content：space-between;
    margin:5px 0;

`;
const Time= styled.text`
    color:#cacaca;
    font-size:${fontsize.timesize};

`;


function Rightbar(){
    return (
        <Side>
            <notification>
                <Title>Notification</Title> 
                <Item>
                    <Background><BsBug/></Background>
                    <message>
                        You have a bug that needs t...
                        <br></br>
                        <Time>Just now</Time>
                    </message>                     
                </Item>
                <Item>
                    <Background><RxPerson/></Background>
                    <message>
                        New user registered
                        <br></br>
                        <Time>59 minutes ago</Time> 
                    </message>                   
                </Item>
                <Item>
                    <Background><BsBug/></Background>
                    <message>
                        You have a bug that needs t...
                        <br></br>
                        <Time>12 hours ago</Time>
                    </message>                     
                </Item>
                <Item>
                    <Background><HiSignal/></Background>
                    <message>
                        Andi Lane subscribed to you
                        <br></br>
                        <Time>Today, 11:59 AM</Time>
                    </message>                     
                </Item>               
            </notification>
            <activities>                
            </activities>
            <contacts>
            </contacts> 
        </Side>
    );
}

export default Rightbar;