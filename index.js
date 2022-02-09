import React from 'react'
import ReactDOM from 'react-dom'
import Logo from './images/lizard.png'
import './styles.css'


function Lizard() {
    return (
        <>
        <img className='img' src={Logo} />
        <div className='liz' >       
                <h1 >LIZARD</h1><br></br>
                <h4>
                Lizards are widespread group of squamate
                reptiles,with over 6,000 species,ranging across
                allcontinents except Antarctica
                <br></br></h4>
                <h3 >SHARE &nbsp; &nbsp;&nbsp;&nbsp;  LEARN MORE</h3>
            
        </div>
        </>
    )
}
ReactDOM.render(
    <div>
        <center>
    
     <Lizard />,
    </center>
    </div>,
    document.getElementById("root")
)