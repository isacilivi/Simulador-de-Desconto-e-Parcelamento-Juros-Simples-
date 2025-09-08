document.addEventListener('DOMContentLoaded',function () {
    // Utilitário para formatar moeda (R$)
    function moedaBR(valor) {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
        }

        // normaliza entrada (troca vírgula por ponto e coverte para número) function toNumber(val) {
        if (typeof val === 'number') return val;
        if (!val )}
    }
}

