// CONTACT FORM

((d)=>{
    const $form = d.querySelector('.contact-form'),
    $loader = d.querySelector('.contact-form-loader'),
    $response = d.querySelector('.contact-form-response');

    $form.addEventListener('submit', (e)=>{
        e.preventDefault();
        $loader.classList.remove('none');
        fetch('https://formsubmit.co/ajax/ricardorape97@gmail.com',{
            method: 'POST',
            body: new FormData(e.target),
        })
            .then((res)=>(res.ok ? res.json() : Promise.reject(res)))
            .then(json=>{
                location.hash = '#gracias';
                $form.reset();
            }).catch(err=>{
                console.log(err);
                let message = err.statusText || 'Error, repeat message please'
                $response.querySelector('h3').innerHTML = `Error ${err.status}: ${message}`;
            }).finally(()=>{
                $loader.classList.add('none');
                setTimeout(()=>{
                    location.hash = '#close'
                },3000);

            });         
        
    });

})(document);


// Intersection Observer

const $sections = document.querySelectorAll("section[data-scroll-spy]");

const callback = (entries) => {
    entries.forEach(entry => {
        // id de las sections
        const id=entry.target.getAttribute('id')
        // variable selección de items en el navbar
        let $menu_item = document.querySelector(`a[href="#${id}"][data-scroll-spy]`)
        let $menu_icon_item = document.querySelector(`a[href="#${id}"][data-scroll-spy-icon]`)

        if (entry.isIntersecting) {
            // selector del menú desktop
            $menu_item.classList.add('active')
            // selector del menú mobile
            $menu_icon_item.classList.add('active')
        }else{
            $menu_item.classList.remove('active')
            $menu_icon_item.classList.remove('active')
        }
    });
}

const options = {
    threshold: 0.5
}

const observer = new IntersectionObserver(callback, options)
$sections.forEach(element => observer.observe(element))


//********SCROLL REVEAL***********/

window.sr = ScrollReveal();

const animar_full = (clase, duracion, origen, distancia, espera) => {
    sr.reveal(clase, {
                        duration: duracion,
                        origin: origen,
                        distance: distancia,
                        delay: espera
                    }
            );
}
const animar = (clase, espera) => {
    sr.reveal(clase, {delay: espera});
}
// Section Home:
animar('.navbar',450)
animar('.hero-content',450)
animar('.menu-icons',500)

// Section About:
animar('.title-about',450)
animar('.about-description',600)
animar('.title-about-description',600)
animar('.title-skills',600)
animar('.btn-contact',5000)


const skillSelect = (espera) => {
    // Section About:
    let $skills = document.querySelectorAll('.skill-card')
    let $parraf = document.querySelectorAll('.parrafs p')
    
    espera=800
    $skills.forEach((skill)=>{
        animar(skill,espera)
        espera+=500
    })

    espera=600
    $parraf.forEach((parraf)=>{
        animar(parraf,espera)
        espera+=500
     })
     // Section Service:
     let $services = document.querySelectorAll('.service-card')
    espera=500
    $services.forEach((service)=>{
        animar(service,espera)
        espera+=600
     })
     // Section Portfolio:
     let $portfolio = document.querySelectorAll('.portfolio-card')
    espera=700
    $portfolio.forEach((portfolio_item)=>{
        animar(portfolio_item,espera)
        espera+=600
     })
     // Section Contact:
     let $contact = document.querySelectorAll('.contact-card')
     console.log($contact)
    espera=700
    $contact.forEach((contact_item)=>{
        animar(contact_item,espera)
        espera+=400
     })
}
skillSelect();

// Section Service, Portfolio & Contact > title:
animar('.section-title',450)
animar('.contact-form',1250)
animar('.footer',350)
