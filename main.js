import CONFIG from './config.js';

const API_KEY = CONFIG.ORKUT_API_KEY;

function getProductStatusFromCache() {
    const cachedStatus = localStorage.getItem('productStatus');
    return cachedStatus ? JSON.parse(cachedStatus) : null;
}

function saveProductStatusToCache(status) {
    localStorage.setItem('productStatus', JSON.stringify(status));
}

async function checkProductAvailability() {
    const statusText = document.getElementById('statusText');
    const cachedStatus = getProductStatusFromCache();

    if (cachedStatus) {
        statusText.textContent = cachedStatus;
        return;
    }

    statusText.textContent = "Memeriksa...";

    try {
        const response = await fetch(`https://vip-api.orkut.my.id/price-list?api_key=${API_KEY}`);
        const result = await response.json();

        if (result.status === true && result.data.length > 0) {
            statusText.textContent = "Produk Tersedia!";
            statusText.style.color = "green";
        } else {
            statusText.textContent = "Produk Tidak Tersedia";
            statusText.style.color = "red";
        }

        saveProductStatusToCache(statusText.textContent);
    } catch (error) {
        statusText.textContent = "Gagal memeriksa status produk";
        statusText.style.color = "orange";
        console.error("Error:", error);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById('checkAvailabilityBtn');
    if (btn) {
        btn.addEventListener('click', checkProductAvailability);
    }
});
