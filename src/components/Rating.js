import React from 'react'

function Rating(props) {
    return (
        <div>
            {
                props.name === "Fancy Product" || props.name === "Sale Item" ?
                    (<></>) :
                    (<div class="d-flex justify-content-center small text-warning mb-2">
                        <div class="bi-star-fill"></div>
                        <div class="bi-star-fill"></div>
                        <div class="bi-star-fill"></div>
                        <div class="bi-star-fill"></div>
                        <div class="bi-star-fill"></div>
                    </div>)
            }
        </div >
    )
}

export default Rating
