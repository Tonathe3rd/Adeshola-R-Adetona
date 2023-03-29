const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const Body = document.querySelector('body');


function PageTrans() {
    //Button click for active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i]. addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active_btn');
            currentBtn[0].className = currentBtn[0].className.replace('active_btn', '');
            this.className += ' active_btn'
        })
        
    }

    //sections Active class
    Body.addEventListener('click', (e) =>{
        // console.log(e.target);
        const id = e.target.dataset.id;
        if(id){
           //remove selected from the other btns
           sectBtns.forEach((btn) => {
            btn.classList.remove('active')
           })
           e.target.classList.add('active')
           //hide other sections
           sections.forEach((section)=>{
            section.classList.remove('active')
           })

           const element = document.getElementById(id);
           element.classList.add('active');
        }
    })
}
PageTrans();