import React from 'react';
import KhaltiCheckout from 'khalti-checkout-web';
import config from './KhaltiConfig';
const Khalti = () => {
  let checkout = new KhaltiCheckout(config);
  return (
    <div>
      <button
        style={{
          backgroundColor: '#00a8ff',
          color: '#fff',
          padding: '10px 20px',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 'bold',
          margin: '10px 0',
        }}
        onClick={() => {
          checkout.show({ amount: 1000 });
        }}
      >
        pay
      </button>
    </div>
  );
};

export default Khalti;
