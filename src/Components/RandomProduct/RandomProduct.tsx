import { useEffect, useMemo, useState } from 'react'
import './RandomProduct.css'

function RandomProduct(): JSX.Element {
  const productArr = useMemo(
    () => ['Shoes', 'T-shirts', 'Jeans', 'Pants', 'Underwear'],
    [],
  )

  const getRandom = (myArray: any) => {
    return myArray[Math.floor(Math.random() * myArray.length)]
  }

  const [product, getProduct] = useState(getRandom(productArr))

  useEffect(() => {
    setInterval(() => {
      getProduct(getRandom(productArr))
    }, 1000)
  }, [productArr])

  return (
    <div className="RandomProduct">
      <br /> <br />
      <br />
      <br />
      <h2>
        <span>{product}</span>
      </h2>
    </div>
  )
}

export default RandomProduct
