# Proy-Fireye-RosWeb

6º Proyecto de grado en tecnologías interactivas.  
Interfaz web para el control y monitoreo del robot **Fireye-1**, un sistema de patrullaje autónomo diseñado para entornos rurales y fincas privadas.

---

## 📋 Descripción

Fireye-1 RosWeb es una aplicación web que permite la comunicación en tiempo real con el robot Fireye-1 a través de ROS2 (Robot Operating System 2). Proporciona una interfaz visual para supervisar y controlar las rutas de patrullaje autónomo en entornos al aire libre, comunicándose con el robot mediante rosbridge y roslibjs.

---

## 🛠️ Tecnologías utilizadas

- HTML5 / CSS3 / JavaScript
- [roslibjs](https://github.com/RobotWebTools/roslibjs) — comunicación con ROS2 desde el navegador
- [rosbridge_suite](https://github.com/RobotWebTools/rosbridge_suite) — servidor WebSocket para ROS2
- ROS2 Jazzy Jalisco
- Gazebo Harmonic (simulación)

---

## ⚙️ Requisitos previos

- Ubuntu 24.04
- ROS2 Jazzy instalado y configurado
- `rosbridge_server` instalado:
  ```bash
  sudo apt install ros-jazzy-rosbridge-suite
  ```
- Robot Fireye-1 en ejecución (real o simulado con Gazebo)

---

## 📦 Instalación y uso

```bash
# Clona el repositorio
git clone https://github.com/Caronte2/proy_fireye_rosweb.git

# Entra en la carpeta
cd proy_fireye_rosweb
```

Lanza el servidor rosbridge en una terminal separada:

```bash
source /opt/ros/jazzy/setup.bash
ros2 launch rosbridge_server rosbridge_websocket_launch.xml
```

Luego levanta el servidor web local:

```bash
python3 -m http.server 8000
```

Abre el navegador en `http://localhost:8000`.

---

## 📁 Estructura del proyecto

```
Proy-Fireye-RosWeb/
├── src/
│   ├── css/
│   ├── fonts/
│   ├── img/
│   ├── js/
│   └── html/
├── index.html
└── README.md
```

---

## ✨ Características

- Conexión en tiempo real con el robot Fireye-1 vía WebSocket (rosbridge)
- Activación de misiones de patrullaje autónomo desde el navegador
- Monitoreo del estado del robot
- Interfaz adaptada para entornos rurales y fincas privadas

---

## 👤 Autores

| Nombre | GitHub |
|---|---|
| Manuel Pérez | [@Diabolo-kun](https://github.com/Diabolo-kun)|
| Yixuan Chen | [@chen0357](https://github.com/chen0357) |
| Pablo Alejandro Chasi Cajamarca | [@Caronte2](https://github.com/Caronte2) |
| Imanol Figuero Parras | [@Diabolo-kun](https://github.com/Diabolo-kun) |
| Greysy Burgos Salazar | [@GreysyBurgos](https://github.com/GreysyBurgos) |
| Yilun Jiang | [@Eason1902](https://github.com/Eason1902) |