<img src="https://user-images.githubusercontent.com/82549640/182454664-935ec039-62cb-4948-8a33-6aed9f4471b0.png">

### GİRİŞ</br>
<p>Bu yazımda, MetaMask gibi kullanıcı tarafından kontrol edilen cüzdanlarla çalışan Hardhat, React ve Ethers.js kullanarak yazdığımız akıllı kontratları testnet'e deploy edeceğiz ve bu kontratlar ile basit bir arayüz kodlayarak iletişime geçeceğiz.

### İçindekiler</br>
1.Metamask</br>

### <p align="center">1.Metamask</p>
#### •Metamask Nedir?
<p>Ethereum blok zinciri ile etkileşim kurmak için kullanılan bir yazılım kripto para cüzdanıdır. Kullanıcıların, daha sonra merkezi olmayan uygulamalarla etkileşim kurmak için kullanılabilecek bir tarayıcı uzantısı veya mobil uygulama aracılığıyla Ethereum cüzdanlarına erişmelerine olanak tanır. MetaMask, Ethereum tabanlı araçlara ve altyapıya odaklanan bir blok zinciri yazılım şirketi olan ConsenSys Software Inc. tarafından geliştirilmiştir. Blockchain sistemlerinde cüzdanınızın "Private Key"i sizin kimliğinizdir. Bu bilgi başkasının eline geçer ise Blockchain üzerinde sizin adınıza imzalar atarak siz gibi davranır. ConsenSys şirketi, Metamask'ın bu bilgileri kesinlikle kullanıcı dışında kimseye ulaştırmayan bir yapıda cüzdan yönetimi amacı ile tasarlamıştır. </p>
<p>Metamask cüzdanınızı tarayıcınızın eklentiler kısmından indirebilirsiniz. Metamask cüzdanını kurduğunuzu varsayarak "Ağ Ekle" kısmından Avalanche'ın testneti olan "Fuji Testnet" ağını aşağıdaki bilgileri girerek ekliyoruz. Bu proje sürecinde Fuji testnetin cüzdanlarını kullanacağız ve kontratları bu ağa deploy edeceğiz. Kısaca Fuji ve testnet hakkında bilgi vermem gerekirse;</p>


#### •Testnet Nedir?
<p>Test için kullanılacak alternatif bir blok zinciridir. Testnet paraları gerçek paralardan farklıdır ve testnet paralarının herhangi bir parasal değeri yoktur. Bu, uygulama geliştiricilerinin veya testçilerinin değerli madeni paralar kullanmak zorunda kalmadan deney yapmalarını sağlar. Testnetlerin diğer gerçek Mainnet'ler ile bir bağlantısı yoktur.</p>
•	<b>Network Name</b>: Avalanche Fuji Testnet</br>
•	<b>New RPC URL</b>: https://api.avax-test.network/ext/bc/C/rpc</br>
•	<b>	ChainID</b>: 43113</br>
•	<b>	Symbol</b>: AVAX</br>
•	<b>	Explorer</b>: https://testnet.snowtrace.io/</br>
<p align="center"><img src="https://user-images.githubusercontent.com/82549640/182459511-d807fa05-0f5e-45bc-8494-bb6be4f1e29b.png"></p>
Fuji ağında test AVAX tokenlerını almak için günde bir defaya mahsus aşağıdaki linkten test tokenlarınızı alabilirsiniz. (https://faucet.avax.network/ )

<p align="center"><img src="https://user-images.githubusercontent.com/82549640/182462439-d6bdecf4-0d50-4d25-8b7a-d6bfe73b7058.png"></p>

### <p align="center">1.Hardhat</p>
#### •Hardhat Nedir?
<p>Hardhat, Ethereum yazılımı için bir geliştirme ortamıdır. Akıllı sözleşmelerinizi ve dApp'lerinizi düzenlemek, derlemek, hata ayıklamak ve dağıtmak için tümü eksiksiz bir geliştirme ortamı oluşturmak için birlikte çalışan farklı bileşenlerden oluşur. Kısacası Hardhat projesi oluşturarak biz içerisindeki bileşemler/kütüphaneler ile yazdığımız akıllı kontratları derleme ,deploy etme, test etme vb gibi aksiyonları gerçekleştirebiliyoruz. Hardhat'in truffle gibi alternatifleri bulunmaktadır. Fakat Hardhat bize yapmak istediğimiz aksiyonlarda daha fazla söz sahibi yaparak daha kullanışlı olduğunu düşünüyorum. Blockchain geliştiricisi için Hardhati bilmek çok önemli ve yeterli olacağını söyleyebilirim.</p>

#### •Hardhat Proje Oluşturma ve Yapılandırması
<p>Bir Hardhat projesi geliştirmek için bilgisayarınızda "Node.js" in kurulu olması gerekmektedir. Hardhat ise Node versiyonunun “16.0” dan yüksek olması halinde çalışmaktadır.</p>
• <code>node -v </code> ile bilgisayarınızda yüklü mü? diye kontrol edebilirsiniz.</br></br>

<p><img src="https://user-images.githubusercontent.com/82549640/182477404-bd1e3c1e-2967-4467-930f-c448ca43da47.png"></p>
<p>İlk olarak kolaylık olması açısından proje dosyamızı Visiual Code uygulamasından açıyoruz ve gerekli komutları girmek için terminal ekranına geliyoruz.(Daha öncesinden VSCode ile Solidity dilini yazmadıysanız eklentilerden Solidity dil paketini indirin!!!)</p>

• <code> npm init --yes </code> ile Node projesi başlatıyoruz.</br>
<p><img src="https://user-images.githubusercontent.com/82549640/182478178-c1b0bf7d-635e-4d9a-b4c0-45f1903d1051.png"></p>

• <code> npm install --save-dev hardhat </code> ile hardhati projemize indiriyoruz.</br>
<p><img src="https://user-images.githubusercontent.com/82549640/182478387-a536a923-750a-4467-ac58-74beba6b19f2.png"></p>

• <code> npx hardhat  </code> ile Hardhati çalıştırarak çalışma ortamının kurulmasını sağlıyoruz.</br>
<p>“Create an empty hardhat.config.js” seçeneğine tıklayarak boş bir proje yapısının oluşmasını söylüyoruz. </p>
<p><img src="https://user-images.githubusercontent.com/82549640/182478630-214fe370-7dac-44c8-b34a-562306173720.png"></p>

<p>Dosya yapısı aşağıdaki gibi olması gerekmektedir. O yüzden “contracts,test,scripts” dosyalarını hardhat proje dizininin içerisine biz oluşturuyoruz.</p>
<p><img src="https://user-images.githubusercontent.com/82549640/182482132-f3ad57e8-de57-42bd-bee5-35114d84dc51.png"></p>
•	<b>contracts</b>: Yazmış olduğumuz akıllı kontratlar bu dizinde yer almaktadır.</br>
•	<b>test</b>: Akıllı kontratlarımızın fonksiyonlarının düzgün çalışıp-çalışmadığını burada test kodları yazarak kontrolleri sağlıyoruz.</br
•	<b>scripts</b>: burada kontratlar üzerinde çalıştıracağımız işlemleri tutuyoruz. Örneğin bir kontratı deploy etmek için deploy komutları burada yer almaktadır.</br>
•	<b>hardhat.config.js</b>: Bu dosya tüm tanımlamaları ve eklemeleri yapacağımız dosyadır. Örneğin hangi ağa deploy edeceksek kontratlarımızı ağ tanımlamalarını bu dosyaya kaydederiz.</br>
•	<b>package.json</b>: Proje hakkında bilgileri içeren dosyadır.Örneğin hardhat projesinde kullanacağımız paketler sürüm bilgileri ile birlikte burada yer almakdatır.</br></br>

• <code> npm install --save-dev @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai </code> ile gerekli eklentileri kuruyoruz.</br>
<p>“ethereum-waffle, chai, hardhat-waffle” bunlar hardhat de test kodlarını yazmamız için faydalanacağımız kütüphanelerdir. Yazımızın ilerleyen bölümlerinde test kodlarınıda yazacağız.</p>
• <code> npm install @openzeppelin/contracts </code>ile ERC20 kontratını openzeplin kütüphanesinden import edeceğiz.</br></br>

<p>Şimdi akıllı kontratlarımızı contract/ dizinin altına yazıyoruz.</p>
<p><img src="https://user-images.githubusercontent.com/82549640/182482959-a3da62e5-a91a-4100-819a-988ce2b28ea7.png"></p></br>

Projemizin senaryosunda  2 adet kontratımız var. Bu kontratları tek tek açıklamayacağım. Fakat ne iş yaptığını kısaca bilmemiz gerekir ise bunlar;
<b>1)Token.sol</b>: Bu kontratımız ERC20 protokolünde miras alınarak yazılmış token kontratıdır. Yani bu kontratımızda ERC20 kontratınının sahip olduğu “private” hariç tüm özelliklere doğrudan çağırıp kullanabilir.</br>
•	<b>Constructor()</b> fonksiyonunun içinde tokenımızın adını ve kısalmasını belirtiyoruz.</br>
•	<b>_mint()</b> fonksiyonu ile total arzını belirtiyoruz ve _mint() fonksiyonunu çalıştıran yani kontratı deploy eden cüzdan adresine bu tokenlar gönderiliyor.</br>
Not: Burada <b>decimals()</b> fonksiyonu “18”  sonucunu ERC20 kontratından döndürüyor. Yani total arzı “1773000…1018 sıfır olarak belirliyoruz.</br>
•	Openzeppelin kütüphanesinden erc20 kontratını import ediyoruz.</br></br>

// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BeeToken is ERC20 {
    constructor() ERC20("BEE Token", "BEE") {
        _mint(msg.sender, 1773000 * 10**decimals());
    }
}

