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
                        2023-08-05
                    </div>
                    <div className="title_of_writing">
                        Vanity's Usurpation
                    </div>
                    <div className="piece_of_writing" wid="2" style={{ display: "none" }}>
                    I feel compelled to elaborate on vanity’s usurpation. Vanity is similar to wine – do not look on the wine when it is red, when it sparkles in the cup, when it swirls around smoothly; at the last it biteth like a serpent, and stingeth like an adder. Scripture provides timeless wisdom in this regard, offering an apt metaphor to elucidate my apprehensions regarding vanity.
                    <br></br><br></br>
                    In its quintessence, vanity is synonymous with futility. Actions purported ‘in vain’ often hint at the fruitlessness of the undertaking, an illusion of progress signifying naught but shallow triumphs. We have people in our society today dedicate their lives to vanity – to online personas or larger than life caricatures of truly flawed humans. 
                    <br></br><br></br>
                    These portrayals, glossed over with the veneer of invincibility, sketch images of beings untouched by trials or tribulations. They present a reality where every challenge is conquerable, where celestial heights are mere stepping stones and the echo of competition is non-existent. The intent behind this overly-polished façade, however, only serves to bring the spotlight on a deep-seated insecurity, much like an inflaming thorn continually festering beneath a poorly applied salve.
                    <br></br><br></br>
                    Humility, ever the quiet virtuoso, often reverberates with a wisdom far more profound than the loud clamour of vanity. People liken humility to underestimation, when it reality it is the perfect estimation. Truth be told, you don’t know how life will go. You don’t even know how the next 5 seconds will go. You are not a God, who can visualize every consequence of every event within instantaneous time – as bounded by the limitations of humanity, there is often but one course strewn before you: to wait, to observe, and to surrender to the currents of time.
                    <br></br><br></br>
                    Albeit a slightly shorter entry than my previous one – mostly because the shop I’m at is about to close, I hope this poignant piece helps guide you through the obscure labyrinth of self-reflection. Because my friend, at the end of vanity, is emptiness.
                    <br></br><br></br>
                    <div style={{ float: "right" }}> - R. Santhanam </div>
                    </div>
                </div>

                <div className="writing_container" onClick={() => entry_on_click("1")}>
                    <div className="date_of_writing">
                        2023-08-05
                    </div>
                    <div className="title_of_writing">
                        A Treatise on Frequency Disruption
                    </div>
                    <div className="piece_of_writing" wid="1" style={{ display: "none" }}>
                        Humanity has always had a unique relationship with sound and silence; the rhythm of words spoken in love, the comforting lull of our own breath, the sweet exchange of melodies and harmonies in a symphony. How ironic it is, then, that as I sit to write this essay, I find sound as my foe, rather than my friend. I’m sitting right now, in a coffee shop, ensnared by the grinding cacophony of inelegant and insufferable modern music – my own headphonic sanctuary serving as my only refuge from the onslaught of discordant acoustics. Oh, how I yearn to be instead encased in the lulling whispers of nature undisturbed; where the soft sigh of a breeze and the enchanting song of the avian are my sole companions. Alas, as they say, beggars cannot be choosers.
                        <br></br><br></br> 
                        With such a sentiment reverberating in my thoughts, I find myself compelled to delve into the exploration of a reality that both intrigues and concerns me – the pervasive, and quite disruptive impact of modern technologies and the frequencies which they emit.
                        <br></br><br></br> 
                        The seismic shift our world experienced as a result of the COVID pandemic has undeniably thrust us into an unprecedented digital epoch. Although the world was shaping to be increasingly more digitized – foreshadowed by society’s reliance on social media for information consumption, the dehumanization of persons through digital avatars and pixelizations – the loss of individuality through consumption of the same content, utilization of the same language… A simultaneous dumbing down of society at large, so to speak. It's as if we have all been reborn, not as creatures of flesh and blood, but as spectral "internet-beings." We now bow, almost religiously, in servitude to the ever-present digital realm, entrusting everything from our livelihoods to our educations, and even our social interactions, to its precarious altar. 
                        <br></br><br></br> 
                        Undeniably, this new era of virtual existence is not without its merits. In the blink of an eye, our curiosities can be catered to, and our worldviews broadened, with just the swift depression of a key. Yet, herein lies the paradox - can we blindly trust this rapid influx of information? Can we innocuously depend on the gatekeepers of internet knowledge, who have held a less than pristine track record?
                        <br></br><br></br> 
                        In drawing from this premise, my inquisitive nature leads me further. I find myself drawn to the prodigious work of Nikola Tesla, whose theories, buried deep within the digital mines of the internet, have provoked me to question the foundations of our relationship with technology. Tesla's theorization of the Aether and the impacts of Electromagnetic Fields (EMF) on the human psyche and physical well-being have struck a chord within my consciousness, sending me on a spiral for the truth – as I feel our current explanations of the world are lacking in sufficiency.
                        <br></br><br></br> 
                        It seems to me that we, as a species, often stand on the precipice of comprehension. We stand asserting the dominion of science, yet oblivious to the supernatural and divine tapestry that cloaks reality. For these frequencies we so casually interact with are carriers of unseen forces, modulating the matrix of time and space itself.
                        <br></br><br></br> 
                        Every flicker of our screens, every beep of our devices, sends out a symphony of frequencies; frequencies that subtly penetrate our defensive barriers, leaving perhaps indelible imprints on our minds and bodies. Frequency, dear reader, is not simply a scientific term to be relegated to the pages of an electronics textbook; it is the secret language of our universe and a silent orchestrator of life as we know it.
                        <br></br><br></br> 
                        I personally enjoy self-experimentation – I use inductivism substantially within the bounds of understanding and comprehension, aiming to better understand the world through focusing on what most are blind to. It’s a world where distraction governs and stimulation rules, a world that seems oblivious to the chains that bind the human spirit and cloud the intellect. This blindness astounds me, especially when connected to the evident decline in mental health. The unassuming instigator? Electronic technology.
                        <br></br><br></br> 
                        When it's time for me to dive deep into thought, to grapple with complex concepts, or bulldoze through mentally demanding tasks, distancing myself from electronic devices becomes crucial. It's a ritual that works wonders. Tucked away in a cabinet or banished behind closed doors, my phone would sit idle, ridding my environment of that incessant pull towards mindless scrolling and trivial digital diversions. The result? A significant boost in cognitive function, a newfound resilience against the temptations of vagrant consumption and vain endeavors.
                        <br></br><br></br> 
                        Incorporating this discipline into my life hasn't just been beneficial—it's been transformative. It's allowed me to truly live life, free from the shackles of screen enslavement. Life isn't meant to be spent imprisoned within pixels, confined to the perimeters of a phone screen. Existence is about conscious presence, exploration, creation, and the profound interactions with reality that come with it. We lose that essence when we surrender to the digital caricatures that we become when trapped in the echo chambers of the internet.
                        <br></br><br></br> 
                        You know, after writing this, I feel the call of the tangible world outside. A call to partake in the simple pleasure of lighting a cigarette, accompanied only by my thoughts and the embrace of nature. Isn't there a tranquility in that - laying back on the cool, forgiving grass, looking up at the vast expanse of the sky? Perhaps, for a moment at least, it’s possible to find peace in just being, away from the relentless tides of the digital sea.
                        <br></br><br></br> 
                        <div style={{ float: "right" }}> - R. Santhanam </div>
                    </div>
                </div>

            </div>

            <Footer/>

        </>
    );
}

export default Writing;
