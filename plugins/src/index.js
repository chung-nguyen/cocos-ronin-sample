import { WalletSDK } from '@roninnetwork/wallet-sdk';

let sdk;

async function connectWallet (onDisplayURI) {
  if (!sdk) {
    sdk = new WalletSDK({
      mobileOptions: { walletConnectProjectId: "a2e57d934fe639502079ee6c9e8e0fd6" }
    })
  }

  sdk.on('display_uri', wcUri => {
    console.log(wcUri)
    console.log(sdk.getDeeplink())
    // window.location = sdk.getDeeplink();
    onDisplayURI({
      wcUri,
      deepLink: sdk.getDeeplink()
    })
  })

  await sdk.connectMobile()

  // const accounts = await sdk.getAccounts()
  // if (accounts) {
  //   console.log(accounts);
  // }
}

window.roninPlugin = {
  connectWallet,
}
