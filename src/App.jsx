import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useLocation,
} from "react-router-dom";
import Steps from "./Steps";
import { useEffect } from "react";
import { MapPin, Phone, MessageCircleMore } from "lucide-react";

// MOCK PODACI (kasnije možeš iz baze ili API)
const products = [
  {
    id: "1",
    name: "Slatka Korpa Deluxe",
    image:
      "https://scontent.fbeg1-1.fna.fbcdn.net/v/t39.30808-6/467606654_122127282674526940_7282872985475392953_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=2a1932&_nc_ohc=tyivevFlmR0Q7kNvwHCvYfo&_nc_oc=AdoA4264wtfZqXtnsq0cJ8j24VwwDUDsPt-Cx2NXnex5C8snkG1eZnsXMElaklptk2Q&_nc_zt=23&_nc_ht=scontent.fbeg1-1.fna&_nc_gid=6lb_eDRDxWHyzMIRrcR6pQ&_nc_ss=7a32e&oh=00_AfzsWEuYYWcx0Eo7kbMKQtcJw7JJ419akOdJHE8qaxkn8g&oe=69C858B9",
    description: "Bogata korpa sa premium slatkišima i elegantnom dekoracijom.",
    price: 2990,
    contents: ["Ballantines", "Jacobs", "Kinder", "Dekorativna mašna"],
  },
  {
    id: "2",
    name: "Romantična Korpa",
    image:
      "https://scontent.fbeg2-1.fna.fbcdn.net/v/t39.30808-6/467679819_122127282398526940_6456442976464275777_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=ixHtQxDc0UYQ7kNvwG5TEo9&_nc_oc=Ado8bgiaq0GxbPTq7SaRqEIBY5TphhWByRreBh27FQam2JRxMK5-MbeeyiKlJZG-Ab4&_nc_zt=23&_nc_ht=scontent.fbeg2-1.fna&_nc_gid=TjshE39Wxllh2NTTW_MHLA&_nc_ss=7a32e&oh=00_AfxRp6v12DeuqT7mgvZTi0ClZO4VJ86HjezPFv936lQgKw&oe=69C8594B",
    description: "Savršen poklon za voljenu osobu.",
    price: 3490,
    contents: ["Čokolade", "Bela lala", "Sampanjac"],
  },
  {
    id: "3",
    name: "Rođendanska Korpa",
    image:
      "https://scontent.fbeg2-1.fna.fbcdn.net/v/t39.30808-6/482318464_122145844724526940_5429841974830566651_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=rqSwNyQPQsgQ7kNvwGNAK3H&_nc_oc=AdpbRK3CtZJTi0wmHdNOq-hNWpWRsT75WYRxJHxKoLsEM_sYS9FRj6dqBdC0FaF6v4Y&_nc_zt=23&_nc_ht=scontent.fbeg2-1.fna&_nc_gid=ZvQx_2MA-MHrjp2ipWxTdA&_nc_ss=7a32e&oh=00_Afy45V8UULx4czyaLUh53hJ8FtoGNoKlpt5gXiVPMtBKHA&oe=69C86768",
    description: "Idealna za rođendane i proslave.",
    price: 2590,
    contents: ["Bombone", "Čokolada", "Sampanjac", "Dekoracija"],
  },
];

// HEADER
function Header() {
  const { hash } = useLocation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Za lagani prelaz, bez trzanja
    });
  };

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]); // Aktivira se čim se heš u URL-u promeni

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <Link to="/" onClick={() => scrollToTop()}>
          <h1 className="text-2xl font-bold">🎁 Decor by Mirka</h1>
        </Link>
        <div className="space-x-4">
          <Link
            to="/"
            onClick={() => scrollToTop()}
            className="hover:text-pink-500"
          >
            Početna
          </Link>
          <Link to="/#kontakt" className="hover:text-pink-500">
            Kontakt
          </Link>
        </div>
      </nav>
    </header>
  );
}

// HOME
function Home() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Naše korpe</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="bg-white rounded-2xl shadow-sm hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-48 w-full object-cover hover:scale-105 transition duration-300"
            />

            {/* BITNO: flex + fixed height description */}
            <div className="p-4 flex flex-col flex-1">
              <h2 className="text-xl font-semibold">{product.name}</h2>

              <p className="text-gray-600 text-sm mt-2 h-12 overflow-hidden">
                {product.description}
              </p>

              {/* margin-top auto gura cenu dole */}
              <p className="text-lg font-bold mt-auto">{product.price} RSD</p>
            </div>
          </Link>
        ))}
      </div>
      <Steps />
      {/* KONTAKT */}
      <div id="kontakt" className="mt-16 bg-white p-6 rounded-2xl shadow">
        <h3 className="text-2xl font-bold mb-4">Kontakt</h3>
        <div className="space-y-3">
          <p className="flex items-center gap-4">
            <Phone className="w-6" />
            <span>
              Telefon:{" "}
              <a href="tel:+38160000000" className="text-pink-500">
                060000000
              </a>
            </span>
          </p>
          <p className="flex items-center gap-4">
            <MapPin className="w-6" />
            <span>Novi Sad</span>
          </p>
          <p className="flex items-center gap-4">
            <MessageCircleMore className="w-6" />
            <span>
              Facebook:{" "}
              <a
                href={`https://www.facebook.com/profile.php?id=61565808215425&locale=sr_RS`}
                target="_blank"
                className="text-pink-500"
              >
                Decor by Mirka
              </a>
            </span>
          </p>
          <p className="flex items-center gap-4">
            <MessageCircleMore className="w-6" />
            <span>
              Viber:{" "}
              <a
                href={`viber://chat?number=38163507070`}
                className="text-pink-500"
              >
                Decor by Mirka
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

// DETALJ STRANICA
function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) return <div className="p-6">Proizvod nije pronađen</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="rounded-2xl mb-6 w-full h-80 "
          />
        </div>

        {/* DESNO - SADRŽAJ */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-2xl font-bold mb-6">{product.price} RSD</p>

          <h3 className="text-xl font-semibold mb-2">Sadržaj:</h3>
          <ul className="list-disc list-inside mb-6">
            {product.contents.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <div className="flex flex-col">
            <button
              onClick={() =>
                window.open(
                  "https://www.facebook.com/profile.php?id=61565808215425&locale=sr_RS",
                  "_blank",
                )
              }
              className="w-60 px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600"
            >
              Poruči putem Facebook-a
            </button>
            <button
              onClick={() => window.open("viber://chat?number=38163507070")}
              className=" w-60 px-6 py-3 bg-purple-600 text-white rounded-xl mt-2"
            >
              Viber
            </button>
          </div>

          <div>
            <Link
              to="/"
              className="inline-block mt-6 px-4 py-2 bg-black text-white rounded-xl"
            >
              Nazad
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// APP
export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}
