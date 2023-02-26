
var sessionsLogs = [
  {
    "slug": "m-u-4",
    "date": "2023-02-22",
    "title": "What the Amish can teach us about technology",
    "speakers": [{ "slug": "lee-reis", "name": "Lee Reis" }, { "slug": "celso-santos", "name": "Celso Santos" }],
    "description": `
      <p>On this session we had two guests that approched two subjects that are essencial in software development and architecture.</p>
      <p>Lee Reis, Senior Software Developer in VOID, confronted monolithic and microservices architectures by briefly comparing both not in "school" way but rather from a business and development presctive using is own experience explaing cons and pros of each and also exposing the cost of migration from monolithic to microservices. Point out that neither of the solutions is perfect, it will always depends on the project and the vison and goals of it. Like Lee said "It depends..." (team members, project nature, costs, ...) there's no correct answer for this.</p>
      <p>Celso Santos, Solutions Architect in Evooq, present a "moral and ethic" way of how somehow be a better/succeful human (programmer) while doing code review and how to be a good team member. This may seem not to be crucial but in fact code review is a very important step in software development, because can make the sofware more robust and stable through time and the developers more confortable to manage it (either new features, bug fixes, etc...)</p>
      <p>Quoting Celso Santos quoting Philip Greenspun "... programmers are very unlikable people ... In aviation, for example, people who greatly overestimate their level of skill are all dead."</p>
      <p>Key points:<ul><li>Architecture</li><li>Monolithic</li><li>Microservices</li><li>Code review</li><li>Solutions</li><li>Team work</li></ul></p>
      <p>P.S:<ul><li>This was the first time we had a hybrid session (presential and remote), it was nice to see and feel people's energy and good vibe during the session and networking while munching on some snacks, pizza and beer (there was also other beverages)</li><li>We had two new sponsors: <a href=”https://www.void.pt/” target="_blank">VOID Software</a> that provided an amazing venue <b>(VOID Academy)</b> with great conditions and staff; and <a href=”https://www.valispace.com/” target="_blank">Valispace</a> that boost our confidence with their t-shirts "Trust me I'm an Engineer"</li></ul></p>
    `,
    "links": [
      {
        "url": "https://www.mentimeter.com/app/presentation/alh7n6izryauc5ara7oscmhyhv1gawmu",
        "name": "Lee's Presentation slides",
        "type": "url"
      },
      {
        "url": "https://www.youtube.com/watch?v=",
        "name": "Check session",
        "type": "youtube"
      },
    ]
  },
  {
    "slug": "g-s-5",
    "date": "2022-09-21",
    "title": "What the Amish can teach us about technology",
    "speakers": [{ "slug": "daniel-mulroy", "name": "Daniel Mulroy" }],
    "description": `
      <p>Our guest, Daniel Mulroy, chose an approach a bit more intimate, using his own life experience, leading us approximately to a conclusion (at least for me) that we must use technology with a purpose more: human; smart; useful and really necessary for society. Also this presentation had two pauses - Thought experiments - to make participants reflex before Daniel expose next topics, doing so a more dynamic and interesting experience.</p>
      <p>First "Thought experiment" (2 minutes after the beginning), split participants in groups - which make some feel a little uncomfortable, I must confess, but on the other hand it was a great start for the following and engagement of them into the presentation. This experiment was composed by three questions:
      <blockquote>What power would you want to have more than anything else?<br/>What would you do with that power? How would your days or life be different?<br/>Do wizards, because of their exceptional ability, have a moral responsibility to help society maintain peace and prosperity?<br/>
      </blockquote>Was nice to check how people "locate" themselves morally with their power in society.</p>
      <p>Second "Thought experiment 2", split participants again in groups but now instead of questions just brought up a situation:<blockquote>A friend approaches you to work on a new project: a "Magic Dinner" machine that cooks meals that are exactly as tasty and healthy as made by hand.
      </blockquote>Making us wondering about the impact that a "perfect" solution could bring to us, to our families, neighbors, ... basically to the all world.</p>
      <p>Key points:<ul><li>Responsibility</li><li>Society</li><li>Useful</li><li>Necessity</li><li>Moral</li></ul></p>
      <p>Just before you "fly away" (using bird jokes) I'm going to let you one quote from Daniel's presentation "He who has never done anything wrong has never done anything right"... Think about it and see ya soon 🙂</p>    
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
    ]
  }
]

/**
 * Add sessions logs to session log article section
 */
function prepareSessionsLogs() {
  var mainSessionsLogsObj = $("#mainSessionsLogsElement");

  $.each(sessionsLogs, function (idx, sessionLog) {
    var article = $("<article>").attr("id", "sessions-log-article-" + sessionLog.slug).appendTo(mainSessionsLogsObj).addClass("session--log--anchor--point");
    var title = $("<h2>").html(sessionLog.title).appendTo(article);
    var sessionDate = new Date(sessionLog.date);
    var sessionDateFormattedObj = $("<h4>").text(sessionDate.getDate() + " " + months[sessionDate.getMonth()] + " " + sessionDate.getFullYear()).appendTo(article);

    var sessionSpeakers = $("<h5>").appendTo(article);
    $.each(sessionLog.speakers, function(i, speaker) {
      if (i > 0) {
        $("<span>").text(" & ").appendTo(sessionSpeakers);
      }

      var _speaker = $("<a class='speaker--anchor' href='#speaker-article-" + speaker.slug + "'>").text(speaker.name);
      _speaker.appendTo(sessionSpeakers);
    });

    var withPrefix = $("<b>").text("With : ").prependTo(sessionSpeakers);
    var sessionSectionDescription = $("<section>").attr("id", "article--section--session--log-" + sessionLog.slug).appendTo(article);
    var description = $("<p>").html(sessionLog.description).appendTo(sessionSectionDescription);
    var sessionSectionLinks = $("<section>").attr("id", "article--section--session-log-links-" + sessionLog.slug).addClass("session--section--links d-flex align-items-center container row").appendTo(article);

    sessionSectionLinks.append($("<a>").attr({ "href": "#sessions-log-article-" + sessionLog.slug, "title": "Share this article log with the world", "target": "_blank", "class": "d-flex flex-row align-items-center" }).append($("<span>").text("Share")).prepend(shareIconObj.clone()));

    $.each(sessionLog.links, function(i, link) {
      if (link.type == "youtube") {
        sessionSectionLinks.append($("<a>").attr({ "href": link.url, "title": link.name, "target": "_blank", "rel": "nofollow", "class": "d-flex flex-row align-items-center" }).append($("<span>").text(link.name)).prepend(youtubeIconObj.clone()));
      } else {
        sessionSectionLinks.append($("<a>").attr({ "href": link.url, "title": link.name, "target": "_blank", "class": "d-flex flex-row align-items-center" }).append($("<span>").text(link.name)).prepend(urlIconObj.clone()));
      }
    });
  });
}
