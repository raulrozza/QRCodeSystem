import { useState, useEffect } from 'react'
import { Card, Title, Content } from './styles'
import api from '../../services/api'
import QRCode from 'qrcode.react'

function PriceCard () {
  const [products, setProducts] = useState({ })

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get('/products/random')

        setProducts(response.data)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  return (
    <div>
      <Card>
        <Title>
          {products.name}
        </Title>
        <Content>
          <QRCode value={'http://localhost:3333/products/random'}/>
        </Content>

      </Card>
    </div>
  )
}

export default PriceCard
