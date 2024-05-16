import React, { useState } from 'react';

const Vaga = (props) => {
    const { vaga } = props

    return (
        <div className="vaga">
            <div>
                <h4>Vaga {vaga.vaga}</h4>
                {vaga.disponivel ?
                    <span>Disponível para reserva.</span>
                    :
                    <span>Reservada para o veículo de placa {vaga.placa}.</span>
                }
            </div>

            {vaga.disponivel ?
                <a href="reservar" id="reservar">Reservar</a>
                :
                <></>
            }
        </div>
    )
}

export default Vaga; 