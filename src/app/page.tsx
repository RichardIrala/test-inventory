"use client";
import { useOpenConnectModal } from '@0xsequence/kit'
import { useOpenWalletModal } from '@0xsequence/kit-wallet';
import { useEffect, useState } from 'react';
import { useDisconnect, useAccount } from 'wagmi'

export const App = () => {
  const [loading, setLoading] = useState(true);
  const { setOpenConnectModal } = useOpenConnectModal();
  const { setOpenWalletModal } = useOpenWalletModal();
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return null;
 
  return (
    <div>
      {!isConnected && (
        <button onClick={() => setOpenConnectModal(true)}>
          Sign in
        </button>
      )}
 
      {isConnected && (
        <>
          <button onClick={() => disconnect()}>
            Sign out
          </button>
          <button onClick={() => setOpenWalletModal(true)}>
            Open inventory
          </button>
        </>
      )}
    </div>
  )
}

export default App;