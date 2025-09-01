import "./home.css";
import {
  GetMealIcon,
  DonateIcon,
  HomeBanner1,
  HomeBanner2,
} from "../ImagesImport";
import About from "../about/About";
import MealService from "./meal-service/MealService";
import Testimonial from "./testimonial/Testimonial";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home-con container">
        <section className="home flex">
          <div className="left intro">
            <div className="text">
              <h1>
                Sharing <span>Meal</span>, Sharing <span>Joy</span>
              </h1>
              <p>
                Welcome to Meals On Wheels — where kindness meets good food. We
                deliver hot, healthy meals to adults who need support. Our goal
                is simple: no one should go hungry due to age, illness, or disability.
              </p>
            </div>
            <div className="btn-con flex">
              <NavLink to="/register" className="flex btn primary">
                Get Meal <img src={GetMealIcon} alt="get meal icon" />
              </NavLink>
              <NavLink to="/donate" className="flex btn secondary">
                Donate <img src={DonateIcon} alt="donate icon" />
              </NavLink>
            </div>
          </div>
          <div className="right">
            <img className="first-img" src={HomeBanner1} alt="Home Image" />
            <img
              className="second-img"
              src={HomeBanner2}
              alt="Woman receiving meal"
            />
          </div>
        </section>

        <div className="status">
          <div>
            <h3>$15M+</h3>
            <p>Funds Donated</p>
          </div>
          <div>
            <h3>4,583+</h3>
            <p>Received Donations</p>
          </div>
          <div>
            <h3>1,032+</h3>
            <p>Campaigns Success</p>
          </div>
          <div>
            <h3>38,146+</h3>
            <p>Volunteers</p>
          </div>
        </div>
      </div>

      <About />
      <MealService />
      <Testimonial />
    </>
  );
};

export default Home;
