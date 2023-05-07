let canvasKita = document.getElementById('myCanvas');
canvasKita.width = window.innerWidth;
canvasKita.height = 150;
let ctx = canvasKita.getContext('2d');

let imageData = ctx.getImageData(0,0, canvasKita.width, canvasKita.height);
// Menggambar Garis 
function gambar_titik(imageDataTemp, x, y, r, g, b) {
    let indeks;
    indeks = 4 * (x + (y * canvasKita.width));
    imageDataTemp.data[indeks + 0] = r;
    imageDataTemp.data[indeks + 1] = g;
    imageDataTemp.data[indeks + 2] = b;
    imageDataTemp.data[indeks + 3] = 255; // alpha
}
    
//Menggambar Garis dengan Algoritma DDA
function gradient_line(imageData, x1, y1, x2, y2, r, g, b) {
    let dx = x2 - x1;
    let dy = y2 - y1;
    
    if(Math.abs(dx) > Math.abs(dy)) {
        // Penambahan pada sumbu x
        let y = y1;
        if(x2 > x1) {
            // Bergerak ke kanan
            for(let x = x1; x < x2; x++) {
                y = y + dy / Math.abs(dx);
                gambar_titik(imageData, Math.ceil(x), Math.ceil(y), r, g, b);
            }
        } else {
            // Bergerak ke kiri
            for(let x = x1; x > x2; x--) {
                y = y + dy / Math.abs(dx);
                gambar_titik(imageData, Math.ceil(x), Math.ceil(y), r, g, b);
            }
        }
    } 
    else {
        // Penambahan pada sumbu y
        let x = x1;
        if(y2 > y1) {
            // Bergerak ke bawah
            for(let y = y1; y < y2; y++) {
                x = x + dx / Math.abs(dy);
                gambar_titik(imageData, Math.ceil(x), Math.ceil(y), r, g, b);
            }
        } 
        else {
            // Bergerak ke atas
            for(let y = y1; y > y2; y--) {
                x = x + dx / Math.abs(dy);
                gambar_titik(imageData, Math.ceil(x), Math.ceil(y), r, g, b);
            }
        }
    }
}




//MEMBUAAT LINGKARAN
function lingkaran(x, y, r, w, kanan, kiri, atas, bawah) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.w = w;
    this.kanan = kanan;
    this.kiri = kiri;
    this.atas = atas;
    this.bawah = bawah;
  
    this.lingkaran = function () {
        ctx.fillStyle = this.w;
        ctx.beginPath();
        ctx.arc(this.x + r, this.y + r, this.r, 0, Math.PI * 2);
        ctx.fill();
    
        if (this.kanan) {
            this.x++;
        }
        if (this.kiri) {
            this.x--;
        }
        if (this.bawah) {
            this.y++;
        }
        if (this.atas) {
            this.y--;
        }
    
        if (this.x + this.r > canvasKita.width - this.r) {
            this.kanan = false;
            this.kiri = true;
        } else if (this.x == 0) {
            this.kanan = true;
            this.kiri = false;
        }
        if (this.y + this.r > canvasKita.height - this.r) {
            this.bawah = false;
            this.atas = true;
        } else if (this.y == 0) {
            this.bawah = true;
            this.atas = false;
        }
    };
}

//membuat lingkaran
let lingkaran1 = new lingkaran(100, 50, 50, "#9C51E0", false, true, true, false);
let lingkaran2 = new lingkaran(150, 50, 55, "#B762C1", true, false, false, true);
let lingkaran3 = new lingkaran(500, 100, 45, "#573391", false, true, false, true,);
let lingkaran4 = new lingkaran(250, 150, 15, "#700B97", true, false, true, false,);
let lingkaran5 = new lingkaran(100, 100, 23, "#612897", false, true, true, true);
let lingkaran6 = new lingkaran(300, 300, 60, "#211f38", true, false, false, false);
let lingkaran7 = new lingkaran(200, 100, 30, "#947EC3", false, true, false, true);
let lingkaran8 = new lingkaran(200, 100, 10, "#9C51E0", false, true, true, false);
let lingkaran9 = new lingkaran(150, 50, 40, "#B762C1", false, true, false, true);
let lingkaran10 = new lingkaran(120, 40, 20, "#573391", true, false, false, false);
let lingkaran11 = new lingkaran(250, 150, 31, "#700B97", false, true, true, false);
let lingkaran12 = new lingkaran(100, 100, 13, "#612897", true, false, true, false);
let lingkaran13 = new lingkaran(250, 150, 42, "#211f38", false, true, false, true);
let lingkaran14 = new lingkaran(100, 50, 23, "#947EC3", false, true, true, true);
let lingkaran15 = new lingkaran(200, 100, 27, "#9C51E0", false, true, true, false);
let lingkaran16 = new lingkaran(150, 50, 48, "#B762C1", false, true, true, false);
let lingkaran17 = new lingkaran(120, 40, 18, "#573391", true, false, true, false);
let lingkaran18 = new lingkaran(250, 150, 31, "#700B97", false, true, false, true);
let lingkaran19 = new lingkaran(100, 100, 25, "#612897", false, true, false, true);
let lingkaran20 = new lingkaran(300, 300, 42, "#211f38", false, true, true, true);
let lingkaran21 = new lingkaran(200, 100, 53, "#947EC3", true, false, false, false);

//membuat animasi memantul
function animasi() {
    ctx.save();
    ctx.clearRect(0, 0, canvasKita.width, canvasKita.height);
    
    //mengatur transparan pada lingkaran
    ctx.globalAlpha = 0.5;
    
    //memanggil lingkaran
    lingkaran1.lingkaran();
    lingkaran2.lingkaran();
    lingkaran3.lingkaran();
    lingkaran4.lingkaran();
    lingkaran5.lingkaran();
    lingkaran6.lingkaran();
    lingkaran7.lingkaran();
    lingkaran8.lingkaran();
    lingkaran9.lingkaran();
    lingkaran10.lingkaran();
    lingkaran11.lingkaran();
    lingkaran12.lingkaran();
    lingkaran13.lingkaran();
    lingkaran14.lingkaran();
    lingkaran15.lingkaran();
    lingkaran16.lingkaran();
    lingkaran17.lingkaran();
    lingkaran18.lingkaran();
    lingkaran19.lingkaran();
    lingkaran20.lingkaran();
    lingkaran21.lingkaran();
    
    ctx.restore();
}
setInterval(animasi, 0.01);




//MEMBUAT OBJEK 3D 
let width = window.innerWidth;
let height = window.innerHeight;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, width/height, 0.1, 5);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

//OBJEK 3D BUILT-IN (PLANET)
//geometry material
const geo1 = new THREE.SphereGeometry(1, 32, 32);
const geo2 = new THREE.SphereGeometry(1, 32, 32);
const geo3 = new THREE.SphereGeometry(1, 32, 32);
const geo4 = new THREE.SphereGeometry(1, 32, 32);
const geo5 = new THREE.SphereGeometry(1, 32, 32);

let light1 = new THREE.PointLight(0xffffff, 1);
light1.position.set(0,10,0);
scene.add(light1);

let light2 = new THREE.PointLight(0xffffff, 1);
light2.position.set(0,0,10);
scene.add(light2);

const grassTexture1 = new THREE.TextureLoader().load('https://i.ibb.co/0y18ZgZ/ma.jpg');
const brickTexture1 = new THREE.TextureLoader().load('https://i.ibb.co/SnnvHx8/texture-matahari.jpg');
const grassTexture2 = new THREE.TextureLoader().load('https://i.ibb.co/xfyFyB8/merkurius.jpg');
const grassTexture3 = new THREE.TextureLoader().load('https://i.ibb.co/RhVSxyF/venus.jpg');
const grassTexture4 = new THREE.TextureLoader().load('https://i.ibb.co/jMQ9ypS/bumi.jpg');
const grassTexture5 = new THREE.TextureLoader().load('https://i.ibb.co/4tCXkgX/mars.jpg');

const material1 = new THREE.MeshPhongMaterial(
    {
        map: grassTexture1,
        map: brickTexture1,
    }
);
const material2 = new THREE.MeshPhongMaterial(
    {
        map: grassTexture2,
    }
);
const material3 = new THREE.MeshPhongMaterial(
    {
        map: grassTexture3,
    }
);
const material4 = new THREE.MeshPhongMaterial(
    {
        map: grassTexture4,
    }
);
const material5 = new THREE.MeshPhongMaterial(
    {
        map: grassTexture5,
    }
);

let mesh1 = new THREE.Mesh(geo1, material1);
mesh1.position.set(0, 0, 0);
scene.add(mesh1);

let mesh2 = new THREE.Mesh(geo2, material2);
mesh2.position.set(0, 2, 0);
scene.add(mesh2);

let mesh3 = new THREE.Mesh(geo3, material3);
mesh3.position.set(2, 0, 0);
scene.add(mesh3);

let mesh4 = new THREE.Mesh(geo4, material4);
mesh4.position.set(-2, 0, 0);
scene.add(mesh4);

let mesh5 = new THREE.Mesh(geo5, material5);
mesh5.position.set(0, -2, 0);
scene.add(mesh5);

// OBJEK 3D CUSTOM (KUBUS)
const geo = new THREE.BufferGeometry();

let vertices = new Float32Array([
    -1.0,
    -1.0,
    1.0, // 0
  
    1.0,
    1.0,
    1.0, // 1
  
    -1.0,
    1.0,
    1.0, // 2
  
    1.0,
    -1.0,
    1.0, // 3
  
    -1.0,
    -1.0,
    -1.0, // 4
  
    1.0,
    1.0,
    -1.0, // 5
  
    -1.0,
    1.0,
    -1.0, // 6
  
    1.0,
    -1.0,
    -1.0, //7
]);

let uvs = new Float32Array([
    0.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0, 0.0,
  
    0.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0, 0.0,
  ]);


geo.setIndex([
    // sisi depan
    1, 2, 0, 3, 1, 0,
    // sisi belakang
    4, 6, 5, 5, 7, 4,
    // sisi kiri
    4, 0, 2, 2, 6, 4,
    // sisi kanan
    5, 1, 3, 3, 7, 5,
    // sisi atas
    1, 5, 6, 6, 2, 1,
    // sisi bawah
    0, 4, 7, 7, 3, 0,
  ]);

geo.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
geo.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));

  
const material = new THREE.MeshBasicMaterial({
    color: "#d8afff",
    wireframe: true,
    transparent: true
});

let mesh8 = new THREE.Mesh(geo, material);
scene.add(mesh8);
//AKHIR OBJEK 3D CUSTOM (KUBUS)

document.body.onmousedown = function(mouse){
    mesh8.rotation.x += 1.1;
    mesh8.rotation.y += 1.1;
}

window.addEventListener('resize', function() {
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

function update() {
    // mesh1.rotation.x += 0.01;
    mesh1.rotation.y += 0.01;
    // mesh2.rotation.x += 0.01;
    mesh2.rotation.y += 0.01;
    // mesh3.rotation.x += 0.01;
    mesh3.rotation.y += 0.01;
    // mesh4.rotation.x += 0.01;
    mesh4.rotation.y += 0.01;
    // mesh5.rotation.x += 0.01;
    mesh5.rotation.y += 0.01;  
    // mesh5.rotation.x += 0.01;
    mesh8.rotation.y += 0.01;
    requestAnimationFrame(update);
    renderer.render(scene, camera);
}

update();
//AKHIR OBJEK 3D BUILT-IN (PLANET)