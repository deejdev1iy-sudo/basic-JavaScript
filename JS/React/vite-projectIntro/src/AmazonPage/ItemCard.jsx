function ItemCard() {
    const description ="A skipping rope is equipment used in sport and play that involves rhythmically jumping over a rope swung underfoot and overhead.";
    const amount = "ksh 2,000";

   return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        border: '3.2px solid rgba(20, 9, 80, 0.06)',
        padding: '4px 8px 2px 4px',
      }}
    >
        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
            <img
             width={'200px'}
             src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.Mwjpi769DHjuTdx2b-kcZgHaHa%3Fr%3D0%26pid%3DApi&f=1&ipt=22a37599628da241d31170a02a936d16f1f7baf18f597017c340f47bfc47e60a&ipo=images'
            />
        </div>
        <div style={{ textAlign: 'left', fontSize: '1em', fontFamily: 'math'}}>{description}</div>
        <div style={{ fontSize: '1em', textAlign: 'center'}}>{amount}</div>
        <div style={{ display: 'flex', justifyContent: 'center'}}>
            <button
              style={{
                border: '2px solid rgba(0,0,0,0.1)',
                padding: '6px 2px 6px 2px',
                color: 'white',
                backgroundColor: 'orangered',
              }}
            >
            Add to cart
            </button>
        </div>
    </div>
   );
}

export default ItemCard;