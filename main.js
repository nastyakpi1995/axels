
function Particle_animation() {
    var ps = new ParticleSlider({
        ptlGap : 5,
        ptlSize : 2,
        width: 1500,
        height: 1000,
        mouseForce:  200,               //5000
        monochrome : true, //mono color
        showArrowControls: true,
        color: 'rgba(200,200,200,1)',
    });
    ps.resize();
}

Particle_animation();