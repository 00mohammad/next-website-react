import Button from "../../components/ui/Button";
import { useProducts } from "../../features/products/hooks/useProducts";
import Loading from "../../components/feedback/Loading";
import ErrorMessage from "../../components/feedback/ErrorMessage";

function HomePage() {
  const { data: products, isLoading, isError } = useProducts();

  if (isLoading) return <Loading />;
  if (isError) return <ErrorMessage message="Could not load products." />;

  return (
    <section className="container home-page">
      <h1>Welcome to React</h1>
      <p>Your professional frontend project is ready.</p>
      <Button onClick={() => console.log("Project is ready!")}>
        Get Started
      </Button>

      <h2>Demo Products</h2>
      <div className="product-list">
        {products?.map((product) => (
          <article className="product-card" key={product.id}>
            <h3>{product.title}</h3>
            <p>${product.price}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default HomePage;
