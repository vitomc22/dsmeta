import axios from 'axios';
import { toast } from 'react-toastify';
import icon from '../../assets/img/notification-icon.png'
import { BASE_URL } from '../../utils/request';
import './styles.css'

type Props = {
    saleId: number;

}
function handleClick(id : number){
    axios(`${BASE_URL}/sales/${id}/notification`)
    .then(_response =>{
        toast.info("SMS ENVIADO COM SUCESSO!");

    });
}

function NotificationButton( {saleId} : Props) {
    return (
        <>
           <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
            <img src={icon} alt="Notificar"></img>
            </div>
        </>
    )
}
export default NotificationButton