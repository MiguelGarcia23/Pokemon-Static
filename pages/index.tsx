import { NextPage } from 'next';
import { Button } from '@nextui-org/react';

import { Layout } from '../components/layouts';

const HomePage: NextPage = () => {
  return (
    <Layout title='Listado de Pokémons'>

      <Button color="gradient">
        Hola Mundo
      </Button>

    </Layout>
  )
}

export default HomePage
