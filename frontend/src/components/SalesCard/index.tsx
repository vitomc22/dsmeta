import './styles.css'
import NotificationButton from '../NotificationButton'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { useState } from 'react'


function SalesCard() {
    
    const min = new Date(new Date().setDate(new Date().getDate()- 365));
    const max = new Date();

    const [minDate, setMinDate] = useState(min);
    const [maxDate,setMaxDate]= useState(max);      //declarando um estado de hook, react é uma bagunça!!!
    return (
        <>
            <div className="dsmeta-card">
                <h2 className="dsmeta-sales-title">Período de Vendas</h2>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="dsmeta-form-control"
                        dateFormat={"dd/MM/yyy"}
                    />
                </div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
                        className="dsmeta-form-control"
                        dateFormat={"dd/MM/yyy"}
                    />
                </div>
                <div>
                    <table className="dsmeta-sales-table">
                        <caption className="dsmeta-caption-table">Informativo de vendas analítico</caption>
                        <thead>
                            <tr>
                                <th className="show992">Id</th>
                                <th className="show576">Data</th>
                                <th>Vendedor</th>
                                <th className="show992">Visitas</th>
                                <th className="show992">Vendas</th>
                                <th>Total</th>
                                <th>Notificar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="show992">#341</td>
                                <td className="show576">08/07/2022</td>
                                <td>Anakin</td>
                                <td className="show992">15</td>
                                <td className="show992">11</td>
                                <td>R$ 80,00</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <NotificationButton />
                                    </div>
                                </td>

                            </tr>
                            <tr>
                                <td className="show992">#341</td>
                                <td className="show576">08/07/2022</td>
                                <td>Anakin</td>
                                <td className="show992">15</td>
                                <td className="show992">11</td>
                                <td>R$ 80,00</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <NotificationButton />
                                    </div>
                                </td>

                            </tr>
                            <tr>
                                <td className="show992">#341</td>
                                <td className="show576">08/07/2022</td>
                                <td>Anakin</td>
                                <td className="show992">15</td>
                                <td className="show992">11</td>
                                <td>R$ 80,00</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <NotificationButton />
                                    </div>
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default SalesCard