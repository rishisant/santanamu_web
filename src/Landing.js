import React from "react";
import ReactDOM from "react-dom";

import enTranslation from "./locales/en.json";
import frTranslation from "./locales/fr.json";
import jpTranslation from "./locales/jp.json";

import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage, faBriefcase, faDiagramProject, faImage } from "@fortawesome/free-solid-svg-icons";

import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

import "./App.css"

export const Footer = () => {
    return (
        <footer>
                    <div className="socials">
                        <a href="https://www.linkedin.com/in/santanamu" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className="social_icon" />
                        </a>
                            
                        <a href="https://github.com/rishisant" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="social_icon" />
                        </a>
                            
                        <a href="https://www.instagram.com/santanamuu" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className="social_icon" />
                        </a>
                    </div>
            </footer>
    );
}

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

const Landing = () => {
    const { t } = useTranslation();

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
                <div className="navbuttons">
                    <Link to="/Pictures" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <FontAwesomeIcon icon={faImage} style={{ marginRight: '10px' }} />
                        {t("pictures_desc")}
                    </Link>
                </div>
            </div>

            <div className="textcontainer">
                <div className="header_title">
                    {t("intro_desc")}
                </div>
                <div className="header_info">
                    {t("intro_par1")}
                </div>
                <div className="header_info">
                    {t("intro_par2")}
                </div>
                <div className="header_info">
                    {t("intro_par3")}
                </div>
                <div className="header_info">
                    {t("intro_par4")}
                </div>
                <div className="header_info">
                    {t("intro_par5")}
                </div>
                
                <div className="signature">
                    <img src={require("./res/img/tamilsig.png")} alt="Signature" />
                </div>

            </div>

            <Footer />

        </>
    );
}

export default Landing;