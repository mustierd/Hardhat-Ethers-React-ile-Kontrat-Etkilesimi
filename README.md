<img src="https://user-images.githubusercontent.com/82549640/182454664-935ec039-62cb-4948-8a33-6aed9f4471b0.png">

### GİRİŞ</br>
<p>Bu yazımda, MetaMask gibi kullanıcı tarafından kontrol edilen cüzdanlarla çalışan Hardhat, React ve Ethers.js kullanarak yazdığımız akıllı kontratları testnet'e deploy edeceğiz ve bu kontratlar ile basit bir arayüz kodlayarak iletişime geçeceğiz.

### İçindekiler</br>
1.Metamask</br>

## <p align="center">1.Metamask</p>
### Metamask Nedir?
<p>Ethereum blok zinciri ile etkileşim kurmak için kullanılan bir yazılım kripto para cüzdanıdır. Kullanıcıların, daha sonra merkezi olmayan uygulamalarla etkileşim kurmak için kullanılabilecek bir tarayıcı uzantısı veya mobil uygulama aracılığıyla Ethereum cüzdanlarına erişmelerine olanak tanır. MetaMask, Ethereum tabanlı araçlara ve altyapıya odaklanan bir blok zinciri yazılım şirketi olan ConsenSys Software Inc. tarafından geliştirilmiştir. Blockchain sistemlerinde cüzdanınızın "Private Key"i sizin kimliğinizdir. Bu bilgi başkasının eline geçer ise Blockchain üzerinde sizin adınıza imzalar atarak siz gibi davranır. ConsenSys şirketi, Metamask'ın bu bilgileri kesinlikle kullanıcı dışında kimseye ulaştırmayan bir yapıda cüzdan yönetimi amacı ile tasarlamıştır. </p>
<p>Metamask cüzdanınızı tarayıcınızın eklentiler kısmından indirebilirsiniz. Metamask cüzdanını kurduğunuzu varsayarak "Ağ Ekle" kısmından Avalanche'ın testneti olan "Fuji Testnet" ağını aşağıdaki bilgileri girerek ekliyoruz. Bu proje sürecinde Fuji testnetin cüzdanlarını kullanacağız ve kontratları bu ağa deploy edeceğiz. Kısaca Fuji ve testnet hakkında bilgi vermem gerekirse;</p>


### Testnet Nedir?
<p>Test için kullanılacak alternatif bir blok zinciridir. Testnet paraları gerçek paralardan farklıdır ve testnet paralarının herhangi bir parasal değeri yoktur. Bu, uygulama geliştiricilerinin veya testçilerinin değerli madeni paralar kullanmak zorunda kalmadan deney yapmalarını sağlar. Testnetlerin diğer gerçek Mainnet'ler ile bir bağlantısı yoktur.</p>![1](https://user-images.githubusercontent.com/82549640/183261003-0619f805-4681-414f-a933-ef37309c06b0.png)

•	<b>Network Name</b>: Avalanche Fuji Testnet</br>
•	<b>New RPC URL</b>: https://api.avax-test.network/ext/bc/C/rpc</br>
•	<b>	ChainID</b>: 43113</br>
•	<b>	Symbol</b>: AVAX</br>
•	<b>	Explorer</b>: https://testnet.snowtrace.io/</br>
<p align="center"><img src="https://user-images.githubusercontent.com/82549640/182459511-d807fa05-0f5e-45bc-8494-bb6be4f1e29b.png"></p>
Fuji ağında test AVAX tokenlerını almak için günde bir defaya mahsus aşağıdaki linkten test tokenlarınızı alabilirsiniz. (https://faucet.avax.network/ )

<p align="center"><img src="https://user-images.githubusercontent.com/82549640/182462439-d6bdecf4-0d50-4d25-8b7a-d6bfe73b7058.png"></p>

## <p align="center">1.Hardhat</p>
### Hardhat Nedir?
<p>Hardhat, Ethereum yazılımı için bir geliştirme ortamıdır. Akıllı sözleşmelerinizi ve dApp'lerinizi düzenlemek, derlemek, hata ayıklamak ve dağıtmak için tümü eksiksiz bir geliştirme ortamı oluşturmak için birlikte çalışan farklı bileşenlerden oluşur. Kısacası Hardhat projesi oluşturarak biz içerisindeki bileşemler/kütüphaneler ile yazdığımız akıllı kontratları derleme ,deploy etme, test etme vb gibi aksiyonları gerçekleştirebiliyoruz. Hardhat'in truffle gibi alternatifleri bulunmaktadır. Fakat Hardhat bize yapmak istediğimiz aksiyonlarda daha fazla söz sahibi yaparak daha kullanışlı olduğunu düşünüyorum. Blockchain geliştiricisi için Hardhati bilmek çok önemli ve yeterli olacağını söyleyebilirim.</p>

### Hardhat Proje Oluşturma ve Yapılandırması
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

### Contracts

<p>Projemizin senaryosunda  2 adet kontratımız var. Bu kontratları tek tek açıklamayacağım. Fakat ne iş yaptığını kısaca bilmemiz gerekir ise bunlar;</p>

<b>1) Token.sol</b> Bu kontratımız ERC20 protokolünde miras alınarak yazılmış token kontratıdır. Yani bu kontratımızda ERC20 kontratınının sahip olduğu “private” hariç tüm özelliklere doğrudan çağırıp kullanabilir.</br></br>
```
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BeeToken is ERC20 {
    constructor() ERC20("BEE Token", "BEE") {
        _mint(msg.sender, 1773000 * 10**decimals());
    }
}
```
</br>
•	<b>Constructor()</b> fonksiyonunun içinde tokenımızın adını ve kısalmasını belirtiyoruz.</br>
•	<b>_mint()</b> fonksiyonu ile total arzını belirtiyoruz ve _mint() fonksiyonunu çalıştıran yani kontratı deploy eden cüzdan adresine bu tokenlar gönderiliyor.</br>
<b>Not</b>: Burada <b>decimals()</b> fonksiyonu “18”  sonucunu ERC20 kontratından döndürüyor. Yani total arzı “1773000…10^18 sıfır olarak belirliyoruz.</br>
•	Openzeppelin kütüphanesinden erc20 kontratını import ediyoruz.</br></br>

<b>2) Lock.sol</b> Bu kontratımızın senaryosu ise kullanıcılar bu kontrata token gönderip bir nevi kilitlemiş oluyor. Sonra bu tokenları belirli bir zaman geçtikten sonra çekebilme iznine sahip olan bir mantığına dayanmaktadır.</br></br>
•<b>LockToken()</b> fonksiyonu ile kullanıcının kilitleyeceği token miktarını ve kilitli kalacağı zaman(saniye cinsinden ) bilgilerini giriyor ve aslında tokenları bu kontratta kilitlemiş oluyor. </br>
 (Not: <b>approve()</b> fonksiyonu ile bu Lock kontratına izin verilmediği sürece bu kontrat token transferini yapamaz. İleride bu durumu açıklayacağım.)</br>
•	<b>withdrawToken()</b> fonksiyonu ile bu kullanıcı kilitlediği tokenlarını, kilitlediği süre sona erdiyse geri çekebilmektedir.</br></br></br>

```
	// SPDX-License-Identifier: UNLICENSED
	pragma solidity ^0.8.2;
	
	import "./Token.sol";
	
	contract Lock {
	    BeeToken Token;
	
	    uint256 public lockerCount;
	    uint256 public totalLocked;
	    mapping(address => uint256) public lockers;
	    mapping(address => uint256) public deadLine;
	
	    constructor(address tokenAddress) {
	        Token = BeeToken(tokenAddress);
	    }
	
	    function LockToken(uint256 amount, uint256 time) external {
	        require(amount > 0, "Token amount must be bigger than 0");
	        // require(Token.balanceOf(msg.sender) >= amount, "insufficent balance.");
	        // require(
	        //     Token.allowance(msg.sender, address(this)) >= amount,
	        //     "insufficent allowance."
	        // );
	        if (!(lockers[msg.sender] > 0)) lockerCount++;
	        totalLocked += amount;
	        lockers[msg.sender] += amount;
	        deadLine[msg.sender] = block.timestamp + time;
	
	        bool ok = Token.transferFrom(msg.sender, address(this), amount);
	        require(ok, "Transfer failed.!!!");
	    }
	
	    function withdrawToken() external {
	        require(lockers[msg.sender] > 0, "not enough token");
	        require(block.timestamp > deadLine[msg.sender], "deadline is not over");
	        uint256 amount = lockers[msg.sender];
	        delete (lockers[msg.sender]);
	        totalLocked -= amount;
	        lockerCount--;
	
	        require(Token.transfer(msg.sender, amount), "Transfer failed.!!!");
	    }
	}
```
</br>
• <code>npx hardhat compile</code> ile akıllı kontratlarımızı EVM’ nin anlayabileceği dile dönüştürmek için derliyoruz. Bu komut ile projemizde <b>artifacts</b> dosyası oluşmaktadır. Bu dosyanın altında import ettiğimiz kontratlar ve kendi kontratlarımızın “<b>ABI</b> ve <b>Bytes</b>” kodları yer almaktadır.</br>
<p><b>ABI Code</b>: Fonksiyonların nasıl çağrılacağı, parametrelerin nasıl geçirileceği vb gibi fonksiyonel olaylara ve değişkenlere EVM ‘nin anlayacağı türden bir iletişim kalıbı oluşturuyor diyebiliriz. </p>
<p><img src="https://user-images.githubusercontent.com/82549640/182487932-67b8bcf9-4bcb-4516-acc6-c8df2c45d7ba.png"></p>

<p>Şimdi kontratlarımız deploy etmeye hazır. Fakat bunun için deploy edeceğimiz ağ ve deploy scriptini yazmamız gerekmektedir.</p>
<b>hardhat.config.js</b><br>

```
//require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");

const PRIVATE_KEY = "cüzdanınızın private key’i";

module.exports = {
    solidity: "0.8.2",
    networks: {
      hardhat:{},
      alchemy:{
          url:"https://eth-rinkeby.alchemyapi.io/v2/HqFAMf3XQpOZE9JIKv1piCcZBj8IR-Xa",
          accounts: [`${PRIVATE_KEY}`]
        },
      mainnet: {
        url: `https://api.avax.network/ext/bc/C/rpc`,
          accounts: [`${PRIVATE_KEY}`]
      },
      fuji: {
        url: `https://api.avax-test.network/ext/bc/C/rpc`,
          accounts: [`${PRIVATE_KEY}`]
      }

    }
};

```

</br>
• <b>PRİVATE_KEY</b>: Kontratı deploy edecek cüzdanın private key’i ni giriniz. Bu key'i tarayıcınızda Fuji estnetine o an bağlı olan cüzdan adresinin keyidir.Özel anahtarı dışa aktar diyerek ulaşabilirsiniz.</br>
•<b> solidity</b>: Solidity dilinin versiyonunu belirliyoruz.</br>
•<b> network</b>: Birden fazla network rpc bilgilerini ekledim. Biz bu uygulamamızdan avalanche’nin fuji test ağında işlem yapacağız. Fuji testnetin rpc urlsini ve bu deploy işlemi onaylayacak cüzdan adresini belirlememiz gerekmektedir.</br></br>
<p><b>Not:</b> Burada “hardhat-waffle” ‘ın içerisinde ethers kütüphanesi de olduğu için “hardhat-ethers” kütüphanesini kaldırırsak hata vermeyecektir.</p>
<p><img src="https://user-images.githubusercontent.com/82549640/182501192-eaa9b37e-ca70-48a1-ad33-a08c9491c3b5.png"></p></br>

->Deploy adımı</br>
<p>Daha sonra ethers.js kütüphanesinden yararlanarak deploy scriptlerini yazıyoruz. Bu scriptleri çalıştırdığımızda kontratlarımız seçtiğimiz ağa deploy olacaktır. Burada ayrı ayrı 2 script yazmalıyız çünkü 2 farklı kontratımız mevcut.</p>
<p><b>Not</b>: Blockchain ile iletişime geçilen durumlarda promise değeri döndürüleceği için async-await olarak tanımlama yapılmalıdır.</p></br>

<p><b>Token.sol Kontrat için -></b> deploy1.js</p>

```
const {ethers} = require("hardhat");

async function main(){

    const Token = await ethers.getContractFactory("BeeToken");
    const token = await Token.deploy();

    console.log("Contract address",token.address);
}
 main()
    .then(()=> process.exit(0))
    .catch((error)=>{
        console.error(error);
        process.exit(1);
    })

```
</br></br>
•<code>const {ethers} = require("hardhat");</code></br>
<p>Burada hardhat içerisinde ethers kütüphanesini kullandık. Bu kütüphane hardhat ekibi tarafından ethers.js kütüphanesine eklemeler yapılmış bir kütüphanedir.</p>
<p>Örneğin ethers.js de “<b>new ContractFactory(contractAbi, contractByteCode);</b>” şeklinde kullanılmaktadır. Hardhat’in ethers kütüphanesinde abi ve bytecode girmemize gerek kalmadan “<b>getContracFacfory(Kontrat_adi)</b>” şeklinde çağırmamızı sağlamaktadır. Bir nevi işleri biraz kolaylaştırma amaçlanmıştır..</p>

•
```
const Token = await ethers.getContractFactory("BeeToken");
const token = await Token.deploy();
console.log("Contract address",token.address);
```
</br>
<p>Burada “BeeToken” kontratımızın bilgilerini Token değişkenine aktarıyoruz. Token.deploy() komutu ile kontratımız bu komut çalıştığında deploy edilecektir. Console.log ile deploy edilen bu kontratın adresini kontrol amaçlı görmek için ekrana mesaj olarak bastırıyorız.</p>

<p><code>npx hardhat run scripts/deploy1.js --network fuji</code> komutu ile Token kontratımızı fuji ağına deploy ediyoruz.</p>
<p>Contract address 0x94CFe96F0843D72ef4Cc62fc47c8c2854c0226bb</p>
<p><img src="https://user-images.githubusercontent.com/82549640/183261014-e10ef4b9-e787-4276-a00a-3998ffaeab27.png"></p></br>

<p><b>Lock.sol Kontrat için</b> -> deploy2.js</p>
Hatırlarsanız Lock kontratımız constructor parametresi olarak BeeToken kontrat adresini almaktaydı. Yukarıda BeeToken kontratımızı deploy ettiğimiz adresi aşağıdaki constructor parametre alanına giriyoruz.

```
const {ethers} = require("hardhat");

async function main(){

    const Lock = await ethers.getContractFactory("Lock");
    const lock = await Lock.deploy("0x94CFe96F0843D72ef4Cc62fc47c8c2854c0226bb");

    console.log("Contract address",lock.address);
}
 main()
    .then(()=> process.exit(0))
    .catch((error)=>{
        console.error(error);
        process.exit(1);
    })

```
</br>

<p><code>npx hardhat run scripts/deploy2.js --network fuji</code> komutu ile Lock kontratımızı fuji ağına deploy ediyoruz.</p>
<p>Contract address 0x0903De388e6B0c21687E58FCbBA2B642F0f1D583</p>
<p><img src="https://user-images.githubusercontent.com/82549640/183261134-3ca6f9bb-8b09-46bd-8030-ec2d61ef42e8.png"></p></br>

<p>Artık bu 2 kontratımız fuji test ağında deploy edilmiş bir şekilde faaliyetine başlamıştır.( https://testnet.snowtrace.io/ ) adresinde işlemlerinizin kontrollerini gerçekleştirebilirsiniz. Aşağıda gördüğünüz üzere Metamaskımız da aktif olan cüzdanımızın PRIVATE_KEY ile bu iki kontratı deploy etmiştik. Snowtrace den bu cüzdan adresinin doğruluğunu da kontrol etmiş olduk. Peki bu "Snowtrace" nedir ?

### Snowtrace Nedir?
<p>SnowTracebir blok zincir gezginidir. Ethereum'un uygulaması olan Etherscan'le çok benzerdir. Ethereum üzerinde Etherscan ile ulaşabildiğiniz her bilgiye, Avalanche blok zincirinde ise SnowTrace uygulamasıyla ulaşabilirsiniz</p>


