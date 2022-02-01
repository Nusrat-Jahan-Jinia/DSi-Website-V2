const withImages = require("next-images");
module.exports = withImages({});
module.exports = {
  images: {
    domains: ["jam.innovatorslab.net", "localhost"],
  },
  //different pages header meta data
  env: {
    homeTitle: "DSi | home",
    homeName: "DSi Website",
    homeContent: "DSi website for Projects and Services",

    peopleTitle: "DSi | People",
    peopleName: "DSi Website",
    peopleContent: "DSi website for Projects and Services",

    serviceTitle: "DSi | Services",
    serviceName: "DSi Website",
    serviceContent: "DSi website for Projects and Services",

    newsTitle: "DSi | News",
    newsName: "DSi Website",
    newsContent: "DSi website for Projects and Services",

    blogTitle: "DSi | Blogs",
    blogName: "DSi Website",
    blogContent: "DSi website for Projects and Services",

    faqTitle: "DSi | faq",
    faqName: "DSi Website",
    faqContent: "DSi website for Projects and Services",

    caseTitle: "DSi | Casestudies",
    caseName: "DSi Website",
    caseContent: "DSi website for Projects and Services",

    campusTitle: "DSi | Campus",
    campusName: "DSi Website",
    campusContent: "DSi website for Projects and Services",

    projectTitle: "DSi | Projects",
    projectName: "DSi Website",
    projectContent: "DSi website for Projects and Services",

    paperTitle: "DSi | Whitepapers",
    paperName: "DSi Website",
    paperContent: "DSi website for Projects and Services",
  },
};
