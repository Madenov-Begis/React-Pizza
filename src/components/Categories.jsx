import React, { useState } from 'react'

function Categories({ items }) {
  const [activeItem, setActiveItem] = useState(null)

  const onSelectItem = (index) => {
    setActiveItem(index)
  }
  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => onSelectItem(null)}
          className={activeItem === null ? 'active' : ''}
        >
          Все
        </li>
        {items.map((item, index) => {
          return (
            <li
              onClick={() => onSelectItem(index)}
              className={activeItem === index ? 'active' : ''}
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
