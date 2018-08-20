import Provider from './Provider';
import Consumer from './Consumer';

async function main() {
    const provider = new Provider();
    const consumer = new Consumer();
    await provider.init('0x48a699a79fB7d2a7E9096df09f426837369d1F85', '0x8a6e061de1d2417c276277af3cc3e24ffdbbe3c662c6264c2e46cde3496df8e3');
    await consumer.init('0xFEDdDcBf94cB620d6D92D049b75fc7062a3E2Fc6', '0xfbfbc1957b7a0629acc0b246df4610208fb6594d338cee8fc3d541394999d61e');
    await provider.subscribeForNeeds();
    await consumer.createNeed();
  }

main();