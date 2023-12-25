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

    const paragraphBreak = () => {
        return (
            <span style={{ display: "block", marginLeft: "auto", marginRight: "auto", width: "50%", paddingTop: "2rem", paddingBottom: "2rem", fontSize: "1.3em", color: "#858585", textAlign: "center" }}>&sect;&sect;&sect;</span>
        )
    };

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

                <div className="writing_container" onClick={() => entry_on_click("10")}>
                    <div className="date_of_writing">
                        2023-12-25
                    </div>
                    <div className="title_of_writing">
                        An Ode to Lost Linguistic Artistry
                    </div>
                    <div className="piece_of_writing" wid="10" style={{ display: "none" }}>
                    It has been a while since I’ve struck pen to paper, or rather, finger to keypress. Regardless of the analogy, I wish to present an interesting thesis - one that has undergone the tempering of fine metalwork, or rather, “brainstorming”. What even is “brainstorming”, and why does it sound so idiotic?
                    <br></br><br></br>
                    Regardless, whether one views my thoughts as pretentious, or rather with a sense of ingenuity, it has been clear to those who do view my pieces, those who may enjoy glancing at my cerebrations – my intricate intellectual tapestry, that I have an unadulterated affection for not merely the English language, however the pulsating heart of linguistics in its entirety… I have courted various tongues, the mellifluous odes of French, with the peaceful flows of Japanese.
                    <br></br><br></br>
                    This conundrum, however, pesters me daily. You see, I was always one to have a checkered relationship with the English classroom. I had never scored highly in one, nor had I maintained a deep relationship with those who had been instructing me. I believe the curriculum is absolutely devoid of sophistication, and rather is an over-simplified and unnatural way of grasping the beauty that is the English language.
                    <br></br><br></br>
                    I would read the pieces of my peers, seemingly more palatable to the academicians than that of my own, and I wondered, what about my writing is undeserving of this academic approval? Granted, a higher mark is no definitive insignia of superiority… The standard is relatively subjective, but there is an undeniable objectivity in greatness.
                    <br></br><br></br>
                    And so it led me down a path, a much deeper road to run through. One that I had observed during my sojourn in America. The older I got, I had come to the realization that widespread sophistication amongst the general populous had severely declined. Albeit, we have glistening gadgets that can help you do almost anything with the click of a button, or screens that flash with hypnotic allure and vibrant colors, automobiles with more buttons in them than on one’s shirt… Despite this, however, society, under its veneer of advancement, teeters on the precipice of a cognitive regress.
                    
                    {paragraphBreak()}
                    
                    The manner of one’s speech does often fall under subconscious scrutiny. An unspoken bias holds sway, garnering respect for complex articulations while relegating simple tongue to an assumed lack of intellect – this is a natural means of discrimination, and to approach this with honesty means to accept such a decree. Funny enough, I find those who honestly accept this “primal” truth to demonstrate higher intelligence than those who don’t.
                    <br></br><br></br>
                    Intellect, however, is not the defining characteristic of superiority – rather, I reward that title to wisdom. One who is wise understands the judgement of others is largely in vain, especially if one doesn’t hold oneself to that exact standard. I dislike being a hypocrite, thus, I do hold myself to the standards which I unveil in this prose.
                    <br></br><br></br>
                    This piece should not be misconstrued an attack on those who don’t speak in the manner which I do. Rather, it is a somber glimpse into what the future holds with respect to the decline of English language. Granted, there are some, who if they speak with sophistication, will be looked down by their peers, who speak much simpler. This “peer pressure” of sorts lends itself to more negative effects. One may be ostracized for speaking correctly, which is an unfortunate reality for many people.
                    <br></br><br></br>
                    Being able to elaborate on one’s thoughts with complexity allows for the integration of nuances, incredibly important for emotional expression – something inherent to our human nature. Whether one believes we evolved from parasites or were intelligently created, the dismissal of such inherent human traits is to disregard a significant facet of our being. We are not beasts, even if we have no preeminence above them. Our conscience reflects a cognitive and emotional architecture surpassing that of other species.
                    <br></br><br></br>
                    Our capacity to communicate complex ideas, to comprehend abstract concepts and to explore the vast landscapes of emotion, sets us apart. To simplify our language excessively is, in essence, to suppress a vital part of our humanity, and ultimately, hinders our society’s evolution towards comprehensive understanding and emotional depth.
                    
                    {paragraphBreak()}

                    One may wonder, why is it that our language abilities have been on the decline? One cannot drive this narrative without acknowledging the immense influence exerted by our escalating media consumption in recent times. It would be a grave mistake to believe that those piloting the ship of popular media and government harbor only altruistic intentions. I am but a humble observer. I am no better than the one reading this, and this is simply a canvas for me to paint on, however, if your faith is invested in media and governing bodies, you might find yourself wandering down a treacherous path unforeseen.
                    <br></br><br></br>
                    Contrary to popular conviction, we are not good judges of ourselves and our habits. On our own, we are not incredibly self-aware, and most tend to be unaware of the damage that media consumption does to their psyche and spirit. In today’s world, the outdoors are rapidly becoming an extension of your living room, with screens flashing their hypnotic dance at every corner. Any urban landscape you navigate through is punctuated by these digital canvases. 
                    <br></br><br></br>
                    The difference between screens and canvases is that canvases are static. The ability to display vast amounts of information in a second is a title held by only that of the screen. If you look at an art piece painted on a canvas, it will never change, but a screen, my friend, can show you millions of pixels within the blink of an eye.
                    <br></br><br></br>
                    This creates a palpable allure, seducing the average person far more than a static image ever could. While a classic painting inspires you to spin tales, a digital screen may narrate a tale for you, controlling the strings of your imagination, assuming the mantle of a clandestine puppeteer. When I say “the screen is the friend of the government”, it seems ripped out of the pages of a dystopian novel; yet, it’s the unsettling reality of our time.
                    <br></br><br></br>
                    I remember coming across a thought that the kids of today have seen more naked women than emperors or rulers of the past. And I thought about that statement for a while – the implications for mind control and negative brain formation… And I likened this not only to adult content, but to the domain of thought and language. In this age of screens and pixels, we have transitioned from creators to consumers at an alarming pace, thus suffocating the creative flame that fuels this engine of independent thought and expression. In essence, we become copies of each other.
                    <br></br><br></br>
                    Now, liken this to language, and you see people using the same language. This is dangerous for all generations, young and old, and I will go on the record stating that you will see record-low levels of critical thinking and creative intelligence within this upcoming generation. Couple that with a loosening in morals, and you may have the formula for the destruction of society.
                    
                    {paragraphBreak()}

                    Although my essay seems quite dreary and pessimistic, there is a resilient confidence I possess. Adversity has an uncanny tendency to sow the seeds of hope in hearts receptive to its hard-learned lessons, and mine resonates with such an ebullient optimism. I have hope that people will come to realize this reality, as only the divine light of Christ had bestowed this upon me. The God-given gift of sophistication, of learning various tongues, and the liberty of unmatched expression, has inscribed a rich tableau of experiences onto the canvas of my existence.
                    <br></br><br></br>
                    <span style={{fontStyle: "italic", color: "#858585", fontSize:"1em"}}>“That I might make thee know the certainty of the words of truth; that thou mightest answer the words of truth to them that send unto thee?”</span>
                    <br></br><span style={{fontSize: "0.8em", color: "#858585", float:"right",}}>Proverbs 22:21 KJV</span>
                    <br></br><br></br>
                    Words cast spells, my friend. The words that spring from your lips harbor potency far beyond what one might fathom. Use that power wisely.
                    <br></br><br></br>
                    <div style={{ float: "right" }}> - R. Santhanam </div>
                    </div>
                </div>

                <div className="writing_container" onClick={() => entry_on_click("9")}>
                    <div className="date_of_writing">
                        2023年10月6日
                    </div>
                    <div className="title_of_writing">
                        幻影の自由：現代社会の静かな鎖
                    </div>
                    <div className="piece_of_writing" wid="9" style={{ display: "none" }}>
                    僕はこのエッセイの冒頭で、僕達の社会がますます電子技術に依存しているという考えを述べるのです。その一方で、この技術依存は僕達をより効率的な存在へと鍛え上げるかに見えますが、その裏では、その進行性と引き替えに何を身を削っているのかという問いを立てます。それゆえに、本稿で、僕はこの非常に重要で、しかし、より深く掘り下げる必要がある問いの答えを明らかにしようと試みます。
                    {paragraphBreak()}
                    例えば、消費主義を考えてみてください。現代社会には選択肢が無尽蔵に広がっているかのような錯覚を抱きます。しかし、深く探求をすると、その選択肢が実際にはほんの一握りの大企業によって支配され、制限されていることが見えてくるのです。
                    <br></br><br></br>
                    さらに、選択肢が増えること自体が、自体が選択の難しさを助長しているとも言えます。二つの選択肢を比較するのは簡単かもしれませんが、一つの選択肢を十個と比較すると考えると、選びやすさが確実に減少します。
                    <br></br><br></br>
                    しかしながら、より多種多様な作品が生み出される現象と共に、一方では量の増加が質の著しい低下を招くという矛盾に目を向けることもまた重要なのです。これらの点は、消費主義をより明らかに捉える重要な要素となります。
                    {paragraphBreak()}
                    デジタル技術への依存度が増す一方で、僕達は無意識のうちにプライバシーを手放してしまっています。現在、多くの企業は我々個々のプロフィールに関する情報を山ほど蓄積し、その情報を用いて個別にターゲット付けされた広告を我々に見せつけることが可能となっています。
                    <br></br><br></br>
                    さらに、僕達のソーシャルメディアへの情報投稿自体が反生産的であるとも言えます。現今、写真一枚から個々の人物像を特定するのは容易いばかりか、その人物の興味や関心事を深く掘り下げることまで可能となってしまっています。
                    <br></br><br></br>
                    {paragraphBreak()}
                    若い世代だけでなく、まさにメンタルヘルスの問題は増加の一途を辿っています。僕自身は、コンテントの短縮化により、その消費量が増大したことが一因だと考えています。
                    <br></br><br></br>
                    コンテントが短くなれば、それだけ多くのコンテントを取り込みやすくなるため、絶えず流れるコンテントの洪水に取り巻かれる形となり、最終的にはその依存状態となるのです。
                    <br></br><br></br>
                    僕が日本に住んでいると、何処に行っても、目に映る景色は皆が携帯を手に、時間を無意味に過ごす姿ばかりです。それに対し、「たった数十年前の世界はどのようなものだったのでしょうか」とずっと考えています。
                    {paragraphBreak()}
                    一言で言えば、僕達はインターネットで得られる情報の大部分がコントロールされ、プロパガンダ化されているという事実に光を当てることが極めて重視されるべきだと考えます。
                    <br></br><br></br>
                    マスメディアを盲目的に信用するのではなく、自己の判断を保つことが不可欠であるという視点を持つことが求められます。しかし、他人の意見を過度に気にするあまり、自身で意見を形成する能力を紛失するリスクも増える。
                    <br></br><br></br>
                    これこそが現代の最大の問題であり、我々は自分という存在を忘れ、所見を反映した人間のコピーに成り下がる可能性があるのです。
                    {paragraphBreak()}
                    さらに詳細に議論したい点は山ほどありますが、明瞭さを保つために、ここで僕のエッセイを終えることにします。僕は世界が改善することを心から願っていますが、その前に一時的に悪化するだろうと予見します。
                    <br></br><br></br>
                    我々が現在生きている現実に目覚め、デジタルの世界を手放して現実世界に回帰することを、心から切望します。
                    <br></br><br></br>
                    <div style={{ float: "right" }}> - サンタナム理志 </div>
                    </div>
                </div>

                <div className="writing_container" onClick={() => entry_on_click("8")}>
                    <div className="date_of_writing">
                        2023-09-25
                    </div>
                    <div className="title_of_writing">
                        A Dissection of Nietzsche's Proclamation: "Gott ist tot" (God is Dead)
                    </div>
                    <div className="piece_of_writing" wid="8" style={{ display: "none" }}>
                    I preface this essay with the admission of my own belief in God, particularly the Divine Entity as delineated within the hallowed folios of the Holy Bible. My faith, resolutely anchored amid the ocean of polymorphous ideologies, empowers such an exegesis on Nietzsche’s metaphysical postulations.
                    <br></br><br></br>
                    Perhaps it is important to illustrate the context of the 19th-century philosophies, which registered significant shifts, notably the introduction of emancipated schools of thought that invariably encroached on the traditional dominion of Christianity. The assimilation of Eastern religiosity into the Western psyche, catalyzed by the transcendentalist musings of Emerson, Thoreau, and the scholarship of Müller (responsible for the propagation of Eastern religious texts) culminated in an ecclesiastical vacuum, readily occupied by the militant anti-theism of Nietzsche.
                    <br></br><br></br>
                    Yet, Nietzsche’s “God is Dead” declaration should not be misconstrued as an elegy to Divinity’s expiration. Rather, such an assertion should signal a social-structural evolution where ecclesiastical supremacy was usurped by the State, allowing for the State to gain a substantial role in guiding the values and moral precepts of society. Once a tithe attributed to the Church, now became the staff of the State.
                    
                    {paragraphBreak()}

                    An incisive dissection of Nietzsche’s overarching claim necessitates a pivotal exploration of various concepts, not withstanding the übermensch, Nietzsche’s claims revolving on “the brutal honesty of nature”, and much more. The affirmation of humanity’s intrinsic variegation marks the gulf stretched between the mighty and the meek. However, this doesn’t necessarily indicate that one has a superior purpose over the other. Contrary to a blatant hierarchy, there appears to exist a more ecological intertwining where each is instrumental for a universal balance. An analogous to the divine symphony where every note, robust or delicate, harmonizes to create the comprehensive melody – thus contributing to the vast and multifaceted tapestry of existence.

                    <br></br><br></br>
                    An incisive dissection of Nietzsche’s overarching claim necessitates a pivotal exploration of various concepts, notwithstanding the übermensch, Nietzsche’s claims revolving on “the brutal honesty of nature”, and much more. The affirmation of humanity’s intrinsic variegation marks the gulf stretched between the mighty and the meek. However, this doesn’t necessarily indicate that one has a superior purpose over the other. Contrary to a blatant hierarchy, there appears to exist a more ecological intertwining where each is instrumental for a universal balance. Analogous to the divine symphony where every note, robust or delicate, harmonizes to create a comprehensive melody – thus contributing to the vast and multifaceted tapestry of existence.

                    <br></br><br></br>
                    I would like to delve into the firmament of objective morality – which, unlike a transient cultural patina, permeates our essence, and is indelibly inscribed into our spiritual constitution. It is not as easy to scrape off as paint on a wall, rather, it has mended itself to our epidermis, and brilliantly coats our soul.
                    <br></br><br></br>
                    Furthermore, while Nietzsche’s “transvaluation of values” promotes an individualistic approach, it mirrors a perversion of the Divine – a deity divided and dispersed into diverse human perspectives. This, however, does not remove God himself – it only replaces Him with billions of superficial “gods”. This also invokes the proposition – why should we accept Nietzsche’s values over anyone else’s, for instance? It is clear why we ascribe unwavering sanctity to the Creator – the cornerstone of unassailable and objective moral dictum.

                    
                    {paragraphBreak()}

                    Center ballasting Nietzsche’s philosophy is his precept of “will to power”, an elevation of the preeminence of power within a God-devoid vacuum. However, its concept itself subconsciously validates the existence of a supreme entity (tied into the übermensch). The human aspiration for power, pristinely mirrors a yearning towards the divine omnipotence. Transposing this to our cultural manifestations, we find that our reverence for heroes and villains in art, the epic narratives of extraordinary beings, are but muted echoes, yearning approximations of the resplendent brilliance of a supreme entity. 
                    <br></br><br></br>
                    We mimic the Divine through art, yet the tacit acceptance of an underlying code of conduct guiding this pursuit for power infers the existence of higher principles, ones borrowing significantly from divine, moral conscience. Furthermore, rejecting God to elevate power seems paradoxically self-defeating, as in doing so, one merely replaces God with another form of supremacy, suggesting a perpetual human need for a superior entity, thereby indicating a concealed affirmation of divinity, hid behind the veil of faux-supremacy.
                    <br></br><br></br>
                    Indeed, Nietzsche's candid recognition of life's harsh realities resonates with undeniable poignancy. Yet, we remain beholden to grapple with the reality of God’s omnipotence, a grandeur too profound for our limited human faculties to fathom. The persistent attempts of adversaries to occlude His existence inadvertently lends credence to the Divine presence; it is indeed in the covert maneuvers to obscure that the veiled profundities of this existence are revealed to us. The key to deciphering the clandestine narrative of our world, lies intrinsically in a fervent faith in the Divine. The dynamic interplay between belief and denial, faith and skepticism, invariably brings to the foreground the omnipresence of God, creating a stark and constant reminder of His existence in the very fabric of our lived experiences. This revelation lies not in the retreat of faith, but in its relentless persistence, testament to the steadfast power of belief in the face of adversity.
                    
                    {paragraphBreak()}


                    <br></br><br></br>
                    Center ballasting Nietzsche’s philosophy is his precept of “will to power”, an elevation of the preeminence of power within a God-devoid vacuum. However, its concept itself subconsciously validates the existence of a supreme entity (tied into the übermensch). The human aspiration for power pristinely mirrors a yearning towards divine omnipotence. Transposing this to our cultural manifestations, we find that our reverence for heroes and villains in art, the epic narratives of extraordinary beings, are but muted echoes, yearning approximations of the resplendent brilliance of a supreme entity. 
                    <br></br><br></br>
                    We mimic the Divine through art, yet the tacit acceptance of an underlying code of conduct guiding this pursuit for power infers the existence of higher principles, ones borrowing significantly from divine, moral conscience. Furthermore, rejecting God to elevate power seems paradoxically self-defeating, as in doing so, one merely replaces God with another form of supremacy, suggesting a perpetual human need for a superior entity, thereby indicating a concealed affirmation of divinity, hid behind the veil of faux-supremacy.
                    <br></br><br></br>
                    Indeed, Nietzsche's candid recognition of life's harsh realities resonates with undeniable poignancy. Yet, we remain beholden to grapple with the reality of God’s omnipotence, a grandeur too profound for our limited human faculties to fathom. The persistent attempts of adversaries to occlude His existence inadvertently lends credence to the Divine presence; it is indeed in the covert maneuvers to obscure that the veiled profundities of this existence are revealed to us. The key to deciphering the clandestine narrative of our world lies intrinsically in a fervent faith in the Divine. The dynamic interplay between belief and denial, faith and skepticism, invariably brings to the foreground the omnipresence of God, creating a stark and constant reminder of His existence in the very fabric of our lived experiences. This revelation lies not in the retreat of faith, but in its relentless persistence, a testament to the steadfast power of belief in the face of adversity.
                    <br></br><br></br>

                    And it is with such profundity that I conclude this assertion. Albeit a bit verbose, I believe this deconstruction allows for the reconstruction of our perceptions of the Divine, underscoring God’s presence within our realm, thereby reaffirming His divine immortality.
                    <br></br><br></br>
                    <div style={{ float: "right" }}> - R. Santhanam </div>
                    </div>
                </div>

                {/* <div className="writing_container" onClick={() => entry_on_click("7")}>
                    <div className="date_of_writing">
                        2023-09-04
                    </div>
                    <div className="title_of_writing">
                        Crooked Smiles and Warped Mirrors
                    </div>
                    <div className="piece_of_writing" wid="7" style={{ display: "none" }}>
                    Not to be long-winded, but it’s been some time since my fingers jitterbugged on the keyboard. You know how it is – that itch to spill what’s in the noggin to anyone who’ll listen. So let’s jump into it.
                    <br></br><br></br>
                    The whole kit and caboodle of me, well, it’s got an uncanny tilt. I remember some years back, laying on the bed, my girlfriend at the time sized me up the way a butcher eyes a side of beef – talking about how asymmetrical my face was. I had that lingering suspicion that my mug wasn’t exactly a Hollywood headshot, but I still was a little in denial. 
                    <br></br><br></br>
                    See, given enough time, I realized how lopsided I really am, down to the crux of it. Not just the mug, but the whole shebang. The cartilage in my left knee’s wearing thin, and my left arm was contorted enough to make a circus freak applaud, thanks to some mishaps back in my school days. I’m a shantytown shack in a hurricane - asymmetrical down to the marrow.
                    <br></br><br></br>
                    But here’s the kicker, with each passing day, I’m liking it more and more. What’s an irreverent son of a gun without his quirks? I relish in the extreme. Makes me who I am.
                    <br></br><br></br>
                    And here’s the point I want to make. Asymmetry should be preferred over symmetry. People talk about striking a balance, but when does balance get shit done? Balance hardly twinkles with a touch of magic. Magic lies in the extremities. The proverbial straw that broke the camel’s back, the weight of existence upon one’s shoulders that threatens to crush you or forces a rebirth of strength – these moments carve a man’s true essence. The irresistible allure of high-pressure crucibles, their promise of growth, always gets me salivating.
                    <br></br><br></br>
                    I’m a wild card. That rogue cannon in a field of popguns. Living on the edge, and heck, even over it sometimes. The guys I admire the most never lived by the rule book. We’re all playing parts, sure. Some get the lead, some are stuck in the chorus line. But isn’t it more fun to be the jester, thumbing his nose at the king?
                    <br></br><br></br>
                    Funny thing is, stuff I used to think was a problem, I’d now give a hearty toast to. Who would’ve thunk it?
                    <br></br><br></br>
                    <div style={{ float: "right" }}> - R. Santhanam </div>
                    </div>
                </div> */}

                {/* <div className="writing_container" onClick={() => entry_on_click("6")}>
                    <div className="date_of_writing">
                        2023年8月12日
                    </div>
                    <div className="title_of_writing">
                        現代建築の一面：量産と品質低下のジレンマ
                    </div>
                    <div className="piece_of_writing" wid="6" style={{ display: "none" }}>
                    今回、特別に僕の投稿を日本語で綴ってみようと思います。日本語学習はやはり挑戦ですが、最近は熱心に勉強しているから、得た経験を活かしたい。
                    <br></br><br></br>
                    僕はよく建築について考えます。どこを訪れても、現代建築と古建築を比較し、残念ながら度々失望することもあります。問題の一端として、建築界における量産の風潮が浮かび上がってきます。その結果、現代建築の品質が著しく劣化し、その価値を大きく失っていると感じます。
                    <br></br><br></br>
                    この傾向は建築業界だけにとどまらず、他の産業でも見受けられます。プラスチックや人工素材の頻繁な使用が、品質低下を招くのは明らかです。また、急速な生産需要と職人技の衰退が、デザインに乏しい商品の増産を引き起こしているように思います。
                    <br></br><br></br>
                    具体的にいうと、「建築の工業化」が一つの例です。これは設計から施工まで全過程が効率やコスト削減を重視し、結果として均一化された商品が大量生産される状況を指します。だが、果たしてこれが長期的に真に良質な建築を生み出せるのでしょうか？それとも、短期的な利益追求だけが目的なのでしょうか？
                    <br></br><br></br>
                    これらの考察から、「量産と品質低下のジレンマ」と呼び、その本質を問い直すことが求められます。
                    <br></br><br></br>
                    僕たちが普段目にする建築物の大部分は、量産文化の結果と言えます。時間と費用の効率性が実現されたとすれば、それは成功です。しかしながら、美的価値や耐久性、さらに生活環境への配慮という視点から見れば、大きな犠牲があることを否めません。
                    <br></br><br></br>
                    この建築のジレンマを克服するためには、量産重視の現代トレンドを再評価し、真の価値追求が重要と言えるでしょう。そうでなければ、僕たちは単に同じような建築物に囲まれ、その虚しさを感じるだけだろう。それは本当に望む世界なのでしょうか？
                    <br></br><br></br>
                    未来の建築がどうあるべきかは人それぞれです。しかし、少なくとも「量産と品質低下のジレンマ」から脱却した形であるべきだと僕は強く感じます。これは僕だけの問題ではなく、我々全てが向き合うべき問題です。今こそ、より良い建築を求める新しい道を切り開くべき時だと思います。それが、より豊かな未来への第一歩となるでしょう。
                    <br></br><br></br>
                    <div style={{ float: "right" }}> - サンタナム理志 </div>
                    </div>
                </div> */}


                {/* <div className="writing_container" onClick={() => entry_on_click("5")}>
                    <div className="date_of_writing">
                        2023-08-10
                    </div>
                    <div className="title_of_writing">
                        The Invisible Tethers of the Internet
                    </div>
                    <div className="piece_of_writing" wid="5" style={{ display: "none" }}>
                    I feel like as of late I’ve been using too flowery of language (as my father likes to call it) – I feel like I’ve been lacking more of a personalized feel to my prose.
                    <br></br><br></br>
                    Don’t get me wrong, I do enjoy my past pieces, but they feel quite impersonal. Doesn’t feel as human as I’d like it to. 
                    <br></br><br></br>
                    I want to particularly delve into worldly evolution – not an evolution in the sense of Darwinism, which I inherently find fraudulent; however, an abstracted concept of evolution. Perhaps, let’s say the evolution of human interaction. This phenomenon particularly affects the younger generation. As we streamline towards a digitized society, we notice the greatest influence on the most impressionable minds. Unsurprisingly, they also wield considerable influence over cultural trends due to their unsurpassed Internet usage, dictating what becomes mainstream.
                    <br></br><br></br>
                    I would like to note an alternate point about how I believe due to the shortened language we have begun using (and I attribute this primarily to the Internet’s proliferation ability) that we have limited our range of thoughts and expression – which I believe will ultimately lead to the demise of widespread sophistication amongst the populous (but who’s to say this hasn’t yet happened?). I will dive into the destruction of the English language and its dire consequences within another essay.
                    <br></br><br></br>
                    Back to the topic – the more an individual spends time on the Internet, lacking direct human interaction (I will say that if the majority of one's human interaction is with humans that interact with the Internet more than they do with other humans, this is also not favorable) — I find that they subject themselves to a peculiar torture – one that individuals willingly subject themselves to (a Stockholm syndrome of sorts). Internet addiction, most definitely, is a veritable thing. All of us, at one point or another, have found ourselves ensnared within the web’s inescapable trap of infinite content.
                    <br></br><br></br>
                    The torture ironically engages us primarily due to the 'curatable' dimension of our Internet experience. Subject to our discretion are countless options – we decide what to watch, what to consume (although I would imply external influences significantly impact our decisions) and how to express ourselves. A simple remedy? A pseudonym to interact without apprehension, your human identity de-personified through an avatar or username.
                    <br></br><br></br>
                    Most people, however, are not vigilant enough of controlling their own desire – which is why you get average daily screen times exceeding six or more hours amongst the Internet generation no matter where you go. This is not a local ailment, but a pandemic that threatens all demographics. The exploitation of addiction by certain groups and organizations aids not in this matter. People are then turned into eternal consumers and thus into nothing but drones… The newly coined term “NPC” seems rather humorous, yet uncannily accurate in this situation.
                    <br></br><br></br>
                    The problem is, you start having people think they’re not “NPCs” when they virtually are. The only separation from this, I’ve found, is a belief in the divine and an understanding of your actions and the consequences they hold on one’s spirit. 
                    <br></br><br></br>
                    And the Internet, no matter how useful it can be – is in the modern age, a direct spiritual enemy. 
                    <br></br><br></br>
                    Be wise with your desires and they shall not chain you. The more you indulge in them, the more they burgeon, betraying you by devouring you whole in the end.
                    <br></br><br></br>
                    <div style={{ float: "right" }}> - R. Santhanam </div>
                    </div>
                </div> */}

                {/* <div className="writing_container" onClick={() => entry_on_click("4")}>
                    <div className="date_of_writing">
                        2023-08-06
                    </div>
                    <div className="title_of_writing">
                        Cognitive Augmentation through Linguistic Proficiency
                    </div>
                    <div className="piece_of_writing" wid="4" style={{ display: "none" }}>
                    Language has long beguiled me in its intricacy and wonder. Isn’t it an astonishing spectacle, that identical concepts can be articulated through distinctly disparate words and phrases? Surely, we must marvel at this magnificent linguistic “hash map” laid before us. I relish in the exhilaration of conquests both cerebral and cultural, and the enlightenment garnered from the exploration of fresh languages and societies has profoundly augmented my worldview – a privilege I take not for granted.
                    <br></br><br></br>
                    I make this assertion with the deepest humility – perhaps providence has favored me with remarkable cognitive aptitudes for comprehension and information synthesis. Yet, it is through steadfast dedication and assiduous cultivation that I chiseled this cerebrum, priming it for the demanding task of language processing and cross-cultural integration.
                    <br></br><br></br>
                    I have many lofty ambitions, not least among them is becoming a nexus – a conduit capable of bridging the linguistic chasm between the multitudes, transcending disparities in language and shared historical experience. To foster such connections, to bask in the resplendent glory of such a role, it engenders in my heart a yearning as indomitable as the tree of life itself.
                    <br></br><br></br>
                    The pursuit of mastering foreign tongues has endowed me with a profound appreciation for the complexities of English. I maintain this position – with unwavering certainty – that it stands unparalleled as a conduit for the manifestation of complex thought. The formidable array of idiomatic expressions, in symbiosis with the diverse currents of enunciation, merge together to form a rich tapestry of intellectual discourse.
                    <br></br><br></br>
                    It is without a doubt that I underscore the profound value of language acquisition as a tool for fortifying memory capacity. As drawn from my personal foray into this realm, my capacity for memorization has been exponentially bolstered, inclusive of accelerated recall and enhanced problem-solving prowess. When endeavoring to articulate the same thoughts in an acquired language, in comparison with the effortlessness in one’s native tongue, it seems to kindle an infrequently exploited segment of the cerebrum. Asserting with conviction, the odyssey of language-learning has unquestionably bestowed upon me a formidable cognitive arsenal and intellectual might, fortifying me within various tasks in my quotidian life.
                    <br></br><br></br>
                    And thus, we arrive at the fin of my essay, one imbued with an aspiration to kindle within you a fervor for learning, or perpetuating the journey of understanding languages beyond that of your native language. For in conversing with a man in his mother tongue, it is said that those words are delivered directly to his heart.
                    <br></br><br></br>
                    <div style={{ float: "right" }}> - R. Santhanam </div>
                    </div>
                </div> */}

                <div className="writing_container" onClick={() => entry_on_click("3")}>
                    <div className="date_of_writing">
                        2023-08-06
                    </div>
                    <div className="title_of_writing">
                        Interplay of Solitude in the Genesis of Ideation: A Cognitive Appraisal
                    </div>
                    <div className="piece_of_writing" wid="3" style={{ display: "none" }}>
                    An affinity for solitude is a trait that I harbor, finding blissful solace in the embrace of loneliness. This solitude revels in the absence of superfluities; I have attained a plentitude of knowledge and comprehension through treks throughout the vast expanses of nature, armed enticingly with nothing more than a parchment of thoughts and a quill soaked in ink.
                    <br></br><br></br>
                    It is within such a context that I find it compelling to delve into an exploration of the raw, primal essence of solitude, elucidating the brilliance that it kindles – and more significantly, its necessity as an incubator for genial thought process. This is not a self-indulgent claim of my possession of genius, but rather an attempt to dissect the underpinnings of its cultivation, one could say – to fathom the precursors that orchestrate the symphony that is brilliance.
                    <br></br><br></br>
                    A frequent discourse I engage in with my acquaintances revolves around the jarring intrusion of modern society: ceaseless flickering of screens, the clamor of discordant music – all serving as formidable barricades, obstructing the path to authentic understanding and mental vigor. The potency of silence, I believe, far outweighs the impact of speech – a profound thought often overshadowed in the grand amphitheater of intellectual discernment. It is within that silence that your mind weaves an eloquent soliloquy of innovation and creativity – just as diamonds being shaped under intense pressure, so too is the brain honed and sharpened through the ceaseless challenges of navigating the labyrinth of silence – a maelstrom of ingenious ideation, stirred within the pot of sophistication.
                    <br></br><br></br>
                    Amid my relentless pursuit for clarity and profound understanding of the existential dome in which we dwell, and my continual striving towards intellectual excellence, it is therein where I have discerned the magnitude and indispensability of protracted intervals of solitude. Certainly, I maintain a communicative bond with friends and family; however, for the sake of thought evolution, I have chosen to curtail certain aspects of my existence– namely, the pursuits of romantic entanglements and worldly adventures. My decision of abstinence stems not from an absence of opportunities therein, but rather from an intentional preference for employing that energy towards the ceaseless mental gymnastics and cognitive exploration, thus offering a fertile ground for the blossoming of elevated ideation.
                    <br></br><br></br>
                    I harbor no haste in this “pursuit of enlightenment”, for does not the quest for wisdom remain perennial, an unending voyage? As such, I find my fulfillment ensconced within the journey itself, rather than the elusive touch of its destination. My crusade for knowledge acquisition is not an act of self-indulgence, but a venture born from the desire to disseminate this wisdom – whether echoed through the lives of my future descendants, or contemporary peers, or within the inscription of my works, which I humbly aspire to serve as wellsprings of inspiration and cerebral stimulation for those who encounter them.
                    <br></br><br></br>
                    <div style={{ float: "right" }}> - R. Santhanam </div>
                    </div>
                </div>

                {/* <div className="writing_container" onClick={() => entry_on_click("2")}>
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
                </div> */}

                {/* <div className="writing_container" onClick={() => entry_on_click("1")}>
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
                </div> */}

            </div>

            <Footer/>

        </>
    );
}

export default Writing;
