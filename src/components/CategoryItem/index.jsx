import React from 'react'
import {Container, CategoryImage} from './styled'
const CategoryItem = ({data,activeCategory, setActiveCategory}) => {
const handleCategoryClick = () => {
    setActiveCategory(data.id);
}
const isActive = data.id === activeCategory;

  return (
    <Container active={isActive} id={data.id}
    onClick={handleCategoryClick}
    data-tooltip-content={data.name} data-tooltip-id="tip-top"
    >
        <CategoryImage src={data.image} alt={data.title} />
    </Container>
  )
}

export default CategoryItem
