/*
 * action 类型
 */
export const ADD_TO_PUBLIC = 'ADD_TO_PUBLIC';
export const DELETE_TO_PUBLIC = 'DELETE_TO_PUBLIC';
export const UPDATE_TO_PUBLIC = 'UPDATE_TO_PUBLIC';

export const PUSH_TO_LEVEL = 'PUSH_TO_LEVEL';
export const DELETE_TO_LEVEL = 'DELETE_TO_LEVEL';

/*
 * action 创建函数
 */
export function addPublicFn (product, quantity, unitCost) {
    return {
        type: ADD_TO_PUBLIC,
        payload: {
            product,
            quantity,
            unitCost
        }
    }
}

export function deletePublicFn (product) {
    return {
        type: DELETE_TO_PUBLIC,
        payload: {
            product
        }
    }
}

export function updatePublicFn (product, quantity, unitCost) {
    return {
        type: ADD_TO_PUBLIC,
        payload: {
            product,
            quantity,
            unitCost
        }
    }
}

export function pushLevel (member) {
    return {
        type: PUSH_TO_LEVEL,
        payload: member
    }
}

export function deleteLevel (member) {
    return {
        type: DELETE_TO_LEVEL,
        payload: member
    }
}
