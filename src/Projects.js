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

import "./App.css"

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
                    <Link to="/Pictures" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <FontAwesomeIcon icon={faImage} style={{ marginRight: '10px' }} />
                        {t("pictures_desc")}
                    </Link>
                </div>
            </div>

            <div className="textcontainer">
                <div className="header_title">
                    {t("projects_desc")}
                </div>
                <div className="header_desc">
                    {t("projects_desc_label")}
                </div>

                <div className="block_magnify2" onClick={() => window.open("https://kanmasu.netlify.app/", "_blank")}>
                    <div className="header_company">
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
                    <div className="header_company">
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
                    <div className="header_company">
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
                    <div className="header_company">
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
                    <div className="header_company">
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

        </>
    );
}

export default Projects;

/*
{

    "expr_education": "Texas A&M University",
    "expr_edu_degree": "BS Computer Science",
    
    "projects_desc": "Projects",
    "projects_desc_label": "Click on the images to be redirected to the project links!",

    "projects_title_kanmasu": "Kanmasu",
    "projects_desc_kanmasu": "A flashcard memorization tool built with React and packages such as Wanakana and CryptoJS.",
    "projects_desc_feature1": "Card creation/preview feature",
    "projects_desc_feature2": "Custom hiragana to romaji algorithm",
    "projects_desc_feature3": "Encrypted .kms (kanmasu) storage files, used for saving and loading decks",
    "projects_desc_feature4": "Practice mode to randomly cycle through cards",

    "projects_title_hol": "Higher or Lower",
    "projects_desc_hol": "Higher or Lower was a game I originally created freshman year in Python; however, recently I decided to remaster the game in JavaScript.",
    "projects_desc_feature1_hol": "Opponent AI system",
    "projects_desc_feature2_hol": "Achievements and card-customization system",
    "projects_desc_feature3_hol": "Level-based scaling and game logic",
    "projects_desc_feature4_hol": "Mobile-friendly design",

    "projects_title_popsim": "Population Simulation - A Study on Gene Variance",
    "projects_desc_popsim": "The purpose of this experiment was to create a sample population and track how the population fluctuated, as well as variables within the population. My goal was to simulate the evolution of popular traits within a population and track what combination of these traits allowed for the population to thrive.",
    "projects_desc_feature1_popsim": "Programmed custom organism + behaviors",
    "projects_desc_feature2_popsim": "Custom simulation engine made in Python",
    "projects_desc_feature3_popsim": "Data visualization using Matplotlib",
    "projects_desc_feature4_popsim": "Presentation and write-up",

    "projects_title_wchain": "WordChain",
    "projects_desc_wchain": "WordChain is a game about chaining words together, made in base JavaScript.",
    "projects_desc_feature1_wchain": "Graphics + custom font",
    "projects_desc_feature2_wchain": "Custom trie-like data structure",
    "projects_desc_feature3_wchain": "Mobile-friendly design",

    "projects_title_ndb": "NamuDB",
    "projects_desc_ndb": "NamuDB is a program that allows you to store and retrieve data from a database, made in C++.",
    "projects_desc_feature1_ndb": "Custom database UI and makefiles",
    "projects_desc_feature2_ndb": "Encryption/decryption algorithms for data storage",
    "projects_desc_feature3_ndb": "Object-oriented design",

    "pictures_desc": "Pictures",
    "pictures_desc_label": "For all you stalkers..."
}
*/