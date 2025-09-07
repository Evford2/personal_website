const sections = document.querySelectorAll('.section');
const sectbtns = document.querySelectorAll('.controls');
const sectbtn = document.querySelectorAll('.control');
const portbtn = document.querySelectorAll(".portbtn");
const allSections = document.querySelectorAll('.main-content')[0];

function PageTransitions(){
    //Button click active class
    for(let i = 0; i < sectbtn.length; i++){
        sectbtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }
 


    //sections active class
    allSections.addEventListener('click',(e) =>{
        console.log(e.target);
        const id = e.target.dataset.id;
        
        console.log(id);
        if(id){
            //remove active tag from other buttons
            sectbtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide other sections
            sections.forEach((section) =>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
}

PageTransitions();