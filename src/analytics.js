import * as $ from 'jquery'

function createAnalytics() {
    let counter = 0
    let destroy = false

    const listener = () => counter++

    document.addEventListener('click', listener)

    return {
        destroy() {
            document.removeEventListener('click', listener)
        },
        getClicks() {
            return counter
        }
    }
}

$('.block-analytics').text('somehow text')

window.analytics = createAnalytics()