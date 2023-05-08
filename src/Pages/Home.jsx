import React from 'react'
import Categories from '../components/Categories'
import SortPopup from '../components/SortPopup'
import PizzaCard from '../components/PizzaCard'

function Home({ items }) {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
        />
        <SortPopup items={['популярности', 'цене', 'алфавиту']} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <PizzaCard items={items} />
    </div>
  )
}

export default Home
