import React from "react";
import ReactDOM from "react-dom";

import enTranslation from "./locales/en.json";
import frTranslation from "./locales/fr.json";
import jpTranslation from "./locales/jp.json";

import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage, faHouse, faBriefcase, faImage } from "@fortawesome/free-solid-svg-icons";

import { faPenToSquare, faClone, faMicroscope, faLink, faDatabase } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

import { Footer } from './Landing.js'
import { NavBar } from './Landing.js'

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

const Projects = () => {
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

            <NavBar />

            <div className="textcontainer">
                <div className="header_title">
                    {t("projects_desc")}
                </div>
                <div className="header_desc">
                    {t("projects_desc_label")}
                </div>

                <div className="block_magnify2" onClick={() => window.open("https://kanmasu.netlify.app/", "_blank")}>
                    <div className="header_company2">
                        <FontAwesomeIcon icon={faPenToSquare} style={{ marginRight: '15px' }} />
                        {t("projects_title_kanmasu")}
                    </div>
                    <div className="header_info">
                        {t("projects_desc_kanmasu")}
                    </div>
                    <div className="header_info">
                        <li>{t("projects_desc_feature1")}</li>
                        <li>{t("projects_desc_feature2")}</li>
                        <li>{t("projects_desc_feature3")}</li>
                        <li>{t("projects_desc_feature4")}</li>
                    </div>
                </div>
                
                <div className="block_magnify2" onClick={() => window.open("https://rishisant.github.io/higherorlower/", "_blank")}>
                    <div className="header_company2">
                        <FontAwesomeIcon icon={faClone} style={{ marginRight: '15px' }} />
                        {t("projects_title_hol")}
                    </div>
                    <div className="header_info">
                        {t("projects_desc_hol")}
                    </div>
                    <div className="header_info">
                        <li>{t("projects_desc_feature1_hol")}</li>
                        <li>{t("projects_desc_feature2_hol")}</li>
                        <li>{t("projects_desc_feature3_hol")}</li>
                        <li>{t("projects_desc_feature4_hol")}</li>
                    </div>
                </div>

                <div className="block_magnify2" onClick={() => window.open("./writeup.pdf", "_blank")}>
                    <div className="header_company2">
                        <FontAwesomeIcon icon={faMicroscope} style={{ marginRight: '15px' }} />
                        {t("projects_title_popsim")}
                    </div>
                    <div className="header_info">
                        {t("projects_desc_popsim")}
                    </div>
                    <div className="header_info">
                        <li>{t("projects_desc_feature1_popsim")}</li>
                        <li>{t("projects_desc_feature2_popsim")}</li>
                        <li>{t("projects_desc_feature3_popsim")}</li>
                        <li>{t("projects_desc_feature4_popsim")}</li>
                    </div> 
                </div>  

                <div className="block_magnify2" onClick={() => window.open("https://rishisant.github.io/wordchain/", "_blank")}>
                    <div className="header_company2">
                        <FontAwesomeIcon icon={faLink} style={{ marginRight: '15px' }} />
                        {t("projects_title_wchain")}
                    </div>
                    <div className="header_info">
                        {t("projects_desc_wchain")}
                    </div>
                    <div className="header_info">
                        <li>{t("projects_desc_feature1_wchain")}</li>
                        <li>{t("projects_desc_feature2_wchain")}</li>
                        <li>{t("projects_desc_feature3_wchain")}</li>
                    </div>
                </div>

                <div className="block_magnify2" onClick={() => window.open("https://github.com/rishisant/namudb", "_blank")}>
                    <div className="header_company2">
                        <FontAwesomeIcon icon={faDatabase} style={{ marginRight: '15px' }} />
                        {t("projects_title_ndb")}
                    </div>
                    <div className="header_info">
                        {t("projects_desc_ndb")}
                    </div>
                    <div className="header_info">
                        <li>{t("projects_desc_feature1_ndb")}</li>
                        <li>{t("projects_desc_feature2_ndb")}</li>
                        <li>{t("projects_desc_feature3_ndb")}</li>
                    </div>
                </div>

            </div>

            <Footer/>

        </>
    );
}

export default Projects;
