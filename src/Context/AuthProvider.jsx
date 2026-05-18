import React, { use } from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ( { children } ) => {
    const authInfo={
        user: salauddinmahi2002@gmail.com 
    }
    return (
        <div>
            <AuthContext value={authInfo}>
                {children}
            </AuthContext>
        </div>
    );
};

export default AuthProvider;