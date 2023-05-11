import classNames from 'classnames'
import React, { Children } from 'react'

function Button({ className, children }) {
  return (
    <button className={classNames('button', className)}>
      {children}
    </button>
  )
}


export default Button
