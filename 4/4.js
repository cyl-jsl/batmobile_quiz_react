// 我認為這個聊天室介面可分為三大元件，header、body以及footer
// 在header元件中的下層再切為HamburgerBtn元件以及SnapshotBtn元件
// 在body元件中的下層有五個可重複使用的ChatBox元件，並且再下層分為Text以及Avatar兩個元件
// 在Footer元件中的下層則分為TextInput以及PlusBtn兩個元件
// 轉化為JSX結構如下:


// header
const HamburgerBtn = () => {
  <button></button>;
};
const SnapshotBtn = () => {
  <button></button>;
};
const Header = () => {
  <>
    <div>
      <HamburgerBtn />
    </div>
    <div>
      <SnapshotBtn />
    </div>
  </>;
};

// body
const Avatar = () => {
  <div>
    <img src="" alt="" />
  </div>;
};
const Text = () => {
  <div>
    <p></p>
  </div>;
};
const ChatBox = () => {
    // 可以設計判別訊息的發出對象以決定UI的樣式，使其將"我發出的訊息"以及"對方發出的訊息"看起來是不同的UI。以Bootstrap的邏輯粗略打比方，判斷這則訊息來自於本機端，則Avatar在右，Text在左，若非本機端，則可以加入.flex-row-reverse的className使其順序相反。

  <>
    <div>
      <Avatar />
    </div>
    <div>
      <Text />
    </div>
  </>;
};
const Body = () => {
    <>
        <ChatBox/>
        <ChatBox/>
        <ChatBox/>
        <ChatBox/>
        <ChatBox/>
    </>
};

// footer
const TextInput = () => {
  <div>
    <input type="text" name="" id="" />
  </div>;
};
const PlusBtn = () => {
  <button></button>;
};
const Footer = () => {
  <>
    <div>
      <TextInput />
    </div>
    <div>
      <PlusBtn />
    </div>
  </>;
};

// Layout
const Four = () => {
  <>
    <Header />
    <Body />
    <Footer />
  </>;
};

export default Four;