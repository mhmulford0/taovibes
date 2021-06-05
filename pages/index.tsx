import { GetServerSideProps } from 'next'
import Home from 'components/Home'
import axios from 'axios'

interface Props {
  products?: unknown[]
  error?: string
}

const Index: React.FC<Props> = ({ products, error }) => {
  return <Home products={products} error={error} />
}

export default Index

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data } = await axios.get(`${process.env.BASE_URL}/api/getproducts`)
    return {
      props: {
        products: data,
      },
    }
  } catch (error) {
    return {
      props: {
        error: 'Request Failed',
      },
    }
  }
}
