// generate the team
const createTeam = team => {
    let content = "";
    // Manager.html
    const generateMgr = manager => {
        return `
        <div class="card employee-card">
        <div class = "card-header">
        <h2 class = "card-title">${manager.getName()}></h2>
        <h3 class = "card-title"><i class="fas fa-mug-shot mr-2"></i>${manager.getRole()}</h3>
        </div>
        <div class="card-body">
        <ul class="list-group">
        <li class="list-group-item"> id: ${manager.getId()}</li>
        <li class="list-group-item"> email: mailto:${manager.getEmail()}</li>
        <li class="list-group-item"> officenumber: ${manager.getOfficeNumber()}</li>
        </ul>
        </div>
        </div>
        `;
    };
    // same format for engineer.html
    const generateEng = engineer => {
        return `
        <div class="card employee-card">
        <div class = "card-header">
        <h2 class = "card-title">${engineer.getName()}></h2>
        <h3 class = "card-title"><i class="fas fa-mug-shot mr-2"></i>${engineer.getRole()}</h3>
        </div>
        <div class="card-body">
        <ul class="list-group">
        <li class="list-group-item"> id: ${engineer.getId()}</li>
        <li class="list-group-item"> email: mailto:${engineer.getEmail()}</li>
        <li class="list-group-item"> github: ${engineer.getGithub()}</li>
        </ul>
        </div>
        </div>
        `;
    };

    // Intern.html
    const generateInt = intern => {
        return `
        <div class="card employee-card">
        <div class = "card-header">
        <h2 class = "card-title">${intern.getName()}></h2>
        <h3 class = "card-title"><i class="fas fa-mug-shot mr-2"></i>${intern.getRole()}</h3>
        </div>
        <div class="card-body">
        <ul class="list-group">
        <li class="list-group-item"> id: ${intern.getId()}</li>
        <li class="list-group-item"> email: mailto:${intern.getEmail()}</li>
        <li class="list-group-item"> School: ${intern.getSchool()}</li>
        </ul>
        </div>
        </div>
        `;
    };

    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole === "Manager") {
            content += generateMgr(team[i]);
        }
        else if (team[i].getRole === "Engineer") {
            content += generateEng(team[i]); 
        }
        else {content += generateInt(team[i]);
        }
    }
    return content;
}

module.exports = createTeam;