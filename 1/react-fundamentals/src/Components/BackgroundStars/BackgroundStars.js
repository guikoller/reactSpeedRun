import "./style.css"
import { useEffect } from "react"

const BackgroundStars = () => {
    useEffect(() => {
        let transition = 40
        let dots = 12
        let lgStars = 2
        let smStars = 3

        function nJoin(n, markup) {
            let fn = typeof markup == 'function' ?
                markup : e => markup
            return new Array(n)
                .join(' ')
                .split(' ')
                .map(fn)
                .join('')
        }

        // Transition layers
        Array
            .from(document.querySelectorAll(
                '.sky-level'
            ))
            .slice(0, -1)
            .forEach(layer => {
                layer.innerHTML = nJoin(transition,
                    '<div></div>'
                )
            })

        // Stars and dots
        let bigStars = nJoin(lgStars, `
      <span class="star star--lg">
        <span class="star__part"></span>
        <span class="star__part"></span>
      </span>
    `)

        let smallStars = nJoin(smStars, `
      <span class="star star--sm">
        <span class="star__part"></span>
        <span class="star__part"></span>
      </span>
    `)

        let dotStars = nJoin(dots, e => {
            let isBlinking = Math.random() < .33
            let className = 'dot'
            isBlinking && (
                className += ' dot--blinking'
            )
            return `
        <span class="${className}"></span>
      `
        })

        document
            .getElementById('stars')
            .innerHTML += (
                dotStars +
                smallStars +
                bigStars
            )


    }, [])

    return (
        <div classNameName="sky">
            <div className="sky-level">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="sky-level"></div>
            <div className="sky-level"></div>
            <div className="sky-level"></div>
            <div className="sky-level"></div>
            <div className="sky-level"></div>
            <div id="stars" className="sky-stars">
            </div>
        </div>
    )
}

export default BackgroundStars