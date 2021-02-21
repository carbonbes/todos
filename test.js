case FILTER_BY_VALUE:

   let newState = Object.assign({}, state);

   let value = action.payload.value;
   let filteredValues = state.products.filter(product => {
       return product.name.toLowerCase().includes(value) ||
           product.designer.toLowerCase().includes(value);
   });

   let appliedFilters = state.appliedFilters;

   if (value) {
       let index = appliedFilters.indexOf(FILTER_BY_VALUE);
       if (index===-1)
           appliedFilters.push(FILTER_BY_VALUE);
       newState.filteredProducts = filteredValues;
   } else {
       let index = appliedFilters.indexOf(FILTER_BY_VALUE);
       appliedFilters.splice(index, 1);
       if (appliedFilters.length === 0) {
           newState.filteredProducts = newState.products;
       }
   }
   
   return newState;