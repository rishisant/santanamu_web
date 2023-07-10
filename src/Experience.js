import React from "react";
import ReactDOM from "react-dom";

import enTranslation from "./locales/en.json";
import frTranslation from "./locales/fr.json";
import jpTranslation from "./locales/jp.json";

import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage, faHouse, faDiagramProject, faImage } from "@fortawesome/free-solid-svg-icons";

import { faLaptopCode, faPersonChalkboard, faDumbbell, faCalculator, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

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

const Experience = () => {
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
                    {t("expr_desc")}
                </div>
                <div className="block_magnify">
                    <div className="header_company">
                        <FontAwesomeIcon icon={faLaptopCode} style={{ marginRight: '15px' }} />
                        {t("expr_title_odoo")} - {t("expr_position_odoo")}
                    </div>
                    <div className="header_date">
                        {t("expr_date_odoo")}
                    </div>
                    <div className="header_info_exp">
                        <li>{t("expr_point1_odoo")}</li>
                        <li>{t("expr_point2_odoo")}</li>
                        <li>{t("expr_point3_odoo")}</li>
                        <li>{t("expr_point4_odoo")}</li>
                        <li>{t("expr_point5_odoo")}</li>
                    </div>
                </div>

                <div className="block_magnify">
                    <div className="header_company">
                        <FontAwesomeIcon icon={faPersonChalkboard} style={{ marginRight: '15px' }} />
                        {t("expr_title_idt")} - {t("expr_position_idt")}
                    </div>
                    <div className="header_date">
                        {t("expr_date_idt")}
                    </div>
                    <div className="header_info_exp">
                        <li>{t("expr_point1_idt")}</li>
                        <li>{t("expr_point2_idt")}</li>
                        <li>{t("expr_point3_idt")}</li>
                    </div>
                </div>

                <div className="block_magnify">
                    <div className="header_company">
                        <FontAwesomeIcon icon={faDumbbell} style={{ marginRight: '15px' }} />
                        {t("expr_title_headatt")} - {t("expr_position_headatt")}
                    </div>
                    <div className="header_date">
                        {t("expr_date_headatt")}
                    </div>
                    <div className="header_info_exp">
                        <li>{t("expr_point1_headatt")}</li>
                        <li>{t("expr_point2_headatt")}</li>
                        <li>{t("expr_point3_headatt")}</li>
                        <li>{t("expr_point4_headatt")}</li>
                        <li>{t("expr_point5_headatt")}</li>
                    </div>
                </div>

                <div className="block_magnify">
                    <div className="header_company">
                        <FontAwesomeIcon icon={faDumbbell} style={{ marginRight: '15px' }} />
                        {t("expr_title_att")} - {t("expr_position_att")}
                    </div>
                    <div className="header_date">
                        {t("expr_date_att")}
                    </div>
                    <div className="header_info_exp">
                        <li>{t("expr_point1_att")}</li>
                        <li>{t("expr_point2_att")}</li>
                        <li>{t("expr_point3_att")}</li>
                        <li>{t("expr_point4_att")}</li>
                    </div>
                </div>

                <div className="block_magnify">
                    <div className="header_company">
                        <FontAwesomeIcon icon={faCalculator} style={{ marginRight: '15px' }} />
                        {t("expr_title_mt")} - {t("expr_position_mt")}
                    </div>
                    <div className="header_date">
                        {t("expr_date_mt")}
                    </div>
                    <div className="header_info_exp">
                        <li>{t("expr_point1_mt")}</li>
                        <li>{t("expr_point2_mt")}</li>
                        <li>{t("expr_point3_mt")}</li>
                    </div>
                </div>

                
                <div className="header_title">
                    {t("expr_edu_title")}
                </div>
                <div className="block_magnify">
                    <div className="header_company">
                        <FontAwesomeIcon icon={faGraduationCap} style={{ marginRight: '15px' }} />
                        {t("expr_education")} - {t("expr_edu_degree")}
                    </div>
                    <div className="header_date">
                        {t("expr_date_edu")}
                    </div>
                    <div className="header_info_exp">
                        <li>{t("expr_point1_edu")}</li>
                        <li>{t("expr_point2_edu")}</li>
                        <li>{t("expr_point3_edu")}</li>
                    </div>
                </div>
                


            </div>

            <Footer />

        </>
    );
}

export default Experience;