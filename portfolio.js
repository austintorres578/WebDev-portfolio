const cloneProject = document.getElementById("clone-project-image");
const perfectProject = document.getElementById("perfect-project-image");
const reactProject = document.getElementById("react-blog-image");
const apiProject = document.getElementById("api-project-image");

const cloneTech = document.getElementById("clone-technologies");
const perfectTech = document.getElementById("perfect-technologies");
const crudTech = document.getElementById("crud-technologies");
const apiTech = document.getElementById("api-technologies");

const cloneDescription = document.getElementById("clone-description-container");
const perfectDescription = document.getElementById("perfect-description-container");
const crudDescription = document.getElementById("crud-description-container");
const apiDescription = document.getElementById("api-description-container");


cloneProject.addEventListener("click",toggleCloneProject);
perfectProject.addEventListener("click",togglePerfectProject);
reactProject.addEventListener("click",toggleReactProject);
apiProject.addEventListener("click",toggleApiProject);

function toggleCloneProject(){
    perfectProject.style.boxShadow="none";
    cloneProject.style.boxShadow="0 4px 6px 0 rgb(0, 232, 182), 0 5px 12px 0 rgb(0, 232, 182)"
    reactProject.style.boxShadow="none"
    apiProject.style.boxShadow="none"

    cloneTech.style.display="flex";
    perfectTech.style.display="none";
    crudTech.style.display="none";
    apiTech.style.display="none";

    cloneDescription.style.display="block";
    perfectDescription.style.display="none";
    crudDescription.style.display="none";
    apiDescription.style.display="none";
};

function togglePerfectProject(){
    perfectProject.style.boxShadow="0 4px 6px 0 rgb(0, 232, 182), 0 5px 12px 0 rgb(0, 232, 182)";
    cloneProject.style.boxShadow="none"
    reactProject.style.boxShadow="none"
    apiProject.style.boxShadow="none"

    cloneTech.style.display="none";
    perfectTech.style.display="grid";
    crudTech.style.display="none";
    apiTech.style.display="none";

    cloneDescription.style.display="none";
    perfectDescription.style.display="block";
    crudDescription.style.display="none";
    apiDescription.style.display="none";
};

function toggleReactProject(){
    perfectProject.style.boxShadow="none";
    cloneProject.style.boxShadow="none";
    reactProject.style.boxShadow="0 4px 6px 0 rgb(0, 232, 182), 0 5px 12px 0 rgb(0, 232, 182)";
    apiProject.style.boxShadow="none";

    cloneTech.style.display="none";
    perfectTech.style.display="none";
    crudTech.style.display="flex";
    apiTech.style.display="none";

    cloneDescription.style.display="none";
    perfectDescription.style.display="none";
    crudDescription.style.display="block";
    apiDescription.style.display="none";
};

function toggleApiProject(){
    perfectProject.style.boxShadow="none";
    cloneProject.style.boxShadow="none";
    reactProject.style.boxShadow="none";
    apiProject.style.boxShadow="0 4px 6px 0 rgb(0, 232, 182), 0 5px 12px 0 rgb(0, 232, 182)";

    cloneTech.style.display="none";
    perfectTech.style.display="none";
    crudTech.style.display="none";
    apiTech.style.display="flex";

    cloneDescription.style.display="none";
    perfectDescription.style.display="none";
    crudDescription.style.display="none";
    apiDescription.style.display="block";
};