

export function next(page) {
    if(page == 5) {
        page = 0;
    } else {
        page += 1;
    }    
    return page;
}

export function previous(page) {
    if(page == 0){
        page = 5;
    } else {
        page -= 1;
    }
    return page;
}