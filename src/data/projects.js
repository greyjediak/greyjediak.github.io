export const projects = [
    {
        id: "electronic-nose",
        featured: true,
        title: "Electronic Nose",
        subtitle: "Sensors | Embedded | PCB Design | Machine Learning",
        image: "/assets/electronicnose/enose mockup.jpg",
        summary:
            "A low cost breath acetone sensing prototype for electronic nose using sensors, embedded programming, PCB design, and future ML classification.",
        details:
            "This project involves interfacing sensors with a Seeed XIAO nRF52840 microcontroller, designing PCB layout, collecting sensor data, and transmitting over BLE communications. Everything shown here is what I led and built.",
        history: [
            {
                stage: "Step 1",
                title: "First schematic",
                text: "TGS1820 sensor, MCP1700 regulator, ADS1115 ADC, and headers for the XIAO. The 4.7k I2C resistors were wired in series with SDA and SCL instead of pulling up to 3.3V.",
                images: [
                    {
                        src: "/assets/TGSPCBSchematic.png",
                        caption: "Original schematic",
                        diagram: true
                    }
                ]
            },
            {
                stage: "Step 2",
                title: "First board and testing",
                text: "Laid out in KiCad, fabricated, and used for preliminary acetone testing.",
                images: [
                    {
                        src: "/assets/electronicnose/TGSPCBDesign.png",
                        caption: "KiCad PCB design",
                        diagram: true
                    },
                    {
                        src: "/assets/electronicnose/finished_TGS_board_web.jpg",
                        caption: "Assembled board"
                    },
                    {
                        src: "/assets/electronicnose/ppm vs nL curve.png",
                        caption: "Preliminary testing data",
                        diagram: true
                    }
                ]
            },
            {
                stage: "Step 3",
                title: "Corrected and improved schematic",
                text: "Moved the incorrect I2C pull-ups to 3.3V, then redrew the design as Rev 2 with the XIAO footprint on the sheet, labeled sections, and test points. Recent development, Fall 2026.",
                images: [
                    {
                        src: "/assets/electronicnose/TGSPCBSchematic.png",
                        caption: "I2C pull-ups corrected",
                        diagram: true
                    },
                    {
                        src: "/assets/electronicnose/improved_schematic.jpg",
                        caption: "Rev 2 schematic",
                        diagram: true
                    }
                ]
            },
            {
                stage: "Step 4",
                title: "First enclosure",
                text: "A low profile CAD shell around the board.",
                images: [
                    {
                        src: "/assets/electronicnose/mockup.png",
                        caption: "CAD model of first enclosure",
                        diagram: true
                    }
                ],
                videos: [
                    {
                        src: "/assets/electronicnose/first_case_mockup.mp4",
                        poster: "/assets/electronicnose/first_case_mockup_poster.jpg",
                        caption: "First enclosure mockup"
                    }
                ]
            },
            {
                stage: "Step 5",
                title: "Airflow casing",
                text: "Redesigned the case around airflow: air comes in through the inlet, and internal walls split it toward slotted vents on both sides.",
                images: [
                    {
                        src: "/assets/electronicnose/CDR_enose_airflow_ex.png",
                        caption: "Airflow path through the casing",
                        diagram: true
                    },
                    {
                        src: "/assets/electronicnose/enose mockup.jpg",
                        caption: "Exploded view",
                        diagram: true
                    },
                    {
                        src: "/assets/electronicnose/case_size_web.jpg",
                        caption: "Printed casing next to a commercial vape for size"
                    }
                ],
                videos: [
                    {
                        src: "/assets/electronicnose/casing_assembly.mp4",
                        poster: "/assets/electronicnose/casing_assembly_poster.jpg",
                        caption: "Casing assembly"
                    }
                ]
            },
            {
                stage: "Step 6",
                title: "Screen mockups",
                text: "Mocked up the device flow: record a sample, heat the sensor, breathe out for 10 seconds, then view H2, CO2, acetone, and ethanol readings.",
                images: [
                    {
                        src: "/assets/electronicnose/enose_mockup_screens.png",
                        caption: "Device screen mockups",
                        diagram: true
                    }
                ]
            }
        ],
        images: [
            {
                src: "/assets/electronicnose/TGS1820Sensor.JPG",
                caption: "TGS1820 acetone sensor"
            },
            {
                src: "/assets/electronicnose/XiaoSeedMC.JPG",
                caption: "Seeed XIAO nRF52840 microcontroller"
            }
        ],
        links: [
            {
                label: "Acetone Prototype Arduino Program",
                url: "https://github.com/greyjediak/electronicnose/tree/main/acetone",
                type: "github"
            },
            {
                label: "Rev 2 Schematic",
                url: "/assets/electronicnose/TGS1820PCB.pdf",
                type: "pdf"
            }
        ]
    },
    {
        id: "temp-circuit",
        featured: true,
        title: "Thermistor Measuring Circuit",
        subtitle: "103AP-2 Thermistor | nRF52840 | Analog Design",
        image: "/assets/temp_sensor/3D_view_top.jpg",
        summary: "An end to end designed and documented analog sensing circuit using manufacturing data to calculate null temperatures and sensitivity, amplifiers, filters, and ADC",
        details: "Built for ECE 593 in Fall 2026 to measure the temperature of a brewed cup of coffee. A thermistor bridge feeds an AD8237 instrumentation amplifier, a Sallen-Key low-pass filter, and a 16-bit MCP33131 ADC read by a XIAO nRF52840, all powered from a LiPo battery.",
        history: [
            {
                stage: "Step 1",
                title: "Picking the range",
                text: "Comfortable drinking temperature is about 54-70C, so the design targets a 25-85C band with margin on both sides."
            },
            {
                stage: "Step 2",
                title: "Refitting the thermistor model",
                text: "The first Steinhart-Hart fit used 0, 25, and 85C and lost accuracy right where it mattered. Refitting at 50, 70, and 85C focused the model on the range being measured."
            },
            {
                stage: "Step 3",
                title: "Schematic and board",
                text: "Took the bridge, amplifier, filter, and ADC from design through a Rev 3 schematic and PCB layout."
            }
        ],
        images: [
            {
                src: "/assets/temp_sensor/schematic.png",
                caption: "Schematic (Rev 3)",
                diagram: true
            },
            {
                src: "/assets/temp_sensor/kicad_pcb_layout.png",
                caption: "KiCad PCB layout",
                diagram: true
            },
            {
                src: "/assets/temp_sensor/3D_view_top.jpg",
                caption: "3D view, top"
            },
            {
                src: "/assets/temp_sensor/3D_view_bottom.jpg",
                caption: "3D view, bottom"
            }
        ],
        links: [
            {
                label: "Full Schematic",
                url: "/assets/temp_sensor/bean_juice_checker_sch.pdf",
                type: "pdf"
            },
            {
                label: "Design Notebook, Week 5",
                url: "/assets/temp_sensor/Design%20Notebook%20Week%20%235.pdf",
                type: "pdf"
            },
            {
                label: "Design Notebook, Weeks 7 and 8",
                url: "/assets/temp_sensor/Design%20Notebook%20%237%20and%20%238.pdf",
                type: "pdf"
            }
        ]
    },
    {
        id: "magnetometer-research",
        featured: true,
        title: "Magnetometer Calibration Research",
        subtitle: "STM32 | LIS2MDL | SPI | Sensor Calibration",
        image: "/assets/research/programming_board_web.jpg",
        summary: "Research work on a battery powered STM32WB sensor board: logging two LIS2MDL magnetometers and improving how they are calibrated.",
        details: "An STM32 Nucleo reads the sensors over SPI and logs to an SD card. A sphere fit cut leftover error while turning the board from 44 mG with the current firmware MAGCAL to 9 mG on RUN0017, and from 48 mG to 10 mG on RUN0009.",
        history: [
            {
                stage: "Hardware",
                title: "Bench setup",
                text: "Connected the sensor board to a Nucleo as SPI master for the sensors and SD card.",
                images: [
                    {
                        src: "/assets/research/programming_board_web.jpg",
                        caption: "Nucleo and sensor board on the bench"
                    },
                    {
                        src: "/assets/research/sensor_board_web.jpg",
                        caption: "Sensor board with battery"
                    }
                ]
            },
            {
                stage: "Timing",
                title: "Polling to timer capture",
                text: "Polling left outliers in the time between samples. Timer capture made the sample interval constant.",
                images: [
                    {
                        src: "/assets/research/polling_sample_times.png",
                        caption: "Polling: sample interval",
                        diagram: true
                    },
                    {
                        src: "/assets/research/timer_capture_sample_times.png",
                        caption: "Timer capture: sample interval",
                        diagram: true
                    }
                ]
            },
            {
                stage: "Calibration",
                title: "Sphere fit",
                text: "Field strength should stay flat as the board turns. Raw readings swing widely, and the sphere fit brings both sensors to the same flat line.",
                images: [
                    {
                        src: "/assets/research/run0017_raw_s1_s2.png",
                        caption: "RUN0017: raw field strength",
                        diagram: true
                    },
                    {
                        src: "/assets/research/run0017_after_sphere_fit.png",
                        caption: "RUN0017: after sphere fit",
                        diagram: true
                    },
                    {
                        src: "/assets/research/s1_s2_fitted_spheres.png",
                        caption: "RUN0009: both sensors as read and after sphere fit",
                        diagram: true
                    }
                ]
            },
            {
                stage: "Results",
                title: "Comparing corrections",
                text: "Sphere fit and sensor-to-sensor fit both landed near 9-10 mG, against 44-48 mG for MAGCAL and 256-284 mG with no correction.",
                images: [
                    {
                        src: "/assets/research/run0017_magcal_vs_sphere_fit.png",
                        caption: "RUN0017: MAGCAL vs sphere fit",
                        diagram: true
                    },
                    {
                        src: "/assets/research/run0017_noise_floor.png",
                        caption: "RUN0017: leftover error by method",
                        diagram: true
                    },
                    {
                        src: "/assets/research/RUN0009_MAGCAL_vs_Sphere_Fit.png",
                        caption: "RUN0009: MAGCAL vs sphere fit",
                        diagram: true
                    },
                    {
                        src: "/assets/research/RUN009_noise_floor.png",
                        caption: "RUN0009: leftover error by method",
                        diagram: true
                    }
                ]
            }
        ],
        images: [
            {
                src: "/assets/research/oscope_puff_sig_web.jpg",
                caption: "Puff signal on the oscilloscope"
            }
        ]
    },
    {
        id: "cleanroom",
        featured: true,
        title: "Cleanroom Research",
        subtitle: "Photolithography | Spin Coating | Training Material",
        image: "/assets/cleanroom/CleanroomGroupPhoto.jpg",
        summary: 
            "Training and gaining experience in Class 100/1000 cleanroom bays in cleanroom operations and practices in photolithography/spin coating. Creating training and publicity material for undergraduates, faculty, and university visitors.",
        details:
            "Created Manim animations, tutorial powerpoints and videos, and gave brief tours at E-Day about the cleanroom facilities.",
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
                poster: "/assets/cleanroom/SpinCoatedWafer2D_poster.jpg",
                caption: "Spin coating animation (Manim)",
            },
            {
                src: "/assets/cleanroom/PhotolithographyStretched.mp4",
                poster: "/assets/cleanroom/PhotolithographyStretched_poster.jpg",
                caption: "Photolithography animation (Manim)",
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
        featured: true,
        title: "IP Henderson",
        subtitle: "Foxboro I/A | HMI Screen Design | FBM 233",
        image: "/assets/coop/flowcontrol.JPG",
        summary: 
            "Drives upgrade for International Paper in Henderson, KY.",
        details:
            "Supported drives upgrade, built hardware testbed with redundant FBM233 modules to communicate with FCP280s, and built testing screens to monitor drive status.",
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
        
        ]

    },
    {
        id: "coffee-ml",
        featured: true,
        title: "Predicting Global Coffee Quality With ML",
        subtitle: "XGBoost | Google Colab | Matplotlib",
        image: "/assets/machinelearning/coffee_cm.png",
        coverClass: "bg-white object-contain p-4",
        summary: "Machine Learning Project Using regression and classification models to predict coffee quality",
        details: "A dataset from Coffee Quality Institute was used, stripping the columns that cupping score is calculated from. From factors like altitude the coffee was grown at, to variety, to color and moisture, classification and regression models sought to predict exact coffee scores, and a good/bad score.",
        images: [
            {
                src: "/assets/machinelearning/xgboost_reg_model_score_graph.png",
                caption: "XGBoost Regression Model Predicted Scores vs. Actual Scores"
            },
            {
                src: "/assets/machinelearning/xgboost_reg_model_importance.png",
                caption: "Importance Graph of Features"
            },
            {
                src: "/assets/machinelearning/xgboost_class_model_CM.png",
                caption: "Confusion Matrix for XGBoost Classification Model"
            },
            {
                src: "/assets/machinelearning/coffee_cm.png",
                caption: "Confusion Matrix for XGBoost Classification Model with Hyperparameter Tuning"
            },
            {
                src: "/assets/machinelearning/rf_reg_model_score_graph.png",
                caption: "Random Forest Regression Model Predicted vs. Actual Scores"
            },
            {
                src: "/assets/machinelearning/rf_reg_model_importance.png",
                caption: "RF Regression Model Feature Importance",
            },
            {
                src:"/assets/machinelearning/rf_class_cm.png",
                caption: "Random Forest Classification Model Confusion Matrix"
            },
            {
                src: "/assets/machinelearning/rf_class_model_importance.png",
                caption: "Random Forest Classification Model Feature Importance"
            }

        ],
        links: [
            {   
                label: "Powerpoint Presentation",
                url: "/assets/machinelearning/Predicting Global Coffee Quality Prediction Using Machine Learning.pdf",
                type: "Powerpoint"
            },
            {
                label: "Python Jupyter Notebook",
                url: "https://colab.research.google.com/drive/140kOYvkrj87B0JPQqqtAP_s3wYn_s3Ps?usp=sharing",
                type: "Code"
            }


        ]
    },
    { // TODO; add details for project
        id: "gbr-toy",
        title: "GBR Toy - Embedded Gift",
        subtitle: "ESP32-S3 | Adafruit TFT | Aseprite",
        image: "/assets/miniprojects/geeber/geeber_background.jpg",
        coverClass: "bg-navy-800 object-contain [image-rendering:pixelated]",
        summary: "A custom ESP project utilizing an LCD screen and hand drawn sprites",
        details: "As a gift to another engineer, this toy featured a jumping game styled to look like a PCB, offscreen sprite drawing for smooth rendering, and lots of little engineering jokes.",
        images: [
            {
                src: "/assets/miniprojects/geeber/cat.png",
                caption: "Cat sprite",
                diagram: true
            }
        ],
        videos: [
            {
                src: "/assets/miniprojects/geeber/boy_walk.mp4",
                poster: "/assets/miniprojects/geeber/boy_walk_poster.jpg",
                caption: "Walk cycle"
            },
            {
                src: "/assets/miniprojects/geeber/boy_jump.mp4",
                poster: "/assets/miniprojects/geeber/boy_jump_poster.jpg",
                caption: "Jump animation"
            },
            {
                src: "/assets/miniprojects/geeber/girl_walk.mp4",
                poster: "/assets/miniprojects/geeber/girl_walk_poster.jpg",
                caption: "Second character walk cycle"
            }
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
        id: "status-board",
        title: "Status Board - Mini Project",
        subtitle: "React | JS | CSS",
        image: "/assets/miniprojects/status_board_layout.png",
        summary: "A quite simple full-stack project built with React and JavaScript.",
        details: "Upping full stack exposure one step at a time.",
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
                src: "/assets/labstuff/STM32ReactDemoCountdown_web.mp4",
                poster: "/assets/labstuff/STM32ReactDemoCountdown_poster.jpg",
                caption: "Countdown",
            },
            {
                src: "/assets/labstuff/STM32ReactDemo_web.mp4",
                poster: "/assets/labstuff/STM32ReactDemo_poster.jpg",
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
