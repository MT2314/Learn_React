window.scrollTo(0, 0); // scroll to top of file on page load.

// unitName is defined in learning_activity.html as constants
// orgUnitId is determined based on the brightspace url pattern (/content/enforced/###-CODE/...)

function main() {
  function _getOrgUnitId() {
    return window.location.href.replace(
      /.+content\/enforced\/(\d+)-.*/gi,
      "$1"
    );
  }

  function _buildTopicRoute(topicId) {
    return "/d2l/le/lessons/" + orgUnitId + "/topics/" + topicId;
  }

  function _getTopicMetadata(moduleIndex, topicIndex) {
    var topicRoute =
      "/d2l/api/le/1.22/" +
      orgUnitId +
      "/content/topics/" +
      modules[moduleIndex].Topics[topicIndex].TopicId;

    return fetch(topicRoute, {credentials: "same-origin"})
      .then((res) => res.json())
      .then(function (topic) {
        modules[moduleIndex].Topics[topicIndex].metadata = topic;
        return modules[moduleIndex].Topics[topicIndex];
      });
  }

  function _createUnitLinks(moduleIndex) {
    var promises = [];

    for (let i = 0; i < modules[moduleIndex].Topics.length; i++) {
      modules[moduleIndex].Topics[i].metadata = {};

      promises.push(_getTopicMetadata(moduleIndex, i));
    }

    Promise.all(promises).then(function () {
      for (let i = 0; i < modules[moduleIndex].Topics.length; i++) {
        if (modules[moduleIndex].Topics[i].metadata.TopicType !== 3) {
          let hrefGen = _buildTopicRoute(
            modules[moduleIndex].Topics[i].TopicId
          );
          hrefGen;
        }
      }
    });
  }

  function _updateHTML(Path) {
    const course_code = Path.includes("Templatefor")
      ? Path.split("-")[1].replace("Templatefor", "").slice(0, 5).toLowerCase()
      : Path.split("-")[1].slice(0, 5).toLowerCase();
  }
  const orgUnitId = _getOrgUnitId();
  var tocRoute = "/d2l/api/le/1.22/" + orgUnitId + "/content/toc";
  var modules;

  fetch(tocRoute, {credentials: "same-origin"})
    .then((res) => res.json())
    .then(function (data) {
      modules = data.Modules;
      modules;
      for (let i = 0; i < modules.length; i++) {
        if (modules[i].Title.startsWith(unitName)) {
          _createUnitLinks(i);
          break;
        }
      }
    });

  const getTemplate = `/d2l/api/lp/1.22/coursetemplates/${orgUnitId}`;
  var Path;
  fetch(getTemplate, {credentials: "same-origin"})
    .then((res) => res.json())
    .then(function (data) {
      Path = data.Path;
      _updateHTML(Path);
    });
}

main();
