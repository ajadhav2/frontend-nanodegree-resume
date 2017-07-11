var bio = {
  "name": "Ashish Jadhav",
  "role": "Web Developer",
  "contacts": {
    "mobile": "123-456-7890",
    "email": "ashish@example.com",
    "github": "ajadhav2",
    "twitter": "@ashish53v",
    "location": "Albany",
    "linkedin": "abc@example.com"
  },
  "welcomeMessage": "Hello EveryOne",
  "skills": ["CSS","HTML","JavaScript"],
  "biopic": "images/fry.jpg" 
};

bio.display = function(){
  var formattedRole = HTMLheaderRole.replace("%data%","Web Developer");
  $("#header").prepend(formattedRole);

  var formattedName = HTMLheaderName.replace("%data%",bio.name);
  $("#header").prepend(formattedName);

  var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
  var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
  var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
  var formattedLinkedin = HTMLcontactGeneric.replace("%contact%","linkedin");
  formattedLinkedin = formattedLinkedin.replace("%data%",bio.contacts.linkedin);

  $("#topContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedTwitter,formattedLocation,formattedLinkedin);

  var formattedImage = HTMLbioPic.replace("%data%",bio.biopic);
  $("#header").append(formattedImage);

  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
  $("#header").append(formattedWelcomeMsg);

  if(bio.skills.length > 0){
    $("#header").append(HTMLskillsStart);

    for(var i=0;i<bio.skills.length;i++){
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
      $("#skills").append(formattedSkill);
    }
  }

  $("#footerContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedTwitter,formattedLocation,formattedLinkedin);

};

var education = {
  "schools": [
    {
      "name": "SUNY",
      "location": "Albany",
      "degree": "Masters",
      "majors": ["CS"],
      "dates": "2015",
      "url": "www.example1.com"
    },
    {
      "name": "VNIT",
      "location": "Nagpur, India",
      "degree": "B.Tech",
      "majors": ["CS"],
      "dates": "2010",
      "url": "www.example2.com"
    }
  ],
  "onlineCourses": [
    {
      "title": "Front end developer",
      "school": "Udacity",
      "dates": "2017",
      "url": "www.udacity.com"
    }
  ]
};

education.display = function(){
  $("#education").append(HTMLschoolStart);

  var i,formattedDates;
  
  for(i=0;i<education.schools.length;i++){
    var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
    var formattedNameDegree = formattedName + formattedDegree;
    $(".education-entry:last").append(formattedNameDegree);

    formattedDates = HTMLprojectDates.replace("%data%", education.schools[i].dates);
    $(".education-entry:last").append(formattedDates);

    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
    $(".education-entry:last").append(formattedLocation);

    for(var j=0;j<education.schools[i].majors.length;j++){
      var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]);
      $(".education-entry:last").append(formattedMajors);
    }
    
  }

  $(".education-entry:last").append(HTMLonlineClasses);
  $("#education h3").addClass("custom");

  for(i=0;i<education.onlineCourses.length;i++){
    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
    var formattedTitleSchool = formattedTitle + formattedSchool;
    $(".education-entry:last").append(formattedTitleSchool);

    formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
    $(".education-entry:last").append(formattedDates);

    var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
    $(".education-entry:last").append(formattedURL);

  }
};

var work = {
  "jobs": [
    {
      "employer": "ITS",
      "title": "Student Assistant",
      "location": "Albany",
      "dates": "October 2016 - May 2017",
      "description": "sdajjndslkad asdjaldald;amd dalsjadl;kamdamd dkjakdladmka."
    },
    {
      "employer": "Axis",
      "title": "Student Assistant",
      "location": "Nagpur, India",
      "dates": "August 2013 - October 2013",
      "description": "rwsfrgdg sdfsvcxdhgbfh;fd dgffsd;fg ghfhjjkygk."
    }
  ]
};

work.display = function(){
  
  for(var i=0;i<work.jobs.length;i++){
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
    var temp = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(temp);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
    $(".work-entry:last").append(formattedLocation);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
    $(".work-entry:last").append(formattedDescription);
  }
};

var projects = {
  "projects": [
    {
      "title": "Online Shopping Portal",
      "dates": "2017",
      "description": "sdajjndslkad asdjaldald;amd dalsjadl;kamdamd dkjakdladmka.",
      "images": [
        "http://via.placeholder.com/350x150",
        "http://via.placeholder.com/350x150"
      ]
    }
  ]
};

projects.display = function(){
  $("#projects").append(HTMLprojectStart);

  for(var i=0;i<projects.projects.length;i++){
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
    $(".project-entry:last").append(formattedDescription);

    if(projects.projects[i].images.length > 0){
      for(var j=0;j<projects.projects[i].images.length;j++){
        var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[i].images[j]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
};

function displayMaps(){
  $("#mapDiv").append(googleMap);
}

bio.display();

work.display();

projects.display();

education.display();

displayMaps();
