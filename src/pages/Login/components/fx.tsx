// eslint-disable-next-line import/no-extraneous-dependencies
import {gsap} from 'gsap';


export default function LoginFx() {
    const timeline3 = gsap.timeline({paused: true});
        timeline3.fromTo('form', {opacity: 0, pointerEvents: 'none'}, {delay: 1, duration: .2, opacity: 1, visibility: 'visible', pointerEvents: 'all'})
        timeline3.fromTo('form',  { duration: .2, zoom: .5, }, {duration: .3, ease:'back', zoom: 1, })
    
    const timeline2 = gsap.timeline({paused: true});
    timeline2.to('#logo', {delay: .3, duration: .5, ease: 'back', y: '-20%', onComplete: () => {timeline3.resume()} })

    const timeline = gsap.timeline();
    timeline.to('form', {duration: 0, visibility: 'hidden'});
        timeline.to('#logo', {duration: 0, y: '-300%'})
        timeline.to('#logo', {delay: .3, duration: .8,  ease: 'back', y: '50%', onComplete: () => {timeline2.resume()}})
}
