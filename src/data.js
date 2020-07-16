export const sortOrder = {
    chooseOrder: (allPokemon, selected) => {
        let result;

        if (selected === 'aToZ') {
            result = allPokemon.sort(orderItemsByName);
        }
        if (selected === 'zToA') {
            result = allPokemon.sort(orderItemsByName).reverse();
        }
        if (selected === 'numberAsc') {
            result = allPokemon.sort(orderItemsByNum);
        }
        if (selected === 'numberDesc') {
            result = allPokemon.sort(orderItemsByNum).reverse();
        }
        if (selected === 'pcAsc') {
            result = allPokemon.sort(orderItemsByPC);
        }
        if (selected === 'pcDesc') {
            result = allPokemon.sort(orderItemsByPC).reverse();
        }

        function orderItemsByName(a, b) {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        }

        // FUNCION PARA ORDENAR LA DATA SEGÚN EL NÚMERO
        function orderItemsByNum(a, b) {
            if (a.num < b.num) {
                return -1;
            }
            if (a.num > b.num) {
                return 1;
            }
            return 0;
        }

        // FUNCIÓN PARA ORDENAR LA DATA SEGÚN MÁXIMO PODER DE COMBATE
        function orderItemsByPC(a, b) {
            if (parseInt(a.stats['max-cp']) < parseInt(b.stats['max-cp'])) {
                return -1;
            }
            if (parseInt(a.stats['max-cp']) > parseInt(b.stats['max-cp'])) {
                return 1;
            }
            return 0;
        }
        return result;
    },
};