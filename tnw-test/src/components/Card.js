import { useState } from "react";
import { useSelector } from "react-redux";
import Styles from './card.module.scss';
 
const titleStyle = {
    fontFamily:'arial',
    fontSize:'14px',
    fontWeight:'100'
}

const descrptionStyle = {
    fontFamily: 'arial',
    fontWeight:'50',
    color:'grey',
    fontSize:'10px'
}

const divStyle = {
    width:'75%',
    margin:'10px',
    height:'auto',
    backgroundColor:'white',
    padding:'5px',
    heght:'75%',
}

const priceStyle = {
    fontSize:'14px'
}

const perksStyle = {
    fontSize:'10px',
    color:'grey',
    fontFamily:'arial',
    backgroundColor:'rgba(138,221,45,0.2)',
    marginBottom:'12px'
}





export function Ticket() {
const tickets = useSelector((state) => state.tickets);
const [thisPerks, setPerks] = useState([
    'Access to TNW Conference Digital',
    'Apply for pitch competition',
    'Re-watch talks on demand after the event',
    '1-day startup booth (In-person OR Digital)',
    '2 Digital-only Business Passes'
]);

    return (
        <div style={{display:'flex', flexDirection:'row', height:'100%'}}>
            <div  className={Styles.perks}>
            <ul id="myUL">
                <li className={Styles.styleList2}>{thisPerks[0]}</li>
                <li className={Styles.styleList}>{thisPerks[1]}</li>
                <li className={Styles.styleList2}>{thisPerks[2]}</li>
                <li className={Styles.styleList}>{thisPerks[3]}</li>
                <li className={Styles.styleList2}>{thisPerks[4]}</li>
            </ul>
            </div>
        <div className={Styles.Div}>
            {
               tickets && tickets.map((ticket, id) => (
                   <div id={id} style={divStyle}>
                     {ticket.ticketTopLabel !== null && <h1 className={Styles.styleTopLabel}>{ticket.ticketTopLabel}</h1>} 
                     <h1 style={titleStyle}><strong>{ticket.ticketName}</strong></h1>
                     <h3 style={descrptionStyle}>{ticket.ticketDescription}</h3>
                     <h1 style={priceStyle}> € {ticket.ticketActualPrice}</h1>
                     <button className={Styles.styleButton}>REGISTER NOW</button>

                     <div>
                         {
                                 <h4>   
                                    {  ticket.ticketPerks && ticket.ticketPerks.map((item2) => {
                                        for(var i = 0; i < thisPerks.length; i++){
                                            console.log(item2.col1); console.log(thisPerks[i])
                                            if(item2.col1.length === thisPerks[i].length){
                                                return <img style={{height:'15%', width:'15%'}} src='https://as2.ftcdn.net/v2/jpg/02/51/67/37/500_F_251673758_4WGICOL6ae3Ny45TafmBSBubIvmI4Jkz.jpg'/>
                                            } else {
                                                return <h1 style={perksStyle}>x</h1> 
                                            }
                                        }
                                    })  
                                    } 
                                 </h4>
                            
                         }
                     </div>    
                     <h1 style={priceStyle}> € {ticket.ticketActualPrice}</h1>
                     <button className={Styles.styleButton}>REGISTER NOW</button>
                     </div>
               ))
            }
        </div>
        </div>
    )
}
