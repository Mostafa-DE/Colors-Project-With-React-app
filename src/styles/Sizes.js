// /* Large desktops and laptops */
// @media (min-width: 1199.98px) {

// }

// /* medium tablets and small desktops */
// @media (max-width: 991.98px) {

// }

// /* Landscape phones and portrait tablets */
// @media (max-width: 767.98px) {

// }

// /* Portrait phones and smaller */
// @media (max-width: 480px) {

// }

export default {
    up() {

    },
    down(size) {
        const sizes = {
           xs: "575.98px",
           sm: "767.98px",
           md: "991.98px",
           lg: "1199.98px",
           xl: "1600px"
        }
        return `@media (max-width: ${sizes[size]})`
    }
}