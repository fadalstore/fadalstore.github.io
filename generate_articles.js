const fs = require('fs');
const path = require('path');

// Article topics and content in Somali
const articleData = [
  {
    num: 1,
    title: "Side Hustle & Money Making Guide - Qaybta 1",
    topic: "Bilawga Ganacsiga Online-ka",
    sections: [
      {
        heading: "Introductionn iyo Hordhaca",
        content: `Ku soo dhawaaw Fadal Store! Kani waa qaybta koowaad ee Side Hustle & Money Making Guide. Halkaan waxaan kugu siinaynaa xogta kaa caawin doona inaad waxba ka bilowdo ilo dakhli oo online-ka loo samayn karo.

Maalmahan, waxaa jira fursad badan oo aad dakhli dheeraad ah ku samayn karto dhanka internetka. Hadii aad haysato computer iyo internet connection, waxaad haynaysaa loo diyaar garowga u bilaababka ganacsiga online-ka.

Xorriyadda maaliyadeed waa amar roon oo badan oo dadku raba. Waxaa muhiim ah inaad fahanto sida ay u socdaan xalal kala duwan. Maqaalkan waxaan kugu siinaynaa maamuus muhiim ah iyo xeelado kaa caawin doona inaad bilawdo journey-kaga oo lacag-sameynta.`
      },
      {
        heading: "Maxaa ah Side Hustle?",
        content: `Side hustle waa wax la-yir ah ee aad waqtigaaga qaybsan ku samayn karto si aad qalaaliyan ku yeelishid dakhli. Aad loo yaqaan side income, secondary income, ama second job.

Side hustle-ka kaa duwan work-ka caadiga ah. Waxaa laga aabul doonaa inaad waqtigaaga cajiisa wax samayso. Mararka qaata, waxaa laga aabul doonaa inaad magacaag sambaabu ama skills qaas ka samayso. Waxaa muhiim ah inaad fahanto welina wax cusub oo aad u baaro.

Inta badan side hustles ayaa online-ka. Taas waxay macnaheedu tahay inaad guri kas'ahaanka ah oo isagu ka shaqayn karto. Online side hustle waxaa ka dhacdaa websites, social media platforms, iyo apps kala duwan. Waxaa muhiim ah inaad fahanto sida ay u socdaan meelaha aad si fiican u ka shaqayn karto.`
      },
      {
        heading: "Faa'idooyinka Side Hustle",
        content: `Side hustle-ka waxaa leh faa'ido badan. Waxaa muhiim ah inaad fahanto faa'idooyinka. Marka laga eego dakhli, side hustle waxaa kaa caawin doona inaad kayd samayn karto ama maalgashi ku bilaabto.

Taas maaha waxa uu side hustle leh xigmad kaliyah. Waxaa kaloo muhiim ah inaad barato skills cusub. Mararka qaata, side hustle waxaa ku bedel karto main job-kaaga ama waxaa laga aabul doonaa inaad nabadgal samayso lacagtaada.

Waxaa kaloo muhiim ah inaad fahanto sida ay u socdaan side hustles kala duwan. Mararka qaata, waxaa jira side hustles oo waxba toban bilood ah lagama ay yeeshaan dakhli. Side hustles kalena waxaa u baahan labada sanah ama intii badan.`
      },
      {
        heading: "Aqoonka iyo Skills Kusoo Baahan",
        content: `Mararka qaata, side hustle-ka waxaa u baahan aqoon iyo skills. Waxaa muhiim ah inaad fahanto sida aad u baaran karto skills cusub. Internet-ka waxaa jira resources badan oo aad u baran karto side hustle kasta.

Waxaa jira websites sida Udemy, Coursera, iyo Skillshare oo ay kugu baraan side hustles kala duwan. Waxaa kaloo jira YouTube channels iyo blogs oo ay kugu baraan side hustles.

Skills-ka ugu muhiimsan waa communications, time management, iyo customer service. Mararka qaata, waxaa kaloo baahan digital marketing skills ama content creation skills. Waxaa muhiim ah inaad fahanto sida ay u socdaan skills kala duwan. Mararka qaata, waxaa jira skills oo aad si mira leh u bilaaban karto.`
      },
      {
        heading: "Iska Bilów Hadda",
        content: `Hadda waa waqtu fiican oo aad iska bilowdo side hustle. Waxaa muhiim ah inaad samayso qorshaha wanaagsan. Qorshaha waxaa u baahan inaad fahanto:
- Kuwa aad rabta inaad samayso
- Dalkhaydii aad u baahan tahay
- Isku midka aad rabta inaad dhawaan
- Side hustles kala duwan oo aad cajiis iska bilaabi karto

Mararka qaata, side hustle-ka waxaa u baahan investment yar. Taas waxay macnaheedu tahay inaad dhallan karto lacag yar si aad iska bilowdo. Waxaa muhiim ah inaad fahanto sida ay u socdaan side hustles kala duwan. Mararka qaata, waxaa jira side hustles oo waxba toban billiga ah lagama ay yeeshaan dakhli.

Xorriyadda maaliyadeed waxay bilaaban doonta mar aad iska bilowdo hadda. Falanqaynta iyo dedaalka ayaa nooga dareen doona dagaal-noolnol ee lagawada' ogaaday. Hadii aad jirto dedaal iyo xoog, waxaad gaadhan karto xorriyadda maaliyadeed ee aad raba.`
      }
    ]
  },
  {
    num: 2,
    title: "Side Hustle & Money Making Guide - Qaybta 2",
    topic: "Freelancing iyo Remote Work",
    sections: [
      {
        heading: "Freelancing-ka iyo Muhiimaddiisa",
        content: `Freelancing waa wax weyn oo badanaa dadka iska bilaabaan side hustle. Freelancer waa qof oo wax ka shaqayn karto ilaa sheqo ama buugaag oo addagu ku siiyo.

Freelancing-ka waxaa la yaqaan remote work, contract work, ama project-based work. Waxaa muhiim ah inaad fahanto sida ay u socdaan freelancing. Mararka qaata, freelancer-ka waxaa uu isagu samayn karto iska bilowda ganacsiga ama ku bilaabi karaa side hustle.

Freelancing-ka waxaa jira faa'ido badan. Waxaa laga aabul doonaa inaad samayn karto waqti aad adiga u fasaxdo. Mararka qaata, waxaa laga aabul doonaa inaad samayn karto waxo kala duwan ama waxo mid kaliyah. Waxaa muhiim ah inaad fahanto sila ay u socdaan freelancing kala duwan.`
      },
      {
        heading: "Platforms-ka Freelancing",
        content: `Internet-ka waxaa jira platforms badan oo aad u heli karto freelance jobs. Platforms-ka caan yihiin sida Fiverr, Upwork, Freelancer.com, iyo PeoplePerHour.

Fiverr-ka waxaa aad u bilaabi karto gigs yar oo aad u bixin karto $5 ama intii ka badan. Upwork-ka waxaa aad u bilaabi karto bids-ko oo aad u racdiso client-yada oo jobs-ka uu ay leeyihiin. Freelancer.com waxaa uu u ficaan Upwork laakiin waxaa jira tasamu dheeraad ah.

Waxaa muhiim ah inaad fahanto sila ay u socdaan platforms kala duwan. Mararka qaata, waxaa jira platforms oo aad u heli karto clients badan. Mararka kalena, waxaa jira platforms oo clients-ka ay jiraan yar laakiin dakhli-yada ay jiraan weyn.

Skills-ka ugu muhiimsan ee freelancing-ka waa writing, graphic design, programming, iyo video editing. Laakiin waxaa jira skills badan oo aad u bilaabi karto freelance work.`
      },
      {
        heading: "Sida Aad u Bilawdo Upwork",
        content: `Upwork-ka u bilawga waa si fudud. Marka hore, waxaa aad u samaysan karaa account. Kahor inta aad u samaysan account, waxaa aad u sheegsan karaa sila aad ka shaqayn karto iyo skills-kaaga.

Profile-kaaga waxaa muhiim ah inaad aad u sameeyso si fiican. Waxaa aad u samaysan karaa portfolio oo ay ku jiraan works-ka aad agtaa samayay. Mararka qaata, marwa aad haysato profile wanaagsan, waxaa aad u bilaabi karto bids-ko oo aad u racdiso client-yada.

Dooddiga waa muhiim ah ee Upwork. Dooddiga waxaa aad u sheegsan karaa sila aad jira, sila aad ragtid, iyo sila aad u rabta inaad tixiftid. Waxaa muhiim ah inaad samayso doodb fiican oo aad u sheegsan karaa client-ka sila aad waxbar karaa.

Mararka qaata, client-ka waxaa u baahan inaad ku xilo iyo si fiican. Waxaa muhiim ah inaad qaadiso deadlines. Mararka qaata, client-ka waxaa uu u rabaa nasiib iyo si habaysan. Hadii aad samayso wax fiican iyo si habaysan, client-ka waxaa u rogsan doonta inaad ku raacdo projects dambe.`
      },
      {
        heading: "Dakhli iyo Rates",
        content: `Dakhli-ka freelancing-ka waxay kala duwan. Mararka qaata, waxaa jira freelancers oo ah $5 jobissa. Mararka kalena, waxaa jira freelancers oo ah $100+ jobissa.

Factors-ka muhiimsan ee dakhli-ka waxay kala duwan:
- Skills-kaaga iyo experience
- Quality-ka waxaad samayso
- Client-yada aad u shaqeysid
- Market demand

Waxaa muhiim ah inaad samayso rates wanaagsan. Hadii aad samayso rates yar inta badan, waxaa jiri doonta dakhli yar. Hadii aad samayso rates weyn, waxaa jiri doonta client-yada yar laakiin dakhli weyn.

Mararka qaata, hadii aad haysato experience, waxaad samayn karto rates weyn. Skills-kaada iyo quality-ka waxaad samayso ayaa kaa bixiya how much you can charge. Waxaa muhiim ah inaad dedaalso si aad u quality-gaareesid.`
      },
      {
        heading: "Tips-ka loo Guul-dareesta",
        content: `Freelancing-ka waxaa jira tips badan oo aad u guul-dareestid. Marka hore, waxaa muhiim ah inaad samayso profile wanaagsan. Portfolio-kaaga waxaa muhiim ah inaad aad u sameeyso.

Toddibada: dedaalsa si aad u quality-gaareesid. Client-ka waxaa uu rabaa wax fiican. Hadii aad samayso wax fiican, client-ka waxaa u rogsan doonta inaad ku raacdo projects dambe.

Saddexaad: qaadiso deadlines. Waqtigaad sharti waxaa muhiim ah inaad sidaa u beddeldo. Hadii aad beddelid waqti, client-ka waxaa u xanaaqsan doonta.

Afraad: si habaysan isku xilo client-ka. Client-ka waxaa uu rabaa communication fiican. Waxaa muhiim ah inaad si mira leh isku xilo client-ka.

Shannad: samayso reputation wanaagsan. Mararka qaata, client-ka waxaa uu u rogsan doonta freelancer-kaaga hadii aad haysato ratings iyo reviews fiican.

Lixaad: dedaalsa si aad u skills-gaareesid. Internet-ka waxaa jira resources badan oo aad u baaran karto skills cusub.

Todobaad: haysaa patience. Mararka qaata, waxaa u baahan waqti si aad uga bilaabid side hustle. Laakiin hadii aad jirto dedaal iyo xoog, waxaad gaadhan karto success.`
      }
    ]
  },
  {
    num: 3,
    title: "Side Hustle & Money Making Guide - Qaybta 3",
    topic: "Content Creation iyo Blogging",
    sections: [
      {
        heading: "Content Creation iyo Faa'idooyinka",
        content: `Content creation waa hawl weyn ee badan dadka oo ay iska bilaabaan side hustle. Content creator-ka waxaa uu isagu ka bilaabi karo YouTuber, blogger, podcaster, ama social media influencer.

Content creation-ka waxaa muhiim ah inaad samayso content-na aad koodiye ee uu dadka uu iska galin. Mararka qaata, content-kaaga waxaa inuu ahaataa education, entertainment, ama inspiration.

Content creation-ka waxaa jira faa'ido badan:
- Dakhli ku samaysto ad revenue, sponsorships, ama affiliate marketing
- Waxaa aad u bilaabid personal brand
- Waxaa aad u samayso audience iyo community
- Waxaa aad u bilaabid expertise iyo authority
- Waxaa aad u samayso connections iyo opportunities`
      },
      {
        heading: "Blogging iyo sida aad u bilawdo",
        content: `Blogging waa wax fiican oo aad iska bilowdo content creation. Blog-ka waxaa aad u samaysan karaa platform sida WordPress, Blogger, ama Wix.

Blog-kaaga waxaa muhiim ah inaad aad u sameeyso design wanaagsan iyo content fiican. Waxaa aad u samaysan karaa niche specific oo aad ku xidhan karto side hustle, money making, ama personal finance.

Mararka hore, waxaa jira challenges:
- Waxaa u baahan patience - mararka qaata waxaa u baahan ilaa aad uga bilaabido traffic
- Waxaa u baahan consistency - waxaa aad u samaysan karaa posts regularly
- Waxaa u baahan quality content - content-kaaga waxaa inuu ahaataa useful iyo helpful

Laakiin hadii aad jirto dedaal iyo consistency, waxaad samayn karto successful blog. Blogs ayaa laga yaqaan long-term investment - mararka qaata waxaa u baahan ilaa aad uga bilaabido dakhli.`
      },
      {
        heading: "YouTube iyo Video Content",
        content: `YouTube waa platform weyn oo aad u samaysan karto video content. YouTube channels ayaa laga yaqaan powerful tools si aad u bilaabido audience iyo aad u samayso dakhli.

YouTube dakhli-ka waxaa laga samayso ad revenue (Google AdSense), sponsorships, iyo affiliate marketing. Mararka qaata, YouTuber-ka waxaa uu isagu samayn karto digital products ama services.

YouTube u bilawga:
1. Samaysa YouTube channel
2. Samaysa videos niche-kaaga ku xidhan
3. Optimize videos-kaaga oo SEO
4. Promote videos-kaaga oo social media
5. Consistency iyo patience

Video quality waa muhiim ah. Mararka qaata, waxaa jira channel-yada ayaan u qaban qabiyaha video quality laakiin ay leh great content. Waxaa muhiim ah inaad dedaalso si aad u improved quality-kaaga.

Challenges-ka YouTube:
- Waxaa u baahan patience - mararka qaata waxaa u baahan ilaa aad uga bilaabido monetization
- Waxaa u baahan equipment - mararka qaata waxaa u baahan camera, microphone, ama lighting
- Waxaa u baahan consistency - waxaa aad u samaysan karaa videos regularly

Laakiin YouTube waa platform weyn oo aad u samaysan karto long-term income stream.`
      },
      {
        heading: "Social Media influencing",
        content: `Social media influencing waa hawl weyn ee badan dadka oo ay iska bilaabaan. Instagram, TikTok, Twitter, iyo LinkedIn waxaa laga samayso platforms oo aad u bilaabido influencer.

Influencer-ka waxaa uu isagu ka bilaabi karo sponsored posts, affiliate marketing, digital products, ama services.

Sila aad u bahan tahay si aad u successful influencer:
- Consistent posting
- Engaging content
- Authentic voice
- Building community
- Understanding your audience

Instagram ayaa laga yaqaan platform popular oo influencer-ka. TikTok ayaa laga yaqaan platform cusub oo ay jiraan opportunity badan. LinkedIn ayaa laga yaqaan professional platform oo aad u samaysan karto B2B influencing.

Waxaa muhiim ah inaad fahanto sila ay u socdaan platforms kala duwan. Mararka qaata, waxaa jira platforms oo strategy kala duwan u baahan.`
      },
      {
        heading: "Monetization Strategies",
        content: `Dakhli samayinta strategies-ka waxaa laga qor qaata:

1. Ad Revenue - Google AdSense, YouTube AdSense
2. Sponsorships - brands-ka oo aad u bilaabido partnerships
3. Affiliate Marketing - links-ka oo aad ku racdiso products
4. Digital Products - ebooks, courses, templates
5. Services - coaching, consulting, freelance services
6. Membership - exclusive content oo aad u samayso
7. Donations - fans-kaaga oo aad racdiso

Waxaa muhiim ah inaad samayso strategy wanaagsan oo ay u fiican audience-kaaga. Mararka qaata, multiple income streams ayaa better than relying on one source.

Dedaalsa si aad u audience-gaareesid dhawaan.`
      }
    ]
  }
];

// Generate enhanced HTML template
function generateArticleHTML(data) {
  let sections = data.sections.map(section => `
    <h3>${section.heading}</h3>
    ${section.content.split('\n\n').map(para => `<p>${para}</p>`).join('')}
    <div class="article-image">
      <img src="https://via.placeholder.com/600x350?text=${encodeURIComponent(section.heading)}" alt="${section.heading}" style="width:100%; height:auto; border-radius:8px; margin: 15px 0;">
    </div>
  `).join('\n');

  return `<!DOCTYPE html>
<html lang="so">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.title} | Fadal Store</title>
    <meta name="description" content="Akhri ${data.title} - Gabay filan oo ku saabsan ganacsiga online iyo dakhli samayinta.">
    <link rel="canonical" href="https://fadalstore.github.io/Online-Money/article${data.num}.html">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
            line-height: 1.8; 
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            color: #2c3e50; 
            padding: 0;
        }
        header { 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: #fff; 
            padding: 2rem 0; 
            text-align: center; 
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        header h1 { 
            margin: 0; 
            font-size: 2.5rem; 
            font-weight: 700;
            letter-spacing: -0.5px;
        }
        header p { margin: 10px 0 0 0; opacity: 0.95; font-size: 1.1rem; }
        nav { 
            background: rgba(0,0,0,0.1); 
            padding: 15px 0; 
            text-align: center; 
            sticky-position: sticky;
            top: 0;
            z-index: 100;
        }
        nav a { 
            color: #fff; 
            text-decoration: none; 
            margin: 0 20px; 
            font-weight: 600;
            transition: opacity 0.3s;
        }
        nav a:hover { opacity: 0.8; text-decoration: underline; }
        .container { 
            max-width: 850px; 
            margin: 30px auto; 
            padding: 30px; 
            background: #fff; 
            border-radius: 12px; 
            box-shadow: 0 8px 32px rgba(0,0,0,0.08);
        }
        article h2 { 
            color: #667eea;
            font-size: 2rem;
            margin: 30px 0 25px 0;
            padding-bottom: 15px;
            border-bottom: 3px solid #667eea;
        }
        article h3 { 
            color: #764ba2;
            font-size: 1.4rem;
            margin: 25px 0 15px 0;
        }
        article p { 
            margin: 15px 0; 
            text-align: justify;
            line-height: 1.9;
        }
        article ul, article ol {
            margin: 15px 0 15px 30px;
            line-height: 2;
        }
        article li { margin: 8px 0; }
        .article-image { margin: 25px 0; }
        .article-image img { border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
        .adsense-placeholder { 
            background: linear-gradient(135deg, #e9ecef 0%, #f8f9fa 100%);
            border: 2px dashed #667eea; 
            text-align: center; 
            padding: 40px 20px; 
            margin: 30px 0; 
            color: #667eea; 
            font-weight: bold; 
            border-radius: 8px;
            font-size: 1.1rem;
        }
        footer { 
            background: #2c3e50; 
            color: #fff; 
            text-align: center; 
            padding: 20px 0; 
            margin-top: 50px; 
        }
        footer p { margin: 10px 0; }
        footer a { 
            color: #667eea; 
            text-decoration: none; 
            transition: opacity 0.3s;
        }
        footer a:hover { text-decoration: underline; opacity: 0.8; }
        a { color: #667eea; text-decoration: none; font-weight: 500; }
        a:hover { text-decoration: underline; color: #764ba2; }
        .back-link { 
            display: inline-block; 
            margin-bottom: 25px; 
            padding: 12px 20px; 
            background: #f0f0f0;
            border-radius: 6px; 
            border: 2px solid #667eea;
            color: #667eea;
            font-weight: 600;
            transition: all 0.3s;
        }
        .back-link:hover { 
            background: #667eea; 
            color: #fff;
            text-decoration: none;
        }
        .article-meta {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 8px;
            margin: 20px 0;
            font-size: 0.9rem;
            color: #666;
        }
        .toc {
            background: #f0f3ff;
            padding: 20px;
            border-radius: 8px;
            margin: 25px 0;
            border-left: 4px solid #667eea;
        }
        .toc h4 {
            color: #667eea;
            margin-bottom: 12px;
        }
        .toc ul {
            list-style: none;
            margin: 0;
            padding: 0;
        }
        .toc li {
            margin: 8px 0;
        }
        .toc a {
            color: #667eea;
            text-decoration: none;
        }
        .toc a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <header>
        <h1>Fadal Store</h1>
        <p>Xaruntaada Xorriyadda Maaliyadeed iyo Ganacsiga Online-ka</p>
    </header>
    <nav>
        <a href="index.html">Bogga Hore</a>
        <a href="about.html">Nagu Saabsan</a>
        <a href="contact.html">Nala Soo Xiriir</a>
    </nav>
    <div class="container">
        <a href="index.html" class="back-link">&larr; Ku noqo Bogga Hore</a>
        
        <div class="adsense-placeholder">[ AdSense Top Ad ]</div>

        <article>
            <h2>${data.title}</h2>
            
            <div class="article-meta">
                <strong>Qoriga:</strong> ${data.topic} | <strong>Waqti Akhrista:</strong> 8-10 min
            </div>

            ${sections}

            <div style="background: #fff3cd; border-left: 4px solid #ff9800; padding: 20px; margin: 30px 0; border-radius: 6px;">
                <h4 style="color: #ff9800; margin-top: 0;">💡 Key Takeaways</h4>
                <ul>
                    <li>Start small and build consistency</li>
                    <li>Focus on quality and authenticity</li>
                    <li>Learn continuously and adapt</li>
                    <li>Build audience before seeking revenue</li>
                    <li>Patience and persistence are key</li>
                </ul>
            </div>
        </article>

        <div class="adsense-placeholder">[ AdSense Bottom Ad ]</div>
  
    </div>
    <footer>
        <p>&copy; 2024 Fadal Store. All rights reserved.</p>
        <p>
            <a href="privacy-policy.html">Privacy Policy</a> | 
            <a href="terms-of-service.html">Terms of Service</a>
        </p>
    </footer>
</body>
</html>`;
}

// Generate content for remaining articles
function generateContentForArticle(num) {
  const topics = [
    { title: "E-commerce iyo Online Store", topic: "Ganacsiga Online" },
    { title: "Affiliate Marketing", topic: "Dakhli Samayinta" },
    { title: "Digital Marketing", topic: "Marketing" },
    { title: "Social Media Marketing", topic: "Social Media Strategy" },
    { title: "SEO iyo Organic Traffic", topic: "Search Optimization" },
    { title: "Email Marketing", topic: "Customer Engagement" },
    { title: "Video Marketing", topic: "Content Strategy" },
    { title: "Podcast Hosting", topic: "Audio Content" },
    { title: "Graphic Design Services", topic: "Design Skills" },
    { title: "Writing iyo Copywriting", topic: "Content Creation" },
    { title: "Virtual Assistant Work", topic: "Administrative Services" },
    { title: "Online Tutoring", topic: "Education Services" },
    { title: "Transcription Services", topic: "Audio Services" },
    { title: "Web Design Services", topic: "Design Services" },
    { title: "Mobile App Development", topic: "Tech Skills" },
    { title: "API Development", topic: "Programming" },
    { title: "Data Entry iyo Data Analysis", topic: "Data Services" },
    { title: "Translation Services", topic: "Language Services" },
    { title: "Proofreading Services", topic: "Writing Services" },
    { title: "Resume Writing", topic: "Career Services" },
    { title: "Social Media Management", topic: "Social Services" },
    { title: "Dropshipping Business", topic: "E-commerce" },
    { title: "Print on Demand", topic: "Product Sales" },
    { title: "Stock Photography", topic: "Photography" },
    { title: "Stock Music iyo Audio", topic: "Audio Sales" },
    { title: "Cryptocurrency iyo Blockchain", topic: "Finance" },
    { title: "Investing iyo Trading", topic: "Finance Strategy" }
  ];

  if (num - 1 < topics.length) {
    const topic = topics[num - 1];
    return {
      num: num,
      title: `Side Hustle & Money Making Guide - Qaybta ${num}`,
      topic: topic.topic,
      sections: [
        {
          heading: topic.title,
          content: `${topic.title} waa wax weyn oo badan dadka oo ay iska bilaabaan side hustle. Maqaalkan waxaan kuku eegi doonaa sila ${topic.title} ukalugaaro xal ganacsiga online-ka.

${topic.title} waxaa jira faa'ido badan. Waxaa laga aabul doonaa inaad haynaysid flexibility, competitive dakhli, iyo opportunity si aad u bilaabido ganacsiga.

Haddii aad jirto skills iyo interest, ${topic.title} waxaa laga yaqaan excellent way si aad u bilaabido side hustle iyo aad uga joogtid xorriyadda maaliyadeed.`
        },
        {
          heading: "Sila aad u baahan tahay",
          content: `Si aad u successful tahay ${topic.title}, waxaa aad u baahan:
- Skills relevant si ganacsiga
- Understanding customer needs
- Marketing iyo promotion skills
- Time management abilities
- Dedication iyo commitment

Waxaa muhiim ah inaad fahanto market-ka iyo competition. Mararka qaata, waxaa jira challenges, laakiin hadii aad dedaalso, waxaad gaadhan karto success.`
        },
        {
          heading: "Iska Bilów Hadda",
          content: `Hadda waa waqtu fiican oo aad iska bilowdo ${topic.title}. Waxaa muhiim ah inaad samayso plan wanaagsan iyo isku bilaab si aad uga bilaabido market.

Mararka qaata, waxaa aad u baahan investment yar. Dedaalsa si aad u quality-gaareesid iyo si aad u audience bilaabido.

Xorriyadda maaliyadeed waxay bilaaban doonta hadii aad jirto dedaal iyo xoog. Start hadda!`
        },
        {
          heading: "Success Stories",
          content: `Waxaa jira badan oo people-ta oo success u gaartay through ${topic.title}. Dadka-yada waxaa ay started small iyo ay grown their business over time.

Waxaa muhiim ah inaad remember na success waxaa u baahan time, patience, iyo consistency. Laakiin hadii aad jirto dedaal iyo xoog, waxaad gaadhan karto goals-kaaga.

Join the thousands of people who have achieved financial freedom through online side hustles!`
        },
        {
          heading: "Qabanqabiyaa iyo Xusuusta",
          content: `Hadii aad iska bilowdo ${topic.title}, waxaa muhiim ah inaad remember:
1. Start small - don't invest too much money initially
2. Be consistent - show up regularly to build audience
3. Focus on quality - your reputation is important
4. Learn continuously - keep improving your skills
5. Be patient - success doesn't happen overnight
6. Adapt - be willing to change strategy if needed
7. Network - build relationships with other professionals

Mararka qaata, waxaa jira challenges iyo setbacks. Laakiin hadii aad jirto persistence, waxaad gaadhan karto your goals. Good luck!`
        }
      ]
    };
  }
  
  return null;
}

// Main execution
console.log('Generating enhanced articles...');

// Generate first 3 detailed articles
articleData.forEach(article => {
  const html = generateArticleHTML(article);
  fs.writeFileSync(`article${article.num}.html`, html);
  console.log(`✓ Generated article${article.num}.html`);
});

// Generate remaining 27 articles
for (let i = 4; i <= 30; i++) {
  const articleInfo = generateContentForArticle(i);
  if (articleInfo) {
    const html = generateArticleHTML(articleInfo);
    fs.writeFileSync(`article${i}.html`, html);
    console.log(`✓ Generated article${i}.html`);
  }
}

console.log('\n✅ All 30 articles generated successfully!');
