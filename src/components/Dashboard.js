import React from "react";
import styled from 'styled-components' 
import { FiTrendingUp,FiTrendingDown } from "react-icons/fi";
import {MdKeyboardArrowDown} from "react-icons/md"
import {BsFolder,BsBook} from "react-icons/bs"
const fontsize = {
    textsize:'14px',
    numbersize:'24px',
    percent:'12px',

}
const textindent = {
    t:'1.5em',
}
export const H3 = styled.h3`
  font-size: ${fontsize.H3FONTSIZE};
  font-weight: 10000;
  font-family: "museo", Helvetica Neue, Helvetica, sans-serif;
`;
const All = styled.div`
    display: flex;
    // width:60%
    background-color: yellow;
    font-size:50 px;
    justify-content：space-between
    // border-radius: 10px;
    padding: 100px;
    margin: 20px;
    // box-shadow: 0 0 100px rgba(0,0,0,0.2);
`;
const Side = styled.div`
    // background-color: #ff9933;
    font-size:50 px;
    background-size: 208px 100%;
    padding: 10px;
    margin: 10px;
    // box-shadow: 0 0 100px rgba(0,0,0,0.2);
`;



const Text = styled.p`
    font-size: ${fontsize.textsize};
    margin: 0px;
    padding: 0px;
    text-indent: ${textindent.t};
    
`;
const Center = styled.div`
    // display:flex;
    justify-content：flex-start;
    align-items:flex-start
    
    
`;

const Button = styled.button`
    font-size: ${fontsize.textsize};
    margin:0 10px;
    padding: 0px;
    font-weight:bold;
    border-style: none;
    background-color: white;
    display:flex;
    align-items:center;
    
    
`;

const Status = styled.div`
    display:flex;
    justify-content：space-between;
    margin:0px;
    padding: 0px;
    
`;

const Item = styled.div`
    font-size: ${fontsize.textsize};
    margin: 16px;
    padding: 28px;
    background-color: ${props => props.$odd ? "#e3f5ff" : "#e5ecf6"}; 
    width: 174px;
	height: 84px;
    border-radius: 16px ; 
    display:flex;
    flex-direction:column;
    
`;
const Title = styled.text`
    font-size: ${fontsize.textsize};
    font-weight:bold;
    // margin:20px;
    // padding: 50px;
    
`;
const Number = styled.text`
    font-size: ${fontsize.numbersize};
    font-weight:bold;
    // margin:0 0 0 20px;
    // padding: 50px;
    
`;
const Change = styled.text`
    font-size: ${fontsize.percent};
    margin:0 5px 0 20px;
    // padding: 50px;
    float:right;
    
`;
const Iconstyle= { color: "#999999" }

const Num = styled.div`
    display:flex;
    align-items:center;
    
`;

function Dashboard(){
    return (
        <Center>
            <Button>
                Today <MdKeyboardArrowDown  style={Iconstyle}/>
            </Button>
            <Status>
                <Item $odd>
                    <Title> view </Title>
                    <br></br>
                    <Num>
                        <Number> 721K </Number>
                        <Change>+11.01% </Change><FiTrendingUp/>   
                    </Num>
                                     
                </Item>
                <Item>
                    <Title> Visits </Title>
                    <br></br>
                    <Num>
                        <Number> 367K </Number>
                        <Change>+9.15% </Change><FiTrendingUp/>
                    </Num>                  
                </Item>
                <Item $odd>
                    <Title> New Users </Title>
                    <br></br>
                    <Num>
                        <Number> 1,156 </Number>
                        <Change>-0.56% </Change><FiTrendingDown/>    
                    </Num>                
                </Item>
                <Item>
                    <Title> Active Users </Title>
                    <br></br>
                    <Num>
                        <Number> 239K </Number>
                        <Change>-1.48% </Change><FiTrendingDown/>
                    </Num>                    
                </Item>
            </Status>
            
            
        </Center>        
    );
}

export default Dashboard;
