const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});


const schedulePage = document.querySelector("#schedule-page");

const events = [
    {
        month: "June",
        day: "12",
        title: "<span class='highlight-title'>Polish Baltic Philharmonic Gdańsk</span>",
        date: "Friday 12 June 2026",
        time: "19:00-21:00",
        venue: "Polish Baltic Philharmonic",
        programme: [
            {
                composer: "W.A. Mozart",
                piece: "Piano Concerto No. 22 in E-flat Major, K.482"
            },
            {
                composer: "J. Brahms",
                piece: "Symphony No. 3 in F Major, op. 90"
            }
        ],
        performers: [
            "Polish Baltic Frédéric Chopin Philharmonic",
            "Pietro de Maria, Piano"
        ],
        link: "https://www.filharmonia.gda.pl/koncerty/koncert-symfoniczny/1861-koncert-symfoniczny-pietro-de-maria-3"
    },


    {
        month: "June",
        day: "20",
        title: "Debut with <span class='highlight-title'>Gunma Symphony Orchestra</span><br>群馬交響楽団",
        date: "Saturday 20 June 2026",
        time: "16:00-18:30",
        venue: "高崎芸術劇場 - 大劇場",
        isJapan: true,
        programme: [
            {
                composer: "グラス / Phillip Glass",
                piece: "２人のティンパニストと管弦楽のための協奏的幻想曲 /<br> Concerto Fantasy for Two Timpanists and Orchestra (2000)"
            },
            {
                composer: "ブルックナー  / Anton Bruckner",
                piece: "交響曲 第7番 ホ長調 WAB 107（コールス版）/<br>  Symphony No. 7 in E Major, WAB 107"
            }
        ],
        performers: [
            "群馬交響楽団 / Gunma Symphony Orchestra",
            "三橋 敦 / Atsushi Mitsuhashi, ティンパニ / Timpani",
            "辻󠄀本 智裕 / Tomohiro Tsuj, ティンパニ/ Timpani"
        ],
        link: "https://www.gunkyo.com/concerts/2950/"
    },


    {
        month: "July",
        day: "3",
        title: "<span class='highlight-title'>Orchestre national d'Île-de-France (ONDIF) in Osaka/</span><br>大阪フェスティバルホール<br><span class='highlight-title'>Japan Tour 1/9</span>",
        date: "Friday 3 July 2026",
        time: "15:00-17:30",
        venue: "フェスティバルホール",
        isJapan: true,
        programme: [
            {
                composer: "ドビュッシー（ムートン編）/ Claude Debussy (Arr. Mouton)",
                piece: "2つのアラベスク / Deux Arabesques"
            },
            {
                composer: "グリーグ / Edvard Grieg",
                piece: "ピアノ協奏曲イ短調 op.16  / Piano Concerto in A Minor, op. 16"
            },
            {
                composer: "ブラームス / Johannes Brahms",
                piece: " ‍ 交響曲第１番ハ短調 op.68  /  Symphony No. 1 in C minor, op.68"
            }
        ],
        performers: [
            "管弦楽 - イル・ド・フランス国立管弦楽団 / Orchestre national d'Île-de-France",
            "ピアノ - 石井琢磨 / Ishii Takuma / Piano"
        ],
        link: "https://www.festivalhall.jp/events/5924/"
    },

    {
        month: "July",
        day: "5",
        title: "<span class='highlight-title'>ONDIF in Takamatsu/</span>レクザムホール（香川県県民ホール<br><span class='highlight-title'>Japan Tour 2/9</span>",
        date: "Sunday 5 July 2026",
        time: "14:00-16:00",
        venue: "Rexxam Hall / レクザムホール（香川県県民ホール)",
        isJapan: true,
        programme: [
            {
                composer: "ドビュッシー（ムートン編）/ Claude Debussy (Arr. Mouton)",
                piece: "2つのアラベスク / Deux Arabesques"
            },
            {
                composer: "グリーグ / Edvard Grieg",
                piece: "ピアノ協奏曲イ短調 op.16  / Piano Concerto in A Minor, op. 16"
            },
            {
                composer: "ブラームス / Johannes Brahms",
                piece: " ‍ 交響曲第１番ハ短調 op.68  /  Symphony No. 1 in C minor, op.68"
            }
        ],
        performers: [
            "管弦楽 - イル・ド・フランス国立管弦楽団 / Orchestre national d'Île-de-France",
            "ピアノ - 石井琢磨 / Ishii Takuma / Piano"
        ],
        link: "https://www.webtsc.com/concert/74922/" 
    },

    {
        month: "July",
        day: "6",
        title: "<span class='highlight-title'>ONDIF in Fukuoka/</span>アクロス福岡 シンフォニーホール<br><span class='highlight-title'>Japan Tour 3/9</span>",
        date: "Monday 6 July 2026",
        time: "19:00-21:30",
        venue: "アクロス福岡 シンフォニーホール",
        isJapan: true,
        programme: [
            {
                composer: "ファランク / Louise Farrenc",
                piece: "序曲第2番 op. 24 / Overture No. 2, op. 24"
            },
            {
                composer: "グリーグ / Edvard Grieg",
                piece: "ピアノ協奏曲イ短調 op.16  / Piano Concerto in A Minor, op. 16"
            },
            {
                composer: "ベートーヴェン / Ludwig van Beethoven",
                piece: " ‍ 交響曲第3番 op.55「英雄」  /  Symphony No. 3 in E-flat Major, op.55 “Eroica”"
            }
        ],
        performers: [
            "管弦楽 - イル・ド・フランス国立管弦楽団 / Orchestre national d'Île-de-France",
            "ピアノ - 石井琢磨 / Ishii Takuma / Piano"
        ],
        link: "https://www.acros.or.jp/english/events/720.html"
    },

    {
        month: "July",
        day: "9",
        title: "<span class='highlight-title'>ONDIF in Sapporo/</span>大阪フェスティバルホール<br><span class='highlight-title'>Japan Tour 4/9</span>",
        date: "Thursday 9 July 2026",
        time: "19:00-21:30",
        venue: "札幌文化芸術劇場 Hitaru",
        isJapan: true,
        programme: [
            {
                composer: "ドビュッシー（ムートン編）/ Claude Debussy (Arr. Mouton)",
                piece: "2つのアラベスク / Deux Arabesques"
            },
            {
                composer: "グリーグ / Edvard Grieg",
                piece: "ピアノ協奏曲イ短調 op.16  / Piano Concerto in A Minor, op. 16"
            },
            {
                composer: "ブラームス / Johannes Brahms",
                piece: " ‍ 交響曲第１番ハ短調 op.68  /  Symphony No. 1 in C minor, op.68"
            }
        ],
        performers: [
            "管弦楽 - イル・ド・フランス国立管弦楽団 / Orchestre national d'Île-de-France",
            "ピアノ - 石井琢磨 / Ishii Takuma / Piano"
        ],
        link: "https://www.tvh-concert.jp/schedule/260709.html"
    }, 

    {
        month: "July",
        day: "13",
        title: "<span class='highlight-title'>ONDIF in Tokyo Metropolitan Theater/</span>東京芸術劇場 コンサートホール<br><span class='highlight-title'>Japan Tour 5/9</span>",
        date: "Monday July 13 2026",
        time: "19:00-21:30",
        venue: "Tokyo Metropolitan Theater / 東京芸術劇場 コンサートホール",
        isJapan: true,
        programme: [
            {
                composer: "ファランク / Louise Farrenc",
                piece: "序曲第2番 op. 24 / Overture No. 2, op. 24"
            },
            {
                composer: "グリーグ / Edvard Grieg",
                piece: "ピアノ協奏曲イ短調 op.16  / Piano Concerto in A Minor, op. 16"
            },
            {
                composer: "ベートーヴェン / Ludwig van Beethoven",
                piece: " ‍ 交響曲第3番 op.55「英雄」  /  Symphony No. 3 in E-flat Major, op.55 “Eroica”"
            }
        ],
        performers: [
            "管弦楽 - イル・ド・フランス国立管弦楽団 / Orchestre national d'Île-de-France",
            "ピアノ - 石井琢磨 / Ishii Takuma / Piano"
        ],
        link: "https://tempoprimo.co.jp/stage/y2026/ondif"
    },

    {
        month: "July",
        day: "14",
        title: "<span class='highlight-title'>ONDIF in Nagoya/</span>愛知県芸術劇場コンサートホール<br><span class='highlight-title'>Japan Tour 6/9</span>",
        date: "Tuesday 14 July 2026",
        time: "18:00-20:30",
        venue: "Aichi Prefectural Arts Theater Concert Hall / 愛知県芸術劇場コンサートホール",
        isJapan: true,
        programme: [
            {
                composer: "ドビュッシー（ムートン編）/ Claude Debussy (Arr. Mouton)",
                piece: "2つのアラベスク / Deux Arabesques"
            },
            {
                composer: "グリーグ / Edvard Grieg",
                piece: "ピアノ協奏曲イ短調 op.16  / Piano Concerto in A Minor, op. 16"
            },
            {
                composer: "ブラームス / Johannes Brahms",
                piece: " ‍ 交響曲第１番ハ短調 op.68  /  Symphony No. 1 in C minor, op.68"
            }
        ],
        performers: [
            "管弦楽 - イル・ド・フランス国立管弦楽団 / Orchestre national d'Île-de-France",
            "ピアノ - 石井琢磨 / Ishii Takuma / Piano"
        ],
        link: "https://cte.jp/event/260714/"
    },

    {
        month: "July",
        day: "15",
        title: "<span class='highlight-title'>ONDIF in Tokyo Opera City/</span>東京オペラシティ コンサートホール <br><span class='highlight-title'>Japan Tour 7/9</span>",
        date: "Wednesday 15 July 2026",
        time: "14:00-16:30",
        venue: "Tokyo Opera City Concert Hall / 東京オペラシティ コンサートホール",
        isJapan: true,
        programme: [
            {
                composer: "ドビュッシー（ムートン編）/ Claude Debussy (Arr. Mouton)",
                piece: "2つのアラベスク / Deux Arabesques"
            },
            {
                composer: "グリーグ / Edvard Grieg",
                piece: "ピアノ協奏曲イ短調 op.16  / Piano Concerto in A Minor, op. 16"
            },
            {
                composer: "ブラームス / Johannes Brahms",
                piece: " ‍ 交響曲第１番ハ短調 op.68  /  Symphony No. 1 in C minor, op.68"
            }
        ],
        performers: [
            "管弦楽 - イル・ド・フランス国立管弦楽団 / Orchestre national d'Île-de-France",
            "ピアノ - 石井琢磨 / Ishii Takuma / Piano"
        ],
        link: "https://tempoprimo.co.jp/stage/y2026/ondif"
    },

    {
        month: "July",
        day: "16",
        title: "<span class='highlight-title'>ONDIF in Hamamatsu</span>アクトシティ浜松　大ホール<br><span class='highlight-title'>Japan Tour 8/9</span>",
        date: "Thursday 16 July 2026",
        time: "19:00-21:30",
        venue: "Act City Hamamatsu Large Hall / アクトシティ浜松　大ホール",
        isJapan: true,
        programme: [
            {
                composer: "ドビュッシー（ムートン編）/ Claude Debussy (Arr. Mouton)",
                piece: "2つのアラベスク / Deux Arabesques"
            },
            {
                composer: "グリーグ / Edvard Grieg",
                piece: "ピアノ協奏曲イ短調 op.16  / Piano Concerto in A Minor, op. 16"
            },
            {
                composer: "ブラームス / Johannes Brahms",
                piece: " ‍ 交響曲第１番ハ短調 op.68  /  Symphony No. 1 in C minor, op.68"
            }
        ],
        performers: [
            "管弦楽 - イル・ド・フランス国立管弦楽団 / Orchestre national d'Île-de-France",
            "ピアノ - 石井琢磨 / Ishii Takuma / Piano"
        ],
        link: "https://www.satv.co.jp/0500event/20260716_ishiitakuma.html"
    },

    {
        month: "July",
        day: "17",
        title: "<span class='highlight-title'>ONDIF in Musashino City Cultural Centre, Great Hall/</span>武蔵野市民文化会館 大ホール<br><span class='highlight-title'>Japan Tour 9/9</span>",
        date: "Friday 17 July 2026",
        time: "19:00-21:30",
        venue: "武蔵野市民文化会館 大ホール",
        isJapan: true,
                programme: [
            {
                composer: "ファランク / Louise Farrenc",
                piece: "序曲第2番 op. 24 / Overture No. 2, op. 24"
            },
            {
                composer: "グリーグ / Edvard Grieg",
                piece: "ピアノ協奏曲イ短調 op.16  / Piano Concerto in A Minor, op. 16"
            },
            {
                composer: "ベートーヴェン / Ludwig van Beethoven",
                piece: " ‍ 交響曲第3番 op.55「英雄」  /  Symphony No. 3 in E-flat Major, op.55 “Eroica”"
            }
        ],
        performers: [
            "管弦楽 - イル・ド・フランス国立管弦楽団 / Orchestre national d'Île-de-France",
            "ピアノ - 石井琢磨 / Ishii Takuma / Piano"
        ],
        link: "https://www.musashino.or.jp/bunka/1002092/1008850.html"
    },

    {
        type: "masterclass",
        startMonth: "July",
        startDay: "30",
        endMonth: "August",
        endDay: "2",
        title: "<span class='highlight-title'>Liedfestival Sindelfingen</span>",
        date: "Do. 30. Juli - So. 2. August 2026",
        time: "ganztägig",
        venue: "Sindelfingen",
        description: [
            "<strong>Mahlerlieder-Meisterkurs</strong>",
            "für Pianist*innen und Sänger*innen",
            "<em>So. 2. August 2026: Mahler-Matinee</em>"
        ],
        link: "https://www.liedfestival.net/liedakademie"
    }, 





];

if (schedulePage) {
    events.forEach(function(event) {

        const article = document.createElement("article");
        article.classList.add("schedule-item");

        const programmeHTML = event.programme
            ? event.programme.map(function(work) {
                return `
                    <div class="programme-work">
                        <p class="composer">${work.composer}</p>
                        <p class="piece">${work.piece}</p>
                    </div>
                `;
            }).join("")
            : "";

        const performersHTML = event.performers
            ? event.performers.map(function(performer, index) {
                if (index === 0) {
                    return `<p>${performer}</p><br>`;
                }

                return `<p>${performer}</p>`;   
            }).join("")
            : "";

        const programmeHeading = event.isJapan
            ? "曲目 / Programme"
            : "Programme";


        const isMasterclass = event.type === "masterclass";
        
        const descriptionHTML = event.description
            ? event.description.map(function(line) {
                return `<p>${line}</p>`;
            }).join("")
            : "";

        article.innerHTML = `
        <div class="schedule-date">

            ${isMasterclass ? `

                <div class="masterclass-dates">

                    <div class="masterclass-date-block">
                        <span class="schedule-month">${event.startMonth}</span>
                        <span class="schedule-day">${event.startDay}</span>
                    </div>

                    <span class="date-separator">-</span>

                    <div class="masterclass-date-block">
                        <span class="schedule-month">${event.endMonth}</span>
                        <span class="schedule-day">${event.endDay}</span>
                    </div>

                </div>

            `: `

                <span class="schedule-month">${event.month}</span>
                <span class="schedule-day">${event.day}</span>

            `}
        </div>
            
        <div class="schedule-details">
            <h2>${event.title}</h2>

            <div class="schedule-content">
                <p class="schedule-meta">
                    ${event.date}<br>
                    ${event.time}<br>
                    ${event.venue}
                </p>

            ${isMasterclass ? `
                <div class="schedule-programme masterclass-info">
                    ${descriptionHTML}
                </div> 
            ` : `
                <div class="schedule-programme">
                    <hr>
                    <h3>${programmeHeading}</h3>
                    ${programmeHTML}
                    <hr>
                </div>

                <div class="schedule-performers">
                    ${performersHTML}
                </div>
                `}

                <br>

                <a
                    href="${event.link}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="schedule-button"
                >
                    View Event
                </a>
            </div>
        </div>
        `;

        schedulePage.appendChild(article);
    });
}

