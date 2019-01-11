import React, { useGlobal } from 'reactn';
import jwt from 'jsonwebtoken';


function DecodeToken(token)
{
    return jwt.decode(token);
}

function GetUserFromToken(token)
{
    // If expired (token.payload['exp'])
    // return null;

    // If user_id in payload
    // return {user_id:token.payload['user_id']}
}

function AttemptToUseRefreshToken()
{
    const [user, setUser] = useGlobal('user');
    const [accessToken, setAccessToken] = useGlobal('accessToken');
    const [refreshToken, setRefreshToken] = useGlobal('refreshToken');

    const clearData = () => {
        setUser(null);
        setAccessToken(null);
        setRefreshToken(null);
    };

    // If expired (refreshToken.payload.exp)
    //   clearData
    //   return null;

    // Fetch api/auth/token/refresh/ {"refresh":refreshToken}
    // ...
}

function SavedAuthentication()
{
    const [user, setUser] = useGlobal('user');
    const [accessToken, setAccessToken] = useGlobal('accessToken');
    const [refreshToken, setRefreshToken] = useGlobal('refreshToken');

    // Get token from localStorage if they're there
    let stored_access_token = localStorage.getItem('access_token');
    let stored_refresh_token = localStorage.getItem('refresh_token');
    if(stored_access_token)
        setAccessToken(DecodeToken(stored_access_token));
    if(stored_refresh_token)
        setRefreshToken(DecodeToken(stored_refresh_token));

    // Attempt to get user from access token
    if(accessToken.payload)
    {
        let savedUser = GetUserFromToken(accessToken);
        if(savedUser)
        {
            setUser(savedUser);
            return null;
        }
    }

    // Access token does not work, no user set AFAIK
    setAccessToken(null);
    setUser(null);

    // Try refreshing token
    if(refreshToken.payload)
        AttemptToUseRefreshToken();

    return null;
}

export default SavedAuthentication;