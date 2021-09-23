import React from "react";
import { Link } from "react-router-dom";
import SVG from "../../util-components/SVG";
import "./Home.css";

const Home = () => {
  return (
    <div>
      {/* Nav */}
      <div className="primary-bg" style={{ padding: "10px 0px" }}>
        <ul
          className="d-flex justify-content-end container white-color nav-ul"
          style={{ listStyle: "none", marginTop: 16 }}
        >
          <li className="pl-4 pr-4">
            <span className="pr-2">
              <SVG name="INFO" width="16" height="16" color="#FFF" />
            </span>
            <span>Over Rent Garant</span>
          </li>
          <Link to="/signup" style={{textDecoration: "none"}}>
            <li className="pl-4 pr-4 white-color">Account maken</li>
          </Link>
          <Link to="/login" style={{textDecoration: "none"}}>
            <li className="pl-4 pr-4 white-color">Inloggen</li>
          </Link>
        </ul>
      </div>

      {/* Search Section */}
      <div className="container white-bg" style={{ padding: 30 }}>
        <div className="row">
          <div className="col-md-6 col-sm-12 title-wrapper">
            <h1 className="primary-color font-bold">RENTGARANT</h1>
          </div>
          <div className="col-md-6 col-sm-12 primary-color search-btn-wrappers">
            <button className="btn btn-primary search-menu-search-btn">
              <SVG name="SEARCH" width="20" height="20" color="currentColor" />
              <span style={{ padding: "0px 5px", fontWeight: "bold" }}>
                woning zoeken
              </span>
            </button>
            <button className="btn btn-primary ml-4 search-menu-rent-house-btn">
              Woning verhuren
            </button>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div
        style={{ backgroundColor: "#04454D", height: "calc(100vh - 192px)" }}
      >
        {/* Image Section */}
        <div
          className="home-section-main-background-img"
          style={{ backgroundImage: "url('/city-night-evening-canal.webp')" }}
        ></div>
        {/* Filter Section */}
        <div
          style={{ height: "50%", padding: "50px 0px", position: "relative" }}
          className={"container d-flex align-items-end filter-section-wrapper"}
        >
          <div className="container filter-section-container">
            <h1 className="filter-section-heading">
              Gegarandeerd huren en verhuren
            </h1>

            <div style={{ backgroundColor: "#fff", borderRadius: 10 }}>
              <ul className="d-flex" style={{ listStyle: "none" }}>
                <span className="d-flex">
                  <li className="p-4 filter-section-options-li">Kamer</li>
                  <li className="p-4 filter-section-options-li">Studio</li>
                </span>

                <span className="d-flex">
                  <li className="p-4 filter-section-options-li">Appartement</li>
                  <li className="p-4 filter-section-options-li">Anti-kraak</li>
                </span>
              </ul>

              <div className="row" style={{ padding: "0px 60px 30px 60px" }}>
                <div className="col-md-4">
                  <input
                    placeholder="Woonplaats"
                    className="filter-section-input-fields"
                  ></input>
                </div>
                <div className="col-md-3">
                  <select className="filter-section-input-fields">
                    <option value="" disabled selected>
                      Max. huurprijs
                    </option>
                  </select>
                </div>
                <div className="col-md-3">
                  <select className="filter-section-input-fields">
                    <option value="" disabled selected>
                      Min. grootte
                    </option>
                  </select>
                </div>
                <div className="col-md-2 d-flex justify-content-end">
                  <button className="filter-section-search-btn">
                    <SVG name="SEARCH" width="20" height="20" color="white" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <h3 className="white-color">
                Gratis en eenvouding je woning verhuren?
              </h3>
              <p className="white-color">
                Bij ons is verhuren nog nooit zo makkelijk geweest! Bekijk onze
                voordelen en kom zo snel mogelijk in contact met de juiste
                huurder.
              </p>
            </div>
            <div className="col-md-6 d-flex justify-content-end">
              <h4
                style={{ color: "#fff", fontStyle: "italic", fontWeight: 600 }}
              >
                Waarom bij ons verhuren
                <SVG
                  name="ARROW_RIGHT"
                  width="22"
                  height="22"
                  color="currentColor"
                  style={{ marginLeft: 5 }}
                />
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* Cities Section */}
      <div
        className="container"
        style={{ backgroundColor: "#fff", paddingTop: "70px" }}
      >
        <div>
          <h2 className="primary-color font-bold">
            Zoek je toekomstige woonplaats
          </h2>
          <p className="primary-color" style={{ fontSize: 16 }}>
            Bekijk de meest populaire steden. Waar wil jij graag wonen?
          </p>
        </div>
        <div className="pt-5 row">
          <div className="col-lg-3 col-md-6">
            <img className="cities-section-img" src="/amsterdam.webp"></img>
            <h5 className="mt-2 primary-color font-bold">Amsterdam</h5>
          </div>
          <div className="col-lg-3 col-md-6">
            <img className="cities-section-img" src="/groningen.webp"></img>
            <h5 className="mt-2 primary-color font-bold">Groningen</h5>
          </div>
          <div className="col-lg-3 col-md-6">
            <img className="cities-section-img" src="/utrecht.webp"></img>
            <h5 className="mt-2 primary-color font-bold">Utrecht</h5>
          </div>
          <div className="col-lg-3 col-md-6">
            <img className="cities-section-img" src="/rotterdam.webp"></img>
            <h5 className="mt-2 primary-color font-bold">Rotterdam</h5>
          </div>
        </div>
        <div style={{ padding: "25px 0px" }}>
          <button
            style={{
              backgroundColor: "#00E3FF",
              border: "none",
              borderRadius: 10,
              padding: "10px 50px",
            }}
          >
            <SVG name="SEARCH" width="20" height="20" color="white" />
            <span style={{ color: "#fff", fontSize: "18px" }}>Alle steden</span>
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div style={{ backgroundColor: "#F3F3F3" }} className={"mt-4"}>
        <div className={"container"} style={{ padding: "50px 0px" }}>
          <div className="row">
            <div
              className="col-md-4 d-flex align-items-end"
              style={{ columnGap: 20 }}
            >
              <SVG name="HOUSE" width="55" height="55" color="#04454D" />
              <h6 style={{ color: "#04454D", fontWeight: "bold" }}>
                Elke dag nieuwe Kamers, studio's en appartementen
              </h6>
            </div>
            <div
              className="col-md-4 d-flex align-items-end"
              style={{ columnGap: 20 }}
            >
              <SVG name="CALENDER" width="55" height="55" color="#04454D" />
              <h6 style={{ color: "#04454D", fontWeight: "bold" }}>
                Kom op het juiste moment in contact met een verhuurder
              </h6>
            </div>
            <div
              className="col-md-4 d-flex align-items-end"
              style={{ columnGap: 20 }}
            >
              <SVG name="MAIL" width="55" height="55" color="#04454D" />
              <h6 style={{ color: "#04454D", fontWeight: "bold" }}>
                Wij staan elke werkdag van 9:00 tot 17:00 voor je klaar!
              </h6>
            </div>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="container" style={{ padding: "70px 0px" }}>
        {/* First */}
        <div className="row">
          <div className="col-md-6">
            <h3 style={{ fontWeight: "bold", color: "#04454D" }}>
              Ons systeem biedt vele voordelen!
            </h3>
            <p style={{ color: "#04454D" }}>
              Met ons wachtrij systeem komen huurders en verhuurders makkelijk
              met elkaar in contact. Maak een account aan en wacht op jou beurt
              om onbeperkt bezichtigingen bij te wonen.
            </p>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <h5
              style={{
                color: "#08CF65",
                fontStyle: "italic",
                fontWeight: "bold",
              }}
            >
              Bekijk de voordelen voor verhuurders
            </h5>
            <SVG
              name="ARROW_RIGHT"
              width="22"
              height="22"
              color="#08CF65"
              style={{ marginLeft: 5 }}
            />
          </div>
        </div>

        {/* Second */}
        <div className="row pt-5 pb-5 steps-section-second-wrapper">
          <div className="col-md-3 col-sm-6">
            <h1>1.</h1>
            <p>
              Maak een account aan en stel je profiel in. Maak een aantrekkelijk
              profiel en stel in waar je naar op zoek bent.
            </p>
          </div>
          <div className="col-md-3 col-sm-6">
            <h1>2.</h1>
            <p>
              Claim jouw positie in de wachtrij. Zo ben je verzekerd dat je
              aanwezig kan zijn bij de bezichtiging!
            </p>
          </div>
          <div className="col-md-3 col-sm-6">
            <h1>3.</h1>
            <p>
              Ben je aan de beurt? Dan mag je vanaf nu onbeperkt een plek bij
              een bezichtiging accepteren. Bekijk de regels.
            </p>
          </div>
          <div className="col-md-3 col-sm-6">
            <h1>4.</h1>
            <p>
              Heb je een mailtje dat de bezichtiging is bevestigd? Dan kan je op
              de aangegeven datum naar de bezichtiging!
            </p>
          </div>
        </div>

        {/* Third */}
        <div className="pt-5 pb-3">
          <h6 style={{ color: "#04454D", fontWeight: "bold" }}>
            <SVG name="TICK" width="22" height="22" color="#08CF65" />
            <span className="ml-2">
              Gegarandeerd een bezichtiging bijwonen, en dat onbeperkt!
            </span>
          </h6>
          <h6 style={{ color: "#04454D", fontWeight: "bold" }}>
            <SVG name="TICK" width="22" height="22" color="#08CF65" />
            <span className="ml-2">
              Iedereen heeft een eerlijke kans van slagen
            </span>
          </h6>
          <h6 style={{ color: "#04454D", fontWeight: "bold" }}>
            <SVG name="TICK" width="22" height="22" color="#08CF65" />
            <span className="ml-2">
              Jouw positie blijft tot dat je een woning hebt gevonden
            </span>
          </h6>
          <h6 style={{ color: "#04454D", fontWeight: "bold" }}>
            <SVG name="TICK" width="22" height="22" color="#08CF65" />
            <span className="ml-2">Direct weten waar je aan toe bent </span>
          </h6>
        </div>
      </div>

      {/* Looking for Places */}
      <div style={{ backgroundColor: "#04454D" }}>
        <div className="container pb-5 pt-5">
          <div className="row">
            <div className="col-md-8">
              <h1 style={{ color: "#fff", fontWeight: "bold" }}>
                Op zoek naar een woonruimte?
              </h1>
            </div>
            <div className="col-md-4 d-flex justify-content-end">
              <button
                style={{
                  backgroundColor: "#00E3FF",
                  border: "none",
                  borderRadius: 10,
                  padding: "10px 50px",
                }}
              >
                <span style={{ color: "#fff", fontSize: "18px" }}>Zoeken</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* About Us */}
      <div className="white-bg" style={{ position: "relative" }}>
        <div className="container">
          <div style={{ width: "50%", padding: "100px 0px" }}>
            <h1 className="primary-color font-bold">Over ons</h1>
            <p style={{ color: "#707070" }}>
              Door het te kort aan huurwoningen is het lastig om een nieuwe
              thuis te vinden. Door de woningurgentie is het dan vaak lastig om
              met verhuurders op het juiste moment in contact te komen.
              RentGarant neemt dat probleem voor je weg!
            </p>
            <p style={{ color: "#707070" }}>
              Wij zijn het nieuwe platform waarmee je makkelijk, transparant en
              eerlijk je toekomstige kamer, studio of appartement kan vinden.
              Met ons wachtrij systeem ben je verzekerd met een plekje bij een
              bezichtiging. Tot dat jij je nieuwe thuis hebt gevonden blijft
              jouw account actief. Dit betekent dat je direct of voor in de
              toekomst altijd opties hebt openstaan! We houden je op de hoogte,
              zodat je niks misloopt. Benieuwd hoe het werkt?
            </p>
            <p style={{ color: "#707070" }}>
              Bekijk hier onze werkwijze en regels.
            </p>
          </div>
        </div>

        <div
          className=""
          style={{
            backgroundImage: "url(about-us-girls.webp)",
            position: "absolute",
            right: 0,
            top: 0,
            height: "100%",
            width: "40%",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
      </div>

      {/*  */}
      <div className="pt-5 pb-5" style={{ backgroundColor: "#08CF65" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 style={{ color: "#FFF", fontWeight: "bold" }}>
                Op zoek naar een nieuwe huurder of kamergenoot?
              </h2>
              <p style={{ color: "#fff" }}>
                Maak gratis een advertentie aan en vind in no-time de juiste
                kandidaat!
              </p>
            </div>
            <div className="col-md-6 d-flex justify-content-end align-items-center">
              <button
                style={{
                  height: 50,
                  borderRadius: 10,
                  backgroundColor: "#fff",
                  color: "#04454D",
                  fontWeight: "bold",
                  padding: "10px 50px",
                  border: "none",
                }}
              >
                Advertentie maken
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
