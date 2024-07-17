import { useState } from "react";
import classes from "./InputSearch.module.css";
import DisplayCards from "../DisplayCards/DisplayCards";

const InputSearch = () => {
  const dummyData = [
    {
      title:
        "Two Israeli firms used ForcedEntry exploit to spy on iPhone users: What it is, how to safeguard yourself",
      link: "http://localhost:3000/ArticleDetails",
      keywords: ["News", "Apple", "NSO Group", "Pegasus spyware"],
      creator: "Shweta Ganjoo",
      video_url: null,
      description:
        "Apple last year sued NSO Group for using its Pegasus spyware for snooping on iPhone users. Now, a report has detailed that not one but two Israeli firms exploited flaws in iOS to spy on iPhone users. According to a Reuters report, the bug in iOS that the NSO Group used for spying on iPhone […] The post Two Israeli firms used ForcedEntry exploit to spy on iPhone users: What it is, how to safeguard yourself appeared first on BGR India.",
      content:
        "Apple last year sued NSO Group for using its Pegasus spyware for snooping on iPhone users. Now, a report has detailed that not one but two Israeli firms exploited flaws in iOS to spy on iPhone users. According to a Reuters report, the bug in iOS that the NSO Group used for spying on iPhone users was also used by a second Israeli firm called QuaDream for similar purposes. QuaDream is a small and a low profile Israeli company that develops smartphone hacking tools for government clients just like the NSO Group. The report also said that both the spyware firms gained the ability to remotely break into iPhones last year. Simply said, both the firms could hack into Apple’s iPhones without an owner needing to open a malicious link. Both the companies used a hacking technique called ForcedEntry to gain access to users’ iPhones. Citizen Lab security researcher Bill Marczak told the news agency that QuaDream’s spyware tool called ‘Reign’ was ‘on par’ with NSO Group’s Pegasus spyware. What is ForcedEntry exploit? ForcedEntry is a zero-click exploit used for targeting iPhone users. Kaspersky Security explains that a zero-click exploit is the one wherein a malicious software can be installed on a device without the victim clicking on any link. These attacks are more dangerous as they leave fewer traces of any malicious activity. ForcedEntry exploit, in particular, uses PDF files disguised as GIF files to install a malicious piece of code in Apple’s CoreGraphics system, circumventing Apple’s BlastDoor security mechanism that was introduced in iOS 14 to defend against such hacks. This hack can be used to gain access to all devices running on iOS 14 and older iOS versions. What is QuaDream and what is it doing? QuaDream is a spyware firm just like the NSO group. Its flagship spyware tool is called Reign, which is its equivalent of Pegasus spyware. According to the report, Reign can take control of a smartphone, look up instant messages from services such as WhatsApp, Telegram, and Signal,emails, photos, texts and contacts. Additionally, it can be used for “real time call recordings”, “camera activation – front and back” and “microphone activation”. Furthermore, the report says that over the years QuaDream’s buyers have also overlapped with NSO’s. Sources told the news agency that one of QuaDream’s first clients was the Singaporean government. Its technology was pitched to the Indonesian government but it remains uncertain if the Indonesian government ever became a client. What has Apple done to fix this? Apple, on learning about the vulnerability, rolled out iOS 14.8, iPadOS 14.8, macOS 11.6 and watchOS 7.6.2 last year to fix this flaw. The company also notified the small number of affected users that they may have been targeted by the spyware firm. In addition to that, it sued the NSO Group for compromising the safety and privacy of Apple device users. “To prevent further abuse and harm to its users, Apple is also seeking a permanent injunction to ban NSO Group from using any Apple software, services, or devices,” Apple had written in a blog post at the time. How can I protect myself? As mentioned before, Apple rolled out a fix for this bug last year. If you are running the latest version of Apple’s OSes on your devices, you don’t have anything to worry about. However, if you are still running an older version of iOS or macOS, it is advisable that you download the latest version on your device now. The post Two Israeli firms used ForcedEntry exploit to spy on iPhone users: What it is, how to safeguard yourself appeared first on BGR India.",
      pubDate: "2022-02-04 09:11:40",
      full_description:
        "Apple last year sued NSO Group for using its Pegasus spyware for snooping on iPhone users. Now, a report has detailed that not one but two Israeli firms exploited flaws in iOS to spy on iPhone users. According to a Reuters report, the bug in iOS that the NSO Group used for spying on iPhone users was also used by a second Israeli firm called QuaDream for similar purposes. QuaDream is a small and a low profile Israeli company that develops smartphone hacking tools for government clients just like the NSO Group. Also Read - Apple iPhone SE 3: Check out the expected specs, features, launch, expected India price The report also said that both the spyware firms gained the ability to remotely break into iPhones last year. Simply said, both the firms could hack into Apple’s iPhones without an owner needing to open a malicious link. Both the companies used a hacking technique called ForcedEntry to gain access to users’ iPhones. Citizen Lab security researcher Bill Marczak told the news agency that QuaDream’s spyware tool called ‘Reign’ was ‘on par’ with NSO Group’s Pegasus spyware. Also Read - iPhone 13 available for around Rs 50,000 for some users: Check the limited period deal What is ForcedEntry exploit? ForcedEntry is a zero-click exploit used for targeting iPhone users. Kaspersky Security explains that a zero-click exploit is the one wherein a malicious software can be installed on a device without the victim clicking on any link. These attacks are more dangerous as they leave fewer traces of any malicious activity. Also Read - Apple iPhone hacks: How to cast Harry Potter spells via Siri ForcedEntry exploit, in particular, uses PDF files disguised as GIF files to install a malicious piece of code in Apple’s CoreGraphics system, circumventing Apple’s BlastDoor security mechanism that was introduced in iOS 14 to defend against such hacks. This hack can be used to gain access to all devices running on iOS 14 and older iOS versions. What is QuaDream and what is it doing? QuaDream is a spyware firm just like the NSO group. Its flagship spyware tool is called Reign, which is its equivalent of Pegasus spyware. According to the report, Reign can take control of a smartphone, look up instant messages from services such as WhatsApp, Telegram, and Signal,emails, photos, texts and contacts. Additionally, it can be used for “real time call recordings”, “camera activation – front and back” and “microphone activation”. Furthermore, the report says that over the years QuaDream’s buyers have also overlapped with NSO’s. Sources told the news agency that one of QuaDream’s first clients was the Singaporean government. Its technology was pitched to the Indonesian government but it remains uncertain if the Indonesian government ever became a client. What has Apple done to fix this? Apple, on learning about the vulnerability, rolled out iOS 14.8, iPadOS 14.8, macOS 11.6 and watchOS 7.6.2 last year to fix this flaw. The company also notified the small number of affected users that they may have been targeted by the spyware firm. In addition to that, it sued the NSO Group for compromising the safety and privacy of Apple device users. “To prevent further abuse and harm to its users, Apple is also seeking a permanent injunction to ban NSO Group from using any Apple software, services, or devices,” Apple had written in a blog post at the time. How can I protect myself? As mentioned before, Apple rolled out a fix for this bug last year. If you are running the latest version of Apple’s OSes on your devices, you don’t have anything to worry about. However, if you are still running an older version of iOS or macOS, it is advisable that you download the latest version on your device now. For the latest tech news across the world, latest PC and Mobile games , tips & tricks, top-notch gadget reviews of most exciting releases follow BGR India’s Facebook , Twitter , subscribe our YouTube Channel . Also follow us on Facebook Messenger for latest updates. Published Date: February 4, 2022 2:41 PM IST Comments - Join the Discussion Apple NSO Group Pegasus spyware Trending Today News Union Budget 2021 to Twitter accounts banned: Today's top tech news News Realme X7 series India launch to Carl Pei's new venture Nothing: Top tech news today Apps WhatsApp brings Always Mute group chats to iOS, Android News Nokia 5.3 launching in India in August with two more phones",
      image_url: null,
      source_id: "bgr",
      country: "india",
      category: "technology",
      language: "english",
    },
    {
      title: "India taking up issues of pending salaries in Gulf countries",
      link: "http://localhost:3000/ArticleDetails",
      keywords: ["National News,More"],
      creator: "Sentinel Digital Desk",
      video_url: null,
      description:
        "External Affairs Minister S. Jaishankar on Thursday said that the government has taken up the issue of pending salaries of Indian workers with the Gulf countries.",
      content:
        'NEW DELHI: External Affairs Minister S. Jaishankar on Thursday said that the government has taken up the issue of pending salaries of Indian workers with the Gulf countries.Responding to a question about loss of wages of Indians working abroad, the Minister said that the data of pending salaries was not available but he took up the matter with Gulf countries. "Would like to assure that employment is retained, wages are paid, and welfare is ensured," Jaishankar said. He also said that the government\'s objective is to get as many workers as possible back to work and he has been in touch with the concerned authorities and also through Ambassadors in the Gulf countries. Jaishankar also informed the House that Prime Minister Narendra Modi is also in touch with the Gulf governments and had 16 telephonic conversations with the authorities. He said he himself visited these countries and Minister of State for External Affairs V. Muraleedharan has also visited the gulf countries and had meetings with the authorities there. He also informed that a corpus of Rs 47 crore under the Indian Community Welfare Fund has been created for helping Indian workers there. In case of the death of an Indian worker, the Ministry of External Affairs through the Ambassador posted there, tries to get ex-gratia compensation paid to the worker\'s family from the local government or the employer company. Earlier, AITMC member Santanu Sen raised the issue of a wrong map on the World Health Organisation (WHO) site to which Chairman M. Venkaiah asked the EAM to look into. The TMC member said that as a doctor he checks the WHO COVID-19 site for data. The map on the site showed parts of Jammu and Kashmir and Arunachal Pradesh as outside India. He says the government should have been vigilant, when they are using Pegasus to spy on their own ministers, Sen quipped. Responding to the question on the number of women judges in the country, Law and Justice Minister Kiren Rijiju informs the House, out of a total 34 judges in the Supreme Court, we have for the first time four women judges. Out of 1,098 judges in High Courts, we have 83 women judges. "We have been stressing time and again that while recommending names, preferences may be given to women, backward classes, scheduled caste and scheduled tribe," Rijiju further said. Responding to a question that there was no woman judge in the Patna High Court, he said that the Ministry has requested all high courts to send bigger number of women for appointment of judges in the high courts of the country in future. BJP member Vikas Mahatme raised the issue of tax collected through sale of alcohol and said that the states are getting addicted to tax being collected from this source. Describing it as \'Sin Tax items\', Mahatme said, "The tax being collected should be increased. Delhi and Maharashtra have brought in various changes including home delivery in Delhi and sale in malls in Maharashtra. State governments are getting addicted to tax collection from this item." (IANS) Also Read:  Jaishankar calls Qatari counterpart; discusses AfghanistanAlso watch:',
      pubDate: "2022-02-04 08:53:39",
      full_description:
        'NEW DELHI: External Affairs Minister S. Jaishankar on Thursday said that the government has taken up the issue of pending salaries of Indian workers with the Gulf countries. Responding to a question about loss of wages of Indians working abroad, the Minister said that the data of pending salaries was not available but he took up the matter with Gulf countries. "Would like to assure that employment is retained, wages are paid, and welfare is ensured," Jaishankar said. He also said that the government\'s objective is to get as many workers as possible back to work and he has been in touch with the concerned authorities and also through Ambassadors in the Gulf countries. Jaishankar also informed the House that Prime Minister Narendra Modi is also in touch with the Gulf governments and had 16 telephonic conversations with the authorities. He said he himself visited these countries and Minister of State for External Affairs V. Muraleedharan has also visited the gulf countries and had meetings with the authorities there. He also informed that a corpus of Rs 47 crore under the Indian Community Welfare Fund has been created for helping Indian workers there. In case of the death of an Indian worker, the Ministry of External Affairs through the Ambassador posted there, tries to get ex-gratia compensation paid to the worker\'s family from the local government or the employer company. Earlier, AITMC member Santanu Sen raised the issue of a wrong map on the World Health Organisation (WHO) site to which Chairman M. Venkaiah asked the EAM to look into. The TMC member said that as a doctor he checks the WHO COVID-19 site for data. The map on the site showed parts of Jammu and Kashmir and Arunachal Pradesh as outside India. He says the government should have been vigilant, when they are using Pegasus to spy on their own ministers, Sen quipped. Responding to the question on the number of women judges in the country, Law and Justice Minister Kiren Rijiju informs the House, out of a total 34 judges in the Supreme Court, we have for the first time four women judges. Out of 1,098 judges in High Courts, we have 83 women judges. "We have been stressing time and again that while recommending names, preferences may be given to women, backward classes, scheduled caste and scheduled tribe," Rijiju further said. Responding to a question that there was no woman judge in the Patna High Court, he said that the Ministry has requested all high courts to send bigger number of women for appointment of judges in the high courts of the country in future. BJP member Vikas Mahatme raised the issue of tax collected through sale of alcohol and said that the states are getting addicted to tax being collected from this source. Describing it as \'Sin Tax items\', Mahatme said, "The tax being collected should be increased. Delhi and Maharashtra have brought in various changes including home delivery in Delhi and sale in malls in Maharashtra. State governments are getting addicted to tax collection from this item." (IANS) Also Read: Jaishankar calls Qatari counterpart; discusses Afghanistan Also watch:',
      image_url:
        "https://assets.sentinelassam.com/h-upload/2022/02/04/500x300_307612-jsha.jpg",
      source_id: "sentinel",
      country: "india",
      category: "top",
      language: "english",
    },
    {
      title: "Pegasus issue: What is authorised interception and monitoring ?",
      link: "http://localhost:3000/ArticleDetails",
      keywords: null,
      creator: "Devesh K. Pandey",
      video_url: null,
      description:
        "The government has continued to maintain that no ‘unauthorised snooping’ was done and that the time-tested processes in the country are well-established to ensure that unauthorised surveillance does not occur.",
      content: null,
      pubDate: "2022-02-04 06:58:18",
      full_description: null,
      image_url: null,
      source_id: "thehindu",
      country: "india",
      category: "top",
      language: "english",
    },
    {
      title: "Pegasus row | No unauthorised snooping was done, insists Centre",
      link: "http://localhost:3000/ArticleDetails",
      keywords: null,
      creator: "Yuthika Bhargava",
      video_url: null,
      description:
        "Response comes amid Opposition leaders moving privilege motion against IT Minister Ashwini Vaishnaw",
      content: null,
      pubDate: "2022-02-04 06:48:59",
      full_description: null,
      image_url: null,
      source_id: "thehindu",
      country: "india",
      category: "top",
      language: "english",
    },
    {
      title:
        "iPhone flaw exploited by second Israeli spy firm: Sources - The Straits Times",
      link: "http://localhost:3000/ArticleDetails",
      keywords: null,
      creator: 'Prakasam',
      video_url: null,
      description:
        "iPhone flaw exploited by second Israeli spy firm: Sources  The Straits TimesEXCLUSIVE iPhone flaw exploited by second Israeli spy firm-sources  ReutersA second company took advantage of iPhone vulnerability that enabled Pegasus hack  PhoneArenaAnother Secretive Spyware Firm Has Been Helping Hack iPhones  GizmodoSecond Israeli company exploited Apple flaw to hack into iPhones – report  The Times of IsraelView Full coverage on Google News",
      content: null,
      pubDate: "2022-02-04 02:31:04",
      image_url: null,
      source_id: "google",
      country: "singapore",
      category: "technology",
      language: "english",
    },
    {
      title:
        "Another Secretive Spyware Firm Has Been Helping Hack iPhones - Gizmodo Australia",
      link: "http://localhost:3000/ArticleDetails",
      keywords: null,
      creator: 'News Today',
      video_url: null,
      description:
        "Another Secretive Spyware Firm Has Been Helping Hack iPhones  Gizmodo AustraliaEXCLUSIVE iPhone flaw exploited by second Israeli spy firm-sources  ReutersiPhone flaw exploited by second Israeli spy firm   The Jerusalem PostA second company took advantage of iPhone vulnerability that enabled Pegasus hack  PhoneArenaSecond Israeli company exploited Apple flaw to hack into iPhones – report  The Times of IsraelView Full coverage on Google News",
      content: null,
      pubDate: "2022-02-04 01:50:00",
      image_url: null,
      source_id: "google",
      country: "australia",
      category: "technology",
      language: "english",
    },
    {
      title:
        "Another Secretive Spyware Firm Has Been Helping Hack iPhones - Gizmodo",
      link: "http://localhost:3000/ArticleDetails",
      keywords: null,
      creator: 'India Today',
      video_url: null,
      description:
        "Another Secretive Spyware Firm Has Been Helping Hack iPhones  GizmodoEXCLUSIVE iPhone flaw exploited by second Israeli spy firm-sources  ReutersiPhone flaw exploited by second Israeli spy firm   The Jerusalem PostSecond Israeli company exploited Apple flaw to hack into iPhones – report  The Times of IsraelA second company took advantage of iPhone vulnerability that enabled Pegasus hack  PhoneArenaView Full coverage on Google News",
      content: null,
      pubDate: "2022-02-04 01:50:00",
      image_url: null,
      source_id: "google",
      country: "australia",
      category: "technology",
      language: "english",
    },
    {
      title: "Pegasus: Naidu says examining motion against IT Minister",
      link: "http://localhost:3000/ArticleDetails",
      keywords: null,
      creator: 'John Doe',
      video_url: null,
      description:
        'New Delhi, February 3Chairman M Venkaiah Naidu today informed the Rajya Sabha members that he was examining the privilege motions moved against Union Minister for Information Technology (IT) Ashwini Vaishnaw for allegedly misleading Parliament on the issue of Pegasus spyware.No information on spyware: MEAThe Ministry of External Affairs washed its hands of the Pegasus controversy by stating "no information is available with the MEA on this matter". It had a similar response when asked whether the Pegasus deal was inked during the 2017 Israel visit of Prime Minister Narendra Modi.After examination he would seek a clarification from the minister, Naidu said, adding that a decision to whether admit or reject the motion would be taken depending on that. The Chairman said Congress\' KC Venugopal and two more MPs had given notice of privilege against the IT Minister."I am examining it," he said, adding: "Once I examine it, I will have to seek the minister\'s clarification and then we will get back to you."Leaders of the Congress, TMC and CPI have moved privilege motions against Vaishnaw following a report in the New York Times claiming that the Indian Government bought the Israeli spyware in 2017 as part of a USD 2 billion package for weapons.The government had maintained on the floor of the House that it had nothing to do with Pegasus and that it never bought the spyware from the NSO Group. Most of the last winter session of Parliament was hit by the Pegasus controversy.Meanwhile, complimenting members for a "disruption-free" day in the House on Wednesday during the debate on Motion of Thanks to the President, Naidu hoped that the spirit would continue to prevail throughout the session.',
      content: null,
      pubDate: "2022-02-04 00:32:45",
      full_description:
        "Tribune News Service New Delhi, February 3 Chairman M Venkaiah Naidu today informed the Rajya Sabha members that he was examining the privilege motions moved against Union Minister for Information Technology (IT) Ashwini Vaishnaw for allegedly misleading Parliament on the issue of Pegasus spyware. No information on spyware: MEA The Ministry of External Affairs washed its hands of the Pegasus controversy by stating “no information is available with the MEA on this matter”. It had a similar response when asked whether the Pegasus deal was inked during the 2017 Israel visit of Prime Minister Narendra Modi. After examination he would seek a clarification from the minister, Naidu said, adding that a decision to whether admit or reject the motion would be taken depending on that. The Chairman said Congress’ KC Venugopal and two more MPs had given notice of privilege against the IT Minister. “I am examining it,” he said, adding: “Once I examine it, I will have to seek the minister’s clarification and then we will get back to you.” Leaders of the Congress, TMC and CPI have moved privilege motions against Vaishnaw following a report in the New York Times claiming that the Indian Government bought the Israeli spyware in 2017 as part of a USD 2 billion package for weapons. The government had maintained on the floor of the House that it had nothing to do with Pegasus and that it never bought the spyware from the NSO Group. Most of the last winter session of Parliament was hit by the Pegasus controversy. Meanwhile, complimenting members for a “disruption-free” day in the House on Wednesday during the debate on Motion of Thanks to the President, Naidu hoped that the spirit would continue to prevail throughout the session.",
      image_url:
        "https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/2/2022_2$largeimg_1486521547.jpg",
      source_id: "tribuneindia",
      country: "india",
      category: "top",
      language: "english",
    },
    {
      title:
        "FBI says it tested infamous Pegasus spyware that can silently infect iPhones and spy through your camera",
      link: "http://localhost:3000/ArticleDetails",
      keywords: ["Tech", "Android", "Cyber Crime and hacking"],
      creator: "Jona Jaupi",
      video_url: null,
      description:
        "THE FBI says it tested Israeli-based NSO Group’s Pegasus spyware for potential use in criminal investigations. The US Federal Bureau of Investigation (FBI) confirmed it tested Pegasus spyware while it was investigating whether the technology had been used to illegally hack phones in the United States, the Washington Post reported on Wednesday. “The FBI works […]",
      content:
        "THE FBI says it tested Israeli-based NSO Group’s Pegasus spyware for potential use in criminal investigations. The US Federal Bureau of Investigation (FBI) confirmed it tested Pegasus spyware while it was investigating whether the technology had been used to illegally hack phones in the United States, the Washington Post reported on Wednesday. Getty ImagesThe FBI says its tested Pegasus spyware while it was investigating it[/caption] “The FBI works diligently to stay abreast of emerging technologies and tradecraft — not just to explore a potential legal use but also to combat crime and to protect both the American people and our civil liberties,” the FBI said in a statement to The Washington Post this week. “That means we routinely identify, evaluate, and test technical solutions and problems for a variety of reasons, including possible operational and security concerns they might pose in the wrong hands,” the statement continued. Pegasus spyware is NSO’s premier spying tool as it promises that it can reliably overcome the encryption of any iPhone or Android smartphone to covertly infiltrate a user’s calls, texts, pictures, and whereabouts. Since it was first released in 2011, the spyware has been sold to law enforcement and intelligence agencies around the world. The tool has helped Mexican authorities capture drug lord Joaquín Guzmán Loera, or ‘El Chapo’, as well as European investigators to combat terrorist plots, organized crime, and bring down a global child-abuse ring, The New York Times reported. As more criminals and terrorists use encryption to perpetuate their illegal activity, the NSO’s product initially seems heaven-sent for law enforcement. Most read in Tech HIDDEN TERROR Every iPhone and Android owner warned to check their bags and cars right now GOOG IDEA Google reveals genius iPhone trick that EVERY user should turn on now SELL OUT Xbox players DESPERATE to sell their consoles — should you be joining them? ALL SMILES Secret iPhone emoji trick added with new update and fans are going wild for it BLUE SKY You're using Sky TV WRONG – three essential hacks that every telly fan should know ON THE BOOKS Millions of Facebook users could get PAYOUT from tech giant However, there have also been documented instances of the spyware being used to target journalists (including the late Washington Post journalist Jamal Khashoggi), track activists, and locate lawyers and their families. Furthermore, NSO initially claimed that the technology could not be used to target American phones with a +1 U.S. area code, however, documents obtained by Motherboard in 2020 show that the group created a separate product called Phantom, which could. These tools seemed to have piqued the interest of the FBI, as the tech firm presented both to the agency in 2019. According to The Times, FBI employees underwent a Pegasus training on “dummy” phones that could let them silently view every email, photo, text thread, personal contact on the device. “They could also see the phone’s location and even take control of its camera and microphone,” The Times report said. Because the hacking does not even require a user to click on a malicious attachment or link, it is known as “zero-click.” The FBI insisted that they did not use Pegasus in any investigation, and they had procured a limited license for product testing only. The FBI also decided against deploying the spyware in 2021, while NSO has said it will investigate abuses of the technology and discontinue service to clients who violate the company’s rules, according to The Times report. Pegasus spyware can silently infiltrate iPhones and Android smartphones In other news, Apple has revealed a bunch of new emojis for the iPhone, including a pregnant man and two saucy symbols. Experts have warned that future space launches could be jeopardized if “stupid” regimes like Russia don’t stop blasting the skies creating debris. And the most popular phone since the millennium has been unveiled, with many shocked to find out it’s not an iPhone. We pay for your stories! Do you have a story for The US Sun team? Email us at exclusive@the-sun.com or call 212 416 4552. Like us on Facebook at www.facebook.com/TheSunUS and follow us from our main Twitter account at @TheSunUS",
      pubDate: "2022-02-03 19:24:31",
      full_description:
        "THE FBI says it tested Israeli-based NSO Group's Pegasus spyware for potential use in criminal investigations. The US Federal Bureau of Investigation (FBI) confirmed it tested Pegasus spyware while it was investigating whether the technology had been used to illegally hack phones in the United States, the Washington Post reported on Wednesday. \"The FBI works diligently to stay abreast of emerging technologies and tradecraft — not just to explore a potential legal use but also to combat crime and to protect both the American people and our civil liberties,” the FBI said in a statement to The Washington Post this week. “That means we routinely identify, evaluate, and test technical solutions and problems for a variety of reasons, including possible operational and security concerns they might pose in the wrong hands,\" the statement continued. Pegasus spyware is NSO's premier spying tool as it promises that it can reliably overcome the encryption of any iPhone or Android smartphone to covertly infiltrate a user's calls, texts, pictures, and whereabouts. Since it was first released in 2011, the spyware has been sold to law enforcement and intelligence agencies around the world. The tool has helped Mexican authorities capture drug lord Joaquín Guzmán Loera, or 'El Chapo', as well as European investigators to combat terrorist plots, organized crime, and bring down a global child-abuse ring, The New York Times reported . As more criminals and terrorists use encryption to perpetuate their illegal activity, the NSO's product initially seems heaven-sent for law enforcement. However, there have also been documented instances of the spyware being used to target journalists (including the late Washington Post journalist Jamal Khashoggi), track activists, and locate lawyers and their families. Furthermore, NSO initially claimed that the technology could not be used to target American phones with a +1 U.S. area code, however, documents obtained by Motherboard in 2020 show that the group created a separate product called Phantom, which could. These tools seemed to have piqued the interest of the FBI, as the tech firm presented both to the agency in 2019. According to The Times, FBI employees underwent a Pegasus training on \"dummy\" phones that could let them silently view every email, photo, text thread, personal contact on the device. \"They could also see the phone’s location and even take control of its camera and microphone,\" The Times report said. Because the hacking does not even require a user to click on a malicious attachment or link, it is known as “zero-click.” The FBI insisted that they did not use Pegasus in any investigation, and they had procured a limited license for product testing only. The FBI also decided against deploying the spyware in 2021, while NSO has said it will investigate abuses of the technology and discontinue service to clients who violate the company's rules, according to The Times report. In other news, Apple has revealed a bunch of new emojis for the iPhone, including a pregnant man and two saucy symbols. Experts have warned that future space launches could be jeopardized if \"stupid\" regimes like Russia don't stop blasting the skies creating debris. And the most popular phone since the millennium has been unveiled, with many shocked to find out it's not an iPhone. Do you have a story for The US Sun team? Email us at exclusive@the-sun.com or call 212 416 4552 . Like us on Facebook at www.facebook.com/TheSunUS and follow us from our main Twitter account at @TheSunUS",
      image_url: null,
      source_id: "thesun",
      country: "united kingdom",
      category: "technology",
      language: "english",
    },
    {
      title: "Pegasus, jobs come up in Lok Sabha debate",
      link: "http://localhost:3000/ArticleDetails",
      keywords: null,
      creator: "The Hindu Bureau",
      video_url: null,
      description:
        "PM Modi must state whether he purchased the Israeli spyware, says Congress MP.",
      content: null,
      pubDate: "2022-02-03 18:16:26",
      full_description: null,
      image_url: null,
      source_id: "thehindu",
      country: "india",
      category: "top",
      language: "english",
    },
  ];
  const [inputValue, setInputValue] = useState("");
  const [filteredData, setFilteredData] = useState([])
  const title = [
    'top', 'technology'
  ];

  const changeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const suggestionHandler = (i) => {
    setInputValue(i);
  };

  const searchHandler = () => {
    const data = dummyData.filter((article) => (
        article.category === inputValue
    ))

    setFilteredData(data)
    setInputValue('')
  }
  console.log(filteredData)
  return (
    <div>
      <input
        className={classes.input}
        type="text"
        value={inputValue}
        onChange={changeHandler}
      />
      <button className={classes.searchBtn} onClick={searchHandler}>Search</button>
      <div className={classes.suggestion}>
        {title
          .filter((name) => {
            const searchedTerm = inputValue.toLowerCase();
            const titleName = name.toLowerCase();
            return (
              inputValue &&
              titleName.startsWith(searchedTerm) &&
              titleName !== searchedTerm
            );
          })
          .map((item) => (
            <p
              key={Math.random()}
              className={classes.list}
              onClick={() => suggestionHandler(item)}
            >
              {item}
            </p>
          ))}
      </div>
        <DisplayCards data={filteredData}/>
    </div>
    
  );
};

export default InputSearch;
