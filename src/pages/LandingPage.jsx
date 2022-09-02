import { getItems } from "../data";

import Hero from "../components/hero/Hero";
import HeaderInfo from "../components/headerInfo/HeaderInfo";
import ItemList from "../components/itemList/ItemList";
import { Container, ItemGrid } from "../components/styles";
import { carouselData, categoriesData } from "../data";
import Categories from "../components/categories/Categories";

export default function LandingPage() {
  const data = getItems();

  const newProducts = data.filter((d) => d.state === "New Release");
  const newsWoman = data.filter((d) => d.genero === "mujer");
  const newsWomen = data.filter((d) => d.genero === "hombre");
  return (
    <div>
      <Hero items={carouselData} />
      <Container>
        <HeaderInfo />

        <ItemGrid className="mb-2">
          {categoriesData.map((item, a) => (
            <Categories key={a} item={item} />
          ))}
        </ItemGrid>

        <ItemList data={newProducts} title="NUEVO LANZAMIENTO" />
        <ItemList data={newsWoman} title="NOVEDADES MUJER" />
        <ItemList data={newsWomen} title="NOVEDADES HOMBRE" />
      </Container>
    </div>
  );
}
