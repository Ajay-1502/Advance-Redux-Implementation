import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const dummyProducts = [
    {
      id: 'p1',
      price: 200,
      title: 'Book 1',
      description: 'The first book i read',
    },
    {
      id: 'p2',
      price: 300,
      title: 'Book 2',
      description: 'The second book i read',
    },
  ];
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummyProducts.map((product) => (
          <ProductItem
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
