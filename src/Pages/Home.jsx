import React, { useEffect, useState } from 'react'
import Categories from '../components/Categories'
import SortPopup from '../components/SortPopup'
import PizzaCard from '../components/PizzaCard'
import PizzaSkeleton from '../skeleton/PizzaSkeleton'

function Home() {
  const [pizza, setPizza] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [activeCat, setActivCat] = useState(0)
  const [activeSort, setActivSort] = useState({
    name: 'попклярности', sortID: "rating"
  })
 
 

  async function getPizza() {
    await fetch((activeCat === 0) ? `https://645cdff7250a246ae310e149.mockapi.io/pizzas?sortBy=${activeSort.sortID}` : `https://645cdff7250a246ae310e149.mockapi.io/pizzas?category=${activeCat}&sortBy=${activeSort.sortID}`)
      .then((res) => res.json())
      .then((data) => {
        setPizza(data)
        setIsLoading(false)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getPizza()
  }, [activeCat,activeSort])

  return (
    <>
      <div className="content__top">
        <Categories
          items={['Все','Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
          value={activeCat}
          filterBy={(i) => setActivCat(i)}
        />
        <SortPopup 
          items={[{name: 'попклярности', sortID: "rating"}, {name: 'цене', sortID: "price"}, {name: 'алфавиту', sortID: "title"}]} 
          sortBy={(item) => setActivSort(item)}
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
