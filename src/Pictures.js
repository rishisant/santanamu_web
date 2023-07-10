import React from "react";
import ReactDOM from "react-dom";

import enTranslation from "./locales/en.json";
import frTranslation from "./locales/fr.json";
import jpTranslation from "./locales/jp.json";

import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage, faHouse, faBriefcase, faDiagramProject } from "@fortawesome/free-solid-svg-icons";

import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

import { Footer } from './Landing.js'

// Initializing i18n for easy translation swapping.
i18n
.use(initReactI18next)
.init({
    resources: {
        en: {
            translation: enTranslation
        },
        fr: {
            translation: frTranslation
        },
        jp: {
            translation: jpTranslation
        }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false
    }
});

const languages = ["en", "fr", "jp"];
let currentLanguageIndex = 0;

const switchLanguage = () => {
    currentLanguageIndex++;
    if (currentLanguageIndex === languages.length) currentLanguageIndex = 0;
    i18n.changeLanguage(languages[currentLanguageIndex]);
}

const Pictures = () => {
    const { t } = useTranslation();
    const numImages = 17;

    const [index, setIndex] = React.useState(0);  // initialize index to access array

    const changeImage = () => {
        setIndex((index + 1) % numImages);  // Go back to 0 when reaching end
    }

    const previousImage = () => {
        setIndex(index => (index - 1 + numImages) % numImages);  // Go to the last image if the index goes below 0
    }

    return (
        <>
            <div className="langico">
                <button onClick={switchLanguage}>
                    {t("change_language")}
                    <FontAwesomeIcon icon={faLanguage} style={{color: "#1a1a1a", paddingLeft: "10px"}} />
                </button>
            </div>

            <div className="name">
                {t("header_main")}
                <br></br>
                {t("header_sub")}
            </div>

            <div className="navcontainer">
                <div className="navbuttons">
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <FontAwesomeIcon icon={faHouse} style={{ marginRight: '10px' }} />
                        {t("home_desc")}
                    </Link>
                </div>
                <div className="navbuttons">
                    <Link to="/Experience" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <FontAwesomeIcon icon={faBriefcase} style={{ marginRight: '10px' }} />
                        {t("expr_desc")}
                    </Link>
                </div>
                <div className="navbuttons">
                    <Link to="/Projects" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <FontAwesomeIcon icon={faDiagramProject} style={{ marginRight: '10px' }} />
                        {t("projects_desc")}
                    </Link>
                </div>
            </div>

            <div className="textcontainer">
                <div className="header_title">
                    {t("pictures_desc")}
                </div>
                <div className="header_desc2">
                    {t("pictures_desc_label")}
                </div>

                <div className="pictureContainer">
                    <div className="leftArrow" onClick={previousImage}>
                        <FontAwesomeIcon icon={faLeftLong} style={{color: "#1a1a1a", paddingLeft: "10px"}} />
                    </div>
                    <div className="picture">
                        <img src={require(`./res/img/${index + 1}.JPG`)} alt={`picture ${index + 1}`} />
                    </div>
                    <div className="rightArrow" onClick={changeImage}>
                        <FontAwesomeIcon icon={faRightLong} style={{color: "#1a1a1a", paddingLeft: "10px"}} />
                    </div>
                </div>

            </div>

            <Footer />

        </>
    );
}

export default Pictures;