import React from 'react'

function Categories({ items, value, filterBy }) {

  const onSelectItem = (index) => {
    filterBy(index)
  }
  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => onSelectItem(null)}
          className={value === null ? 'active' : ''}
        >
          Все
        </li>
        {items && items.map((item, index) => {
          return (
            <li
              onClick={() => onSelectItem(index)}
              className={value === index ? 'active' : ''}
              key={`${item}_${index}`}
            >
              {item}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Categories
