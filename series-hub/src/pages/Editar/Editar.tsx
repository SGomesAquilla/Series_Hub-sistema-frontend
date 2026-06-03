import { useParams, useNavigate } from 'react-router-dom';

import { type Serie } from '../../components/SerieForm/SerieForm';
import SerieForm from '../../components/SerieForm/SerieForm'; 

export default function Editar() {
    const { id } = useParams();
    const navigate = useNavigate();

    const series: Serie[] = JSON.parse(
        localStorage.getItem('series') || '[]'
    );

    const serie = series.find(
        (s) => s.id === Number(id)
    );

    if (!serie) {
        return <h2>Série não encontrada.</h2>;
    }

    function atualizarSerie(serieAtualizada: Serie) {
        const novasSeries = series.map((s) => 
            s.id === serieAtualizada.id
                ? serieAtualizada
                : s  
        );

        localStorage.setItem(
            'series',
            JSON.stringify(novasSeries)
        );

        navigate('/series');
    }

    return (
        <>
            <h1>Editar Série</h1>

            <SerieForm serieInicial={serie} onAdicionarSerie={atualizarSerie} />
        </>
    )
}