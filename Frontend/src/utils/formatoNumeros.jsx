export const formatoMoneda = (monto) =>
    {
        return monto.toLocaleString('es-ES', { minimumFractionDigits: 0 });
    }