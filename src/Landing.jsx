import React, { useEffect } from "react";
import "./index.scss";
import * as THREE from "three";
import Fade from 'react-reveal/Fade';
import Skills from "./Skills";
import Navbar from "./Navbar";
import Typewriter from 'typewriter-effect';
export default function Landing() {
let phrase =   <Typewriter
onInit={(typewriter) => {
  typewriter
  
    .typeString("Adnan")
    .callFunction((state) => {
       // turn off animation
       state.elements.cursor.style.animation = 'none'
       // hide cursor
       state.elements.cursor.style.display = 'none'
    })
    .start()
}}
/>
  useEffect(() => {
    const canvas = document.querySelector("canvas.webgl");

    const scene = new THREE.Scene();

    let mouseX = 0,
      mouseY = 0,
      windowHalfX = window.innerWidth / 2,
      windowHalfY = window.innerHeight / 2;
    const spheres = [];

    document.addEventListener("mousemove", onDocumentMouseMove);

    const geometry = new THREE.TetrahedronGeometry(3);
    const material = new THREE.MeshPhongMaterial({
      specular: 0x333333,
      shininess: 100,
      combine: THREE.MixOperation,
      reflectivity: 0.4,
    });

    var light1 = new THREE.DirectionalLight(0x00b4d8, 1.5);
    light1.position.set(100, 0, 0);
    scene.add(light1);

    var light2 = new THREE.DirectionalLight(0x00b4d8, 0.8);
    light2.position.set(-100, 0, 0);
    scene.add(light2);

    const meshT = {
      triangles: 75,
    };

    for (let i = 0; i < meshT.triangles; i++) {
      const meshScale = Math.random() * 0.35 * 0.7;
      const mesh = new THREE.Mesh(geometry, material);

      mesh.position.x = Math.random();
      mesh.position.y = Math.random();
      mesh.position.z = Math.random() * 50;
      mesh.scale.set(meshScale, meshScale, meshScale);

      scene.add(mesh);

      spheres.push(mesh);
    }

    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    window.addEventListener("resize", () => {
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;

      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    const camera = new THREE.PerspectiveCamera(
      60,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.z = 25;
    scene.add(camera);

    function onDocumentMouseMove(event) {
      mouseX = (event.clientX - windowHalfX) / 400;
      mouseY = (event.clientY - windowHalfY) / 400;
    }

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
    });

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const tick = () => {
      const timer = 0.0001 * Date.now();

      camera.position.x += (mouseX - camera.position.x) * 0.1;
      camera.position.y += (-mouseY - camera.position.y) * 0.1;

      camera.lookAt(scene.position);

      for (let i = 0, il = spheres.length; i < il; i++) {
        const sphere = spheres[i];

        sphere.position.x = 10 * Math.cos(timer + i);
        sphere.position.y = 5 * Math.sin(timer + i * 1.1);

        sphere.rotation.x = 5 * Math.cos(timer + i);
        sphere.rotation.y = 5 * Math.sin(timer + i * 1.1);
      }

      renderer.render(scene, camera);

      window.requestAnimationFrame(tick);
    };

    tick();
  }, []);


  return (
    <>
      <section>
        <Navbar />
        <canvas className="webgl"></canvas>
        <div className="parent">
          <div className="page-container">
            <div className="content">
            <Fade top>
              <h1>
             
                Hey, I'm {"‏‏"}{phrase}.
                
              </h1></Fade>
              <Fade top>
              <p className="p">
                an aspiring <span id="job">Frontend Web-Developer</span>{" "}
              </p>
              </Fade>
              <Fade top>
              <p className="p">passionate about building web applications</p></Fade>
              <Fade top>
              <p className="p">with a great user experiences.</p></Fade>
              <Fade bottom>
              <div className="icons">
                <div className="child">
                  <a
                    href="https://www.linkedin.com/in/adnan-el-sayed-711ab11b1/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <svg
                      height="35"
                      width="35"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                    >
                      <g fill="none">
                        <path
                          d="M0 18.338C0 8.216 8.474 0 18.92 0h218.16C247.53 0 256 8.216 256 18.338v219.327C256 247.79 247.53 256 237.08 256H18.92C8.475 256 0 247.791 0 237.668V18.335z"
                          fill="#00B4D8"
                        />
                        <path
                          d="M77.796 214.238V98.986H39.488v115.252H77.8zM58.65 83.253c13.356 0 21.671-8.85 21.671-19.91-.25-11.312-8.315-19.915-21.417-19.915-13.111 0-21.674 8.603-21.674 19.914 0 11.06 8.312 19.91 21.169 19.91h.248zM99 214.238h38.305v-64.355c0-3.44.25-6.889 1.262-9.346 2.768-6.885 9.071-14.012 19.656-14.012 13.858 0 19.405 10.568 19.405 26.063v61.65h38.304v-66.082c0-35.399-18.896-51.872-44.099-51.872-20.663 0-29.738 11.549-34.78 19.415h.255V98.99H99.002c.5 10.812-.003 115.252-.003 115.252z"
                          fill="#fff"
                        />
                      </g>
                    </svg>
                  </a>
                </div>
                <div className="child">
                  <a
                    href="https://github.com/Adnan-961/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <svg
                      width="35"
                      height="35"
                      viewBox="0 0 256 249"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMinYMin meet"
                    >
                      <g fill="#00b4d8">
                        <path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0" />
                        <path d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398" />
                      </g>
                    </svg>
                  </a>
                </div>
                <div className="child">
                  <a href="mailto:adnan.sayed.official@gmail.com">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="35"
                      viewBox="1 1 600 600"
                    >
                      <g transform="matrix(6.66667 0 0 6.66667 -5.667 -6408.081)">
                        <linearGradient
                          id="a"
                          gradientUnits="userSpaceOnUse"
                          x1="-110.934"
                          y1="1129.751"
                          x2="-110.35"
                          y2="1720.099"
                          gradientTransform="matrix(1 0 0 -1 156.89 2180.75)"
                        >
                          <stop offset="0" stop-color="#00B4D8" />
                          <stop offset="1" stop-color="#00B4D8" />
                        </linearGradient>
                        <path
                          d="M21.653 961.362h48.695a20.608 20.608 0 0 1 20.653 20.653v48.695a20.608 20.608 0 0 1-20.653 20.653H21.653A20.608 20.608 0 0 1 1 1030.71v-48.695a20.608 20.608 0 0 1 20.653-20.653z"
                          fill="#00B4D8"
                        />
                        <path
                          d="M20.719 986.956c-.474 0-.921.082-1.344.25l8.469 8.719 8.563 8.875.156.188.25.25.25.25.5.531 7.344 7.531c.122.076.477.404.754.543.357.178.743.343 1.141.357.43.015.869-.108 1.256-.296.29-.141.419-.343.755-.603l8.5-8.781 8.594-8.844 8.281-8.531a3.635 3.635 0 0 0-1.75-.438H20.719zm-2.594 1.062c-.903.856-1.469 2.142-1.469 3.594v28.625c0 1.175.377 2.243 1 3.062l1.187-1.125 8.844-8.594 7.844-7.594-.156-.187-8.594-8.844-8.594-8.875-.062-.062zm57.188.282l-8.375 8.656-8.563 8.844-.156.156 8.156 7.906 8.844 8.594.531.5c.476-.764.75-1.705.75-2.719v-28.625c0-1.294-.448-2.468-1.187-3.312zm-38.782 18.718l-7.812 7.594-8.875 8.594-1.125 1.094c.593.382 1.268.625 2 .625h51.719c.88 0 1.678-.338 2.344-.875l-.562-.562-8.875-8.594-8.156-7.875-7.344 7.562c-.397.264-.663.556-1.051.735-.625.289-1.309.533-1.997.523-.69-.011-1.367-.281-1.986-.585-.311-.153-.477-.305-.841-.61l-7.439-7.626z"
                          fill="#fff"
                        />
                      </g>
                    </svg>
                  </a>
                </div>
              </div></Fade>
            </div>
          </div>
          <div className="mouse-container">
            <div class="mouse-icon">
              <div class="wheel"></div>
            </div>
          </div>
        </div>
      </section>
      <Skills />
     
    </>
  );
}
