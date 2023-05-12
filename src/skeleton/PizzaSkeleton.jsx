import React from "react"
import ContentLoader from "react-content-loader"

const PizzaSkeleton = (props) => (
  <ContentLoader 
  className="pizza-block"
    speed={2}
    width={287}
    height={485}
    viewBox="0 0 287 485"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="150" cy="150" r="138" /> 
    <rect x="21" y="300" rx="10" ry="10" width="270" height="25" /> 
    <rect x="21" y="349" rx="10" ry="20" width="270" height="84" /> 
    <rect x="21" y="446" rx="10" ry="10" width="90" height="27" /> 
    <rect x="139" y="449" rx="10" ry="10" width="150" height="40" />
  </ContentLoader>
)

export default PizzaSkeleton