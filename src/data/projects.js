export const projects = [
    {
        id: "electronic-nose",
        title: "Electronic Nose",
        subtitle: "Sensors | Embedded | PCB Design | Machine Learning",
        image:"/assets/electronicnose/mockup.png",
        summary:
            "A low cost breath acetone sensing prototype for electronic nose using sensors, embedded programming, PCB design, and future ML classification.",
        details:
            "This project involves interfacing sensors with a Seeed XIAO nRF42580 microcontroller, designing PCB layout, collecting sensor data, and transmitting over BLE communications.",
            link: "#",
        images: [
            {
                src: "/assets/electronicnose/mockup.png",
                caption: "CAD Model of finished E-Nose"
            },
           
            {
                src: "/assets/electronicnose/TGSPCBDesign.png",
                caption: "KiCad PCB Design"
            },
            {
                src: "/assets/electronicnose/TGSPCBSchematic.png",
                caption: "Circuit Schematic of Acetone Prototype"
            },
            {
                src: "/assets/electronicnose/XiaoSeedMC.JPG",
                caption: "Seeed nRF52480 Microcontroller"
            },
            {
                src: "/assets/electronicnose/ppm vs nL curve.png",
                caption: "Preliminary Testing Data"
            }

        ],
        links: [
            {
                label: "Acetone Prototype Arduino Program",
                url: "https://github.com/greyjediak/electronicnose/tree/main/acetone",
                type: "github"
            }
        ]
    },
    {
        id: "cleanroom",
        title: "Cleanroom Research",
        subtitle: "Photolithography | Spin Coating | Training Material",
        image: "/assets/cleanroom/CleanroomGroupPhoto.jpg",
        summary: 
            "Training and gaining experience in Class 100/1000 clearoom bays in cleanroom operations and practices in photolithography/spin coating. Creating training and publicity material for undergraduates, faculty, and university visitors.",
        details:
            "Created Manim animations, tutorial powerpoints and videos, and gave brief tours at E-Day about the cleanroom facilities.",
            link: "#",
        images: [
            {
                src: "/assets/cleanroom/bay2.JPG",
                caption: "Cleanroom Bays"
            },
            {
                src: "/assets/cleanroom/four.JPG",
                caption: "Cleanroom Assistants"
            },
            {
                src: "/assets/cleanroom/lwafer.jpeg",
                caption: "Patterned Wafer"
            },
            {
                src: "/assets/cleanroom/bluelight.png",
                caption: "UV Exposure (taken safely)"
            },
        
        ],
        videos: [
            {
                src: "/assets/cleanroom/SpinCoatedWafer2D.mp4",
                caption: "",
            },
            {
                src: "/assets/cleanroom/PhotolithographyStretched.mp4",
                caption: "",
            }
            
        ],
        links: [
            {
                label: "Powerpoint Training Materials",
                url: "/assets/cleanroom/Photolithography Procedural Slides.pdf",
                type: "pdf"
            },
            {
                label: "Manim Spin Coating Animation",
                url: "https://github.com/greyjediak/Manim-Cleanroom-Animations/blob/main/spin.py",
                type: "code"
            },
            {
                label: "Manim Photolithography Example",
                url: "https://github.com/greyjediak/Manim-Cleanroom-Animations/blob/main/light.py",
                type: "code"
            }
        ]

    },

    {
        id: "henderson",
        title: "IP Henderson",
        subtitle: "Foxboro | Spin Coating | Training Material",
        image: "/assets/coop/flowcontrol.JPG",
        summary: 
            "Drives upgrade for Internation Paper in Henderson, KY.",
        details:
            "Created Manim animations, tutorial powerpoints and videos, and gave brief tours at E-Day about the cleanroom facilities.",
            link: "#",
        images: [
            {
                src: "/assets/cleanroom/bay2.JPG",
                caption: "Cleanroom Bays"
            },
            {
                src: "/assets/cleanroom/four.JPG",
                caption: "Cleanroom Assistants"
            },
            {
                src: "/assets/cleanroom/lwafer.jpeg",
                caption: "Patterned Wafer"
            },
            {
                src: "/assets/cleanroom/bluelight.png",
                caption: "UV Exposure (taken safely)"
            },
        
        ],
        videos: [
            {
                src: "/assets/cleanroom/SpinCoatedWafer2D.mp4",
                caption: "",
            },
            {
                src: "/assets/cleanroom/PhotolithographyStretched.mp4",
                caption: "",
            }
            
        ],
        links: [
            {
                label: "Powerpoint Training Materials",
                url: "/assets/cleanroom/Photolithography Procedural Slides.pdf",
                type: "pdf"
            },
            {
                label: "Manim Spin Coating Animation",
                url: "https://github.com/greyjediak/Manim-Cleanroom-Animations/blob/main/spin.py",
                type: "code"
            },
            {
                label: "Manim Photolithography Example",
                url: "https://github.com/greyjediak/Manim-Cleanroom-Animations/blob/main/light.py",
                type: "code"
            }
        ]

    },

    

    

];