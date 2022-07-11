import type { NextPage } from 'next'
import Titulo from '../ui/components/Titulo/Titulo';
import Lista from '../ui/components/Lista/Lista';



const Home: NextPage = () => {
  return (
    <div>
      <Titulo
        titulo=""
        subtitulo={
          <span>
            Com um pequeno valor mensal, você <br />
            pode <strong>adotar um pet virtualmente</strong>
          </span>
        } />

      <Lista
        pets={[
          {
            id: 1,
            nome: 'bidu',
            historia: 'adfasdfasdfasdf',
            foto: 'https://skycms.s3.amazonaws.com/images/5495100/cachorro-card-1.png'
          },

          {
            id: 2,
            nome: 'Scoby',
            historia: 'adfasdfasdfasdf',
            foto: 'https://skycms.s3.amazonaws.com/images/5495100/cachorro-card-1.png'
          },

        ]}
      />
    </div>
  )
}

export default Home
