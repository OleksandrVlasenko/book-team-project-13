



export function addMediaWidth() { 
    const checkedWidts = document.documentElement.clientWidth
    
    if (checkedWidts < 767) {
        
        return "mobile"
    } if (checkedWidts < 1279) { 
        return "tablet"
    } if (checkedWidts >= 1280) { 
        return "desctop"
    }
}

// addMediaWidth()


// export default {addMediaWidth }