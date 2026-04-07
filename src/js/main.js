document.addEventListener('DOMContentLoaded', () => {

  let ros = null;
  const status = document.getElementById("status");

  document.getElementById("btn_con").addEventListener("click", connect);
  document.getElementById("btn_dis").addEventListener("click", disconnect);

  function connect() {
      console.log("CLICK connect");
  ros = new ROSLIB.Ros({
    url: 'ws://localhost:9090'
  });

  ros.on('connection', () => {
    console.log("Connected to ROS");
    status.innerText = "Estado: conectado";

    const listener = new ROSLIB.Topic({
      ros: ros,
      name: '/scan',
      messageType: 'sensor_msgs/msg/LaserScan'
    });

    listener.subscribe(function(msg) {
      console.log("Scan recibido:", msg);
    });
 const mapListener = new ROSLIB.Topic({
        ros: ros,
        name: '/map',
        messageType: 'nav_msgs/msg/OccupancyGrid'
      });

      mapListener.subscribe(function(msg) {
        console.log("Mapa recibido");
        drawMap(msg);
      });
  });

  ros.on('error', (error) => {
    console.log("Error:", error);
  });

  ros.on('close', () => {
    console.log("Disconnected");
  });
}

  function disconnect() {
    if (ros) ros.close();
  }
  //  ejemplo de función (simple para prueba inicial)
function updateCameraFeed() {
  const img = document.getElementById("cameraFeed");
  img.src = `http://localhost:8080/stream?topic=/camera/image_raw`;
  //const timestamp = new Date().getTime(); // Evita caché agregando un timestamp
  //img.src = `http://localhost:8080/stream?topic=/camera/image_raw&t=${timestamp}`;
  //img.src = `http://localhost:8080/stream?topic=/turtlebot3/camera/image_raw&console.log("Cactualizando: http://0.0.0.0:8080/stream?topic=/camera/image_raw)"`
}




function drawMap(msg) {

  const canvas = document.getElementById("mapCanvas");
  const ctx = canvas.getContext("2d");

  const width = msg.info.width;
  const height = msg.info.height;
  const data = msg.data;

  const scale = 10;  //  放大倍数（关键）

  canvas.width = width * scale;
  canvas.height = height * scale;

  const imageData = ctx.createImageData(width, height);

  for (let i = 0; i < data.length; i++) {

    let value = data[i];
    let color;

    if (value === -1) color = 127;
    else if (value === 0) color = 255;
    else color = 0;

    let idx = i * 4;
    imageData.data[idx] = color;
    imageData.data[idx + 1] = color;
    imageData.data[idx + 2] = color;
    imageData.data[idx + 3] = 255;
  }

  // 创建临时canvas
  const tempCanvas = document.createElement("canvas");
  const tempCtx = tempCanvas.getContext("2d");

  tempCanvas.width = width;
  tempCanvas.height = height;

  tempCtx.putImageData(imageData, 0, 0);

  // 翻转 + 放大
  ctx.setTransform(scale, 0, 0, -scale, 0, height * scale);
  ctx.drawImage(tempCanvas, 0, 0);
}

});