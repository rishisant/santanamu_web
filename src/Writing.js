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

const Writing = () => {
    const { t } = useTranslation();

    const entry_on_click = (wid) => {
        // search for all the piece_of_writing elements
        const allpow = document.getElementsByClassName("piece_of_writing");
        // iterate through them
        for (let i = 0; i < allpow.length; i++) {
            // if the wid attribute matches the one we're looking for
            if (allpow[i].getAttribute("wid") === wid.toString()) {
                // if the display is none, make it block
                if (allpow[i].style.display === "none") {
                    allpow[i].style.display = "block";
                } else {
                    // otherwise, make it none
                    allpow[i].style.display = "none";
                }
            }
        }
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

            <NavBar />

            <div className="textcontainer">
                <div className="header_title">
                    {t("writing_title")}
                </div>
                <div className="header_desc">
                    {t("writing_desc")}
                </div>

                <div className="writing_container" onClick={() => entry_on_click("2")}>
                    <div className="date_of_writing">
                        2021-02-28
                    </div>
                    <div className="title_of_writing">
                        INSERT
                    </div>
                    <div className="piece_of_writing" wid="2" style={{ display: "none" }}>
                        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                    </div>
                </div>

                <div className="writing_container" onClick={() => entry_on_click("1")}>
                    <div className="date_of_writing">
                        2021-02-28
                    </div>
                    <div className="title_of_writing">
                        INSERT
                    </div>
                    <div className="piece_of_writing" wid="1" style={{ display: "none" }}>
                        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                    </div>
                </div>

            </div>

            <Footer/>

        </>
    );
}

export default Writing;
