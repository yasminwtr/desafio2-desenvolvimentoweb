import React, { useState, useEffect } from 'react'
import Vaga from '../components/Vaga';

function Vagas() {
    const vagas = [{
        vaga: '1',
        disponivel: true,
        placa: '',
    },
    {
        titulo: '2',
        disponivel: true,
        placa: '',
    },
    {
        titulo: '3',
        disponivel: true,
        placa: '',
    },
    {
        titulo: '4',
        disponivel: false,
        placa: 'MWP9614',
    },
    {
        titulo: '5',
        disponivel: false,
        placa: 'YTS1802',
    },
    ]

    return (
        <div className="vagas">
            <h2>Vagas do Estacionamento</h2>

            <div className="listaVagas">
                {vagas.map((vaga) => {
                    return <Vaga vaga={vaga} />
                })}
            </div>
        </div>
    );
}

export default Vagas;