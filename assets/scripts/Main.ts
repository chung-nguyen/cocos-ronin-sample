import { _decorator, Component, Label, Node, sys } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Main')
export class Main extends Component {
  @property(Label) message: Label = undefined;

  async start() {        
  }

  public async connect () {
    try {
      this.message.string = 'Connecting... ';

      await (window as any).roninPlugin.connectTheWallet(({wcUri, deepLink}) => {
        this.message.string = deepLink;
        window.open(deepLink);
      });

      // sys.openURL('https://wallet.roninchain.com/auth-connect?uri=wc%3A955da3f360ed303d1773dbb6da47a0167e3d8d765358953e9341548fedd9ff51%402%3Frelay-protocol%3Dirn%26symKey%3D2ae0063fd6ded8f06b8e66e67eae7899694ddc2b95e3d4671038baf7d2c57650');
    } catch (ex) {
      console.error(ex);
      this.message.string = ex.toString();
    }
  }

  update(deltaTime: number) {}
}
