// Viene fornito un layout di base in cui è presente una card di esempio inserita nell’html. 
// Questa card serve solo come esempio e dovrà quindi essere rimossa dall’html.
// Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team. 
// Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Una volta definita la struttura dati, stampare dinamicamente una card per ogni membro del team.

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
    }
];


const teamContainer = document.querySelector('.team-container');

// For each member create a dynamic card
for(let i = 0; i < membersArray.length; i++) {
    const thisMember = membersArray[i];
    console.log(thisMember);

    // Create the card with the member details
    const memberCard = `
    <div class="single-class">
        <div>${thisMember.image}</div>
        <h3>${thisMember.name} ${thisMember.lastname}</h2>
        <div>${thisMember.role}</div>
    </div>
    `;

    // Select the member-div and add the css style
    // const detailsTeamMember = document.querySelector(".single-class");
    // console.log(detailsTeamMember);

    // detailsTeamMember.classList.add("team-card");
    
    // Append the team-member-card to the teamContainer in the DOM
    teamContainer.innerHTML += memberCard;

}
