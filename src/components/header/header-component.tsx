import footercomponent from '../footer/footer-component'

let headercomponent = {
    components: {
        'footer-component' : footercomponent
    },


    template:`
    <div class="example">
        <slot></slot>
        <footer-component>This is a footer component from inside header registered localy</footer-component>
    </div>
    
    `
}

export default headercomponent