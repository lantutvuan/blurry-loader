const bg = document.querySelector('.bg');
const loadingNumber = document.querySelector('.loading-number');
const loadingText = document.querySelector('.loading-text');

// tried different methods of getting style
const bgStyle = getComputedStyle(bg);
const blurDuration = bgStyle.animationDuration;
const delay = calculateDelay(blurDuration)

loadingText.style.opacity = 1;

console.time('Duration')

percentageCounter = setInterval(changeOpacityAndNumber, delay);


function changeOpacityAndNumber() {
    decreaseLoadingTextOpacity()
    increaseLoadingNumber()
}

function decreaseLoadingTextOpacity() {
    if (loadingText.style.opacity > 0) loadingText.style.opacity = +(loadingText.style.opacity) - 0.01
}

function increaseLoadingNumber() {
    const num = loadingNumber.textContent
    if (num < 100) loadingNumber.textContent++
    else {
        clearInterval(percentageCounter) 
        console.timeEnd('Duration')
    }
}

function calculateDelay (animationDuration) {

    const MILLISECONDS_IN_SECOND = 1000;

    const intifiedDuration = intifyDelay(animationDuration)
    const millisecondsDuration = intifiedDuration * MILLISECONDS_IN_SECOND
    const onePercentDuration = millisecondsDuration / 100

    return onePercentDuration;

    function intifyDelay (animationDuration) {

        const regex = new RegExp('[^0-9]');
        return animationDuration.replace(regex, "")
        
    }
}

