const buttons = document.querySelectorAll(".platform");
const downloadBtn = document.getElementById("downloadBtn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.classList.contains("disabled")) return;

        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const platform = button.dataset.platform;

        if (platform === "windows") {
            downloadBtn.textContent = "Descargar para Windows";
            downloadBtn.href = "downloads/project-playtime-returned-windows.zip";
        }

        if (platform === "linux") {
            downloadBtn.textContent = "Descargar para Linux";
            downloadBtn.href = "downloads/project-playtime-returned-linux.zip";
        }
    });
});
