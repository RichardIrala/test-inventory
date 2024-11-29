import { createConfig } from '@0xsequence/kit'
 
export const config: any = createConfig('waas' /*or, 'universal'*/, {
  projectAccessKey: process.env.NEXT_PUBLIC_PROJECT_ACCESS_KEY!,
  chainIds: [1, 137, 80002],
  defaultChainId: 80002,
  appName: 'Demo Dapp',
  waasConfigKey: process.env.NEXT_PUBLIC_WAAS_CONFIG_KEY!, // for waas
  google: {
    clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!
  }, 
  walletConnect: { 
    projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_ID!
  }
})