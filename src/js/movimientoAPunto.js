document.addEventListener('DOMContentLoaded', event => {
    console.log("entro en la mision")

    const data = {
        ros: null,
        rosbridge_address: 'ws://127.0.0.1:9090/',
        connected: false,
    }

    // 🔌 Conexión ROS
    data.ros = new ROSLIB.Ros({
        url: data.rosbridge_address
    });

    document.getElementById("btn_mision")
        .addEventListener("click", empezarMision);

    function empezarMision(){
      let service = new ROSLIB.Service({
        ros : data.ros,
        name : '/iniciar_mision',
        serviceType : 'std_srvs/Trigger', // ✅ corregido
      });

      service.callService(new ROSLIB.ServiceRequest({}), function(result) {
        console.log('Resultado de la misión: ' + result.message);
      });
    }
});