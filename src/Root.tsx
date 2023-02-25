/* eslint-disable no-alert */
import React, { useEffect, useState, useCallback } from 'react';

import { detectConcordiumProvider } from '@concordium/browser-wallet-api-helpers';
import Connection from './Connection';
import { getNames } from './util';

const VERIFIER_URL = '/api';



/**





/**
 * The main component for the Gallery
 */
export default function Gallery() {
    const [account, setAccount] = useState<string>();
    const [authToken, setAuthToken] = useState<string>();
   

   

    useEffect(() => {
        detectConcordiumProvider()
            .then((provider) => {
                // Listen for relevant events from the wallet.
                provider.on('accountChanged', setAccount);
                provider.on('accountDisconnected', () => provider.getMostRecentlySelectedAccount().then(setAccount));
                // Check if you are already connected
                provider.getMostRecentlySelectedAccount().then(setAccount);
            })
            .catch(() => setAccount(undefined));
    }, []);

    const handleErrorOnLoad = useCallback(() => {
        setAuthToken(undefined);
        setTimeout(() => alert('Authorization is no longer valid'), 100);
    }, []);

    return (
        <main className="restricted-media">
    
            <Connection
                verifier={VERIFIER_URL}
                account={account}
                authToken={authToken}
                setAccount={setAccount}
                setAuthToken={setAuthToken}
            />
            <div>
            {authToken && (
                <div className="placeholder">Authorized</div>
              
            )}
            {!authToken && <div className="placeholder">Unauthorized</div>}
            
            </div>
        </main>
    );
}
