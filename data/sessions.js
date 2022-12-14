
var sessions = [  
  {
    "type": "normal",
    "slug": "g-s-5",
    "date": "2022-09-21",
    "title": "What the Amish can teach us about technology",
    "areas": ["Philosophy", "Digital era"],
    "speakers": [{ "slug": "daniel-mulroy", "name": "Daniel Mulroy" }],
    "description": `
      <p>Do you ever wonder if the technology you're working on matters?<br/>Do you get asked to work with or build technology that doesn't align with your values? With the world you want to live in?<br/>What is technology, really, and why does it matter?<br/></p>
      <p>Through Daniel's journey, we will explore the different layers of meaning around technology, the healthy and unhealthy ways in which he has seen it implemented, and his current living question: <br/><b>How can technology support a healthy society?</b></p>
    `,
    "links": [
      {
        "url": "https://docs.google.com/presentation/d/1rf2R4fTHtSI34VDbaQD0yFcfr2hEPyOdjejjwBxohsM/edit?usp=sharing",
        "name": "Presentation slides (with notes)",
        "type": "url"
      },
      {
        "url": "https://www.youtube.com/watch?v=A94b4RcLPp4",
        "name": "Check session",
        "type": "youtube"
      },
      {
        "name": "Crow review log",
        "type": "log"
      },
    ]
  },
  {
    "type": "normal",
    "slug": "g-s-4",
    "date": "2021-05-13",
    "title": "Preserving, discovering and exploring the immaterial cultural heritage in the digital era",
    "areas": ["Linguistic", "Digital era", "Cultural"],
    "speakers": [{ "slug": "vera-ferreira", "name": "Vera Ferreira" }],
    "description": "Preserving, discovering and exploring the immaterial cultural heritage in the digital era",
    "links": [
      {
        "url": "https://www.md3.pt/en/geek-session-4-in-review/",
        "name": "Review article",
        "type": "url"
      },
      {
        "url": "https://www.youtube.com/watch?v=RaJSYFTeYcY",
        "name": "Check session",
        "type": "youtube"
      }
    ]
  },
  {
    "type": "normal",
    "slug": "g-s-3",
    "date": "2021-03-11",
    "title": "Accessibility on Healthy Aging",
    "areas": ["Accessibility", "Health", "Aging", "Usability"],
    "speakers": [{ "slug": "joao-sousa-silva", "name": "Jo??o de Sousa e Silva" }],
    "description": "Accessibility, User Experience and Usability. How do they overlap and how to get the best of it",
    "links": [
      {
        "url": "https://www.md3.pt/en/geek-session-in-review-accessibility-user-experience-and-usability/",
        "name": "Review article",
        "type": "url"
      }
    ]
  },
  {
    "type": "normal",
    "slug": "g-s-2",
    "date": "2021-01-27",
    "title": "Research and development of a functionality for image recognition for mobile applications",
    "areas": ["OCR", "Images"],
    "speakers": [{ "slug": "rodrigo-sa-pessoa", "name": "Rodrigo S?? Pessoa" }],
    "description": "A showcase of his own master degree thesis"
  },
  {
    "type": "normal",
    "slug": "g-s-1",
    "date": "2020-05-27",
    "title": "Gamification",
    "areas": ["Gamification"],
    "speakers": [{ "slug": "sergio-bernardo", "name": "S??rgio Bernardo" }],
    "description": "A very interactive presentation about the importance of gamification in many areas",
    "links": [
      {
        "url": "https://www.md3.pt/en/gamification-set-up-your-game-at-work/",
        "name": "Article",
        "type": "url"
      },
      {
        "url": "https://www.youtube.com/watch?v=6mNBQN0Y-_g",
        "name": "Check session",
        "type": "youtube"
      }
      
    ]
  },
  {
    "type": "meet",
    "slug": "m-u-3",
    "date": "2019-03-14",
    "title": "Elastic Leiria - 2nd edition",
    "thematic": "Elasticsearch",
    "areas": ["Elasticsearch", "VUE", "Leiria", "MD3", "Mediatree", "VOID"],
    "description": "Python being python",
    "sessions": [
      { "speakers": [{ "slug": "michael-reis", "name": "Michael Reis" }], "title": "What is elasticsearch", "description": "Introduction to elasticsearch and some pros VS cons" },
      { "speakers": [{ "slug": "marco-oliveira", "name": "Marco Oliveira" }], "title": "Elasticsearch and VUE", "description": "Demo of a VUE application with Elasticsearch" },
    ],
  },
  {
    "type": "meet",
    "slug": "m-u-2",
    "date": "2018-11-22",
    "title": "Python meet",
    "thematic": "Python",
    "areas": ["Python", "django", "Leiria", "MD3", "Mediatree"],
    "description": "Python being python",
    "sessions": [
      { "speakers": [{ "slug": "antonio-lopes", "name": "Ant??nio Lopes" }], "title": "Behind the sssssscripting", "description": "Briefly exposing python misconceptions in usage/application and short introduction to django" },
    ],
  },
  {
    "type": "meet",
    "slug": "m-u-1",
    "date": "2018-02-28",
    "title": "Elastic Leiria",
    "thematic": "Elasticsearch",
    "areas": ["Elasticsearh", "Leiria", "MD3", "Mediatree"],
    "description": "Meeting about elasticsearch and some of it's applications",
    "sessions": [
      { "speakers": [{ "slug": "jonatan-pedrosa", "name": "Jonatan Pedrosa" }], "title": "Migrate SQL to NoSQL", "description": "How to migrate a project database from SQL to a NoSQL database" },
      { "speakers": [{ "slug": "pabulo-silva", "name": "P??bulo Silva" }], "title": "Rich Logging (logstash/elasticsearch/kibana)", "description": "Using kibana with logstash in a real scenario" },
      { "speakers": [{ "slug": "goncalo-dias", "name": "Gon??alo Dias" }], "title": "Infrastructures and study cases of Mediatree clients", "description": "Showcase of infrastrucute applied in some clients by Mediatree" },
    ],
  },
]

/**
 * Add sessions to sessions article section
 */
function prepareSessions() {
  var mainSessionsObj = $("#mainSessionsElement");

  $.each(sessions, function (idx, session) {
    var article = $("<article>").attr("id", "sessions-article-" + session.slug).appendTo(mainSessionsObj).addClass("session--anchor--point");
    var title = $("<h2>").html(session.title).appendTo(article);
    var sessionDate = new Date(session.date);
    var sessionDateFormattedObj = $("<h4>").text(sessionDate.getDate() + " " + months[sessionDate.getMonth()] + " " + sessionDate.getFullYear()).appendTo(article);

    if (session.type == "normal") {
      var sessionSpeakers = $("<h5>").html("<a class='speaker--anchor' href='#speaker-article-" + session.speakers[0].slug + "'>" + session.speakers[0].name + "</a>").appendTo(article);
      var withPrefix = $("<b>").text("With : ").prependTo(sessionSpeakers);
      var areas = $("<p>").text(session.areas.join(", ")).css("font-size", "12px").appendTo(article);
      var sessionSectionDescription = $("<section>").attr("id", "article--section--session-" + session.slug).appendTo(article);
      var description = $("<p>").html(session.description).appendTo(sessionSectionDescription);
      var sessionSectionLinks = $("<section>").attr("id", "article--section--session-links-" + session.slug).addClass("session--section--links d-flex align-items-center container row").appendTo(article);

      sessionSectionLinks.append($("<a>").attr({ "href": "#sessions-article-" + session.slug, "title": "Share this article with the world", "target": "_blank", "class": "d-flex flex-row align-items-center" }).append($("<span>").text("Share")).prepend(shareIconObj.clone()));

      $.each(session.links, function(i, link) {
        if (link.type == "youtube") {
          sessionSectionLinks.append($("<a>").attr({ "href": link.url, "title": link.name, "target": "_blank", "rel": "nofollow", "class": "d-flex flex-row align-items-center" }).append($("<span>").text(link.name)).prepend(youtubeIconObj.clone()));
        } else if (link.type == "log") {
          sessionSectionLinks.append($("<a>").attr({ "href": "#sessions-log-article-" + session.slug, "title": "Crow log review", "class": "session--log--anchor d-flex flex-row align-items-center" }).append($("<span>").text(link.name)).prepend(logIconObj.clone()));
        } else {
          sessionSectionLinks.append($("<a>").attr({ "href": link.url, "title": link.name, "target": "_blank", "class": "d-flex flex-row align-items-center" }).append($("<span>").text(link.name)).prepend(urlIconObj.clone()));
        }
      });
    } else if (session.type == "meet") {
      var meetThematic = $("<h5>").html("<b>Thematic :</b> " + session.thematic).appendTo(article);

      $.each(session.sessions, function (k, v) {
        var sessionSection = $("<section>").attr("id", "sessions-article-section-" + session.slug + "-" + k).appendTo(article);
        var sessionSectionArticle = $("<article>").appendTo(sessionSection);
        var sessionSectionArticleTitle = $("<h5>").html("<a class='speaker--anchor' href='#speaker-article-" + v.speakers[0].slug + "'>" + v.speakers[0].name + "</a> - " + v.title).appendTo(sessionSectionArticle);
        var sessionSectionArticleSection = $("<section>").html("<p>" + v.description + "</p>").appendTo(sessionSectionArticle);
      });

      var sessionSectionLinks = $("<section>").attr("id", "article--section--session-links-" + session.slug).addClass("session--section--links d-flex align-items-center container row").appendTo(article);
      sessionSectionLinks.append($("<a>").attr({ "href": "#sessions-article-" + session.slug, "title": "Share this article with the world", "target": "_blank", "class": "d-flex flex-row align-items-center" }).append($("<span>").text("Share")).prepend(shareIconObj.clone()));
    }
  });
}