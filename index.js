const menu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggle = document.querySelector(".theme-toggler")


// show menu
menuBtn.addEventListener('click', () => {
    menu.style.display = 'block';
});

// hide menu
closeBtn.addEventListener('click', () => {
    menu.style.display = 'none';
});

// change theme
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    themeToggle.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggle.querySelector('span:nth-child(2)').classList.toggle('active');
});

// fill orders
orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
                            <td>${order.productName}</td>
                            <td>${order.productNumber}</td>
                            <td>${order.paymentStatus}</td>
                            <td class="${order.shipping === 'Declined' ? 'danger' : order.shipping === 'Pending' ? 'warning' : 'primary'}">${order.shipping}</td>
                            <td class="primary">Details</td>
                            `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})