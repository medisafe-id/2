const video = document.getElementById("camera");

async function startCamera() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: { ideal: "environment" }
      },
      audio: false
    });

    video.srcObject = stream;
  } catch (err) {
    alert("Kamera tidak bisa diakses");
    console.error(err);
  }
}

window.addEventListener("load", startCamera);
