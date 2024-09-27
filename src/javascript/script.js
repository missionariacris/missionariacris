$(document).ready(function(){
    $('#mobile_btn').on('click',function(){
        $('#mobile_menu').toggleClass('active')
        $('#mobile_btn').find('i').toggleClass('fa-x')
    })

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function(){

        
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if(scrollPosition<= 0){
            header.css('box-shadow', 'none');
        } else{
            header.css();
        }

        sections.each(function(i){
            const section = $(this);
            const sectionTop = section.offset().top - 90;
            const sectionBottom = sectionTop + section.outerHeight();

            if(scrollPosition >= sectionTop && scrollPosition < sectionBottom){
                activeSectionIndex = i+1;
                return false;
            }
        })


        navItems.removeClass('active')
        $(navItems[activeSectionIndex]).addClass('active');
    });

    

ScrollReveal().reveal('#cta', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
})

ScrollReveal().reveal('.dish', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
})

ScrollReveal().reveal('#bene', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
})

});