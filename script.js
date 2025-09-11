document.addEventListener('DOMContentLoaded',function () {
    // Utilitário para formatar moeda (R$)
    function moedaBR(valor) {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
        }

        // normaliza entrada (troca vírgula por ponto e coverte para número) function toNumber(val) {
        if (typeof val === 'number') return val;
        if (!val && !== 0) return NaN;
        return parseFloat(String(val).trim().replace(',', '.'));
    }
    const form = document.getElementById('form');
    const error = document.getElementById('erro');
    const resultados = document.getElementById('resultados');
    const tanelaSecao = document.getElementById('tabelaSecao');

    const outPrecoComDesconto = document.getElementById('precoComDesconto');
    const outValorParcela = document.getElementById('valorParcela');
    const outTotalPagar = document.getElementById('totalPagar');
    const outEconomia = document.getElementById('economia');

    if (!form) {
        console.error('form não encontrado (id="form"). Verifique o HTML.');return;                          
}

