var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var sessions = [
  {
    "type": "normal",
    "slug": "rs",
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
    "slug": "rs",
    "date": "2021-03-11",
    "title": "Accessibility on Healthy Aging",
    "areas": ["Accessibility", "Health", "Aging", "Usability"],
    "speakers": [{ "slug": "joao-sousa-silva", "name": "João de Sousa e Silva" }],
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
    "slug": "rs",
    "date": "2021-01-27",
    "title": "Research and development of a functionality for image recognition for mobile applications",
    "areas": ["OCR", "Images"],
    "speakers": [{ "slug": "rodrigo-sa-pessoa", "name": "Rodrigo Sá Pessoa" }],
    "description": "A showcase of his own master degree thesis"
  },
  {
    "type": "normal",
    "slug": "rs",
    "date": "2020-05-27",
    "title": "Gamification",
    "areas": ["Gamification"],
    "speakers": [{ "slug": "sergio-bernardo", "name": "Sérgio Bernardo" }],
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
    "slug": "rs",
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
    "slug": "rs",
    "date": "2018-11-22",
    "title": "Python meet",
    "thematic": "Python",
    "areas": ["Python", "django", "Leiria", "MD3", "Mediatree"],
    "description": "Python being python",
    "sessions": [
      { "speakers": [{ "slug": "antonio-lopes", "name": "António Lopes" }], "title": "Behind the sssssscripting", "description": "Briefly exposing python misconceptions in usage/application and short introduction to django" },
    ],
  },
  {
    "type": "meet",
    "slug": "rs",
    "date": "2018-02-28",
    "title": "Elastic Leiria",
    "thematic": "Elasticsearch",
    "areas": ["Elasticsearh", "Leiria", "MD3", "Mediatree"],
    "description": "Meeting about elasticsearch and some of it's applications",
    "sessions": [
      { "speakers": [{ "slug": "jonatan-pedrosa", "name": "Jonatan Pedrosa" }], "title": "Migrate SQL to NoSQL", "description": "How to migrate a project database from SQL to a NoSQL database" },
      { "speakers": [{ "slug": "pabulo-silva", "name": "Pábulo Silva" }], "title": "Rich Logging (logstash/elasticsearch/kibana)", "description": "Using kibana with logstash in a real scenario" },
      { "speakers": [{ "slug": "goncalo-dias", "name": "Gonçalo Dias" }], "title": "Infrastructures and study cases of Mediatree clients", "description": "Showcase of infrastrucute applied in some clients by Mediatree" },
    ],
  },
]

/**
 * Add speakers to speakers article section
 */
function prepareSessions() {
  var mainSessionsObj = $("#mainSessionsElement");
  var urlIconObj = $("<object>").attr({ "type": "image/svg+xml", "data": "assets/icons/link-45deg.svg" });
  var youtubeIconObj = $("<object>").attr({ "type": "image/svg+xml", "data": "assets/icons/youtube.svg" });

  $.each(sessions, function (idx, session) {
    var article = $("<article>").attr("id", "sessions-article-" + session.slug).appendTo(mainSessionsObj);
    var title = $("<h2>").text(session.title).appendTo(article);
    var sessionDate = new Date(session.date);
    var sessionDateFormattedObj = $("<h4>").text(sessionDate.getDay() + " " + months[sessionDate.getMonth()] + " " + sessionDate.getFullYear()).appendTo(article);

    if (session.type == "normal") {
      var sessionSpeakers = $("<h5>").html("<a class='speaker--anchor' href='#speaker-article-" + session.speakers[0].slug + "'>" + session.speakers[0].name + "</a>").appendTo(article);
      var withPrefix = $("<b>").text("With : ").prependTo(sessionSpeakers);
      var areas = $("<p>").text(session.areas.join(", ")).css("font-size", "12px").appendTo(article);
      var sessionSectionDescription = $("<section>").attr("id", "article--section--session-" + session.slug).appendTo(article);
      var description = $("<p>").text(session.description).appendTo(sessionSectionDescription);
      var sessionSectionLinks = $("<section>").attr("id", "article--section--session-links-" + session.slug).addClass("session--section--links d-flex align-items-center container row").appendTo(article);

      $.each(session.links, function(i, link) {
        if (link.type == "youtube") {
          sessionSectionLinks.append($("<a>").attr({ "href": link.url, "title": link.name, "target": "_blank" }).append($("<span>").text(link.name)).prepend(youtubeIconObj.clone()));
        } else {
          sessionSectionLinks.append($("<a>").attr({ "href": link.url, "title": link.name, "target": "_blank" }).append($("<span>").text(link.name)).prepend(urlIconObj.clone()));
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
    }
  });
}