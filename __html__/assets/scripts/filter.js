//open List
function openList(name) {
    const filterListBlock = document.getElementById(name);    
    if(filterListBlock && !filterListBlock.className.includes('opened'))
    {        
        filterListBlock.className += ' opened'
    } else {
        filterListBlock.className =  filterListBlock.className.replace(' opened', '');                     
    }  
}