var speakers = [  
  {
    "name": "António Lopes",
    "slug": "antonio-lopes",
    "country": "pt",
    "position": "Software Engineer",
    "company": "MD3",
    "description": "",
    "contacts": []
  },
  {
    "name": "Gonçalo Dias",
    "slug": "goncalo-dias",
    "country": "pt",
    "position": "DevOps Support Engineer",
    "company": "Valispace",
    "description": "",
    "contacts": [
      {
        "url": "https://pt.linkedin.com/in/gon%C3%A7alo-dias-42b58664",
        "type": "linkedin"
      }
    ]
  },
  {
    "name": "João Sousa Silva",
    "slug": "joao-sousa-silva",
    "country": "pt",
    "position": "Accessibility Consultant",
    "company": "Maieuticaccess",
    "description": "<p>PhD in Informatics at University of Trás-os-Montes e Alto Douro, Master in Informatics and Mobile Computing by the School of Technology and Management of the Polytechnic Institute of Leiria, and Bachelor in Informatics Engineering by the same school.</p><p>João focuses his research work on digital accessibility motivated by the idea that for people with disabilities, technology isn't just a facilitator, it is the thing that makes it possible. That's why he thinks his work is as broad as possible and merge it with mainstream research and software development.</p><p>Since 2020, he's been working as an Accessibility Consultant at Maieutic Access and from December of 2015 to the Present date, he's a research fellow at Institute for Systems and Computer Engineering, Technology and Science (INESC TEC), funded by Fundação para a Ciência e a Tecnologia, Portugal.</p><p>His knowledge goes from the security of information (data transmission, data storage and digital certificates), programming languages (C, PHP, C#.net, Java, HTML, SQL, among others), and databases to Informatics' Networks. </p><p>João has also several publications regarding usability, user experience, web usabilities, human-machine interaction, design thinking, ergonomics, augmented reality. Curious? </p>",
    "contacts": [
      {
        "type": "url",
        "url": "https://joaosousasilvablog.wordpress.com/",
        "name": "João Sousa Silva"
      },
      {
        "url": "http://www.maieuticaccess.com/",
        "name": "Maieutic Access",
        "type": "url"
      },
      {
        "url": "https://www.researchgate.net/profile/Joao-Silva-136",
        "name": "Publications",
        "type": "url"
      }
    ]
  },
  {
    "name": "Jonatan Pedrosa",
    "slug": "jonatan-pedrosa",
    "country": "pt",
    "position": "Software engineer",
    "company": "Talkdesk",
    "description": "<p>Jonatan is a wild programmer and a super math teacher</p>",
    "contacts": [
      {
        "url": "https://pt.linkedin.com/in/jonatan-pedrosa",
        "type": "linkedin"
      }
    ]
  },
  {
    "name": "Marco Oliveira",
    "slug": "marco-oliveira",
    "country": "pt",
    "position": "Senior Software Engineer",
    "company": "Tillster, Inc.",
    "description": "",
    "contacts": [
      {
        "url": "https://pt.linkedin.com/in/marcovoliveira",
        "type": "linkedin"
      }
    ]
  },
  {
    "name": "Michael Reis",
    "slug": "michael-reis",
    "country": "pt",
    "position": "Senior Software Engineer",
    "company": "VOID",
    "description": "",
    "contacts": [
      {
        "url": "https://pt.linkedin.com/in/michael-reis-1273919a",
        "type": "linkedin"
      }
    ]
  },
  {
    "name": "Pábulo Silva",
    "slug": "pabulo-silva",
    "country": "pt",
    "position": "Software engineer",
    "company": "",
    "description": "",
    "contacts": []
  },
  {
    "name": "Rodrigo Sá Pessoa",
    "slug": "rodrigo-sa-pessoa",
    "country": "pt",
    "position": "Software Developer",
    "company": "Oracle",
    "description": "",
    "contacts": [
      {
        "url": "https://pt.linkedin.com/in/rodrigo-sa-pessoa",
        "type": "linkedin"
      }
    ]
  },
  {
    "name": "Sérgio Bernardo",
    "slug": "sergio-bernardo",
    "country": "pt",
    "position": "Senior Software Developer",
    "company": "MD3",
    "description": "",
    "contacts": []
  },
  {
    "name": "Vera Ferreira",
    "slug": "vera-ferreira",
    "country": "pt",
    "position": "Documentary Linguistic",
    "company": "",
    "description": "<p>Vera is a trained linguist with a background in language documentation and field research. Her main research interests lie in European endangered languages and in the connection between documentary data and language revitalisation. </p><p>Vera Ferreira fell in love with Minderico, a language spoken in Minde, municipality of Alcanena, about 20 years ago. Born in Batalha, Leiria, many years ago, her father went to work for Minde and brought her a small book with a few words in Minderico. Since then, she tried to learn and investigate more about the language. Minderico was the main reason why she specialized in endangered language documentation.</p><p>Nowadays, she is head of the Interdisciplinary Centre for Social and Language Documentation (<a href=\"http://www.cidles.eu/\">CIDLeS</a>) and Archive Support and Development Officer at the Endangered Languages Archive (<a href=\"https://www.elararchive.org/\">SOAS University of London</a>). </p><p>As the digital archivist, Vera provides advice and training on all aspects of data management, metadata preparation and digital archiving.</p><p>Vera is co-founder and Head of CIDLes, a non-profit institution founded in January 2010 in Minde (Portugal) by a group of national and international researchers. </p><blockquote><p>The Interdisciplinary Centre for Social and Language Documentation (CIDLeS) aims to improving and deepening research in two linguistic areas: language documentation and linguistic typology. Besides the documentation, study and dissemination of European endangered and minority languages CIDLeS is also engaged in the development of language technologies for scientific and didactic work on lesser-used languages. </p><cite>From http://cidleseu.de13.fcomet.com/our-mission/mission-statement/ <br></cite></blockquote><p>As Digital Archivist, at SOAS University of London, Vera manages the full project lifecycle of language documentation materials at the archive end (ingestion, evaluation and processing of materials and formats, curation, upload, access setting, catalogue display). She also diagnoses and troubleshoot problems with data and metadata, reviews and approves data management plans, prepares and administrate legal documentation around deposits, organises and trains lexicography and semantics, video conversion, linguistic and metadata software (e.g. ELAN, FLEx, Arbil, CMDI Maker), metadata and data management workflows, and digital archiving. </p>",
    "contacts": [
      {
        "url": "https://pt.linkedin.com/in/vera-ferreira",
        "type": "linkedin"
      }
    ]
  },
];

/**
 * Add speakers to speakers article section
 */
function prepareSpeakers() {
  var mainSpeakersObj = $("#mainSpeakersElement");
  var countries = { "pt": "Portugal", "fr": "France", "en": "England", "es": "Spain" };
  var linkedinIconObj = $("<object>").attr({ "type": "image/svg+xml", "data": "assets/icons/linkedin.svg" });
  var urlIconObj = $("<object>").attr({ "type": "image/svg+xml", "data": "assets/icons/link-45deg.svg" });

  $.each(speakers, function (idx, speaker) {
    var article = $("<article>").attr("id", "speaker-article-" + speaker.slug).appendTo(mainSpeakersObj).addClass("speaker--anchor--point");
    var span = $("<span>");
    var spanName = span.clone().text(speaker.name);
    var spanCountry = span.clone().text(countries[speaker.country]).addClass("speaker-country")
    var articleTitle = $("<h3>").attr("title", speaker.name);
    articleTitle.append(spanName).append(spanCountry).appendTo(article);

    var section = $("<section>");

    var positionAndCompany = speaker.position;

    if (speaker.company) {
      positionAndCompany += " - " + speaker.company;
    }

    var sectionPosition = section.clone().text(positionAndCompany);
    sectionPosition.appendTo(article);

    var sectionDescription = section.clone().html(speaker.description).addClass("speaker--section--description");
    sectionDescription.appendTo(article);

    var sectionContacts = section.clone().addClass("speaker--section--contacts d-flex align-items-center container row");
    sectionContacts.appendTo(article);

    $.each(speaker.contacts, function (i, contact) {
      if (contact.type == "linkedin") {
        sectionContacts.append($("<a>").attr({ "rel": "nofollow", "href": contact.url, "title": "linkedin", "target": "_blank" }).append($("<span>").text("Profile")).prepend(linkedinIconObj.clone()));
      } else {
        sectionContacts.append($("<a>").attr({ "href": contact.url, "title": contact.name, "target": "_blank" }).append($("<span>").text(contact.name)).prepend(urlIconObj.clone()));
      }
    });
  });
}
