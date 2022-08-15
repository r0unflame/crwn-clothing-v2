import './directory.styles.scss';
import CategoryItem from '../category-item/category-item.component';

const Directory = ({categories}) => {
  return (
    <div className="categories-container">
      {categories.map(category => (
        <CategoryItem category={category}></CategoryItem>
      ))}
    </div>
  )
}

export default Directory;