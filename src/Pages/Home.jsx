import React, { useEffect, useState } from 'react'
import Categories from '../components/Categories'
import SortPopup from '../components/SortPopup'
import PizzaCard from '../components/PizzaCard'
import PizzaSkeleton from '../skeleton/PizzaSkeleton'

function Home() {
  const [pizza, setPizza] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [activeCat, setActivCat] = useState(null)
  const [activeSort, setActivSort] = useState(0)
  
console.log(activeCat);
 console.log(activeSort);

  async function getPizza() {
    await fetch('https://645cdff7250a246ae310e149.mockapi.io/pizzas?')
      .then((res) => res.json())
      .then((data) => {
        setPizza(data)
        setIsLoading(false)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getPizza()
  }, [])

  return (
    <>
      <div className="content__top">
        <Categories
          items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
          value={activeCat}
          filterBy={(i) => setActivCat(i)}
        />
        <SortPopup 
          items={['популярности', 'цене', 'алфавиту']} 
          sortBy={(i) => setActivSort(i)}
          value={activeSort}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((i, index) => <PizzaSkeleton key={index}/>)
          : pizza.map((item) => <PizzaCard {...item} key={item.id} />)}
      </div>
    </>
  )
}

export default Home
