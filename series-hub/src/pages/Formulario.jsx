import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api/api';

const ESTADO_INICIAL = {
  titulo: '',
  numeroTemporadas: '',
  dataLancamentoTemporada: '',
  diretor: '',
  produtora: '',
  categoria: '',
  dataAssistiu: '',
};

const CATEGORIAS = [
  'Ação',
  'Aventura',
  'Comédia',
  'Drama',
  'Fantasia',
  'Ficção Científica',
  'Romance',
  'Suspense',
  'Terror',
  'Documentário',
];

function Formulario() {
  const [form, setForm] = useState(ESTADO_INICIAL);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState(null);

  const navigate = useNavigate();
  const { id } = useParams();
  const isEdicao = Boolean(id);

  useEffect(() => {
    if (!isEdicao) return;

    async function carregarSerie() {
      try {
        setLoading(true);
        const { data } = await api.get(`/series/${id}`);
        setForm(data);
      } catch (err) {
        setErro('Não foi possível carregar os dados da série.');
      } finally {
        setLoading(false);
      }
    }

    carregarSerie();
  }, [id, isEdicao]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErro(null);

    try {
      setLoading(true);
      if (isEdicao) {
        await api.put('/series', { ...form, id: Number(id) });
      } else {
        await api.post('/series', form);
      }
      navigate('/series');
    } catch (err) {
      setErro('Erro ao salvar a série. Verifique se a API está rodando.');
    } finally {
      setLoading(false);
    }
  }

  if (loading && isEdicao) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-dark" role="status" />
        <p className="mt-3 text-muted">Carregando dados da série...</p>
      </div>
    );
  }

  return (
    <div className="row justify-content-center">
      <div className="col-lg-8">

        <div className="d-flex align-items-center gap-3 mb-4">
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={() => navigate('/series')}
          >
            ← Voltar
          </button>
          <h2 className="fw-bold mb-0">
            {isEdicao ? '✏️ Editar Série' : '➕ Nova Série'}
          </h2>
        </div>

        {erro && (
          <div className="alert alert-danger" role="alert">
            ⚠️ {erro}
          </div>
        )}

        <div className="card border-0 shadow-sm">
          <div className="card-body p-4">
            <form onSubmit={handleSubmit}>

              {/* Título */}
              <div className="mb-3">
                <label htmlFor="titulo" className="form-label fw-semibold">
                  Título <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="titulo"
                  name="titulo"
                  className="form-control"
                  value={form.titulo}
                  onChange={handleChange}
                  placeholder="Ex: Breaking Bad"
                  required
                />
              </div>

              <div className="row g-3">
                {/* Número de Temporadas */}
                <div className="col-md-6">
                  <label htmlFor="numeroTemporadas" className="form-label fw-semibold">
                    Número de Temporadas <span className="text-danger">*</span>
                  </label>
                  <input
                    type="number"
                    id="numeroTemporadas"
                    name="numeroTemporadas"
                    className="form-control"
                    value={form.numeroTemporadas}
                    onChange={handleChange}
                    min="1"
                    placeholder="Ex: 5"
                    required
                  />
                </div>

                {/* Categoria */}
                <div className="col-md-6">
                  <label htmlFor="categoria" className="form-label fw-semibold">
                    Categoria <span className="text-danger">*</span>
                  </label>
                  <select
                    id="categoria"
                    name="categoria"
                    className="form-select"
                    value={form.categoria}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecione...</option>
                    {CATEGORIAS.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="row g-3 mt-1">
                {/* Diretor */}
                <div className="col-md-6">
                  <label htmlFor="diretor" className="form-label fw-semibold">
                    Diretor <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="diretor"
                    name="diretor"
                    className="form-control"
                    value={form.diretor}
                    onChange={handleChange}
                    placeholder="Ex: Vince Gilligan"
                    required
                  />
                </div>

                {/* Produtora */}
                <div className="col-md-6">
                  <label htmlFor="produtora" className="form-label fw-semibold">
                    Produtora <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="produtora"
                    name="produtora"
                    className="form-control"
                    value={form.produtora}
                    onChange={handleChange}
                    placeholder="Ex: AMC"
                    required
                  />
                </div>
              </div>

              <div className="row g-3 mt-1">
                {/* Data de Lançamento da Temporada */}
                <div className="col-md-6">
                  <label htmlFor="dataLancamentoTemporada" className="form-label fw-semibold">
                    Data de Lançamento da Temporada <span className="text-danger">*</span>
                  </label>
                  <input
                    type="date"
                    id="dataLancamentoTemporada"
                    name="dataLancamentoTemporada"
                    className="form-control"
                    value={form.dataLancamentoTemporada}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Data em que Assistiu */}
                <div className="col-md-6">
                  <label htmlFor="dataAssistiu" className="form-label fw-semibold">
                    Data em que Assistiu <span className="text-danger">*</span>
                  </label>
                  <input
                    type="date"
                    id="dataAssistiu"
                    name="dataAssistiu"
                    className="form-control"
                    value={form.dataAssistiu}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Botões */}
              <div className="d-flex gap-3 mt-4">
                <button
                  type="submit"
                  className="btn btn-dark px-4"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" />
                      Salvando...
                    </>
                  ) : isEdicao ? (
                    '💾 Salvar Alterações'
                  ) : (
                    '➕ Cadastrar Série'
                  )}
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary px-4"
                  onClick={() => navigate('/series')}
                  disabled={loading}
                >
                  Cancelar
                </button>
              </div>

            </form>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Formulario;