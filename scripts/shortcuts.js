
window.onload = () => setTimeout(listener, 1000);

function listener() {
    window.addEventListener('keydown', (e) => {
        if (e.key === 'q') document.getElementById("btn-zoom-in").click();
    });
    window.addEventListener('keydown', (e) => {
        if (e.key === 'e') document.getElementById("btn-zoom-out").click();
    });
    window.addEventListener('keydown', (e) => {
        if (e.key === ' ') document.getElementsByClassName("name-slider")[0].click();
    });
    window.addEventListener('keydown', (e) => {
        if (e.key === 'z') document.getElementById("btn-previous").click();
    });
    window.addEventListener('keydown', (e) => {
        if (e.key === 'c') document.getElementById("btn-next").click();
    });
    window.addEventListener('keydown', (e) => {
        if (e.key === 'f') document.getElementById("btn-first").click();
    });
    window.addEventListener('keydown', (e) => {
        if (e.key === 'g') document.getElementById("btn-last").click();
    });

    //Left
    window.addEventListener('keydown', (e) => {
        if (e.key === 'a') document.dispatchEvent( new KeyboardEvent( "keydown", { keyCode: 37 }));
    });
    window.addEventListener('keyup', (e) => {
        if (e.key === 'a') document.dispatchEvent( new KeyboardEvent( "keyup", { keyCode: 37 }));
    });

    //Right
    window.addEventListener('keydown', (e) => {
        if (e.key === 'd') document.dispatchEvent( new KeyboardEvent( "keydown", { keyCode: 39 }));
    });
    window.addEventListener('keyup', (e) => {
        if (e.key === 'd') document.dispatchEvent( new KeyboardEvent( "keyup", { keyCode: 39 }));
    });

    //Up
    window.addEventListener('keydown', (e) => {
        if (e.key === 'w') document.dispatchEvent( new KeyboardEvent( "keydown", { keyCode: 38 }));
    });
    window.addEventListener('keyup', (e) => {
        if (e.key === 'w') document.dispatchEvent( new KeyboardEvent( "keyup", { keyCode: 38 }));
    });

    //Down
    window.addEventListener('keydown', (e) => {
        if (e.key === 's') document.dispatchEvent( new KeyboardEvent( "keydown", { keyCode: 40 }));
    });
    window.addEventListener('keyup', (e) => {
        if (e.key === 's') document.dispatchEvent( new KeyboardEvent( "keyup", { keyCode: 40 }));
    });

}