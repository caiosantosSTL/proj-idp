
container_config = {};

function moveContainer(container_name) {
    var target = document.querySelector(`.${container_name}`)
    var slider_container = target.querySelector('.slider-container')
    var width = slider_container.offsetWidth;           
    var sliderArea = slider_container.querySelector('.slider-area');
    if(sliderArea.children.length > 0){
        var first_width = sliderArea.children[0].offsetWidth;       
        container_config[container_name]['itemsPerView'] = Math.floor(width/first_width);        
        var size = (first_width + 16) * container_config[container_name]['itemsPerView']  * -container_config[container_name]['indexCurrent'];
        sliderArea.style.transform = `translateX(${size}px)`;
    }    
    MountNavSlider(container_name);
}

function next(container_name) {
    var target = document.querySelector(`.${container_name}`)
    var slider_container = target.querySelector('.slider-container')
    var width = slider_container.offsetWidth;           
    var sliderArea = slider_container.querySelector('.slider-area');
    if(sliderArea.children.length > 0){
        var first_width = sliderArea.children[0].offsetWidth; 
        container_config[container_name]['itemsPerView'] = Math.floor(width/first_width);              
        if ((container_config[container_name]['indexCurrent'] + 1) < (sliderArea.children.length / container_config[container_name]['itemsPerView'])) {
            container_config[container_name]['indexCurrent']++;
        } else {
            container_config[container_name]['indexCurrent'] = 0;
        }
    }
    moveContainer(container_name);
}

function moveTo(container_name, page) {
    container_config[container_name]['indexCurrent'] = page;
    moveContainer(container_name);
}


function back(container_name) {    
    if (container_config[container_name]['indexCurrent'] > 0) {
        container_config[container_name]['indexCurrent']--;
    } 
    moveContainer(container_name);
}

function MountNavSlider(container_name){
    if (typeof container_name === 'string' && container_name != '' && container_name != undefined && container_name != null)
    {        
        var target = document.querySelector(`.${container_name}`)
        var slider_container = target.querySelector('.slider-container')
        var width = slider_container.offsetWidth;           
        var sliderArea = slider_container.querySelector('.slider-area');
        
        if(sliderArea.children.length > 0){
            var first_width = sliderArea.children[0].offsetWidth; 
            container_config[container_name]['itemsPerView'] = Math.floor(width/first_width);
            pages = (sliderArea.children.length / container_config[container_name]['itemsPerView']);
        }

        var navBarSlide = target.querySelector('.slider-nav');
        navBarSlide.innerHTML = '';         
        for (var i = 0; i < pages; i++) {
            navBarSlide.innerHTML +=  `<a href="javascript:" onclick="moveTo('${container_name}', ${i})" class="${i == container_config[container_name]['indexCurrent'] ? 'active' : ''}"></a>`;
        }  
    } else {        
        Object.keys(container_config).forEach(target => {
            MountNavSlider(target)
        });
    }
}


function handleGesure(container_name) {
    if (container_config[container_name]['touchendX'] < container_config[container_name]['touchstartX']) {
        next(container_name);
    }
    if (container_config[container_name]['touchendX'] > container_config[container_name]['touchstartX']) {
        back(container_name);
    }  
}


function ConfigSlider(container_name){

    container_config[container_name] =  {
        indexCurrent: 0,
        itemsPerView: 1,
        touchstartX: 0,
        touchendX:0,
    }
    
    // START FUNC
    MountNavSlider(container_name);
    window.addEventListener("resize", MountNavSlider);

    var gesuredZone = document.querySelector(`.${container_name}`);

    // LINESTERS
    gesuredZone.addEventListener('touchstart', function(event) { 
        sliderArea = event.target.closest('.slider-area');
        container_name = sliderArea.getAttribute("for")
        container_config[container_name]['touchstartX'] = event.changedTouches[0].screenX; 
    }, false);

    gesuredZone.addEventListener('touchend', function(event) { 
        sliderArea = event.target.closest('.slider-area');
        container_name = sliderArea.getAttribute("for")
        container_config[container_name]['touchendX'] = event.changedTouches[0].screenX; handleGesure(container_name); 
    }, false); 
}

ConfigSlider('section-commentary');





