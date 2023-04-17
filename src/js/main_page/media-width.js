



export function addMediaWidth() { 
    const checkedWidts = document.documentElement.clientWidth
    
    if (checkedWidts < 767) {
        
        return "mobile"
    } if (checkedWidts < 1439) { 
        return "tablet"
    } if (checkedWidts >= 1440) { 
        return "desctop"
    }
}

// addMediaWidth()


// export default {addMediaWidth }