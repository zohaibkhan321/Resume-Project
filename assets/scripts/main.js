"use strict";
var toggleSkillsIcon = document.getElementById('toggleSkillsIcon');
var toggleExperienceIcon = document.getElementById('toggleExperienceIcon');
var togglePersonalIcon = document.getElementById('togglePersonalIcon');
var toggleProjectsIcon = document.getElementById('toggleProjectsIcon');
var toggleEducationIcon = document.getElementById('toggleEducationIcon');
// Correctly selecting the skillsGrid element here
var skillsGrid = document.getElementById('skillsGrid');
var experienceList = document.getElementById('experienceList');
var personalInfoContent = document.getElementById('personalInfoContent');
var projectsList = document.getElementById('projectsList');
var educationContent = document.getElementById('educationContent');
// Toggle function for skills section
toggleSkillsIcon === null || toggleSkillsIcon === void 0 ? void 0 : toggleSkillsIcon.addEventListener('click', function () {
    skillsGrid === null || skillsGrid === void 0 ? void 0 : skillsGrid.classList.toggle('hidden'); // Toggle the hidden class for skillsGrid
    toggleSkillsIcon.classList.toggle('fa-chevron-down');
    toggleSkillsIcon.classList.toggle('fa-chevron-up');
});
// Toggle function for experience section
toggleExperienceIcon === null || toggleExperienceIcon === void 0 ? void 0 : toggleExperienceIcon.addEventListener('click', function () {
    experienceList === null || experienceList === void 0 ? void 0 : experienceList.classList.toggle('hidden');
    toggleExperienceIcon.classList.toggle('fa-chevron-down');
    toggleExperienceIcon.classList.toggle('fa-chevron-up');
});
// Toggle function for personal info section
togglePersonalIcon === null || togglePersonalIcon === void 0 ? void 0 : togglePersonalIcon.addEventListener('click', function () {
    personalInfoContent === null || personalInfoContent === void 0 ? void 0 : personalInfoContent.classList.toggle('hidden');
    togglePersonalIcon.classList.toggle('fa-chevron-down');
    togglePersonalIcon.classList.toggle('fa-chevron-up');
});
// Toggle function for projects section
toggleProjectsIcon === null || toggleProjectsIcon === void 0 ? void 0 : toggleProjectsIcon.addEventListener('click', function () {
    projectsList === null || projectsList === void 0 ? void 0 : projectsList.classList.toggle('hidden');
    toggleProjectsIcon.classList.toggle('fa-chevron-down');
    toggleProjectsIcon.classList.toggle('fa-chevron-up');
});
// Toggle function for education section
toggleEducationIcon === null || toggleEducationIcon === void 0 ? void 0 : toggleEducationIcon.addEventListener('click', function () {
    educationContent === null || educationContent === void 0 ? void 0 : educationContent.classList.toggle('hidden');
    toggleEducationIcon.classList.toggle('fa-chevron-down');
    toggleEducationIcon.classList.toggle('fa-chevron-up');
});
