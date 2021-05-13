document.addEventListener('DOMContentLoaded', (e) => {
    const toggler = document.querySelector('.toggle');
    const montlyPrices = ['&dollar;19.99', '&dollar;24.99', '&dollar;39.99'];
    const annualPrices = ['&dollar;199.99', '&dollar;249.99', '&dollar;399.99'];
    const prices = document.querySelectorAll('.card__price');

    toggler.addEventListener('change', function() {
        if (this.checked) {
            for (let i = 0; i < prices.length; i++) {
                prices[i].innerHTML = annualPrices[i];
            }
        } else {
            for (let i = 0; i < prices.length; i++) {
                prices[i].innerHTML = montlyPrices[i];
            }
        }
    });
});