/*
This is empty on purpose! Your code to build the resume will go here.
 */


var bio = {
  name: "Guilherme Prado",
  role: "Developer",
  contacts: {
    mobile: "+55123456789",
    email: "guilherme@frontendnd.com",
    github: "gu1lhermelp",
    twitter: "",
    location: "Brazil"
  },
  welcomeMessage: "Hello",
  skills: [
      "HTML",
      "CSS",
      "JavaScript"
  ],
  biopic: "images/fry.jpg",
  display: displayBio
};

var education = {
  schools: [
    {
      name: "Universidade Federal de São Carlos",
      location: "São Carlos, Brazil",
      degree: "BA",
      majors: [
        "CompEng",
      ],
      dates: "01/01/2010 - 31/12/2016"
    }
  ],
  onlineCourses: [
    {
      title: "Front-End Nanodegree",
      school: "Udacity",
      dates: "01/06/2017 - 01/07/2017",
      url: "http://udacity.com",
    }
  ],
  display: displayEducation
};

var work = {
  jobs: [
    {
      employer: "PhysicsCompany",
      title: "Developer",
      location: "Brazil",
      dates: "In progress",
      description: "Software developer"
    },
    {
      employer: "AirplaneCompany",
      title: "Intern",
      location: "Brazil",
      dates: "01/01/2016 - 31/12/2016",
      description: "Internship in software development"
    },
  ],
  display: displayWorkExperience
};

var projects = {
  projects: [
    {
      title: "Project 1",
      dates: "01/01/2017 - 01/02/2017",
      description: "Vert challenging project",
      images: [
        "images/projects.png",
      ],
    }
  ],
  display: displayProjects
};

function displayBio() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);

  // Fill topContacts
  var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  $("#topContacts, #footerContacts").append(mobile);
  var email = HTMLemail.replace("%data%", bio.contacts.email);
  $("#topContacts, #footerContacts").append(email);
  var github = HTMLgithub.replace("%data%", bio.contacts.github);
  $("#topContacts, #footerContacts").append(github);
  if (bio.contacts.twitter) {
    var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts, #footerContacts").append(twitter);
  }
  var location = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts, #footerContacts").append(location);

  var myPic = HTMLbioPic.replace("%data%", bio.biopic);
  var welcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(myPic);
  $("#header").append(welcomeMessage);
  $("#header").append(HTMLskillsStart);
  bio.skills.forEach(function(skill) {
    formattedSkill = HTMLskills.replace("%data%", skill);
    $("#skills").append(formattedSkill);
  });
}

function displayWorkExperience() {
  work.jobs.forEach(function(job) {

    var employer = HTMLworkEmployer.replace("%data%", job.employer);
    var title = HTMLworkTitle.replace("%data%", job.title);
    var formattedJobTitle = employer + title;
    var formattedDate = HTMLworkDates.replace("%data%", job.dates);
    var formattedDescription = HTMLworkDescription.replace(
      "%data%", job.description);
    $("#workExperience").append(HTMLworkStart);
    $(".work-entry:last").append(formattedJobTitle);
    $(".work-entry:last").append(formattedDate);
    $(".work-entry:last").append(formattedDescription);

  });
}

function displayProjects() {
  projects.projects.forEach(function(project) {

    var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
    var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
    var formattedDescription = HTMLprojectDescription.replace(
      "%data%", project.description);
    $("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(formattedTitle);
    $(".project-entry:last").append(formattedDates);
    $(".project-entry:last").append(formattedDescription);
    project.images.forEach(function(image) {
      var formattedImage = HTMLprojectImage.replace("%data%", image);
      $(".project-entry:last").append(formattedImage);
    });
  });
}

function displayEducation() {
  education.schools.forEach(function(school) {

    var formattedName = HTMLschoolName.replace("%data%", school.name);
    var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
    var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
    var formattedLocation = HTMLschoolLocation.replace(
      "%data%", school.location);
    $("#education").append(HTMLschoolStart);
    $(".education-entry:last").append(formattedName);
    $(".education-entry:last").append(formattedDegree);
    $(".education-entry:last").append(formattedDates);
    $(".education-entry:last").append(formattedLocation);
    school.majors.forEach(function(major) {
      var formattedMajor = HTMLschoolMajor.replace("%data%", major);
      $(".education-entry:last").append(formattedMajor);
    });
  });

  $("#education").append(HTMLonlineClasses);

  education.onlineCourses.forEach(function(onlineCourse) {
    var formattedTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
    var formattedSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
    var formattedDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
    var formattedURL = HTMLonlineURL.replace("%data%", onlineCourse.url);
    $("#education").append(HTMLschoolStart);
    $(".education-entry:last").append(formattedTitle);
    $(".education-entry:last").append(formattedSchool);
    $(".education-entry:last").append(formattedDates);
    $(".education-entry:last").append(formattedURL);
  });
}

$("#mapDiv").append(googleMap);

bio.display();
work.display();
projects.display();
education.display();
