let initState = {
    employees: JSON.parse(localStorage.getItem('datas')) || [],
    employee: ''
};

const employeeReducer = (state = initState, action) => {

    switch (action.type) {

        case 'ADD':
            let add = [...state.employees, action.payload]
            localStorage.setItem('datas', add);
            return {
                ...state,
                employees: add
            }

        case 'SINGLE':
            let data = [...state.employees];
            let singleData = data.filter((data) => {
                return data.id == action.payload;
            });
            return {
                ...state,
                employee: singleData[0]
            }

        case 'UPDATE':
            let data2 = [...state.employees];
            let updatedData = data2.map((data) => {
                if (data.id === action.payload.id) {
                    return data = action.payload;
                } else {
                    return data;
                }
            });
            localStorage.setItem('datas', JSON.stringify(updatedData));
            return {
                employees: updatedData,
                employee: null
            }

        case 'DELETE':
            let data3 = [...state.employees];
            let deletedData = data3.filter((data) => {
                return data.id !== action.payload;
            });
            localStorage.setItem('datas', JSON.stringify(deletedData));
            return {
                ...state,
                employees: deletedData
            }

        default:
            return state

    }

};

export default employeeReducer