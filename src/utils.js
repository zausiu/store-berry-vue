import { LOGIN_URL, LOGOUT_URL, LOGIN_STATUS_MARKER } from './conf'

export async function doLogin({ username, password }) {
    const response = await fetch(LOGIN_URL, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        // redirect: 'follow', // manual, *follow, error
        body: JSON.stringify({
            username,
            password
        }) // body data type must match "Content-Type" header
    });
    const json_data = await response.json()
    console.log('got resp:', json_data)
    const respRetcode = json_data.retcode
    const respData = json_data.data
    if (respRetcode == 0) {
        // Cookies.set(LOGIN_STATUS_MARKER, `${username},${respData.role}`, { secure: true, path: '/', sameSite: 'strict' })
        window.localStorage.setItem(LOGIN_STATUS_MARKER, `${username},${respData.role}`)
    } else {
        window.localStorage.removeItem(LOGIN_STATUS_MARKER)
    }
    return json_data
}

export async function doLogout() {
    window.localStorage.removeItem(LOGIN_STATUS_MARKER)
    const response = await fetch(LOGOUT_URL, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        // redirect: 'follow', // manual, *follow, error
        body: JSON.stringify() // body data type must match "Content-Type" header
    });
    const json_data = await response.json()
    console.log('got resp:', json_data)
    const respRetcode = json_data.retcode
    if (respRetcode == 0) {
    } else {
    }
}