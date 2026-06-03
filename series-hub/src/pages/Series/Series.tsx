import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {type Serie } from '../../components/SerieForm/SerieForm';
import SerieList from '../../components/SerieList/SerieList';
import { mockSeries } from '../../data/mockSeries';

export default function Series() {
    const navigate = useNavigate();

    const [series, setSeries] = useState<Serie[]>(() => {
        const seriesSalvas = localStorage.getItem('series');

        return seriesSalvas
            ? JSON.parse(seriesSalvas)
            : mockSeries;
    });

    function editarSerie(serie: Serie) {
        navigate(`/editar/${serie.id}`);
    }

    function excluirSerie(id: number) {
        const novasSeries = series.filter(
            (serie) => serie.id !== id
        );

        setSeries(novasSeries);

        localStorage.setItem(
            'series',
            JSON.stringify(novasSeries)
        );
    }

    return (
        <SerieList
        series={series}
        onEditar={editarSerie}
        onExcluir={excluirSerie}
        />
    );
}