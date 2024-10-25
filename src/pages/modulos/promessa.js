import { useState } from "react";
import Footer from"./modulos/footer";
import Menu from"./modulos/navbar";
import {Container} from "react-bootstrap";
export default function Promessa(){
    const[pao, setpao]=useState("");
    setTimeout(()=>{
        document.title="promessa é divida";
        setpao=("é divida");
    },2000);
    
    return<>
    <Menu/>
    <Container>
    Promessa {pao==""?}
    </Container>
    <Footer/>
    </>
}