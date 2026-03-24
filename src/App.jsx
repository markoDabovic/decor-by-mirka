import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: "1",
    name: "Slatka Korpa Deluxe",
    image: "https://via.placeholder.com/300",
    description: "Prelepo dekorisana korpa sa čokoladama, bombonama i keksom.",
    items: ["Milka čokolada", "Ferrero Rocher", "Kinder Bueno", "Razni keksi"],
  },
  {
    id: "2",
    name: "Romantična Korpa",
    image: "https://via.placeholder.com/300",
    description: "Idealna za poklon voljenoj osobi.",
    items: ["Čokolada u obliku srca", "Bombonjera", "Plišana igračka"],
  },
];

function Home() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="shadow-xl rounded-2xl">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-t-2xl"
          />
          <CardContent className="p-4">
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p className="text-sm text-gray-600">{product.description}</p>
            <Link to={`/product/${product.id}`}>
              <Button className="mt-4">Pogledaj više</Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) return <div>Proizvod nije pronađen</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img
        src={product.image}
        alt={product.name}
        className="rounded-2xl w-full"
      />
      <h1 className="text-3xl font-bold mt-4">{product.name}</h1>
      <p className="mt-2 text-gray-600">{product.description}</p>

      <h3 className="mt-6 text-xl font-semibold">Sadržaj korpe:</h3>
      <ul className="list-disc ml-6 mt-2">
        {product.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <Link to="/">
        <Button className="mt-6">Nazad</Button>
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}
