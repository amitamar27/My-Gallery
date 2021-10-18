function renderProjs() {
    console.log('renderProjs');

    var protfolioContainer = document.querySelector('.projs')

    var projs = gProjs //// use get projs func

    var projctsHTML = projs.map(proj => {
        return `
                <div onclick="renderModal('${proj.id}')" class="col-md-4 col-sm-6 portfolio-item">
                <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                    <i class="fa fa-plus fa-3x"></i>
                    </div>
                </div>
                <img class="img-fluid" src="${proj.url}" alt="">
                </a>
                <div class="portfolio-caption">
                <h4>${proj.name}</h4>
                <p class="text-muted">${proj.title}</p>
                </div>
            </div>
        `
    })
    protfolioContainer.innerHTML = projctsHTML.join('')
}



function renderModal(projId) {

    var modalContainer = document.querySelector('.modal-body')

    var proj = getProjById(projId)

    var modalsHTML =
        `      <h2>${proj.name}</h2>
                <p class="item-intro text-muted">${proj.title}</p>
                <img class="img-fluid d-block mx-auto" src="${proj.url}" alt="">
                <p>${proj.desc}</p>
                <ul class="list-inline">
                    <li>Date: ${proj.publishedAt}</li>
                    <li>Client: Threads</li>
                    <li>Category: Illustration</li>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Close Project</button> 
        `


    modalContainer.innerHTML = modalsHTML

}


function onSubmitForm() {
    var emailAddress = document.querySelector('#exampleFormControlInput1').value
    var emailSubject = document.querySelector('#exampleFormControlInput2').value
    var emailTextArea = document.querySelector('#exampleFormControlTextarea1').value
    
    // window.open(`mailto: ${emailAddress} ?subject=${emailSubject}&body=${emailTextArea}`)
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${emailSubject}&body=${emailTextArea}`)
}