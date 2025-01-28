
'use client'
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim"; 

import { Container } from "tsparticles-engine";
import { Engine } from "@tsparticles/engine";

interface ParticlesBackgroundProps {
    id: string;
}

const ParticlesBackground = (props: ParticlesBackgroundProps) => {
    const [init, setInit] = useState<boolean>(false);

    useEffect(() => {
        initParticlesEngine(async (engine: Engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container: Container): void => {
        console.log(container);
    };

    const options = useMemo(() => ({
        background: {
            color: {
                value: "#ffffff",
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "repulse",
                },
                onHover: {
                    enable: true,
                    mode: 'grab',
                },
            },
            modes: {
                push: {
                    distance: 200,
                    duration: 15,
                },
                grab: {
                    distance: 150,
                },
            },
        },
        particles: {
            color: {
                value: "#000000",
            },
            links: {
                color: "#000000",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
            },
            move: {
                direction: "none" as const,
                enable: true,
                outModes: {
                    default: "bounce" as const,
                },
                random: true,
                speed: 3,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                },
                value: 150,
            },
            opacity: {
                value: 1.0,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 3 },
            },
        },
        detectRetina: true,
    }), []);

    return init &&  <Particles id={props.id} init={particlesLoaded} options={options} />;
};

export default ParticlesBackground;