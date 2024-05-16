import React, { useState, useEffect, useRef } from 'react'

function Reservar() {
    const formRef = useRef(null);
    const [placa, setPlaca] = useState('');
    const [proprietario, setProprietario] = useState('');
    const [apartamento, setApartamento] = useState('');
    const [bloco, setBloco] = useState('');
    const [modelo, setModelo] = useState('');
    const [ano, setAno] = useState('');
    const [cor, setCor] = useState('');
    const [vaga, setVaga] = useState('');

    function reservar() {
        if ((placa, proprietario, apartamento, bloco, modelo, ano, cor, vaga) !== '') {
            console.log(`Informações da reserva cadastrada:
            Placa do Veículo: ${placa}
            Nome do Proprietário: ${proprietario}
            Número do Apartamento: ${apartamento}
            Bloco do Apartamento: ${bloco}
            Modelo do Veículo: ${modelo}
            Cor do Veículo: ${cor}
            Número da Vaga de Estacionamento: ${vaga}`);

            alert('Sua reserva foi cadastrada com sucesso!');
            formRef.current.reset();
            setPlaca('');
            setProprietario('');
            setApartamento('');
            setBloco('');
            setModelo('');
            setAno('');
            setCor('');
            setVaga('');

        } else {
            alert("Preencha todos os campos!");
        }
    }

    return (
        <div className="formulario">
            <h2>Cadastro de Reserva de Vagas</h2>

            <form id="cadastroReserva" ref={formRef} onSubmit={reservar}>
                <div className="input-flex">
                    <div>
                        <label>Placa do Veículo:</label>
                        <input
                            type="text"
                            id="placa"
                            required
                            onChange={(e) => setPlaca(e.target.value)}
                        />
                    </div>
                </div>

                <div>
                    <label>Nome do Proprietário:</label>
                    <input
                        type="text"
                        id="proprietario"
                        required
                        onChange={(e) => setProprietario(e.target.value)}
                    />
                </div>

                <div className="input-flex">
                    <div>
                        <label>Número do Apartamento:</label>
                        <input
                            type="text"
                            id="apartamento"
                            required
                            onChange={(e) => setApartamento(e.target.value)}
                        />
                    </div>

                    <div>
                        <label>Bloco do Apartamento:</label>
                        <input
                            type="text"
                            id="bloco"
                            required
                            onChange={(e) => setBloco(e.target.value)}
                        />
                    </div>
                </div>

                <label>Modelo do Veículo:</label>
                <input
                    type="text"
                    id="modelo"
                    required
                    onChange={(e) => setModelo(e.target.value)}
                />

                <div className="input-flex">
                    <div>
                        <label>Cor do Veículo:</label>
                        <input
                            type="text"
                            id="cor"
                            required
                            onChange={(e) => setCor(e.target.value)}
                        />
                    </div>
                </div>

                <label>Número da Vaga de Estacionamento:</label>
                <select
                    id="vaga"
                    required
                    onChange={(e) => setVaga(e.target.value)}
                >
                    <option value="1">Vaga 1</option>
                    <option value="2">Vaga 2</option>
                    <option value="3">Vaga 3</option>
                </select>

                <button type="submit" id="cadastrar" onClick={reservar}>Reservar</button>
            </form>

            <a href="/" id="visualizar">Visualizar todas as vagas</a>
        </div>
    );
}

export default Reservar;