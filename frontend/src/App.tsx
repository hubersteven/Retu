import { useEffect, useState } from 'react';
import api from './api/axios';

interface Sitio {
  _id: string;
  nombre: string;
  ubicacion: string;
}

function App() {
  const [sitios, setSitios] = useState<Sitio[]>([]);

  useEffect(() => {
    const fetchSitios = async () => {
      try {
        const res = await api.get<Sitio[]>('/sitios');
        setSitios(res.data);
      } catch (error) {
        console.error('Error al obtener sitios:', error);
      }
    };

    fetchSitios();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🌴 Sitios Turísticos</h1>
      {sitios.length === 0 ? (
        <p>No hay sitios registrados.</p>
      ) : (
        <ul>
          {sitios.map((sitio) => (
            <li key={sitio._id}>
              <strong>{sitio.nombre}</strong> - {sitio.ubicacion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;