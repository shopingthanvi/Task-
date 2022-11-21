import './App.scss';
import Banner from "./components/banner"
import Button from "./components/inputControl/button"
import Caursol from "./components/caursol"
import AboutUs from "./components/aboutUs"
import ChooseUs from "./components/chooseUs"
import Footer from "./components/footer"
import CusHeader from "./components/custtomNav"
import { companyImg, companyLogo, dataDigitalBestSeller } from './constant';

function App() {
  return (
    <div className="App">
      <CusHeader/>
      <Banner />
      <Caursol
        text="PRODUCTS FOR YOUR INDUSTRIAL NEEDS"
        subheading="Product Range"
        slidesToShow="4"
      >
        {dataDigitalBestSeller.map((item) => (
          <div className="c-card-detail mt-3">
            <div className="c-card-detail__card-top">
              <img
                src={item.imgLink}
                alt={item.title}
                className="c-card-detail__card-image"
              />
            </div>
            <div className="c-card-detail__card-bottom text-center">
              <p className="c-card-detail__card-text">{item.title}</p>
              <Button text="ENQUIRY NOW" />
            </div>
          </div>
        ))}
      </Caursol>
      <ChooseUs />
      <Caursol
        text="SERVING THE REQUIREMENTS OF DOMESTIC AND MULTINATIONAL COMPANIES"
        subheading="Our Clients over the years"
        slidesToShow="5"
      >
        {companyImg.map((item) => (
          <div className="c-card-detail mt-3">
            <div className="c-card-detail__card-top">
              <img
                src={item.imgLink}
                alt={item.imgLink}
              />
            </div>
          </div>
        ))}
      </Caursol>

      <AboutUs />
      <Caursol
        text="PRODUCTS FOR YOUR INDUSTRIAL NEEDS"
        subheading="Certified Business"
        textShowCenter={true}
        slidesToShow="5"
      >
        {companyLogo.map((item) => (
          <div className="c-card-detail mt-3">
            <div className="c-card-detail__card-top">
              <img
                src={item.imgLink}
                alt={item.imgLink}
              />
            </div>
          </div>
        ))}
      </Caursol>
      <Footer />
    </div>
  );
}

export default App;
