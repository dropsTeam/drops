import ActionType from './ActionType';


function loading(isActivate) {
    return {type: ActionType.LOADING, payload: isActivate}
}

export { loading }
