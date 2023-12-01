


//close modal
function closeSubMenu() {    
    const mainMenuElement = document.getElementById('main-nav');    
    if(mainMenuElement.className.includes('hide'))
    {                  
        mainMenuElement.style.height = 'auto';
        mainMenuElement.className =  mainMenuElement.className.replace(' hide', '');   
    } 
    const subMenuElement = document.getElementById('sub-nav');    
    if(!subMenuElement.className.includes('hide'))
    {                
        subMenuElement.className += ' hide';
        setTimeout(() => {
            var subMenuSectiosnElement = document.querySelectorAll("div.sub-nav > div");
            if (subMenuSectiosnElement.length>0){
                for (let index = 0; index < subMenuSectiosnElement.length; index++) {                    
                    if(!subMenuSectiosnElement[index].className.includes('back-navigation'))
                        subMenuSectiosnElement[index].style.display = 'none';
                }               
            }
        }, 300);      
    } 
}

function CloseModalSubMenu() {
    setTimeout(() => {
        closeSubMenu();
    }, 300);        
}

//open modal
function openSubmenu(name) {
    const mainMenuElement = document.getElementById('main-nav');
    const subMenuElement = document.getElementById('sub-nav');    
    const subMenuSectionElement = document.getElementById(name);    
    
    subMenuSectionElement.style.display = 'block';

    if(!mainMenuElement.className.includes('hide'))
    {        
        mainMenuElement.className += ' hide' 
        if (window.innerWidth < 1024)
        {
            setTimeout(() => {
                mainMenuElement.style.height = 0;
            }, 300);
        }                
    }        
    if(subMenuElement.className.includes('hide'))
    {        
        subMenuElement.className =  subMenuElement.className.replace(' hide', '');   
    } 
}