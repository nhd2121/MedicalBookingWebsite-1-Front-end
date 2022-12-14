import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomePage.scss";
import HomeHeader from "./HomeHeader";
import Specialty from "./Section/Specialty";
import MedicalFacility from "./Section/MedicalFacility";
import PopularDoctor from "./Section/PopularDoctor";
import HandBook from "./Section/HandBook";
import HomeFooter from "./HomeFooter";
import { FormattedMessage } from "react-intl";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class HomePage extends Component {
  render() {
    let settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };

    return (
      <div>
        <HomeHeader isShowedBanner={true}/>
        <Specialty settings={settings} />
        <MedicalFacility settings={settings} />
        <PopularDoctor settings={settings}/>
        <HandBook settings={settings}/>
        <HomeFooter />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
