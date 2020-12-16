import React from "react";
import "./styles/main.scss";
import Header from "./components/Header";
import Trending from "./components/Trending";
import About from "./components/About";
import Hours from "./components/Hours";
import Chefs from "./components/Chefs";
import IndividualItem from "./components//IndividualItem";
import Menu from "./components/Menu";
import ButtonAppBar from "./components/ButtonAppBar";
import {
  trendingFoods,
  foodsMenu,
  trendingDesserts,
  dessertsMenu,
  trendingDrinks,
  drinksMenu,
} from "./data";
import { Route } from "react-router-dom";
import { BsArrowBarRight } from "react-icons/bs";

export default function App() {
  return (
    <div className="App">
      <section className="nav-section">
        <ButtonAppBar />
      </section>
      <Route exact path="/">
        <section className="header-section">
          <Header />
        </section>
        <section className="trending-section" id="foods">
          <Trending
            data={trendingFoods}
            title={"Trending Foods"}
            goToFoodsMenu="Go To Full Menu"
            arrowForFoods={<BsArrowBarRight className="arrow" />}
          />
        </section>
        <section className="trending-section" id="desserts">
          <Trending
            data={trendingDesserts}
            title={"Trending Desserts"}
            goToDessertsMenu="Go To Full Menu"
            arrowForDesserts={<BsArrowBarRight className="arrow" />}
          />
        </section>
        <section className="trending-section" id="drinks">
          <Trending
            data={trendingDrinks}
            title={"Trending Drinks"}
            goToDrinksMenu="Go To Full Menu"
            arrowForDrinks={<BsArrowBarRight className="arrow" />}
          />
        </section>
        <section className="about-section" id="about">
          <About />
        </section>
        <section className="chefs-section" id="chefs">
          <Chefs
            image="https://static.wixstatic.com/media/e1c78c_a5a164acd00a4ae7940be550e4915303.jpg/v1/fill/w_1066,h_682,al_c,q_85,usm_0.66_1.00_0.01/e1c78c_a5a164acd00a4ae7940be550e4915303.webp"
            title="Meet The Chef"
            smallTitle="Known As One Of The Best In Town"
            contact="Tel: 123-456-7890 | Email: chef@chops.com"
          />
          <Chefs
            image="https://preview.colorlib.com/theme/dingo/img/about.png"
            title="Where The Food’s As Good As The Root Beer."
            smallTitle="Satisfying people hunger for simple pleasures
            "
          />
        </section>
        <section className="hours-section" id="hours">
          <Hours />
        </section>
      </Route>
      <Route exact path="/item/:id">
        <section className="individual-section">
          <IndividualItem />
        </section>
      </Route>
      <Route exact path="/menu">
        <section className="menu-section">
          <Menu menu={foodsMenu} />
        </section>
      </Route>
      <Route exact path="/desert-menu">
        <section className="menu-section">
          <Menu menu={dessertsMenu} />
        </section>
      </Route>
      <Route exact path="/drinks-menu">
        <section className="menu-section">
          <Menu menu={drinksMenu} />
        </section>
      </Route>
    </div>
  );
}
