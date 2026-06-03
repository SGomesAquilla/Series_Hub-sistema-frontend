import SerieForm, {
    type Serie,
} from '../../components/SerieForm/SerieForm';

import { mockSeries } from '../../data/mockSeries';

export default function Cadastro() {
    function adicionarSerie(serie: Serie) {
        const seriesSalvas = localStorage.getItem('series');

        const listaAtual: Serie[] = seriesSalvas
            ? JSON.parse(seriesSalvas)
            : [...mockSeries];

        listaAtual.push(serie);

        localStorage.setItem(
            'series',
            JSON.stringify(listaAtual)
        );

        alert('Série cadastrada com sucesso!');
    }

    return (
        <>
            <h1>Cadastrar Séries</h1>

            <SerieForm onAdicionarSerie={adicionarSerie} />
        </>
    );
}