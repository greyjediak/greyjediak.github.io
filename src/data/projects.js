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
      { // TODO; add details for project
        id: "gbr-toy",
        title: "GBR Toy - Embedded Gift",
        subtitle: "ESP32-S3 | Adafruit TFT | Aesprite",
        image: "/assets/labstuff/stm32reactboardsetup.jpg",
        summary: "A custom ESP project utilizing an LCD screen and hand drawn sprites",
        details: "As a gift to another engineer, this toy featured a jumping game styled to look like a PCB, offscreen sprite drawing for smooth rendering, and lots of little engineering jokes.",
        images: [],
        videos: [
            {},
        ],
        links: [
            {   
                label: "Github Code",
                url: "https://github.com/greyjediak/GEEBER_Toy",
                type: "Code"
            },

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
        subtitle: "Foxboro I/A | HMI Screen Design | FBM 233",
        image: "/assets/coop/flowcontrol.JPG",
        summary: 
            "Drives upgrade for International Paper in Henderson, KY.",
        details:
            "Supported drives upgrade, built hardware testbed with redundant FBM233 modules to communicate with FCP280s, and built testing screens to monitor drive status.",
            link: "#",
        images: [
            {
                src: "/assets/coop/ATeam.JPG",
                caption: "Geared up to work"
            },
            {
                src: "/assets/coop/CPandFBM.jpg",
                caption: "Testing hardware (preassembly)"
            },
            {
                src: "/assets/coop/pinging.JPG",
                caption: "Checking communication with PLC"
            },
        
        ],
        links: [
            {
                label: "Hardware Testbed Sketch (coming soon)",
                url: "/assets/cleanroom/Photolithography Procedural Slides.pdf",
                type: "pdf"
            },
        ]

    },
    {
        id: "status-board",
        title: "Status Board - Mini Project",
        subtitle: "React | JS | CSS",
        image: "/assets/miniprojects/status_board_layout.png",
        summary: "A quite simple full-stack project built with React and JavaScript.",
        details: "Upping full stack exposure one step at a time.",
        images: [
            {
                src: "/assets/coop/ATeam.JPG",
                caption: "Geared up to work"
            },
        ],
        links: [
            {
                label: "GitHub Link",
                url: "https://github.com/greyjediak/StatusBoard",
                type: "Code"
            },
            
        ]
    },
    {
        id: "stm32-react-time",
        title: "React Timer - Mini Project",
        subtitle: "STM32L476RG | HAL | 7-Seg-Display",
        image: "/assets/labstuff/stm32reactboardsetup.jpg",
        summary: "A simple STM32 project involving timers, a seven segment LED display, and interrupts.",
        details: "Instead of using Sys_Timer, a general purpose timer on the STM32 was configured to overflow every 1ms. An interrupt was used to execute when the button was pressed, and begin the timer.",
        images: [],
        videos: [
            {
                src: "/assets/labstuff/STM32ReactDemoCountdown.mp4",
                caption: "Countdown",
            },
            {
                src: "/assets/labstuff/STM32ReactDemo.mp4",
                caption: "Lab Demo",
            }
        ],
        links: [
            {   
                label: "Github Code",
                url: "https://github.com/greyjediak/react_time_stm32",
                type: "Code"
            },

        ]
    }

    

    

];