import React, { useEffect, useState } from 'react'
import Categories from '../components/Categories'
import SortPopup from '../components/SortPopup'
import PizzaCard from '../components/PizzaCard'
import PizzaSkeleton from '../skeleton/PizzaSkeleton'
import { Pagination } from '@mui/material'
import { useContext } from 'react'
import { SearchContext } from '../App'

function Home() {
  const {searchValue} = useContext(SearchContext)
  const [pizza, setPizza] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [activeCat, setActivCat] = useState(0)
  const [activeSort, setActivSort] = useState({
    name: 'попклярности', sortID: "rating"
  })
  const [currentPage, setCurrentPage] = useState(1)

  async function getPizza() {
    const category = activeCat > 0 ? `category=${activeCat}` : ''
    const search = searchValue ? `&search=${searchValue}` : ''

    setIsLoading(true)
    await fetch(`https://645cdff7250a246ae310e149.mockapi.io/pizzas?page=${currentPage}&limit=3&${category}&sortBy=${activeSort.sortID}${search}`)
      .then((res) => res.json())
      .then((data) => {
        setPizza(data)
        setIsLoading(false)
      })
      .catch((err) => console.log(err))
      window.scrollTo(0, 0)
  }

  useEffect(() => {
    getPizza()
  }, [activeCat, activeSort, searchValue, currentPage])

  const skeleton = [...new Array(8)].map((i, index) => <PizzaSkeleton key={index} />)
  const pizzas = pizza.map((item) => <PizzaCard {...item} key={item.id} />)

  return (
    <>
      <div className="content__top">
        <Categories
          items={['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
          value={activeCat}
          filterBy={(i) => setActivCat(i)}
        />
        <SortPopup
          items={[{ name: 'попклярности', sortID: "rating" }, { name: 'цене', sortID: "price" }, { name: 'алфавиту', sortID: "title" }]}
          sortBy={(item) => setActivSort(item)}
          value={activeSort}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? skeleton
          : pizzas}
      </div>
      <div className='pagination'>
        <Pagination
          count={4}
          color="primary"
          defaultPage={1}
          onChange={(e, page) => setCurrentPage(page)} />
      </div>
    </>
  )
}

export default Home
