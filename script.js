particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 120,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 4,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 20,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 8,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "window",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 1
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

document.addEventListener("DOMContentLoaded", function() {
    const textElements = document.querySelectorAll('.typing-effect'); // すべての要素を取得
    const speed = 100; // タイピングスピード（ミリ秒）
    const initialDelay = 1000; // 最初のタイピング開始前の遅延（ミリ秒）

    function typeLine(element, text, lineIndex = 0) {
        if (lineIndex < text.length) {
            element.textContent += text.charAt(lineIndex); // 文字を追加
            setTimeout(() => typeLine(element, text, lineIndex + 1), speed); // 次の文字
        } else {
            // 現在のテキストが完了した後に次のテキストへ
            const nextElement = element.nextElementSibling;
            if (nextElement) {
                setTimeout(() => {
                    nextElement.style.display = 'block'; // 次のテキストを表示
                    typeNextLine(nextElement); // 次のテキストのタイピングを開始
                }, speed * 500); // 500ミリ秒後に次のテキストを表示
            }
        }
    }

    function typeNextLine(element) {
        element.style.display = 'block'; // 次の要素を表示
        const text = element.textContent;
        element.textContent = ''; // 初期化
        typeLine(element, text); // タイピング開始
    }

    // 最初のテキストを表示
    textElements.forEach(element => element.style.display = 'none');
    textElements[0].style.display = 'block'; // 最初の要素を表示

    // 最初のタイピング開始を遅延
    setTimeout(() => {
        typeNextLine(textElements[0]); // タイピング開始
    }, initialDelay);
});
