// Viene fornito un layout di base in cui è presente una card di esempio inserita nell’html. 
// Questa card serve solo come esempio e dovrà quindi essere rimossa dall’html.
// Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team. 
// Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Una volta definita la struttura dati, stampare dinamicamente una card per ogni membro del team.


// Create the array that contains all the details of the member
const membersArray = [
    {
        name: "Wayne",
        lastname: "Barnett",
        role: "Founder & CEO",
        image: `<img src="img/wayne-barnett-founder-ceo.jpg" alt="Wayne Barnett"</>`
    },
    {
        name: "Angela",
        lastname: "Caroll",
        role: "Chief Editor",
        image: `<img src="img/angela-caroll-chief-editor.jpg" alt="Angela Caroll"</>`
    },
    {
        name: "Walter",
        lastname: "Gordon",
        role: "Office Manager",
        image: `<img src="img/walter-gordon-office-manager.jpg" alt="Walter Gordon"</>`
    },
    {
        name: "Angela",
        lastname: "Lopez",
        role: "Social Media Manager",
        image: `<img src="img/angela-lopez-social-media-manager.jpg" alt="Angela Lopez"</>`
    },
    {
        name: "Scott",
        lastname: "Estrada",
        role: "Developer",
        image: `<img src="img/scott-estrada-developer.jpg" alt="Scott Estrada"</>`
    },
    {
        name: "Barbara",
        lastname: "Ramos",
        role: "Graphic Designer",
        image: `<img src="img/barbara-ramos-graphic-designer.jpg" alt="Barbara Ramos"</>`
    },
];

// Select the container that will contain the member-cards
const teamContainer = document.querySelector('.team-container');

// For each member create a dynamic card
for(let i = 0; i < membersArray.length; i++) {
    const thisMember = membersArray[i];
    console.log(thisMember);

    // Create the card with the different-member details
    const memberCard = `
    <div class="single-class team-card">
        <div class="card-image">${thisMember.image}</div>
        <div class="card-text">
            <h3>${thisMember.name} ${thisMember.lastname}</h2>
            <div>${thisMember.role}</div></div>
        </div>
    `;

    // Append the team-member-card to the teamContainer in the DOM
    teamContainer.innerHTML += memberCard;
}
