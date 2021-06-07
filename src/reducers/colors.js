import { FETCH_ALL, CREATE, SET, SET_TYPE } from '../constants/actionTypes';
// eslint-disable-next-line import/no-anonymous-default-export
export const colors = (colors = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...colors, action.payload];
        default:
            return colors;
    }
}

export const color = (color = [], action) => {
    console.log('here selection')
    switch (action.type) {
        case SET:
            return color = action.payload;
        default:
            return color;
    }
}

export const colorSelection = (colorSelection = [], action) => {
    switch (action.type) {
        case SET_TYPE:
            return colorSelection = action.payload;
        default:
            return colorSelection;
    }
}