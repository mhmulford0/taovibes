import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'

const stripe = new Stripe(`${process.env.SERVER_KEY}`, { apiVersion: '2020-08-27' })

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const prices = await stripe.prices.list()
  const products = await stripe.products.list()
  let result = []
  prices.data.map((price) => {
    products.data.map((product) => {
      if (price.product.toString() === product.id.toString()) {
        result.push({ price: price.id, ...product })
      }
      return null
    })
    return null
  })

  switch (req.method) {
    case 'GET':
      res.status(200).json(result)

      break
    default:
      res.status(400).end()
  }
}
